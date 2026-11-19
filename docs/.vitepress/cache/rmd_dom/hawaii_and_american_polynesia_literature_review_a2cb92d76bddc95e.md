---
title: "Pre-Annexation Hawai'i and American Polynesia"
subtitle: "CENTAUR-II: Ahupua'a Intensification, Kingdom Censuses and Tutuila-Manu'a Chiefdoms, -10000 to 1898AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hawaii_and_american_polynesia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hawaii_and_american_polynesia_spatial.png"
hero_caption: "Sub-regional areal mask and 20 catalogued settlements across Hawai'i Island, Maui Nui, O'ahu, Kaua'i-Ni'ihau and Eastern Samoa covering 15.068 square kilometres."
hero_label: "fig:hero-hawaii-and-american-polynesia"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the population of the Hawaiian Archipelago and Eastern Samoa (Tutuila, Aunu'u and Manu'a) from -10000 to the 1898AD annexation threshold under Operation Viscount CENTAUR-II. Combining Bayesian radiocarbon settlement chronologies, wetland and dryland agricultural carrying-capacity models and Hawaiian Kingdom censuses [@dye2011model; @kirch2010how; @schmitt1977historical], the series traces two divergent trajectories across 15.068 km2 (232 5-arcminute pixels). In Eastern Samoa, Lapita and Plainware occupation at To'aga and 'Aoa maintained continuous settlement from -1000AD (220 persons) through 0AD (950) to a pre-contact chiefdom peak of 7,2k in 1750-1778AD, moderating to 5,66k by 1898AD [@kirch1993toaga; @rieth2008radiocarbon]. Across Hawai'i, permanent colonisation around 800AD (280 persons) initiated logistic growth through valley irrigation and leeward field systems, climbing from 6,55k in 1000AD and 38k in 1200AD to 255k in 1500AD and a pre-contact maximum of 375k (combined total 382,2k) in 1778AD [@kirch2010how; @ladefoged2009opportunities]. Introduced epidemics then reduced the Hawaiian population by 65,2% to 130.313 in the 1831-32 missionary census (136.813 regional total) and to a trough of 56.897 in 1872AD (62.647 total), before plantation immigration and Honolulu urban growth lifted the combined territory to 130,06k in 1898AD [@schmitt1968demographic; @schmitt1977historical].

# Background

Reconstructing pre-annexation demography across Hawai'i and Eastern Samoa requires reconciling two contrasting Pacific settlement histories. In Western Polynesia, Samoan Plainware and Lapita sites on Tutuila and Ofu-Olosega establish uninterrupted human occupation across three millennia [@kirch1993toaga; @rieth2008radiocarbon]. Stratified coastal deposits at To'aga on Ofu and 'Aoa on Tutuila date early village formation to c. 1000BC, followed by gradual inland terrace expansion, star-mound (*tia 'ave*) construction and ranked *Tui Manu'a* chiefdom consolidation [@rieth2008radiocarbon]. By contrast, revised high-precision radiocarbon chronologies from Hawaiian valleys and coastal dunes reject earlier hypotheses of first-millennium BC settlement [@dye2011model]. Using Bayesian outlier screening on short-lived charred wood and domesticates, Dye places initial Hawaiian colonisation around 800-1000AD, leaving the Hawaiian Islands uninhabited throughout the -10000 to 600AD horizons [@dye2011model; @dye2014wealth].

Traditional global compilations often treated pre-contact Polynesia as an undifferentiated residual aggregate [@mcevedy1978atlas; @kleingoldewijk2017anthropogenic]. Following Polynesian landfall, Hawaiian society expanded rapidly into an ecologically stratified archaic state system structured around radial *ahupua'a* resource territories [@kirch2010how; @kirch2011archaic]. On windward O'ahu, Kaua'i, Maui and North Hawai'i, alluvial floodplains supported irrigated taro pondfields (*lo'i kalo*) and coastal walled fishponds (*loko i'a*). On leeward Hawai'i Island (Kohala, Kona and Ka'u) and southeastern Maui (Kahikinui and Kula), rainfall-dependent sweet potato (*'uala*) field networks covered extensive volcanic slopes [@ladefoged2009opportunities]. Between 1778AD and the late nineteenth century, introduced pathogens (influenza, measles, whooping cough, smallpox and venereal disease) drove catastrophic Hawaiian depopulation documented first by missionary estimates in 1823AD and subsequently by Kingdom censuses from 1831-32 to 1896AD [@schmitt1968demographic; @schmitt1977historical].

# Methodology

## Sub-Regional Partition and Demographic Anchors

The study domain spans five areal masks covering 15.068 km2 across 232 5-arcminute grid cells: Hawai'i Island (9.975 km2, 138 pixels), Maui Nui comprising Maui, Moloka'i, Lana'i and Kaho'olawe (2.289 km2, 46 pixels), O'ahu (1.342 km2, 23 pixels), Kaua'i and Ni'ihau (1.381 km2, 23 pixels) and Eastern Samoa comprising Tutuila, Aunu'u and Manu'a (81 km2, 2 pixels). Pre-contact trajectories in Hawai'i follow Dye's colonisation timing and Kirch's logistic intensification model scaled to island-level irrigated and dryland agricultural potential [@dye2011model; @kirch2010how; @ladefoged2009opportunities]. Eastern Samoa follows radiocarbon site density curves from To'aga and 'Aoa to a pre-contact plateau of 7,2k in 1750-1778AD, declining gently to 5,6k in 1890AD ahead of the 1900 US Navy census of 5.679 persons [@rieth2008radiocarbon; @uscensus1901twelfth].

From 1832AD to 1896AD, all four Hawaiian sub-regions are anchored directly to Robert C. Schmitt's standardised tabulations of the 1831-32 and 1835-36 missionary counts and the official Hawaiian Kingdom censuses of 1850, 1853, 1860, 1866, 1872, 1878, 1884, 1890 and 1896AD [@schmitt1968demographic; @schmitt1977historical]. Figures for 1898AD extrapolate the 1890-1896 intercensal trajectory to the Republic of Hawai'i annexation boundary, after which the 1900-2026AD series transitions to CENTAUR-II Part 5 [@uscensus1901twelfth].

## Non-Stationary Matérn Kriging Calibration

Spatial allocation within the 232 mask cells uses Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) residual kriging calibrated across six archaeological and historical horizons: `colonisation_founder`, `expansion_wetland`, `dryland_intensification`, `protohistoric_archaic_state`, `kingdom_missionary_era` and `late_kingdom_plantation` [@paciorek2006spatial; @kelly2025spatiotemporal]. Anisotropy and bandwidth parameters are fixed at $\tau_1 = 1,25$ and $\tau_2 = 2,6$ dimensionless units, matching the continental North American `p3k14c` configuration whilst adapting local covariates to windward-leeward precipitation gradients, slope, elevation and coastal fishpond accessibility [@ladefoged2009opportunities]. Population totals for each sub-region are conserved strictly within each areal mask before mosaic integration.

# Testing and Validation

All five sub-regional series were tested for additive conservation against the headline archipelago benchmarks and evaluated against Schmitt's published county totals and kriging variogram diagnostics (Table \ref{tab:validation-hawaii}). Across all 42 benchmark steps from -10000 to 1898AD, sub-regional sums match headline totals with zero residual discrepancy. For the 1831-32 missionary census, summed Hawaiian islands equal 130.313 (Hawai'i Island 45.792, Maui Nui 42.742, O'ahu 29.755 and Kaua'i-Ni'ihau 12.024), reproducing Schmitt's aggregate exactly [@schmitt1977historical]. At the 1872AD demographic trough, the four Hawaiian sub-regions sum to 56.897, rising to 109.020 in 1896AD (plus 5.640 in Eastern Samoa = 114.660).

<figure class="crd-table-figure" id="tab:validation-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R2</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>colonisation founder</strong></td><td class="crd-td">0,0038</td><td class="crd-td">0,22</td><td class="crd-td">0,8921</td><td class="crd-td">1,39</td><td class="crd-td">5,87</td></tr>
<tr><td class="crd-td"><strong>expansion wetland</strong></td><td class="crd-td">0,0076</td><td class="crd-td">0,22</td><td class="crd-td">0,8957</td><td class="crd-td">3,3</td><td class="crd-td">13,02</td></tr>
<tr><td class="crd-td"><strong>dryland intensification</strong></td><td class="crd-td">0,0078</td><td class="crd-td">0,22</td><td class="crd-td">0,8649</td><td class="crd-td">4,7</td><td class="crd-td">20,73</td></tr>
<tr><td class="crd-td"><strong>protohistoric archaic state</strong></td><td class="crd-td">0,0094</td><td class="crd-td">0,22</td><td class="crd-td">0,8637</td><td class="crd-td">5,98</td><td class="crd-td">26,27</td></tr>
<tr><td class="crd-td"><strong>kingdom missionary era</strong></td><td class="crd-td">0,0072</td><td class="crd-td">0,22</td><td class="crd-td">0,8864</td><td class="crd-td">3,17</td><td class="crd-td">15,39</td></tr>
<tr><td class="crd-td"><strong>late kingdom plantation</strong></td><td class="crd-td">0,0059</td><td class="crd-td">0,1187</td><td class="crd-td">0,9738</td><td class="crd-td">4,35</td><td class="crd-td">27,66</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Variogram fit and spatial density diagnostics across the six Hawaiian-Polynesian kriging horizons (232 active cells, tau1 = 1,25, tau2 = 2,6).</figcaption>
</figure>

Pseudo-$R^2$ values across the six kriging variograms range from 0,8637 (`protohistoric_archaic_state`) to 0,9738 (`late_kingdom_plantation`), confirming high spatial fidelity as census enumeration replaces sparse radiocarbon point clouds.

# Results

## Pre-Contact Intensification and Archaic States (-1000 to 1778AD)

Prior to 800AD, regional population resided solely in Eastern Samoa, expanding from 220 in -1000AD to 950 in 0AD and 2,5k by 600AD [@rieth2008radiocarbon]. Following Hawaiian colonisation around 800AD, total regional population climbed from 3,38k (800AD) to 7,2k (1000AD), 42,9k (1200AD) and 180,9k (1400AD) (Figure \ref{fig:traj-hawaii}). Between 1400AD and 1778AD, dryland field intensification in Kohala, Kona, Ka'u and southeastern Maui raised Hawai'i Island from 65k to 145k (37,9% of the regional total) and Maui Nui from 47k to 102k (26,7%), whilst irrigated valleys on O'ahu (82k) and Kaua'i-Ni'ihau (46k) brought the combined 1778AD contact peak to 382,2k [@kirch2010how; @ladefoged2009opportunities].

<figure class="crd-figure-block" id="fig:traj-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia/fig2_hawaii_and_american_polynesia_trajectory.png" alt="fig:traj-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across Hawai'i and American Polynesia from -10000 to 1898AD with sub-regional uncertainty bands.</figcaption>
</figure>

## Post-Contact Contraction and Kingdom Census Recovery (1778 to 1898AD)

European contact triggered steep demographic contraction across all four Hawaiian island groups (Table \ref{tab:regions-hawaii}). Between 1778AD and 1832AD, Hawai'i Island fell from 145k to 45.792 (-68,4%), Kaua'i-Ni'ihau from 46k to 12.024 (-73,9%), O'ahu from 82k to 29.755 (-63,7%) and Maui Nui from 102k to 42.742 (-58,1%) [@schmitt1968demographic]. Contraction slowed after 1853AD, reaching a nadir of 62.647 in 1872AD, at which point O'ahu (20.671, or 33% of the region) surpassed Hawai'i Island (16.001, or 25,5%) as Honolulu consolidated maritime commerce and government administration (Figure \ref{fig:shares-hawaii}). Driven by contract sugar-plantation labour and urban growth, total population recovered to 86.228 in 1884AD, 114.660 in 1896AD and 130.060 by 1898AD, with O'ahu holding 46,8k (36%) [@schmitt1977historical].

<figure class="crd-figure-block" id="fig:shares-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia/fig3_hawaii_and_american_polynesia_shares.png" alt="fig:shares-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition shares across the five Hawaiian and Eastern Samoan areal masks through 1898AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:regions-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km2)</th><th class="crd-th">800AD</th><th class="crd-th">1200AD</th><th class="crd-th">1500AD</th><th class="crd-th">1778AD</th><th class="crd-th">1832AD</th><th class="crd-th">1872AD</th><th class="crd-th">1896AD</th><th class="crd-th">1898AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Hawai'i Island (Kohala, Kona, Ka'u, Puna, Hilo and Hamakua)</strong></td><td class="crd-td">9.975</td><td class="crd-td">90</td><td class="crd-td">13,5k</td><td class="crd-td">96k</td><td class="crd-td">145k</td><td class="crd-td">45,8k</td><td class="crd-td">16k</td><td class="crd-td">33,3k</td><td class="crd-td">37,9k</td></tr>
<tr><td class="crd-td"><strong>2. Maui Nui (Maui, Moloka'i, Lana'i and Kaho'olawe)</strong></td><td class="crd-td">2.289</td><td class="crd-td">70</td><td class="crd-td">9,8k</td><td class="crd-td">69k</td><td class="crd-td">102k</td><td class="crd-td">42,7k</td><td class="crd-td">15k</td><td class="crd-td">20,1k</td><td class="crd-td">22,2k</td></tr>
<tr><td class="crd-td"><strong>3. O'ahu (Waikiki, Ewa, Ko'olau and Wai'anae)</strong></td><td class="crd-td">1.342</td><td class="crd-td">70</td><td class="crd-td">9,5k</td><td class="crd-td">58k</td><td class="crd-td">82k</td><td class="crd-td">29,8k</td><td class="crd-td">20,7k</td><td class="crd-td">40,2k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>4. Kaua'i and Ni'ihau</strong></td><td class="crd-td">1.381</td><td class="crd-td">50</td><td class="crd-td">5,2k</td><td class="crd-td">32k</td><td class="crd-td">46k</td><td class="crd-td">12k</td><td class="crd-td">5,2k</td><td class="crd-td">15,4k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>5. Eastern Samoa / American Polynesia (Tutuila, Aunu'u and Manu'a)</strong></td><td class="crd-td">81</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">6,5k</td><td class="crd-td">5,8k</td><td class="crd-td">5,6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">15.068</td><td class="crd-td">3,4k</td><td class="crd-td">42,9k</td><td class="crd-td">261,3k</td><td class="crd-td">382,2k</td><td class="crd-td">136,8k</td><td class="crd-td">62,6k</td><td class="crd-td">114,7k</td><td class="crd-td">130,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional population benchmarks across Hawai'i and American Polynesia from 800 to 1898AD.</figcaption>
</figure>

# Limitations

Three principal uncertainties remain. First, contact-era Hawaiian totals remain debated between Stannard's high estimate exceeding 800k and conservative estimates near 250k [@stannard1989before; @schmitt1968demographic]; CENTAUR-II adopts Kirch's carrying-capacity synthesis of 375k at 1778AD [@kirch2010how], propagating narrower (+/- 1,5%) bounds only where census counts begin in 1831-32AD. Second, Eastern Samoa lacks nineteenth-century civil censuses comparable to the Hawaiian Kingdom series, requiring smooth interpolation between ethnohistorical missionary estimates and the 1900 US Navy count of 5.679 [@uscensus1901twelfth; @rieth2008radiocarbon]. Third, at 5-arcminute resolution, Tutuila and Manu'a occupy only two raster cells (81 km2), compressing intra-island coastal vs upland contrasts into sub-grid priors.

# Sources

<div id="refs"></div>
