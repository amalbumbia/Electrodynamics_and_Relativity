# Section 12.2.2: Relativistic Energy and Momentum
![Trump Einstein](12_2_images/trump_irrelevant.jpg)

(I don't get the joke this meme is trying to make and that makes it funnier)
Noether's Theorem regarding conservation of momentum is sacred and can never be broken (see problem 12.29 in Griffiths); as such, we define relativistic momentum as:

$$
{p} = m{\eta} = \frac{m{u}}{\sqrt{1-u^2/c^2}}
$$

In 4-vector notation, this is:

$$
p^\mu = m \eta^\mu
$$

Einstein also defines:
$$
p^0c \equiv E \equiv \frac{mc^2}{\sqrt{1-u^2/c^2}}
$$

Famously, as you have probably heard before, even the mass at rest has energy. Evaluating this at $u=0$ gives:
$$
E_{rest}=mc^2
$$

Everything else that isn't the rest energy is kinetic; therefore,
$$
E_{kin} = E - E_{rest} = \frac{mc^2}{\sqrt{1-u^2/c^2}} - mc^2
$$
What's very nice is that in the nonrelativistic regime $u << c$, we can Taylor expand the square root and recover
$$
E_{kin} \approx \frac{1}{2}mu^2 \text{   ; $u << c$}
$$
This is vital to all theories in the sense that we must check that our new theories can recover our established equation and rules. This is similar to the classical theory of gravity in that we recover $F=-mg\hat{z}$ for objects that are close to the Earth. We cannot have our new theories be incompatible with our old ones without some clever explanation.

Ultimately, we arrive at:
$$
E^2 - p^2c^2 = m^2c^4
$$

### BONUS!
$c = 3 \times 10^8$ m/s makes you happy, doesn't it? What if I made you unhappy by making $c=1$? Although, Griffiths doesn't have a chance to touch on this, it's important to talk about <span style="color:red">natural units</span>, because they come up often in relativistic particle physics and other fields where relativistic frames are typical. Essentially, a simplification is made where $c=1$ in order so that constants don't obscure the algebra. The idea is that we can simply add them back later via simple dimensional analysis. In particle physics, this has the consequence of rendering our equation
$$
E^2 - p^2 = m^2
$$
Where [E] = [GeV], [p]=[GeV/c], and [m]=[GeV/c^2] also becomes [E] = [GeV], [p]=[GeV], and [m]=[GeV]. With natural units, GeV now becomes energy, momentum, or mass depending on the context. If we want to go back to normal units, we can just multiply by the appropriate 1, $c$, or $c^2$ respectively.