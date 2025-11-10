# Section 12.2.4 Relativistic Dynamics
![GOATs](12_2_images/Solvay_conference_1927.jpg)

Newton's second law ${F}=\frac{d{p}}{dt}$ can be extrapolated to relativity by using the relativistic momentum.

```python
import numpy as np
import matplotlib.pyplot as plt
from ipywidgets import interact, FloatSlider

c = 1  # speed of light in natural units so that we can look at shape

def x_t(t, m, F):
    return (m * c**2 / F) * (np.sqrt(1 + (F * t / (m * c))**2) - 1)

# spacetime diagram
def plot_spacetime(m=1.0, F=1.0):
    t_vals = np.linspace(0, 10, 1000)  # time in natural units (ct)
    x_vals = x_t(t_vals, m, F)
    
    plt.figure(figsize=(8, 6))
    plt.plot(x_vals, t_vals, label=f'm = {m}, F = {F}')
    plt.xlabel('x')
    plt.ylabel('ct')
    plt.title('Spacetime Diagram of a Relativistically Accelerated Particle (Constant Force)')
    plt.grid(True)
    plt.legend()
    plt.axis('equal') 
    plt.show()

#  controls
interact(
    plot_spacetime,
    m=FloatSlider(value=1.0, min=0.1, max=10.0, step=0.1, description='Mass m'),
    F=FloatSlider(value=1.0, min=0.1, max=10.0, step=0.1, description='Force F')
);
```

Newton's 3rd law, as we find out, does not hold in Special Relativity. This should be disappointing but not too surprising, especially when we recall that the same is true for an accelerating point charge and stationary point charge: the forces they exert on each other are not equal and opposite. The separation of time and space renders it compatible with the theory.
As we found with proper and ordinary velocity, we can define a proper force (called Minkowski force)
$$
K^\mu = \frac{dp^\mu}{d\tau}
$$
where the spatial components are related by
$$
{K} = \frac{1}{\sqrt{1-u^2/c^2}}{F}
$$
As we will see later, the Lorentz force turns out to be an ordinary force, and we cannot use this nice Minkowski force here.