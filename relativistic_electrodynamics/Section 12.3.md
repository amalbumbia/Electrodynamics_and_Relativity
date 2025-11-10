# Relativistic Electrodynamics

## A Reassurance:

The term 'Relativistic Electrodynamics' may come off as quite intimidating; you may think that electrodynamics is hard enough, and accounting for relativity at the same time would make our lives even harder. However, you are fortunately very wrong!

- First of all, Maxwell's equations and the Lorentz force law are already invariant between inertial reference frames. So, we do not have to alter the equations based on the reference frame, we just need to determine how the fields and field sources transform
- We get to see how electric and magnetic fields are interconnected - while one observer will attribute some particle motion to an electric field, an observer in a different frame will attribute it to a magnetic field. In this way, we see how electricity and magnetism can not exist without the other!
- As we fit our electrodynamic variables into Minkowski space (as we have for mechanics) we will find that our equations get compacted into really nice tensor equations.


## Field Transformations

Our entire field formulation of classical electrodynamics hinges on the statement that the field at a particular point should be able to give us all the information needed to calculate forces on the particle; that is, we dont need to know anything about the field sources. This means that if we want to find out how fields transform, we have our pick of field sources and our derived transformation rule will apply to fields caused by any other source. So, let us turn to our old friend the capacitor!


In its own rest frame, the capacitor has a constant electric field in between the plates oriented perpendicular to the plates. Let's see what happens in a reference frame $S$ moving at velocity $v_0$ laterally relative to the capacitor:

![reference frame $S$](v_0_capacitor.png)

Since the capacitor plates are moving, length contraction increases the surface charge, thereby increases the electric field amplitude by a factor of $\gamma$.

Also, since the charged plates are moving, we now have surface current $\textbf{K}$, which produces a magnetic field!.

Now we can compare the fields $E_y$ and $B_z$ of reference frame $S$ to the fields $\overline{E}_y$ and $\overline{B}_z$ in reference frame $\overline{S}$ which is moving at $v$ velocity relative to $S$ and at $\overline{v}$ relative to the rest frame of the capacitor:

![reference frame $\overline{S}$ - picture is an example of when $v > 0$](overline_v_capacitor.png)

We conclude the following transformation rules:

$$
\begin{align}
    \overline{E}_y &= \gamma(E_y - vB_z) \\
    \overline{B}_z &= \gamma(B_z - \frac{v}{c^2}E_y) \\
\end{align}
$$

Considering the same capacitor rotated by $\pi/2$ around thr $x$-axis gives us analogous transformation rules for $E_z$ and $B_y$:

$$
\begin{align}
    \overline{E}_z &= \gamma(E_z + vB_y) \\
    \overline{B}_y &= \gamma(B_y + \frac{v}{c^2}E_z) \\
\end{align}
$$

Now, if we consider our original the capacitor rotated by $\pi/2$ aroundkfvbehfajlkcsb fejvsdc, then the length contraction only affects the distance between the plates - since the electric field does not depend on that, we have $\overline{E}_x = E_x$. Also, the symmetry of the plates means that there is no magnetic field in any inertial reference frame, so we will need another field source to study how $B_x$ transforms. We will now turn to our friend the solenoid!

<a href="https://raw.githack.com/amalbumbia/Electrodynamics_and_Relativity/main/interactive/solenoid_3d.html">
  <img src="assets/solenoid.png" width="400" alt="solenoid">
</a>

As you can see, in a reference frame moving at $v$ relative to the solenoid, the solenoid experiences length contraction and the density of coils increases by a factor of $\gamma$. However, it also experiences time dilation, which decreases the current by a factor of $\gamma$ as well. These cancel out to give us the transformation rule $\overline{B_x} = B_x$. 

## Minkowski Space

If you are familiar with Quantum Mechanics, you remember the Hilbert Space, and how we dealt with kets (row vectors), bras (column vectors) and operators (matrices acting on keta/bras) inside the Hilbert Space. Well, in special relativity we have Minkowski space! Let me tell you the main characters of the Minkowski space:

- **4-vectors**: examples include displacement $(ct, x, y, z)$, proper velocity, proper momentum, current density (will be formulated below)
- **Minkowski metric**: matrix ($\eta$) that defines the inner product:
  Given two 4-vectors $X^\mu$ and $Y^\mu$, their inner product in Minkowski space is $X^\mu\eta_{\mu\nu}Y^\nu$
- **4-covectors**: Instead of having to write $\eta_{\mu\nu}$ over and over again, we will simply embed it into our vectors. Let the covector $X_\mu$ be defined by:
  
  $$\begin{align}
  X_\mu &= \eta_{\mu\nu}X^\nu
  \end{align}
  $$
  
  Similarly,
  
  $$\begin{align}
  X^\nu &= X_\mu\eta^{\mu\nu}
  \end{align}
  $$
  
  Now, there is deeper mathematical meaning to this, these covectors actually live in a dual space to Minkowski space. But the main cool convenience to us physicists is that now as long as all of our indices are paired (one superscripted, one subscripted), we know it is invariant between reference frames (since the Minkowski metric is invariant). Later, we are going to rewrite Maxwell's equations in tensor form, and the paired indices will prove to us that the equations are invariant!

  One useful covector to keep in mind is the *four-derivative* (the relativistic form of $\nabla$):
  
  $$\begin{align}
  \partial_\mu &= \left(\frac{1}{c}\frac{\partial}{\partial t}, \nabla\right)
  \end{align}$$
  
-  **Lorentz group**: This is the group of possible transformation matrices $\Lambda$ that transform 4-vectors into other 4-vectors while preserving the Minkowski inner product; that is,

  $$\begin{align}
  \Lambda^\rho_\mu\eta_{\rho\sigma}\Lambda^\sigma_\nu &= \eta_{\mu\nu}
  \end{align}$$

  Therefore, if we have $(X')^\mu = \Lambda^\mu_\nu X^\nu$ and $(Y')^\mu = \Lambda^\mu_\nu Y^\nu$, then

  $$\begin{align}
  (X')_\mu (Y')^\mu &= (X')^\rho \eta_{\rho\mu} (Y')^\mu \\
  &= X^\sigma \Lambda^\rho_\sigma \eta_{\rho\mu} \Lambda^\mu_\lambda Y^\lambda\\
  &= X^\sigma \eta_{\sigma\lambda} Y^\lambda\\
  &= X_\lambda Y^\lambda
  \end{align}$$

  Thus, the inner product stays the same even after transforming $X$ and $Y$. Again, this means that any expression involving our vector/covectors and $\Lambda$ is invariant as long as all indices are in pairs. There are two main types of Lorentz transformations:

  - *Rotations*: Reference frames rotated with respect to one another
  - *Lorentz boosts*: Reference frames moving along an axis with respect to one another
  - Any linear combination on the above type of Lorentz transformations is also a Lorentz transformation

- **Tensors**: A tensor is a very generalized 4-vector, with not just one indice up or down, but any possible amount of superscripted and/or subscripted indices. It forms by carrying out dyad products between vectors and/or covectors (and then possibly having a linear combination of different dyads). Instead of cancelling out indice pairs to represent decreasing in dimension like an inner product does, the dyad product between two vectors/covectors keeps all their indices, so it increases in dimension from its multiplied parts. The Tensor transforms as follows:

  $$\begin{align}
  (T')^{\mu_1 ... \mu_n}_{\nu_1 ... \nu_m} &= \Lambda^{\mu_1}_{\rho_1} ... \Lambda^{\mu_n}_{\rho_n} \Lambda^{\sigma_1}_{\nu_1} ... \Lambda^{\sigma_m}_{\nu_m} T^{\rho_1 ... \rho_n}_{\sigma_1 ... \sigma_m}
  \end{align}$$

## Fitting Electrodynamics into Minkowski space

Now, lets take a look at our transformation rules for $E$ and $B$ fields, as see how to represent that as a quantity that Lorentz tranforms in Minkowski space. The electric and magnetic field have a total of 6 components, so that can't fit into a 4-vector? And the transformation rules look different from the 4-vector transformation rules anyway, so what is happening here? Let us turn to the potentials. We have

$$E = -\nabla\phi - \frac{\partial \textbf{A}}{\partial t}$ and $B = \nabla \times \textbf{A}$$

With some flexibility in how to define $A$ and $\phi$:

$$\phi \to \phi-\frac{\partial \chi}{\partial t}$ and $\textbf{A} \to \textbf{A} + \nabla\chi$$.

We can put these potentials into a 4-vector that transforms as so:

$$A^\mu = \left(\begin{array}
& \phi/c \\
\textbf{A}
\end{array}\right) \to A^\mu - \partial^\mu \chi$$

Now consider the $\textbf{anitsymmetric rank 2 tensor}$:

$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

What's an antisymmetric tensor?

$$
F_{\mu\nu} = \left\{
\begin{array}
& 0 & F_{10} & F_{20} & F_{30} \\
-F_{10} & 0 & F_{12} & F_{13} \\
-F_{20} & -F_{12} & 0 & F_{23} \\
-F_{30} & -F_{13} & -F_{23} & 0 \\
\end{array} \right\}
$$

- *Antisymmetric*: $t^{\mu\nu} = t^{\nu\mu}$, while $t^{\mu\mu} = 0$

As you can see, $t$ has 6 distinct elements, and we can show that the vairous elements are elements of the $E$ and $B$ fields. For example,:

$$\begin{align*}
F_{10} &= \partial_1 A_0 - \partial_0 A_1 \\
&= \nabla \phi/c - \frac{1}{c}\frac{\partial A_x}{\partial t} \\
&= E_x/c \\
\end{align*}$$

When we Lorentz transform $F_{\mu\nu}$, we also get the same transformation rules we derived earlier with our capacitors and solenoids zooming at arbitrary velocities:

(will insert the transformation rules here...)

Thus, we can represent the $E$ and $B$ fields and how they transform as the field tensor $F_{\mu\nu}$.

$$
F_{\mu\nu} = \left\{
\begin{array}
& 0 & E_x/c & E_y/c & E_z/c \\
-E_x/c & 0 & -B_z & B_y \\
-E_y/c & B_z & 0 & -B_x \\
-E_z/c & -B_y & B_x & 0 \\
\end{array} \right\}
$$

## Dual Tensor

We need yet another tensor in order to formulate Maxwell's equations. And we will create it using the antisymmetric tensor $\epsilon^{\mu\nu\rho\sigma}$, defined as:

$$\epsilon^{\mu\nu\rho\sigma} = \begin{cases}
1 \;\text{if $\mu\nu\rho\sigma = 0123$} \\
-1 \;\text{if $\mu\nu\rho\sigma = 3210$} \\
0 \;\text{if any indices are equal}
\end{cases}$$

This is like the generalized Levi-Civita symbol. Now let us define

$G^{\mu\nu} = \frac{1}{2} \epsilon^{\mu\nu\rho\sigma} F_{\rho\sigma}$

We will call this the 'dual electromagnetic tensor'

## Current Density

We have one last step before we can rewrite the Maxwell's equations in terms of $F_{\mu\nu}$ and $G_{\mu\nu}$. We need to put current and current density in 4-vector form:

$$J^\mu = \left(\begin{array}
& \rho c \\
\textbf{J}
\end{array}\right)$$

Consider $J^\mu = (\rho_0 c, 0)$. Under a Lorentz boost it becomes

$$\Lambda^\mu_\nu J^\mu = \left(\begin{array}
& \gamma \rho_0 c \\
-\gamma \rho_0 v
\end{array}\right)$$

This makes physical sense, as the charge density would increase due to lorentz contraction, and in the frame moving at $\textbf{v}$ this new charge density $\gamma \rho_0$ is moving at $-\textbf{v}$, thereby causing there to be a nonzero current density.

## The New Maxwell's Equations:

Now, we finally have Maxwell's equations:

$$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ and $\partial_\mu G^{\mu\nu} = 0$$

Note that there is a hanging $\nu$ in each of thses equations. You may think this is a problem, since it indicates that these equations are not necessarily invariant. That is correct, but it turns out that Maxwell's equations will tranform into eachother in different reference frames. By that I mean that Gauss's Law in one reference frame turns into Ampere's Law in the other, and vice versa. So, while these equations transform, it is in a way that does not make a difference. We say that they are covariant under Lorentz tranformations.