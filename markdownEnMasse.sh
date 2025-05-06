for file in *.md; do
    filename=$(basename "$file" .md)
    pandoc "$file" -o "html_output/${filename}.html" --template=template.html
done