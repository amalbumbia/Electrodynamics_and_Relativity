# Section 12.2.1: Proper Time and Proper Velocity
![Time Dilation](12_2_images/time_dilation_trump_2.png)
Let's again consider the effects of time dilation. However, let's now consider a differential time step of 
$$
d\tau = dt \sqrt{1 - \frac{u^2}{c^2}}
$$
where $\tau$ is the proper time. According to Griffiths, this makes since if you're a French person because "propre" means your own. Since this is in your own frame, it will always be invariant, making it useful in the regard.
The difference between the two is pretty straightforward. We have ordinary velocity, which is length in some external reference frame (coordinate distance) over time in that same frame (coordinate frame):
$$
{u} = \frac{d{l}}{dt}
$$
But coordinate time may not always the most relevant to you, perhaps you're more interested in how much distance you travel in this external frame over YOUR time:
$$
{\eta}=\frac{d{l}}{d\tau}
$$
If we insert these into our equation that relates these differential time steps, we get:
$$
{\eta} = \frac{1}{\sqrt{1-u^2/c^2}} {u}
$$
Since the proper time is our own time, it transforms very simply from one inertial system to another. Starting with
$$
\eta^\mu = \frac{dx^\mu}{d\tau}
$$
When transforming from system $S$ to system $\bar{S}$ that moves at speed $v$ along the common $x\bar{x}$ axis, we accordinly get the equations 12.18 
$$
\bar{t} = \gamma (t - \frac{v}{c^2}x) \\
\bar{x} = \gamma (x - v t) \\
\bar{y} = y \\
\bar{z} = z
$$
with the derivatives applied using the differential proper time interval
$$
\bar{t} = \gamma (\eta^0 - \beta\eta^1) \\
\bar{\eta}^1 = \gamma (\eta^1 - \beta \eta^0) \\
\bar{\eta}^2 = \eta^2 \\
\bar{\eta}^3 = \eta^3
$$
To become more acquainted with notation in the literature, this is
$$
\bar{\eta}^\mu = \Lambda^\mu_\nu \eta^\nu
$$
using a tensor contraction. The transformation rules for ordinary velocity require a change in both differentials and can be found in the book.
### BONUS!

Let's make things more interesting by talking about the <span style="color:red">Relativistic Doppler effect</span> (refer to the associated html to play around with a simple plot of this). The equations describing this phenomenon take on a slightly new form, so let's derive it. Consider a source moving towards a stationary observer.

We will first make use of the Lorentz transformations:
$$
\bar{t} = \gamma(t - \frac{vx}{c^2})
$$
and
$$
\bar{x} = \gamma(x - vt)
$$


Firstly, by convention, $v \rightarrow -v$ since the source is moving towards the observer. Secondly, let's say we have two events that occur at $(0,0)$ and $(\tau,0)$ in the source's rest frame, where $\tau$ is the period of the wave in the source's frame. WLOG and for convenience, we can say that the observer and source experience the event at $(0,0)$ simulataneously.\
The second spacetime event, which does not occur simulataneously, thereby transforms to
$$
\bar{t} = \gamma(t - \frac{vx}{c^2}) = \gamma\tau
$$
and
$$
\bar{x} = \gamma(x - vt) = \gamma v \tau
$$
Meaning that the second event occurs at $(\gamma\tau,\gamma v \tau)$ in the observer's frame. Because the event is spatially at a distance $\gamma v \tau$, the observer has to wait not only for the event to occur in their frame but ALSO the time it takes for the light to travel that distance, $\gamma v \tau /c$; therefore, the observer sees the signal at
$$
\tau_{obs} = \gamma\tau_{src} + \gamma v \tau_{src}/c
$$
Since $\tau_{obs} = 1/f_{obs}$ and $\tau_{src} = 1/f_{src}$, we can rearrange to get:

$$
\frac{f_{src}}{f_{obs}} = \gamma(1 + v/c) = \frac{1+ v/c}{\sqrt{1-v^2/c^2}} = \frac{1+ v/c}{\sqrt{(1-v/c)(1+v/c))}} = \sqrt{\frac{1+v/c}{1-v/c}}
$$
Another derivation may not seem very interesting, but this is relevant to astrophysics and relativistic beaming, in which relativistic aberration, time dilation, and the doppler shifting can affect the apparent brightness of a source.

![Relativistic Beaming](12_2_images/radio_galaxy_3C31.png)

Here, you can see this effect from a jet that is pointed towards Earth while the plumes are pointed away.