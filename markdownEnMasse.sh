#!/bin/bash
# Save as convert_all_markdown_with_math.sh

# Store the root directory
ROOT_DIR="$(pwd)/relativistic_electrodynamics"

# Create a temporary template file with MathJax support
cat > "$ROOT_DIR/temp_template.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>$title$</title>
  <link rel="stylesheet" href="../{{CSS_PATH_HEADER}}">
  <link rel="stylesheet" href="../{{CSS_PATH_MAIN}}">
  <!-- MathJax Configuration -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
  <div id="header-placeholder"></div>
  
  <div class="container">
    <h1>$title$</h1>
    $body$
  </div>
  
  <script src="../{{JS_PATH}}"></script>
</body>
</html>
EOF

# Find all markdown files recursively
find "$ROOT_DIR" -type f -name "*.md" | while read -r file; do
    # Get the directory containing the markdown file
    dir=$(dirname "$file")
    # Get just the filename without extension
    filename=$(basename "$file" .md)
    # Output HTML file path (same directory as markdown)
    output_file="$dir/${filename}.html"
    
    # Calculate relative path to root
    rel_path=${dir#$ROOT_DIR}
    depth=$(echo "$rel_path" | tr -cd '/' | wc -c)
    path_prefix=""
    for ((i=0; i<depth; i++)); do
        path_prefix="../$path_prefix"
    done
    
    # Create a custom template with correct paths
    cp "$ROOT_DIR/temp_template.html" "$dir/custom_template.html"
    sed -i.bak "s|{{CSS_PATH_HEADER}}|${path_prefix}assets/header-css.css|g" "$dir/custom_template.html"
    sed -i.bak "s|{{CSS_PATH_MAIN}}|${path_prefix}assets/mainStyle.css|g" "$dir/custom_template.html"
    sed -i.bak "s|{{JS_PATH}}|${path_prefix}header-loader.js|g" "$dir/custom_template.html"
    
    # Convert with math support
    echo "Converting $file to $output_file"
    pandoc "$file" -o "$output_file" --template="$dir/custom_template.html" --metadata title="$filename" --mathjax
    
    # Clean up the custom template
    rm "$dir/custom_template.html" "$dir/custom_template.html.bak" 2>/dev/null
done

# Clean up the temporary template
rm "$ROOT_DIR/temp_template.html"

echo "Conversion complete!"