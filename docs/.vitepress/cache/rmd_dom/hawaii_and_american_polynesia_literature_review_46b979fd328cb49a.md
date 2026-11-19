---
title: "Pre-Annexation Hawai'i and American Polynesia"
subtitle: "CENTAUR-II: Ahupua'a Intensification, Kingdom Censuses and Tutuila-Manu'a Chiefdoms, 10000BC to 1898AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hawaii_and_american_polynesia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hawaii_and_american_polynesia_spatial.png"
hero_caption: "Sub-regional areal mask and 216 catalogued settlements across Hawai'i Island, Maui Nui, O'ahu, Kaua'i-Ni'ihau and Eastern Samoa covering 16.600 km²."
hero_label: "fig:hero-hawaii-and-american-polynesia"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the population of the Hawaiian Archipelago and Eastern Samoa (Tutuila, Aunu'u and the Manu'a islands of Ta'ū, Ofu and Olosega) from 10000BC to the 1898AD annexation threshold under CENTAUR-II. Combining Bayesian radiocarbon settlement chronologies, wetland and dryland agricultural carrying-capacity estimates, Hawaiian Kingdom censuses and territorial enumerations [@dye2011model; @kirch2010how; @schmitt1977historical], the series traces two sharply different trajectories across 16.600 km² (282 five-arcminute cells). In Eastern Samoa, Lapita and Plainware occupation at To'aga and 'Aoa maintained unbroken settlement from 1000BC (220 persons) through 0AD (950) and 600AD (2,5k) to a pre-contact chiefdom plateau of 7,2k in 1750-1778AD, easing gently to 5,66k by 1898AD [@kirch1993toaga; @rieth2008radiocarbon; @uscensus1901twelfth].

Across the eight main Hawaiian Islands, permanent Polynesian landfall around 800AD (280 persons) opened a steep logistic expansion fed first by windward valley taro irrigation (*lo'i kalo*) and later by leeward rain-fed sweet potato (*'uala*) field systems and coastal walled fishponds (*loko i'a*). Island totals climbed from 3,4k in 1000AD and 38k in 1200AD to 255k in 1500AD and a contact peak of 375k (382,2k regional total) when Captain James Cook reached Waimea and Kealakekua Bay in 1778AD [@kirch2010how; @ladefoged2009opportunities]. Introduced infectious diseases then cut the Hawaiian population by 65,2% to 130.313 in the 1831-32 missionary census (136.813 regional total) and to a nadir of 56.897 in 1872AD (62.647 total), before plantation immigration and the commercial expansion of Honolulu lifted the combined region back to 130.060 in 1898AD [@schmitt1968demographic; @schmitt1977historical]. Spatial allocation relies on non-stationary Matérn ($\nu = 3/2$) kriging over 282 valid and active cells and 20.670 domestic horizon site-epoch records grouped into 156 domestic catchments (156 active; median radius 4,92 km, p90 8,29 km) derived from 727 State of Hawai'i *ahupua'a* land divisions plus 4 Western Samoan buffer catchments (regularised and raw $\tau_1$ averaging 1,0968 across 1,0673 to 1,1624, mean $\tau_2 = 2,3581$ across 2,2946 to 2,4991, effective short range 5,44 km to 5,92 km [mean 5,59 km], raw nugget 0 and regularised 0,04 across all six horizons, WLS residual $R^2$ from 0,9963 to 0,9975), paired with 216 catalogued settlements out of 477 ledger candidates [@paciorek2006spatial; @kelly2025spatiotemporal].

# Background

## Two Contrasting Polynesian Settlement Chronologies

Any quantitative population history of Hawai'i and American Samoa begins with the long chronological gap separating Western Polynesia from the far northern triangle of Eastern Polynesia. In the Samoan archipelago, archaeological excavations at Mulifanua on Upolu, To'aga on Ofu and 'Aoa on Tutuila establish that Lapita ceramic voyagers settled the coastal plains and reef lagoons around 1000BC [@kirch1993toaga; @rieth2008radiocarbon].

Within a few centuries, potters abandoned dentate-stamped Lapita wares for thicker Polynesian Plainware across Tonga, Fiji and Samoa while inland families cleared basalt slopes for dryland root crops and breadfruit groves [@burley2018early; @rieth2008radiocarbon; @herrscher2024life]. By 600AD, fortified ridges, *tia 'ave* star mounds and ranked *Tui Manu'a* chiefdom titles anchored a stable village network across Tutuila and Manu'a that weathered European contact with far milder demographic disruption than Hawai'i suffered [@kirch1993toaga; @stantis2015assessing].

In the Hawaiian Archipelago, three thousand kilometres farther north across the equatorial doldrums, early radiocarbon work once floated mid-first-millennium AD or even late BC landfalls on the strength of unidentified wood charcoal. Re-evaluation of stratigraphic contexts and Bayesian modelling of short-lived twigs, charred kukui nutshells and commensal rat (*Rattus exulans*) bones now places permanent Hawaiian colonisation firmly between 800AD and 1000AD [@dye2011model; @dye2014wealth].

Genetic studies of Native Hawaiian lineages, isotopic mobility studies across Remote Oceania and wider Austronesian linguistic reconstructions match that late, rapid pulse out of central East Polynesia, leaving the Hawaiian Islands empty throughout the entire 10000BC to 600AD span [@kim2012population; @kinaston2013first; @padillaiglesias2020geographical; @corser2012mitochondrial; @wei2017phylogeography].

## Ecological Contrasts and the Ahupua'a Economy

Once established, Polynesian settlers encountered an archipelago far larger and ecologically more varied than any island group in tropical Polynesia outside Aotearoa. Spanning 16.476 km² across eight main volcanic islands (16.600 km² with Eastern Samoa), Hawai'i exhibits extreme rainfall contrasts imposed by the north-east trade winds against shield volcanoes rising above four thousand metres [@ladefoged2009opportunities].

Windward valleys on Kaua'i, O'ahu, Moloka'i, East Maui and North Hawai'i intercept steady orographic rain and support perennial streams suited to stone-terraced *lo'i kalo* pondfields. By contrast, broad leeward slopes across Kohala, Kona, Ka'u and Kula-Kahikinui lack permanent rivers and depend on deep, unweathered volcanic ash soils watered by seasonal convectional rain [@kirch2010how; @ladefoged2009opportunities].

Around this physical gradient, Hawaiian chiefs and cultivators built the *ahupua'a*, a radial wedge running from upland forest birding and timber zones across dryland or irrigated gardens down to inshore reef fisheries and stone-walled *loko i'a* aquaculture ponds [@kirch2010how; @kirch2011archaic]. As population density rose between 1200AD and 1650AD, dryland field boundaries, stone windbreaks and coral-block fishponds proliferated across Leeward Kohala, Kona and Maui, turning marginal slopes into productive surplus estates that supported non-cultivating priests, artisans and war chiefs [@dye2014wealth; @rogers2011spread]. Historical coral-reef reconstructions along the Hawaiian littoral show sustained multi-century harvesting pressure followed by post-contact relaxation when coastal communities thinned after 1778AD [@kittinger2011historical].

## Contact Shock, Missionary Counts and Kingdom Censuses

Captain James Cook's arrival off Kaua'i in January 1778AD and at Kealakekua Bay in 1779AD ended eight centuries of near-total epidemiological isolation. Over the next century, waves of venereal infection, tuberculosis, influenza, measles, whooping cough, dysentery and the devastating 1853AD smallpox epidemic reduced the native Hawaiian population by roughly four-fifths [@schmitt1968demographic; @stannard1989before].

Unlike most Pacific archipelagos, however, the unified Kingdom of Hawai'i documented this contraction with uncommon precision. Protestant missionaries conducted systematic island-wide tallies in 1831-32AD and 1835-36AD, and from 1850AD through 1896AD the Hawaiian Board of Education and later the Bureau of Public Instruction carried out nine formal civil censuses broken down by island, district, nationality and sex [@schmitt1968demographic; @schmitt1977historical].

From the 1860s onward, reciprocal sugar tariffs and the Reciprocity Treaty of 1875AD transformed the demographic balance once more. As indigenous births only slowly began to recover, sugar planters recruited tens of thousands of indentured and contract labourers from southern China, Portugal (Madeira and the Azores), Japan and smaller numbers from the Philippines and Europe, alongside American and British merchants concentrated at Honolulu [@schmitt1977historical; @kim2012population]. By the time the United States annexed Hawai'i in August 1898AD (and established naval administration over Tutuila and Manu'a in 1899-1900AD), the Hawaiian economy had shifted decisively from rural subsistence *ahupua'a* districts toward irrigated sugar lowlands and a primate port at Honolulu [@schmitt1977historical; @uscensus1901twelfth].

# Methodology

## Sub-Regional Partition and Demographic Anchors

The study area divides 16.600 km² (282 five-arcminute cells) into five areal masks: Hawai'i Island (10.471 km², 150 pixels), Maui Nui comprising Maui, Moloka'i, Lāna'i and Kaho'olawe (2.891 km², 64 pixels), O'ahu (1.559 km², 32 pixels), Kaua'i and Ni'ihau (1.555 km², 32 pixels) and Eastern Samoa comprising Tutuila, Aunu'u and Manu'a (124 km², 4 pixels). Between 10000BC and 600AD, only Eastern Samoa holds human inhabitants, rising from 220 in 1000BC to 950 in 0AD and 2,5k in 600AD in line with Samoan coastal radiocarbon density curves [@kirch1993toaga; @rieth2008radiocarbon].

From 800AD to 1778AD, Hawaiian sub-regional trajectories trace a logistic growth curve anchored to Dye's colonisation timing and Kirch's island-by-island archaic-state carrying-capacity synthesis [@dye2011model; @kirch2010how; @ladefoged2009opportunities]. Initial founder communities of roughly 280 persons in 800AD (90 on Hawai'i Island, 70 each on Maui Nui and O'ahu and 50 on Kaua'i-Ni'ihau) multiply rapidly in fertile windward valleys between 1000AD and 1300AD before expanding onto leeward dryland slopes after 1400AD.

Growth tapers smoothly toward an ecological plateau in the seventeenth and eighteenth centuries, yielding 145k on Hawai'i Island, 102k across Maui Nui, 82k on O'ahu and 46k on Kaua'i-Ni'ihau at 1778AD (375k Hawaiian total). Eastern Samoa rises slowly over the same millennium from 3,1k in 800AD to 7,2k in 1750-1778AD [@rieth2008radiocarbon].

For 1800AD and 1823AD, Hawaiian estimates interpolate between the 1778AD contact benchmark and missionary estimates gathered during William Ellis's 1823AD survey (152k across Hawai'i plus 6,8k in Eastern Samoa) [@schmitt1968demographic]. From 1832AD to 1896AD, all four Hawaiian masks reproduce Robert C. Schmitt's standardised tabulations of the 1831-32AD and 1835-36AD missionary censuses and the official Kingdom enumerations of 1850, 1853, 1860, 1866, 1872, 1878, 1884, 1890 and 1896AD [@schmitt1968demographic; @schmitt1977historical].

The terminal 1898AD benchmark extrapolates the 1890-1896AD intercensal growth rate to the eve of US annexation (124,4k in Hawai'i plus 5,66k in Eastern Samoa = 130.060), bridging smoothly into the 1900AD US Twelfth Census (5.679 enumerated in American Samoa in 1900AD) [@uscensus1901twelfth].

## Ahupua'a Catchments and Non-Stationary Matérn Kriging

Within each island mask, rural population distribution relies on non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging calibrated across six archaeological and historical horizons [@paciorek2006spatial; @kelly2025spatiotemporal]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

where $Q_{ij} = (s_i - s_j)^\top \left(\frac{\Sigma_i + \Sigma_j}{2}\right)^{-1} (s_i - s_j)$ is the locally rescaled quadratic distance between catchment centroids and $\mathcal{M}_{3/2}(r) = (1 + \sqrt{3}\,r)\exp(-\sqrt{3}\,r)$ is the Matérn correlation kernel. Rather than imposing arbitrary square grid blocks, the Hawaiian surface aggregates 727 official State of Hawai'i Historic Cultural *ahupua'a* and *moku* polygons into 156 domestic Voronoi catchments (median radius 4,92 km; 90th percentile 8,29 km), paired with 4 cross-frontier conditioning catchments across Upolu and Savai'i in Western Samoa up to 250 km beyond the Eastern Samoan mask.

Six chronological horizons partition 20.670 domestic horizon site-epoch records compiled from Dye's Leeward Kohala Field System and colonisation radiocarbon databases [@dye2011model; @dye2014wealth], Ladefoged and Kirch's agricultural potential models [@ladefoged2009opportunities; @kirch2010how], Samoan radiocarbon chronologies [@rieth2008radiocarbon] and Kingdom district census weights [@schmitt1977historical].

Before kriging, catchment site intensities undergo Freeman-Tukey variance stabilisation and weighted least squares (WLS) regression against five biophysical covariates: habitable land fraction, natural productivity index, ecozone terrain suitability, fluvial valley proximity and sheltered coastal accessibility. Residual semivariograms over the 282 valid and active cells yield matching raw and regularised dimensionless range parameters averaging $\tau_1 = 1,0968$ (1,0673 to 1,1624; effective short range 5,44 km to 5,92 km, mean 5,59 km) and mean $\tau_2 = 2,3581$ (2,2946 to 2,4991), with unregularised nugget-to-sill ratios of 0 across all six horizons (regularised to the 0,04 floor, $\eta = 0,0417$) and WLS residual $R^2$ from 0,9963 to 0,9975. Sub-regional populations are strictly conserved within each mask after subtracting the 216 catalogued settlements.

## Gazetteer Compilation and Ledger Controls

To resolve dispersed *ahupua'a* settlement patterns onto stable point loci, the accompanying gazetteer compiles 216 included settlements from 477 ledger candidates (261 excluded duplicate aliases merged within 2 km; 0 unaccounted). Every Hawaiian and Eastern Samoan locus was re-anchored onto USGS Geographic Names Information System (GNIS) and GeoNames WGS84 decimal coordinates, preserving Hawaiian diacritics (*'okina* and *kahakō*) and Samoan bay names across 65 sites on Hawai'i Island, 61 in Maui Nui, 45 on O'ahu, 31 on Kaua'i-Ni'ihau and 14 in Eastern Samoa.

# Testing and Validation

All five sub-regional series conserve exact additive parity against the headline benchmarks across all 42 time steps from 10000BC to 1898AD with zero residual discrepancy. For the 1831-32AD missionary census, summed island totals equal 130.313 (Hawai'i Island 45.792, Maui Nui 42.742, O'ahu 29.755 and Kaua'i-Ni'ihau 12.024), reproducing Schmitt's published enumeration identically [@schmitt1977historical]. At the 1872AD demographic trough, the four Hawaiian masks sum to 56.897, rising to 109.020 in 1896AD (plus 5.640 in Eastern Samoa = 114.660).

<figure class="crd-table-figure" id="tab:validation-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R2</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Colonisation and Founder (800-1150AD)</strong></td><td class="crd-td">0,001175</td><td class="crd-td">0,04</td><td class="crd-td">0,9975</td><td class="crd-td">4,91</td><td class="crd-td">33,86</td></tr>
<tr><td class="crd-td"><strong>2. Wetland Lo'i Expansion (1150-1450AD)</strong></td><td class="crd-td">0,001794</td><td class="crd-td">0,04</td><td class="crd-td">0,9968</td><td class="crd-td">10,37</td><td class="crd-td">26,35</td></tr>
<tr><td class="crd-td"><strong>3. Dryland Intensification (1450-1650AD)</strong></td><td class="crd-td">0,001966</td><td class="crd-td">0,04</td><td class="crd-td">0,9963</td><td class="crd-td">14,03</td><td class="crd-td">54,87</td></tr>
<tr><td class="crd-td"><strong>4. Protohistoric Archaic State (1650-1778AD)</strong></td><td class="crd-td">0,002335</td><td class="crd-td">0,04</td><td class="crd-td">0,9963</td><td class="crd-td">17,18</td><td class="crd-td">50,75</td></tr>
<tr><td class="crd-td"><strong>5. Missionary and Early Kingdom (1778-1853AD)</strong></td><td class="crd-td">0,002248</td><td class="crd-td">0,04</td><td class="crd-td">0,9967</td><td class="crd-td">13,42</td><td class="crd-td">58,03</td></tr>
<tr><td class="crd-td"><strong>6. Late Kingdom and Plantation (1853-1898AD)</strong></td><td class="crd-td">0,002427</td><td class="crd-td">0,04</td><td class="crd-td">0,9969</td><td class="crd-td">13,39</td><td class="crd-td">58,96</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Variogram fit and spatial density diagnostics across the six Hawaiian and Eastern Samoan kriging horizons (282 valid and active cells, mean tau1 = 1,0968, mean tau2 = 2,3581).</figcaption>
</figure>

Table \ref{tab:validation-hawaii} and Table \ref{tab:kriging-epochs} confirm tight spatial calibration across all six horizons. Residual $R^2$ ranges from 0,9963 (Dryland Intensification and Protohistoric Archaic State) to 0,9975 (Colonisation and Founder; 0,9969 in Late Kingdom and Plantation), while unregularised nugget-to-sill ratios equal 0 across all six horizons (regularised uniformly to the 0,04 floor, $\eta = 0,0417$).

Notice how WLS covariate slopes track the historical shift in Hawaiian agriculture: fluvial and coastal terms ($\beta_3$ and $\beta_4$) anchor early valley *lo'i* settlement (0,1309 and 0,0946 in 800-1150AD) before ecozone suitability ($\beta_2 = 0,0789$), natural productivity ($\beta_1 = 0,1329$) and fluvial slope ($\beta_3 = 0,1394$, with coastal $\beta_4 = 0,2072$) peak during 1150-1450AD wetland expansion; coastal concentration then peaks during 1450-1650AD dryland intensification ($\beta_4 = 0,2196$, with $\beta_3 = 0,1364$ and $\beta_1 = 0,0295$) and remains elevated through the protohistoric archaic state ($\beta_3 = 0,1217$ and $\beta_4 = 0,2167$ in 1650-1778AD) and early kingdom ($\beta_3 = 0,136$ and $\beta_4 = 0,2153$ in 1778-1853AD) before moderating under late plantation consolidation ($\beta_3 = 0,1247$ and $\beta_4 = 0,1611$ in 1853-1898AD) [@ladefoged2009opportunities; @schmitt1977historical].

<figure class="crd-table-figure" id="tab:kriging-epochs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Domestic Sites</th><th class="crd-th">Buffer Sites</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Fluvial Beta</th><th class="crd-th">Coastal Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Colonisation and Founder (800-1150AD)</strong></td><td class="crd-td">1.384</td><td class="crd-td">141</td><td class="crd-td">0,01</td><td class="crd-td">0,1309</td><td class="crd-td">0,0946</td></tr>
<tr><td class="crd-td"><strong>2. Wetland Lo'i Expansion (1150-1450AD)</strong></td><td class="crd-td">2.924</td><td class="crd-td">175</td><td class="crd-td">0,0789</td><td class="crd-td">0,1394</td><td class="crd-td">0,2072</td></tr>
<tr><td class="crd-td"><strong>3. Dryland Intensification (1450-1650AD)</strong></td><td class="crd-td">3.957</td><td class="crd-td">203</td><td class="crd-td">0,01</td><td class="crd-td">0,1364</td><td class="crd-td">0,2196</td></tr>
<tr><td class="crd-td"><strong>4. Protohistoric Archaic State (1650-1778AD)</strong></td><td class="crd-td">4.844</td><td class="crd-td">223</td><td class="crd-td">0,01</td><td class="crd-td">0,1217</td><td class="crd-td">0,2167</td></tr>
<tr><td class="crd-td"><strong>5. Missionary and Early Kingdom (1778-1853AD)</strong></td><td class="crd-td">3.785</td><td class="crd-td">210</td><td class="crd-td">0,01</td><td class="crd-td">0,136</td><td class="crd-td">0,2153</td></tr>
<tr><td class="crd-td"><strong>6. Late Kingdom and Plantation (1853-1898AD)</strong></td><td class="crd-td">3.776</td><td class="crd-td">243</td><td class="crd-td">0,01</td><td class="crd-td">0,1247</td><td class="crd-td">0,1611</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Site-epoch counts across 156 domestic catchments and 4 Western Samoan buffer catchments alongside fitted WLS covariate slopes.</figcaption>
</figure>

# Results

## Early Samoan Stability and Hawaiian Landfall (10000BC to 1200AD)

Throughout the first nine millennia of the series (10000BC to 2000BC), the Hawaiian and American Samoan masks record zero human inhabitants. Settlement begins around 1000BC in Eastern Samoa, where Lapita coastal villages on Ofu and Tutuila held an estimated 220 residents [@kirch1993toaga]. Clearing of coastal flats and lower volcanic valleys carried Tutuila and Manu'a to 950 inhabitants at 0AD, 1,9k by 400AD and 2,5k by 600AD as Polynesian Plainware settlement spread around protected bays such as Pago Pago, Leone, 'Aoa and Faga'itua [@rieth2008radiocarbon; @burley2018early].

Around 800AD, the first Polynesian voyaging canoes reached the Hawaiian Islands, bringing taro, breadfruit, banana, yam, sweet potato, pigs, dogs and domestic fowl [@dye2011model; @layos2022insights]. From a small founding core near 280 persons in 800AD (yielding a combined regional total of 3,38k including 3,1k in Samoa), Hawaiian communities grew swiftly along perennial windward streams where irrigated taro pondfields gave high returns per hectare [@ladefoged2009opportunities].

Total regional population reached 7,2k in 1000AD (3,4k in Hawai'i plus 3,8k in Eastern Samoa), 16,3k in 1100AD and 42,9k by 1200AD (Figure \ref{fig:traj-hawaii}), with Hawai'i Island (13,5k), Maui Nui (9,8k) and O'ahu (9,5k) already outstripping Eastern Samoa (4,9k).

<figure class="crd-figure-block" id="fig:traj-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia/fig2_hawaii_and_american_polynesia_trajectory.png" alt="fig:traj-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory across Hawai'i and American Polynesia from 10000BC to 1898AD with sub-regional uncertainty bands.</figcaption>
</figure>

## Wetland Consolidation, Dryland Expansion and Archaic States (1200 to 1778AD)

Between 1200AD and 1500AD, Hawaiian demographic growth accelerated through its steepest phase, multiplying sixfold from 38k to 255k across the archipelago (261,3k with Eastern Samoa) [@kirch2010how; @dye2014wealth]. On Kaua'i and O'ahu, large alluvial basins at Hanalei, Wailua, Waimea, Kailua-Kawainui, Waikīkī and Pearl Harbor-Honouliuli filled with contiguous *lo'i* terrace complexes and stone-walled *loko kuapā* fishponds such as Kuapā and He'eia. Yet wet-valley terrain made up less than a tenth of potentially arable land on the younger volcanic shields of Maui and Hawai'i Island [@ladefoged2009opportunities].

After 1400AD, population growth shifted decisively onto the leeward rain-fed dryland belts of North Kohala, Kona, Ka'ū, Kula and Kahikinui, where hundreds of square kilometres of volcanic ash slopes were partitioned into gridded sweet-potato field networks [@ladefoged2009opportunities; @dye2014wealth]. That dryland expansion doubled Hawai'i Island's population from 65k in 1400AD to 123k in 1600AD and 145k in 1778AD (37,9% of the regional total), while Maui Nui climbed from 47k in 1400AD to 102k in 1778AD (26,7%).

Meanwhile, O'ahu rose from 40,5k to 82k (21,5%) and Kaua'i-Ni'ihau from 22,5k to 46k (12%), carrying the combined Hawaiian-Samoan total to its pre-contact peak of 382,2k in 1778AD [@kirch2010how; @kirch2011archaic]. As finite island carrying capacities approached saturation, competitive polities coalesced into four rival island kingdoms centred on rich coastal royal precincts at Waipi'o, Kailua-Kona, Hōnaunau, Lāhainā, Waikīkī and Wailua [@kirch2010how; @lipo2021population; @rogers2011spread]. Table \ref{tab:precontact-series} details the full pre-contact expansion from 1000BC to 1778AD across all five masks.

<figure class="crd-table-figure" id="tab:precontact-series">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Hawai'i Isl.</th><th class="crd-th">Maui Nui</th><th class="crd-th">O'ahu</th><th class="crd-th">Kaua'i-Ni'ihau</th><th class="crd-th">E. Samoa</th><th class="crd-th">Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">220</td><td class="crd-td">220</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">950</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">90</td><td class="crd-td">70</td><td class="crd-td">70</td><td class="crd-td">50</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">1,1k</td><td class="crd-td">880</td><td class="crd-td">850</td><td class="crd-td">520</td><td class="crd-td">3,8k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">13,5k</td><td class="crd-td">9,8k</td><td class="crd-td">9,5k</td><td class="crd-td">5,2k</td><td class="crd-td">4,9k</td><td class="crd-td">42,9k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">65k</td><td class="crd-td">47k</td><td class="crd-td">40,5k</td><td class="crd-td">22,5k</td><td class="crd-td">5,9k</td><td class="crd-td">180,9k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">96k</td><td class="crd-td">69k</td><td class="crd-td">58k</td><td class="crd-td">32k</td><td class="crd-td">6,3k</td><td class="crd-td">261,3k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">123k</td><td class="crd-td">87k</td><td class="crd-td">72k</td><td class="crd-td">40k</td><td class="crd-td">6,7k</td><td class="crd-td">328,7k</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">140k</td><td class="crd-td">98k</td><td class="crd-td">79,5k</td><td class="crd-td">44,5k</td><td class="crd-td">7,1k</td><td class="crd-td">369,1k</td></tr>
<tr><td class="crd-td"><strong>1778AD</strong></td><td class="crd-td">145k</td><td class="crd-td">102k</td><td class="crd-td">82k</td><td class="crd-td">46k</td><td class="crd-td">7,2k</td><td class="crd-td">382,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Pre-contact demographic progression across Eastern Samoa and the four Hawaiian island masks from 1000BC to 1778AD.</figcaption>
</figure>

## Post-Contact Contraction across the Islands (1778 to 1872AD)

Western contact broke this equilibrium abruptly (Table \ref{tab:regions-hawaii}). Between 1778AD and 1800AD, early epidemics and Kamehameha I's wars of unification reduced total regional population by 26,2% from 382,2k to 282k.

A cholera-like *ma'i 'ōku'u* outbreak in 1804AD and endemic respiratory and venereal infections drove an even steeper drop over the following generation: by the 1831-32AD missionary census, Hawai'i's population stood at 130.313 (136.813 with Eastern Samoa), down 65,2% in fifty-four years [@schmitt1968demographic]. Losses were sharpest on Kaua'i-Ni'ihau (-73,9%, from 46k to 12.024) and Hawai'i Island (-68,4%, from 145k to 45.792), slightly less severe on O'ahu (-63,7%, to 29.755) and Maui Nui (-58,1%, to 42.742).

Contraction persisted through the mid-nineteenth century as measles, whooping cough and influenza swept the islands in 1848-49AD and smallpox struck O'ahu and Maui in 1853AD [@schmitt1968demographic]. Total Hawaiian numbers fell from 84.165 in 1850AD to 73.138 in 1853AD, 69.800 in 1860AD and an all-time post-contact low of 56.897 in 1872AD (62.647 including 5,75k in Eastern Samoa) [@schmitt1977historical].

At that 1872AD trough, O'ahu (20.671, or 33% of the region) overtook Hawai'i Island (16.001, or 25,5%) for the first time since Polynesian landfall, reflecting both Honolulu's pull on internal migrants and steeper depopulation in rural Kona and Ka'ū (Figure \ref{fig:shares-hawaii}).

<figure class="crd-figure-block" id="fig:shares-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia/fig3_hawaii_and_american_polynesia_shares.png" alt="fig:shares-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional demographic composition shares across the five Hawaiian and Eastern Samoan areal masks through 1898AD.</figcaption>
</figure>

## Plantation Migration and Honolulu Primacy (1872 to 1898AD)

Between 1872AD and annexation in 1898AD, the regional demographic curve reversed sharply. Sugar-plantation expansion after the 1875AD Reciprocity Treaty brought large cohorts of Chinese, Portuguese and Japanese workers into coastal lowlands on Hawai'i Island (Hilo, Hāmākua and North Kohala), Central Maui (Wailuku, Kahului and Spreckelsville), Kaua'i (Līhu'e, Kōloa and Makaweli) and 'Ewa-Waipahu on O'ahu [@schmitt1977historical; @kim2012population]. Combined regional population rose by 107,6% over twenty-six years from 62.647 in 1872AD to 86.228 in 1884AD, 114.660 in 1896AD and 130.060 in 1898AD.

<figure class="crd-table-figure" id="tab:regions-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">800AD</th><th class="crd-th">1200AD</th><th class="crd-th">1500AD</th><th class="crd-th">1778AD</th><th class="crd-th">1832AD</th><th class="crd-th">1872AD</th><th class="crd-th">1896AD</th><th class="crd-th">1898AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Hawai'i Island (Kohala, Kona, Ka'u, Puna, Hilo and Hamakua)</strong></td><td class="crd-td">10.471</td><td class="crd-td">90</td><td class="crd-td">13,5k</td><td class="crd-td">96k</td><td class="crd-td">145k</td><td class="crd-td">45,8k</td><td class="crd-td">16k</td><td class="crd-td">33,3k</td><td class="crd-td">37,9k</td></tr>
<tr><td class="crd-td"><strong>2. Maui Nui (Maui, Moloka'i, Lana'i and Kaho'olawe)</strong></td><td class="crd-td">2.891</td><td class="crd-td">70</td><td class="crd-td">9,8k</td><td class="crd-td">69k</td><td class="crd-td">102k</td><td class="crd-td">42,7k</td><td class="crd-td">15k</td><td class="crd-td">20,1k</td><td class="crd-td">22,2k</td></tr>
<tr><td class="crd-td"><strong>3. O'ahu (Waikiki, Ewa, Ko'olau and Wai'anae)</strong></td><td class="crd-td">1.559</td><td class="crd-td">70</td><td class="crd-td">9,5k</td><td class="crd-td">58k</td><td class="crd-td">82k</td><td class="crd-td">29,8k</td><td class="crd-td">20,7k</td><td class="crd-td">40,2k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>4. Kaua'i and Ni'ihau</strong></td><td class="crd-td">1.555</td><td class="crd-td">50</td><td class="crd-td">5,2k</td><td class="crd-td">32k</td><td class="crd-td">46k</td><td class="crd-td">12k</td><td class="crd-td">5,2k</td><td class="crd-td">15,4k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>5. Eastern Samoa and American Polynesia (Tutuila, Aunu'u and Manu'a)</strong></td><td class="crd-td">124</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">6,5k</td><td class="crd-td">5,8k</td><td class="crd-td">5,6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">16.600</td><td class="crd-td">3,4k</td><td class="crd-td">42,9k</td><td class="crd-td">261,3k</td><td class="crd-td">382,2k</td><td class="crd-td">136,8k</td><td class="crd-td">62,6k</td><td class="crd-td">114,7k</td><td class="crd-td">130,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional population benchmarks across Hawai'i and American Polynesia from 800AD to 1898AD.</figcaption>
</figure>

Growth was far from uniform across island groups. Kaua'i and Ni'ihau rebounded earliest and fastest relative to their 1872AD nadir, more than tripling from 5.194 in 1872AD to 15.392 in 1896AD and 17,5k in 1898AD. O'ahu more than doubled from 20.671 to 40.205 in 1896AD and 46,8k in 1898AD (36% of the regional total), driven by Honolulu's growth from 14.852 in 1872AD to 29.920 in 1896AD and 34,2k in 1898AD [@schmitt1977historical]. Hawai'i Island recovered more gradually from 16.001 to 37,9k (29,1%) and Maui Nui from 15.031 to 22,2k (17,1%). By contrast, Eastern Samoa remained insulated from plantation labour immigration, holding steady between 5,6k and 5,75k throughout 1872-1898AD (4,4% of the region in 1898AD) [@uscensus1901twelfth].

## Sub-Regional Profiles and Census Sequence (1823 to 1898AD)

### Hawai'i Island

Covering 10.471 km² across Kohala, Kona, Ka'ū, Puna, Hilo and Hāmākua, Hawai'i Island accounts for 63,1% of the land surface in this study and held the largest pre-contact population (145k in 1778AD, or 13,8 persons per km²). Its great dryland field systems along the leeward Kona and Kohala slopes supported dense seasonal-rain farming, supplemented by rich windward taro terraces in Waipi'o and Waimanu valleys and coastal chiefdom courts at Kailua-Kona, Kahalu'u, Kealakekua and Hōnaunau [@kirch2010how; @ladefoged2009opportunities].

After 1778AD, rural dryland districts suffered severe depopulation as firewood, water and agricultural infrastructure fell into disuse, dropping Hawai'i Island to 45.792 in 1832AD and 16.001 in 1872AD (1,5 persons per km²). Late nineteenth-century sugar expansion along the rain-fed Hāmākua and Hilo coasts plus coffee smallholdings in Kona later lifted the island back to 33.285 in 1896AD and 37,9k in 1898AD [@schmitt1977historical].

### Maui Nui

Maui Nui (2.891 km²) unites Maui with Moloka'i, Lāna'i and Kaho'olawe, reaching 102k inhabitants in 1778AD (35,3 persons per km²). Irrigated valleys in West Maui (Wailuku, Waikapū, Waihe'e and Honokōhau), windward East Maui (Hāna, Ke'anae and Wailua) and Moloka'i's Hālawa Valley complemented dense coastal fishpond belts along southern Moloka'i and the leeward dryland terraces of Kula and Kahikinui [@kirch2010how; @ladefoged2009opportunities].

Whaling anchorage at Lāhainā slowed Maui Nui's early nineteenth-century decline relative to Hawai'i Island (42.742 in 1832AD), though smallpox and rural out-migration reduced the group to 15.031 in 1872AD. Sugar plantations irrigated by East Maui ditch networks around Wailuku, Kahului and Spreckelsville restored numbers to 20.138 in 1896AD and 22,2k in 1898AD (7,7 persons per km²), even as Kaho'olawe fell below fifty residents [@schmitt1977historical].

### O'ahu

Although O'ahu covers just 1.559 km², its sheltered bays and broad windward and Pearl Harbor alluvial basins supported 82k inhabitants at contact (52,6 persons per km²), led by Waikīkī, Kāne'ohe, He'eia, Kailua, Waialua and Honouliuli [@kirch2010how]. Following the shift of the Kamehameha court from Lāhainā to Honolulu in the 1840s, O'ahu diverged sharply from the outer islands. Despite losing roughly 2,5k residents on O'ahu during the 1853AD smallpox outbreak (falling from 25.440 in 1850AD to 19.126 in 1853AD), commercial shipping, royal administration and Pearl River sugar cultivation carried O'ahu past Hawai'i Island in 1872AD (20.671) and on to 46,8k in 1898AD (30 persons per km²) [@schmitt1968demographic; @schmitt1977historical].

### Kaua'i and Ni'ihau

Separated from O'ahu by the broad Ka'ie'ie Waho channel, Kaua'i and arid Ni'ihau cover 1.555 km² and supported 46k people in 1778AD (29,6 persons per km²). Deep perennial streams fed major *lo'i* complexes in Hanalei Valley, Wailua and Waimea-Menehune Ditch [@kirch2010how]. Steep depopulation reduced the two islands to 12.024 in 1832AD and just 5.194 in 1872AD (3,3 persons per km²), after which Kōloa, Līhu'e and Makaweli sugar estates drove the fastest proportional rebound in the kingdom, tripling island population to 15.392 in 1896AD and 17,5k in 1898AD [@schmitt1977historical].

### Eastern Samoa: Tutuila, Aunu'u and Manu'a

Covering only 124 km² across steep basalt ridges and reef-ringed bays, Tutuila, Aunu'u and the Manu'a islands followed a markedly steadier course. Reaching roughly 7,2k inhabitants in 1750-1778AD (58,1 persons per km²), Eastern Samoa experienced neither the wholesale demographic collapse of Hawai'i nor nineteenth-century plantation immigration, easing gradually through mission counts to 6,1k in 1850AD, 5,6k in 1890AD and 5,66k in 1898AD ahead of the 1900AD US Navy enumeration of 5.679 [@rieth2008radiocarbon; @uscensus1901twelfth].

<figure class="crd-table-figure" id="tab:census-series">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Hawai'i Isl.</th><th class="crd-th">Maui Nui</th><th class="crd-th">O'ahu</th><th class="crd-th">Kaua'i-Ni'ihau</th><th class="crd-th">E. Samoa</th><th class="crd-th">Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1823AD</strong></td><td class="crd-td">58k</td><td class="crd-td">44k</td><td class="crd-td">33k</td><td class="crd-td">17k</td><td class="crd-td">6,8k</td><td class="crd-td">158,8k</td></tr>
<tr><td class="crd-td"><strong>1832AD</strong></td><td class="crd-td">45,8k</td><td class="crd-td">42,7k</td><td class="crd-td">29,8k</td><td class="crd-td">12k</td><td class="crd-td">6,5k</td><td class="crd-td">136,8k</td></tr>
<tr><td class="crd-td"><strong>1836AD</strong></td><td class="crd-td">39,4k</td><td class="crd-td">31,5k</td><td class="crd-td">27,8k</td><td class="crd-td">9,9k</td><td class="crd-td">6,4k</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>1850AD</strong></td><td class="crd-td">25,9k</td><td class="crd-td">25,2k</td><td class="crd-td">25,4k</td><td class="crd-td">7,7k</td><td class="crd-td">6,1k</td><td class="crd-td">90,3k</td></tr>
<tr><td class="crd-td"><strong>1853AD</strong></td><td class="crd-td">24,4k</td><td class="crd-td">21,8k</td><td class="crd-td">19,1k</td><td class="crd-td">7,8k</td><td class="crd-td">6k</td><td class="crd-td">79,1k</td></tr>
<tr><td class="crd-td"><strong>1860AD</strong></td><td class="crd-td">21,5k</td><td class="crd-td">19,9k</td><td class="crd-td">21,3k</td><td class="crd-td">7,1k</td><td class="crd-td">5,9k</td><td class="crd-td">75,7k</td></tr>
<tr><td class="crd-td"><strong>1866AD</strong></td><td class="crd-td">19,8k</td><td class="crd-td">16,7k</td><td class="crd-td">19,8k</td><td class="crd-td">6,6k</td><td class="crd-td">5,8k</td><td class="crd-td">68,8k</td></tr>
<tr><td class="crd-td"><strong>1872AD</strong></td><td class="crd-td">16k</td><td class="crd-td">15k</td><td class="crd-td">20,7k</td><td class="crd-td">5,2k</td><td class="crd-td">5,8k</td><td class="crd-td">62,6k</td></tr>
<tr><td class="crd-td"><strong>1878AD</strong></td><td class="crd-td">17k</td><td class="crd-td">14,9k</td><td class="crd-td">20,2k</td><td class="crd-td">5,8k</td><td class="crd-td">5,7k</td><td class="crd-td">63,7k</td></tr>
<tr><td class="crd-td"><strong>1884AD</strong></td><td class="crd-td">25k</td><td class="crd-td">18,6k</td><td class="crd-td">28,1k</td><td class="crd-td">8,9k</td><td class="crd-td">5,6k</td><td class="crd-td">86,2k</td></tr>
<tr><td class="crd-td"><strong>1890AD</strong></td><td class="crd-td">26,8k</td><td class="crd-td">20,2k</td><td class="crd-td">31,2k</td><td class="crd-td">11,9k</td><td class="crd-td">5,6k</td><td class="crd-td">95,6k</td></tr>
<tr><td class="crd-td"><strong>1896AD</strong></td><td class="crd-td">33,3k</td><td class="crd-td">20,1k</td><td class="crd-td">40,2k</td><td class="crd-td">15,4k</td><td class="crd-td">5,6k</td><td class="crd-td">114,7k</td></tr>
<tr><td class="crd-td"><strong>1898AD</strong></td><td class="crd-td">37,9k</td><td class="crd-td">22,2k</td><td class="crd-td">46,8k</td><td class="crd-td">17,5k</td><td class="crd-td">5,7k</td><td class="crd-td">130,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Nineteenth-century missionary, Kingdom and pre-annexation population benchmarks across all five sub-regions, 1823AD to 1898AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:subregion-density">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1778AD (km²)</th><th class="crd-th">1872AD (km²)</th><th class="crd-th">1898AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Hawai'i Island (Kohala, Kona, Ka'u, Puna, Hilo and Hamakua)</strong></td><td class="crd-td">65</td><td class="crd-td">13,8</td><td class="crd-td">1,5</td><td class="crd-td">3,6</td></tr>
<tr><td class="crd-td"><strong>2. Maui Nui (Maui, Moloka'i, Lana'i and Kaho'olawe)</strong></td><td class="crd-td">61</td><td class="crd-td">35,3</td><td class="crd-td">5,2</td><td class="crd-td">7,7</td></tr>
<tr><td class="crd-td"><strong>3. O'ahu (Waikiki, Ewa, Ko'olau and Wai'anae)</strong></td><td class="crd-td">45</td><td class="crd-td">52,6</td><td class="crd-td">13,3</td><td class="crd-td">30</td></tr>
<tr><td class="crd-td"><strong>4. Kaua'i and Ni'ihau</strong></td><td class="crd-td">31</td><td class="crd-td">29,6</td><td class="crd-td">3,3</td><td class="crd-td">11,3</td></tr>
<tr><td class="crd-td"><strong>5. Eastern Samoa and American Polynesia (Tutuila, Aunu'u and Manu'a)</strong></td><td class="crd-td">14</td><td class="crd-td">58,1</td><td class="crd-td">46,4</td><td class="crd-td">45,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements and areal population densities (persons per km²) at contact (1778AD), trough (1872AD) and annexation (1898AD).</figcaption>
</figure>

## Settlement Hierarchy and Coastal Nucleation

Re-anchoring 216 settlements onto USGS GNIS and GeoNames coordinates highlights the structural shift from pre-contact polycentric chiefdoms to nineteenth-century port primacy. In 1778AD, five major *ahupua'a* and royal court clusters exceeded 5k residents (Waikīkī 8,5k, Waipi'o Valley 6,8k, Kailua-Kona 6,5k, Lāhainā 6,2k and Hilo 5,8k), followed closely by Wailuku (4,9k), Hanalei Valley (3,85k), Wailua-Kaua'i (3,4k), Kealakekua (3,4k) and Hāna (3,4k) across four island groups [@kirch2010how; @ladefoged2009opportunities].

By 1898AD, only Honolulu (34,2k) stood as a true city, nearly eight times larger than second-ranked Hilo (4,4k) and ahead of Wailuku (3,85k), Lāhainā (3,25k) and Līhu'e (3,1k), while Pago Pago (1,22k in 1898AD) and Leone (870 in 1898AD; 1,05k at contact) anchored coastal settlement on Tutuila [@schmitt1977historical; @uscensus1901twelfth]. Table \ref{tab:census-series} and Table \ref{tab:subregion-density} trace this spatial concentration from dispersed dryland and valley clusters down to port and plantation lowlands.

# Limitations

Three uncertainties govern interpretation of this series. First, contact-era Hawaiian population in 1778AD remains disputed across Pacific historical demography: conservative early estimates around 200-250k rest on post-1823AD back-projections, whereas Stannard's high-count argument exceeds 800k [@schmitt1968demographic; @stannard1989before]. CENTAUR-II adopts Kirch's synthesis of 375k for Hawai'i at 1778AD (382,2k including Eastern Samoa) as most consistent with radiocarbon agricultural limits and early missionary ratios [@kirch2010how; @ladefoged2009opportunities], narrowing uncertainty intervals to +/- 1,5% once systematic counts begin in 1831-32AD.

Second, Eastern Samoa lacks nineteenth-century civil censuses comparable to those of the Hawaiian Kingdom. Figures between 1778AD and the 1900AD United States Navy enumeration (5.679 persons) interpolate smoothly across missionary estimates, leaving short-term hurricane or inter-chiefdom war fluctuations unresolved [@rieth2008radiocarbon; @uscensus1901twelfth]. At five-arcminute spatial resolution, moreover, Tutuila, Aunu'u and Manu'a cover only four land pixels (124 km²), compressing coastal versus ridge-top contrasts into sub-grid catchment priors.

Third, archaeological site density across the 156 Hawaiian and Samoan catchments reflects survey intensity as well as past population: dryland field zones in Kohala, Kahikinui and Barbers Point have received intensive cultural-resource survey, whereas steep windward cliffs and dense fern-forest zones remain less thoroughly sampled [@dye2014wealth; @ladefoged2009opportunities]. Freeman-Tukey variance stabilisation and WLS biophysical covariates damp these survey biases without eliminating local uncertainty in remote valleys.

# Conclusion

Across ten millennia, the demographic history of Hawai'i and Eastern Samoa splits into two clear phases shaped by ocean distance and epidemiological exposure. While Eastern Samoa sustained a slow, unbroken expansion from 220 Lapita colonists in 1000BC to 7,2k villagers in 1778AD and held near 5,66k to 1898AD, Hawai'i remained uninhabited until c. 800AD, surged to 375k under irrigated *lo'i* and dryland *ahupua'a* statecraft by 1778AD, lost over four-fifths of its indigenous population to introduced diseases by 1872AD (56.897), and rebuilt to 124,4k (130,06k regional total) by 1898AD through plantation migration and port growth at Honolulu. Anchored to 727 *ahupua'a* divisions, 20.670 domestic horizon site-epoch records across 156 catchments and 216 gazetteer loci, the reconstruction provides a consistent spatial and quantitative bridge to modern twentieth-century territorial enumerations.

# Sources

<div id="refs"></div>
