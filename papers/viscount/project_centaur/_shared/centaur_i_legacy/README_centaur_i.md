# CENTAUR

Demographic research covering Northern America (U.S. & Canada) for the pre-Columbian Holocene (10000BC-1500AD). Part of [Velkscala](https://github.com/ConfoederatioVF/Velkscala) regional modelling, and ultimately wound up first in the [Stadestér 1.0](https://confoederatio.org/papers/Stadest%C3%A9r%201.0%20-%20A%20Global%20Database%20of%2041000%2B%20Cities%20From%203000BC%20to%20the%20Present.pdf) paper. 

Estimates relied on McEvedy & Jones, Nevle and Bird, Driver and Massey, Milner and Chaplin, Dye, and Swanson. 

<details open>
<summary>Excerpt from Stadestér 1.0:</summary>
<br>

> We thus commissioned a new internal model, **Project Centaur**, whose sole job it was to fix the rather sorry state that Northern American population distributions had found itself in as a result of botched outlier removal and KK10/LUH2’s various methodological shortcomings for the region. Like all internal models, it and its corresponding input data is available as part of Stadestér open-source code package.
> 
> Our main sources of region-specific estimates for this work came from McEvedy and Jones for regional trends and presumed heavy agricultural zones, Nevle and Bird for our agricultural and irrigation data, Williams, Driver and Massey, Milner and Chaplin, Dye, Swanson (who were both used for estimations of the Hawaiian Islands), and Nelson for macro-regional population trends [166][167][168][169][170][171].
> 
> These areal maps were then scaled over the rural substrata series previously mentioned over data-specific time domains: roughly from 10000BC-1600AD on the North American continent, and from 1100AD-1896AD on the Hawaiian Islands. We do not pretend this model is perfect: for instance, much more detailed tribal estimates are available from the likes of Krzywicki and Jones [172][173], as well as possible nation-by-nation spatiotemporal kriging of p3k14c [174]. But that is principally a matter of regional demographics, not urban demographics, and so we have thus declined its inclusion in this dataset¹⁶.

</details>

## File Structure.

- `rasters_regions/` - Individual areal masks for dasymetric scaling.
- `raw_images/` - Research images.
- `population_Substrata_northern_america.js` - Main config and application file, used in [Collation](https://github.com/ConfoederatioVF/Collation).
