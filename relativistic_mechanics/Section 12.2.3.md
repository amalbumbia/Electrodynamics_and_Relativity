# Section 12.2.3: Relativistic Kinematics
![Trump Einstein](12_2_images/trump_dark_matter.jpeg)
Now we shall explore the effects of our scared conservation laws (energy and momentum). With our definitions of relativistic energy and momentum in example 12.7, we carry through a similar procedure as in classical mechanics. We discover that mass is not conserved due to the fact that internal energy contributes to the mass of the object

This has profound consequences at the particle level. Whereas in classical mechanics, the mass of an object is the sum of the masses of constituent particles $M=\sum m_i$, the mass of a proton, for example, is NOT the sum of its valence quarks. In fact, the rest masses of the quarks (2 up, 1 down) make up only about 1% of the proton's mass. The rest of the mass comes from energy in the gluon fields (what holds the quarks together) and quantum chromodynamics (QCD) effects. 
![proton quarks](quark_structure_proton.png)
For reference (recall that we are using natural units):
* up quark- 2.2 MeV
* down quark- 4.7 MeV
* proton- 938 MeV

## Bonus!
Let's consider a system of particles and explore the implications of the Lorentz invariance of $E^2-{p}^2=m^2$. Since $p^\mu$ undergoes Lorentz transformations in a similar fashion as $x^\mu$, we have that $p^\mu p_\mu$ is invariant.

These vectors in 4-dimensional spacetime can be summed; for a system of n particles, we have:
$$
p^\mu = \sum_{i=1}^n p_i^\mu
$$
Combining, we get the "invariant mass" for a system of particles:
$$
p^\mu p_\mu = (\sum_{i=1}^{n}E_i)^2 - (\sum_{i=1}^{n}{p}_i)^2
$$
which is relevant especially when discussing the decays of particles. Let me paint the picture: at CERN, protons are smashed together at near the speed of light, providing enough energy to form other massive particles (mass-energy equivalence). Some of these particles decay faster than they can reach the detectors; therefore, we cannot see them on their own. However, if we see their decay prodcuts, we can use the invariant mass formula to reconstruct the mass of the decayed particle. 

Let's see an example of this using pythia8, a Monte Carlo event generator that can be used to simulate proton-proton collisions.

```python
#If you would like to figure out how to download pythia8, go ahead (it's really fun to experiment with). 
#It can sometimes be painful to install, but maybe I'm just being dramatic since it's not a simple pip install.

import pythia8
import numpy as np
import matplotlib.pyplot as plt

pythia = pythia8.Pythia()
pythia.readString("Beams:idA = 2212")  # proton ID
pythia.readString("Beams:idB = 2212")
pythia.readString("Beams:eCM = 10.")   # Low energy, soft QCD
pythia.readString("SoftQCD:nonDiffractive = on")
pythia.init()

n_events = 100000
masses = []

for i in range(n_events):
    if not pythia.next(): continue

    # Collect all pi+ and pi- in the final state
    piplus = []
    piminus = []
    for i in range(pythia.event.size()):
        p = pythia.event[i]
        if not p.isFinal(): continue
        if p.id() == 211: piplus.append(p)
        if p.id() == -211: piminus.append(p)

    # Form all pi+ pi- pairs and compute invariant mass
    for pi_p in piplus:
        for pi_m in piminus:
            e = pi_p.e() + pi_m.e()
            px = pi_p.px() + pi_m.px()
            py = pi_p.py() + pi_m.py()
            pz = pi_p.pz() + pi_m.pz()
            m2 = e**2 - (px**2 + py**2 + pz**2)
            if m2 > 0:
                masses.append(np.sqrt(m2))

pythia.stat()

plt.hist(masses, bins=200, range=(0, 1.5), histtype='step', color='blue')
plt.title(r"Invariant mass of $\pi^+\pi^-$ pairs")
plt.xlabel(r"$m_{\pi^+\pi^-}$ [GeV]")
plt.ylabel("Counts")
plt.axvspan(0.4, 0.6, color='red', alpha=0.2, label=r'$\sigma$ region')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.savefig("pipi_invariant_mass.pdf")
print("Plot saved as pipi_invariant_mass.pdf")
```

![pipimasses](12_2_images/inv_mass_pi_pi.png )