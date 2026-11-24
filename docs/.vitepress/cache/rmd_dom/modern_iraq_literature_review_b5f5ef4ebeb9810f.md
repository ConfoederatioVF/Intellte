---
title: "Iraq after 1932"
subtitle: "Census Enumeration, Urban Primacy and Demographic Shocks, 1932AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_iraq_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_iraq_spatial.png"
hero_caption: "Eighteen modern Iraqi governorates and 222 catalogued settlements between 1932AD and 2026AD, contrasting the dense Tigris-Euphrates alluvial corridor and northern piedmont plains against the sparsely settled western desert plateau."
hero_label: "fig:hero-modern-iraq"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{8pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{8pt plus 2pt minus 2pt}
  - \setlength{\parskip}{2pt plus 1pt minus 1pt}
  - \linespread{0.97}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between formal independence from British mandatory tutelage in 1932AD and the post-census horizon of 2026AD, Iraq experienced one of the most rapid and sustained demographic expansions in the modern Near East. Total population climbed more than thirteenfold from 3,45M inhabitants in 1932AD to 4,82M at the first national census of 1947AD, 6,34M in 1957AD, 8,05M in 1965AD, 12M in 1977AD, 16,33M in 1987AD, 22,05M in 1997AD, 37,14M in 2015AD and 46,04M by 2025AD. Unlike neighbouring states where early demographic transition curtailed rural birth rates during late twentieth-century urbanisation, Iraq combined steep declines in post-1950 infant mortality with persistently elevated fertility that survived the Iran-Iraq War (1980-1988), thirteen years of international sanctions (1990-2003), the drainage of the southern Mesopotamian marshes, the 2003-2011 conflict and the 2014-2017 Islamic State occupation of northern and western provinces. Growth went hand in hand with intense metropolitan concentration: Baghdād rose from 515,5k inhabitants at the 1947AD census to a peak of 8,13M in 2018AD (7,95M in 2025AD), dominating a steep urban rank-size hierarchy ($\alpha = 1{,}303$, $R^2 = 0{,}786$) anchored regionally by Al-Mawṣil (Mosul), Al-Baṣrah, Kirkūk, Arbīl, As-Sulaymāniyah, Ar-Ramādī, An-Nāṣiriyah, An-Najaf and Karbalā'. HANDBOOK reconstructs this trajectory across 18 governorate areal masks covering 6.066 five-arcminute cells, 88 matched geoBoundaries second-order administrative districts (qadhas) and 222 catalogued settlements using non-stationary Matérn ($\nu = 3/2$) radial kriging and strictly mass-conserving pycnophylactic scaling.

<figure class="crd-figure-block" id="fig:hero-modern-iraq">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iraq/fig1_modern_iraq_spatial.png" alt="fig:hero-modern-iraq" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Eighteen modern Iraqi governorates and 222 catalogued settlements between 1932AD and 2026AD, contrasting the dense Tigris-Euphrates alluvial corridor and northern piedmont plains against the sparsely settled western desert plateau.</figcaption>
</figure>

# Background

## Geography, Riverine Alluvium and Hydraulic Vulnerability

From the standpoint of historical demography, modern Iraq rests upon three sharply differentiated ecological zones carved within a roughly 438,3k km² national territory. The central and southern axis comprises the broad, low-gradient alluvial plain of the Tigris and Euphrates rivers downstream from Sāmarrā' and Ar-Ramādī through Baghdād, Bābil, Wāsiṭ, Karbalā', An-Najaf, Al-Qādisiyyah, Dhī Qār, Maysān and Al-Baṣrah to the Shatt al-Arab estuary. Wherever canal networks and flood-control barrages deliver perennial water, rich silt supports dense irrigated date groves, winter cereals and market vegetables; beyond the canal heads, soil salinisation and desert encroachment drop human density abruptly [@Lorenz2013Strategic; @Daud2023Importance]. North and northeast of the alluvial trough, the Jazīra steppe and the folded Zagros-Taurus foothills of Nīnawā, Kirkūk, Dahūk, Arbīl and As-Sulaymāniyah receive 300 mm to 800 mm of winter precipitation, allowing rain-fed wheat, barley and orchard cultivation alongside mountain pastoralism [@Anonymous2017Case; @Sheyholislami2021History]. By contrast, the western and southwestern desert plateau stretching across Al-Anbār and Al-Muthannā makes up nearly half of Iraq's land surface yet supports only sparse steppe grazing outside Euphrates river towns and isolated desert wells.

Over the past half-century, Iraq's carrying capacity has become increasingly exposed to upstream hydraulic engineering and regional warming [@Mamshai2023Climate; @Jassem2025Employing]. Because roughly four-fifths of the Tigris-Euphrates surface flow originates outside Iraq's borders in Turkey, Syria and Iran, major storage projects such as Turkey's Southeastern Anatolia Project (GAP) and Iranian diversions on the Little Zab, Diyālā and Karkheh tributaries have steadily curtailed downstream dry-season discharge [@Jassem2025Employing; @Hassaniyan2022Colonial; @Lorenz2013Strategic]. Reduced river pulses, rising summer temperatures and groundwater salinisation have undermined southern rice and wheat harvests, pushing rural agricultural households off marginal plots and accelerating migration into peri-urban belts around Baghdād, Al-Baṣrah and Kirkūk [@Mamshai2023Climate; @Anonymous2017Case].

## State Formation, Oil Revenues and the COSIT Census Tradition (1932AD to 1977AD)

When the Kingdom of Iraq entered the League of Nations in October 1932, the new state inherited an uneven demographic legacy from three former Ottoman vilayets—Baghdad, Basra and Mosul—that British civil administrators had estimated at 2,93M inhabitants in 1920AD, rising to roughly 3,45M by 1932AD. Early twentieth-century rural life remained constrained by endemic malaria, periodic Tigris floods, tribal land-tenure disputes and high infant mortality, keeping crude death rates close to 30 per thousand even as birth rates exceeded 45 per thousand. Under the monarchy and the early republic, however, expanding state revenues from the Kirkūk and southern oilfields funded river-control barrages (including the Kut, Hindiya, Ramadi and Samarra works), anti-malarial drainage, piped urban water supplies and primary clinics.

National enumeration matured under the Central Statistical Organization—later the Central Organization for Statistics and Information Technology (COSIT)—through a sequence of decennial censuses that stand among the most informative demographic records in the modern Arab world. The inaugural 1947AD national census counted 4,82M inhabitants, confirming that post-1932 mortality decline had already lifted annual growth above 2,2%. Ten years later, the landmark 1957AD census—widely regarded by social historians for its detailed ethno-linguistic, occupational and district tabulations across Iraq's Arabic, Kurdish, Turkmen and minority communities [@AlSaraf2018Contrastiv; @Sheyholislami2021History; @Travis2009Cultural]—recorded 6,34M people. Subsequent enumerations in 1965AD (8,05M) and October 1977 (12M) captured the full demographic impact of the 1958 agrarian upheaval, rising oil wealth after the 1972 nationalisation of the Iraq Petroleum Company, and unprecedented rural-to-urban migration. Landless sharecroppers (*fallāḥīn*) from Maysān, Dhī Qār and Wāsiṭ streamed northward into Baghdād's eastern planned working-class district of Madīnat al-Thawra (later Saddam City and Sadr City), while northern villagers moved into Kirkūk, Al-Mawṣil and Arbīl [@Wojtaszek2025Isolated; @Anonymous2017Case].

## Wars, Sanctions, Marsh Drainage and Fertility Resilience (1980AD to 2026AD)

Between 1980 and 2017, Iraq endured four sequential geopolitical and ecological shocks that reshaped its internal population geography without halting aggregate national expansion. First, the Iran-Iraq War (1980-1988) mobilised hundreds of thousands of young men, inflicted heavy military casualties across southern front-line provinces and triggered intense artillery bombardment along the Shatt al-Arab corridor, driving temporary civilian flight out of Al-Baṣrah and Al-Fāw. Simultaneously, in 1987-1988, the Ba'th regime executed the Anfal campaign across rural Iraqi Kurdistan, destroying thousands of mountain villages, deploying chemical weapons against Ḥalabjah and other highland settlements, and forcibly concentrating surviving Kurdish villagers into guarded collective resettlement townships (*mujamma'āt*) near Arbīl, As-Sulaymāniyah and Dahūk [@Ahram2023There; @Romano2007Refugee]. Despite wartime losses, the October 1987 census—held on the eve of the war's end—still recorded 16,33M inhabitants.

Second, the 1991 Gulf War and the ensuing thirteen-year United Nations trade embargo (1990-2003) crippled power grids, sewage treatment, pharmaceutical imports and agricultural inputs [@Wojtaszek2025Isolated; @D2012Sickness]. Under-five mortality climbed sharply across central and southern Iraq during the 1990s [@Wang2017Global], while hyperinflation hollowed out Baghdād's salaried middle class, forcing households to subdivide urban plots and rely on state food rations [@Wojtaszek2025Isolated]. At the same time, following the 1991 southern uprising, state engineers dug massive diversion canals—notably the Glory River (*Nahr al-'Izz*) and Mother of Battles Canal—to drain the Mesopotamian Marshes (*Al-Ahwār*) across Maysān, Dhī Qār and northern Al-Baṣrah [@Znad2024Conflicts; @Yldrm2023Torn]. Within a few years, over 90% of the marshlands dried out, destroying the amphibious reed-and-water-buffalo economy of the *Ma'dān* (Marsh Arabs) and displacing roughly 200k to 250k inhabitants into urban slums or Iranian exile [@Znad2024Conflicts]. The October 1997 census enumerated 22,05M people, though it excluded the three autonomous Kurdish governorates (Arbīl, As-Sulaymāniyah and Dahūk), whose totals had to be bridged via regional estimates.

Third, the 2003 invasion and the sectarian insurgency of 2006-2008 fractured mixed urban neighbourhoods in Baghdād, Ba'qūbah and Al-Mawṣil, displaced millions internally and abroad [@Sharara2021Health; @Mansour2023Iraq; @Jaber2022Role], and degraded childhood nutrition and maternal healthcare [@Diwakar2019Violent]. Fourth, between 2014 and 2017, Islamic State (ISIS) forces seized Al-Mawṣil, Ar-Ramādī, Al-Fallūjah, Tikrīt and Sinjār, displacing over 3M people into Kurdistan and southern cities while inflicting severe architectural destruction on historic cores [@Koush2024Heritage; @Bass2016Randomized; @Hamelink2025Enacting]. Yet through every crisis, Iraq exhibited remarkable reproductive resilience. Detailed demographic survey analysis of the 2003-2011 war period demonstrates that total fertility remained high rather than collapsing—and actually rose among younger and less-educated women owing to earlier marriage under conditions of insecurity and economic contraction [@Cetorelli2014Effect]. Combined with post-2003 public-sector payroll expansion and post-2017 refugee return to liberated governorates, natural increase of roughly 2,4% to 2,8% per year carried Iraq to 37,14M in 2015AD and 46,04M in 2025AD, matching the country's first full national census in twenty-seven years conducted in November 2024 [@Wang2017Global; @Karlinsky2023Casualties; @Kapend2020Democratic].

# Methodology

## Regime 3 Territorial Partition and Subadministrative Architecture

Within HANDBOOK, modern Iraq (1932AD to 2026AD) is modelled under Regime 3, the census-anchored modern era in which continuous national and subadministrative enumerations supersede prehistoric or archival proxy curves. Spatially, the chapter divides Iraq into 18 governorate polygons matched to the 5-arcminute continental grid, spanning 6.066 inhabited cells: Dahūk, Arbīl, Al-Baṣrah, Al-Muthannā, As-Sulaymāniyah, Diyālā, Wāsiṭ, Maysān, Al-Anbār, An-Najaf, Nīnawā, Ṣalāḥ ad-Dīn, At-Ta'mīm (Kirkūk), Baghdād, Bābil, Al-Qādisiyyah, Dhī Qār and Karbalā'. Nine primary temporal horizons anchor the national series across 93 years: 1932AD (formal independence), 1947AD, 1957AD, 1965AD, 1977AD, 1987AD, 1997AD (COSIT censuses), 2015AD (intercensal UN/COSIT benchmark) and 2025AD (aligned with the November 2024 full national enumeration).

An explicit methodological distinction must be noted between the baseline areal-mask partitions and the final subadministrative census surfaces. In the baseline mask ledger, the 18 governorate polygons distribute national totals proportionally to each governorate's 5-arcminute cell footprint—assigning 1.919 cells to vast desert Al-Anbār and 712 cells to Al-Muthannā against just 9 cells to compact metropolitan Baghdād. Because Iraq's true demographic gravity lies overwhelmingly inside narrow river valleys and urban agglomerations rather than open desert, HANDBOOK resolves intra-national spatial distribution by disaggregating recorded second-order administrative (ADM2) census districts and 222 urban settlement series onto the underlying habitability surface rather than relying on raw governorate area weights.

## Radial Distance Fields, Biophysical Covariates and Matérn Kriging

To prevent artificial polygonal step-cliffs at administrative borders and preserve fine-grained riverine density gradients inside large desert districts, HANDBOOK conditions its spatial distribution layer on metric-isotropic radial distance fields and non-stationary Matérn ($\nu = 3/2$) residual kriging calibrated across the broader Near Eastern and North African macro-domain. Rather than measuring Euclidean distances in distorted equirectangular latitude-longitude degrees, catchment distances are evaluated in true geodesic metres within local equal-area projections and normalised by each Voronoi catchment's characteristic radius (across 3.416 domain catchments and 1.942 active catchments per horizon, with a median Voronoi radius of 32,51 km and a 90th-percentile radius of 40,25 km over 168.112 valid continental cells).

Prior to spatial interpolation, weighted least-squares regression models baseline rural habitability across five biophysical covariates: habitable land fraction ($\beta_0$), natural vegetative productivity ($\beta_1$), ecozone terrain suitability ($\beta_2$), fluvial proximity decay ($\beta_3$) and coastal proximity ($\beta_4$). Fluvial proximity remains strongly positive even into the late pre-industrial benchmark ($\beta_3 = 0,0334$, compared with $\beta_4 = 0,0282$ for coastal access), capturing the enduring pull of the Tigris and Euphrates floodplains over adjacent arid steppes. Dual-range Matérn ($\nu = 3/2$) kriging of the Freeman-Tukey transformed residuals—using regularised dimensionless bandwidths $\tau_1 = 1{,}35$ (unregularised pan-domain $\tau_1 = 1{,}518$) and $\tau_2 = 2{,}9025$ with short-range weight $c_1 = 0{,}8$, long-range weight $c_2 = 0{,}2$ and nugget-to-sill ratio $0{,}04$—produces smooth biophysical carrying surfaces, while a two-cell urban mask buffer separates concentrated metropolitan footprints from surrounding agrarian villages.

## Pycnophylactic Scaling across 88 Qadhas and 222 Settlements

Subadministrative census data for Iraq are embedded within the standardised geoBoundaries polygon framework [@Runfola2020GeoBoundaries], matching 88 Iraqi second-order administrative districts (qadhas) across official census and estimate horizons in 1977, 1987, 1997, 2009 and 2024. These 88 Iraqi qadhas form part of HANDBOOK's continent-wide administrative calibration layer comprising 29 historical provincial units and 2.629 modern ADM1 and ADM2 districts across 83 benchmark years. Population mass assigned to every polygon is transferred onto 5-arcminute cells through strictly mass-conserving pycnophylactic scaling: each cell inherits the local biophysical suitability weight, and cell totals within each qadha are rescaled iteratively until the polygon sum matches the enumerated census total exactly. Across 65.864 unit-year conservation checks spanning the entire administrative domain, 100% of units conserve enumerated population within 0,01%, with a global maximum relative error of $5{,}845 \times 10^{-8}$. Parallel to the areal qadha layer, 222 Iraqi cities and towns from COSIT censuses (1947-1997) and 2009-2024 district estimates are tracked across census and projection benchmarks from 1947AD to 2025AD, with 204 duplicate aliases and contiguous suburban satellites excluded or merged across 426 screened candidates to prevent double-counting.

# Testing and Validation

Validation of Iraq's demographic reconstruction rests on three independent cross-checks: continuity against late Ottoman vilayet and 1920 British Mandate provincial enumerations, internal consistency across the 88 geoBoundaries ADM2 qadhas, and screening transparency in the urban settlement ledger. Table \ref{tab:hist-vilayets} reproduces the historical subadministrative series linking late Ottoman census totals (1881AD and 1914AD) to the 1920AD British Administration provincial counts and the first Republican-comparable COSIT census of 1947AD. The three Ottoman vilayets of Baghdad (central liwas), Basra (southern liwas) and Mosul (northern liwas) rose smoothly from 1,8M in 1881AD to 2,52M in 1914AD and 2,93M in 1920AD, establishing an unbroken pre-independence trajectory into the 3,45M starting benchmark of 1932AD and the 4,82M enumeration of 1947AD.

<figure class="crd-table-figure" id="tab:hist-vilayets">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Province</th><th class="crd-th">Constituent Liwas</th><th class="crd-th">1881AD</th><th class="crd-th">1914AD</th><th class="crd-th">1920AD</th><th class="crd-th">1947AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdad Vilayet</strong></td><td class="crd-td">Central Liwas: Baghdad, Diyala, Anbar, Babil, Karbala, Kut</td><td class="crd-td">850k</td><td class="crd-td">1,18M</td><td class="crd-td">1,36M</td><td class="crd-td">2,31M</td></tr>
<tr><td class="crd-td"><strong>Basra Vilayet</strong></td><td class="crd-td">Southern Liwas: Basra, Muntafiq/Dhi Qar, Amara/Maysan</td><td class="crd-td">470k</td><td class="crd-td">650k</td><td class="crd-td">785,6k</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>Mosul Vilayet</strong></td><td class="crd-td">Northern Liwas: Mosul, Erbil, Kirkuk, Sulaymaniyah</td><td class="crd-td">480k</td><td class="crd-td">685k</td><td class="crd-td">785,5k</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Combined Three Vilayets</strong></td><td class="crd-td">All 14 Post-1920 Liwas</td><td class="crd-td">1,8M</td><td class="crd-td">2,52M</td><td class="crd-td">2,93M</td><td class="crd-td">4,82M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Historical Ottoman vilayet enumerations and 1920AD to 1947AD provincial benchmarks anchoring Iraq's 1932AD baseline.</figcaption>
</figure>

At the modern subadministrative level, geoBoundaries ADM2 polygons resolve 88 Iraqi qadhas across five census and estimate benchmarks (1977, 1987, 1997, 2009 and 2024) [@Runfola2020GeoBoundaries]. For the 1977-1997 censuses, five core urban-provincial districts—Al-Baṣrah, Arbīl, As-Sulaymāniyah, Kirkūk and An-Najaf—carry continuous series tracking wartime dips and post-war surges, while full 88-qadha coverage is attained for 2009 (25,38M inhabitants across matched polygons) and 2024 (37,54M across the 88 legacy ADM2 boundaries, with the gap to the 46,04M national total reflecting newly carved post-2009 districts such as Ḥalabjah and peri-urban Baghdād expansion). Table \ref{tab:mod-qadhas} summarises the six most populous ADM2 qadhas drawn from the subadministrative census cache.

<figure class="crd-table-figure" id="tab:mod-qadhas">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ADM2 Qadha</th><th class="crd-th">Area (km²)</th><th class="crd-th">1977AD</th><th class="crd-th">1987AD</th><th class="crd-th">1997AD</th><th class="crd-th">2024AD (2009AD)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Basrah</strong></td><td class="crd-td">1.181</td><td class="crd-td">1,01M</td><td class="crd-td">872,2k</td><td class="crd-td">1,56M</td><td class="crd-td">3,66M (2009: 2,41M)</td></tr>
<tr><td class="crd-td"><strong>Erbil</strong></td><td class="crd-td">2.660</td><td class="crd-td">541,5k</td><td class="crd-td">770,4k</td><td class="crd-td">1,1M</td><td class="crd-td">2,52M (2009: 1,53M)</td></tr>
<tr><td class="crd-td"><strong>Al-Mosul</strong></td><td class="crd-td">4.758</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,35M (2009: 1,59M)</td></tr>
<tr><td class="crd-td"><strong>Al-Sulaymaniyah</strong></td><td class="crd-td">2.322</td><td class="crd-td">690,6k</td><td class="crd-td">951,7k</td><td class="crd-td">1,36M</td><td class="crd-td">2,29M (2009: 1,69M)</td></tr>
<tr><td class="crd-td"><strong>Al-Karkh</strong></td><td class="crd-td">288</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,08M (2009: 1,31M)</td></tr>
<tr><td class="crd-td"><strong>Kirkuk</strong></td><td class="crd-td">3.028</td><td class="crd-td">495,4k</td><td class="crd-td">601,2k</td><td class="crd-td">753,2k</td><td class="crd-td">2,03M (2009: 1,33M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading enumerated geoBoundaries ADM2 qadhas across Iraq from the 1977AD census to 2024AD official estimates.</figcaption>
</figure>

Table \ref{tab:ledger-screen} summarises the settlement screening ledger across all 426 candidate Iraqi localities harvested from COSIT census compendia and district estimates. Of those 426 candidates, 222 distinct urban and town centres entered the final gazetteer and rank-size analysis, whereas 204 duplicate aliases and subordinate suburban or co-located localities were excluded or merged into canonical urban anchors so that metropolitan sums do not double-count adjoining urban footprints.

<figure class="crd-table-figure" id="tab:ledger-screen">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ledger Category</th><th class="crd-th">Localities</th><th class="crd-th">Share</th><th class="crd-th">Scope and Representative Exclusions</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>COSIT Census &amp; Estimate Candidates</strong></td><td class="crd-td">426</td><td class="crd-td">100%</td><td class="crd-td">1947-1997 censuses and 2009-2024 estimates</td></tr>
<tr><td class="crd-td"><strong>Included Urban Centres</strong></td><td class="crd-td">222</td><td class="crd-td">52,1%</td><td class="crd-td">Distinct urban and town hierarchies (1947AD-2025AD)</td></tr>
<tr><td class="crd-td"><strong>Excluded Duplicates &amp; Merged Suburbs</strong></td><td class="crd-td">204</td><td class="crd-td">47,9%</td><td class="crd-td">Al-Kūfah, Baghdad, Baghdād, Mosul, Al-Mawṣil, Basra and 198 further duplicate or suburban entries</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Urban settlement screening ledger across COSIT census archives and modern district estimates (426 candidates screened: 222 included, 204 excluded).</figcaption>
</figure>

# Results

## Demographic Acceleration and the Post-1957 Urban Surge

Between 1932AD and 2025AD, Iraq's aggregate population expanded by a factor of 13,35, climbing from 3,45M to 46,04M at an average compound growth rate of 2,83% per year (Figure \ref{fig:traj-iraq}). Table \ref{tab:headline-iraq} documents the exact national trajectory across all nine benchmark years alongside intercensal percentage gains and annualised compound growth rates.

<figure class="crd-figure-block" id="fig:traj-iraq">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iraq/fig2_modern_iraq_trajectory.png" alt="fig:traj-iraq" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate Iraqi population trajectory with uncertainty envelope from 1932AD to 2025AD (left) and leading governorate mask units at 2025AD (right).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:headline-iraq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Population</th><th class="crd-th">Interval Gain</th><th class="crd-th">Annual Rate</th><th class="crd-th">Demographic Context</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1932AD</strong></td><td class="crd-td">3,45M</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">Post-Mandate Kingdom independence baseline</td></tr>
<tr><td class="crd-td"><strong>1947AD</strong></td><td class="crd-td">4,82M</td><td class="crd-td">+39,6%</td><td class="crd-td">2,25%</td><td class="crd-td">First national COSIT enumeration</td></tr>
<tr><td class="crd-td"><strong>1957AD</strong></td><td class="crd-td">6,34M</td><td class="crd-td">+31,6%</td><td class="crd-td">2,79%</td><td class="crd-td">Post-war oil investment and anti-malarial gains</td></tr>
<tr><td class="crd-td"><strong>1965AD</strong></td><td class="crd-td">8,05M</td><td class="crd-td">+26,9%</td><td class="crd-td">3,03%</td><td class="crd-td">Agrarian transition and early Baghdād surge</td></tr>
<tr><td class="crd-td"><strong>1977AD</strong></td><td class="crd-td">12M</td><td class="crd-td">+49,1%</td><td class="crd-td">3,39%</td><td class="crd-td">Peak oil-boom fertility and mortality drop</td></tr>
<tr><td class="crd-td"><strong>1987AD</strong></td><td class="crd-td">16,33M</td><td class="crd-td">+36,1%</td><td class="crd-td">3,13%</td><td class="crd-td">Iran-Iraq War census; northern Anfal horizon</td></tr>
<tr><td class="crd-td"><strong>1997AD</strong></td><td class="crd-td">22,05M</td><td class="crd-td">+35%</td><td class="crd-td">3,04%</td><td class="crd-td">Sanctions era; Kurdistan autonomous exclusion</td></tr>
<tr><td class="crd-td"><strong>2015AD</strong></td><td class="crd-td">37,14M</td><td class="crd-td">+68,5%</td><td class="crd-td">2,94%</td><td class="crd-td">Post-2003 recovery and high fertility inertia</td></tr>
<tr><td class="crd-td"><strong>2025AD</strong></td><td class="crd-td">46,04M</td><td class="crd-td">+24%</td><td class="crd-td">2,17%</td><td class="crd-td">Aligned with November 2024 national census</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> National Iraqi population benchmarks, intercensal percentage gains and annualised growth rates, 1932AD to 2025AD.</figcaption>
</figure>

Inspection of Table \ref{tab:headline-iraq} reveals a classic mid-century demographic acceleration followed by remarkably persistent high-fertility momentum. Between 1932AD and 1947AD, population grew at 2,25% annually, adding 1,37M inhabitants as epidemic control and basic maternal sanitation reached provincial towns. Growth accelerated to 2,79% per year during the 1947-1957 intercensal decade and 3,02% per year between 1957AD and 1965AD, peaking at 3,39% annually during the 1965-1977 oil boom when total population jumped by nearly four million in twelve years (from 8,05M to 12M). Rapidly falling infant and child mortality, universal subsidised grain rations and expanding urban hospital networks lowered crude death rates into single digits while total fertility still hovered above 6,5 births per woman.

## Shocks, Fertility Inertia and Spatial Redistribution (1987AD to 2026AD)

Even during the decades of warfare and economic blockade after 1980, national population growth decelerated only modestly, slipping from 3,13% per year in 1977-1987 to 3,04% in 1987-1997 (when Iraq reached 22,05M), 2,94% over the 1997-2015 interval (37,14M) and 2,17% between 2015AD and 2025AD (46,04M). Yet these smooth national increments conceal sharp spatial divergence across provinces and districts (Figure \ref{fig:density-iraq}).

<figure class="crd-figure-block" id="fig:density-iraq">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iraq/fig3_modern_iraq_density.png" alt="fig:density-iraq" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous subadministrative census density surface at 2010AD (left) and baseline areal-mask densities across leading governorates at 2025AD (right).</figcaption>
</figure>

In the southern port and marshland provinces, the 1980-1988 Iran-Iraq War and the 1991-2003 marsh drainage inflicted deep, measurable shocks at the district level. Enumerated Al-Baṣrah qadha dropped by 13,5% between 1977AD and 1987AD—falling from 1,01M to 872,2k inhabitants—under sustained Iranian artillery fire and evacuation of Shatt al-Arab river towns, before rebounding explosively to 1,56M in 1997AD, 2,41M in 2009AD and 3,66M in 2024AD (Table \ref{tab:mod-qadhas}). Across adjacent Maysān and Dhī Qār, the desiccation of the Al-Ahwār wetlands drove *Ma'dān* families out of reed villages into Al-'Amārah, An-Nāṣiriyah and southern Baghdād [@Znad2024Conflicts; @Yldrm2023Torn], while partial re-flooding after 2003 enabled only incomplete rural return amid persistent river salinity and climate droughts [@Mamshai2023Climate; @Jassem2025Employing].

Northern Iraq followed an equally turbulent trajectory. During the 1980s, Anfal village clearances depopulated hundreds of upland valleys across Arbīl, As-Sulaymāniyah, Dahūk and Kirkūk [@Ahram2023There]. After the establishment of the northern no-fly zone in 1991 and the post-2003 federal constitution, however, the three Kurdistan Region governorates became Iraq's fastest-stabilising destination for internal refugees and returning exiles [@Romano2007Refugee; @Sharara2021Health]. Arbīl qadha climbed nearly fivefold from 541,5k in 1977AD to 1,1M in 1997AD, 1,53M in 2009AD and 2,52M in 2024AD; As-Sulaymāniyah rose from 690,6k to 2,29M over the same span; and Kirkūk qadha expanded from 495,4k in 1977AD to 2,03M in 2024AD amid post-2003 returns and hydrocarbon-linked migration [@Romano2007Refugee; @Anonymous2017Case]. Across the 2014-2017 ISIS conflict, Al-Mawṣil qadha (2,35M in 2024AD) and western districts in Al-Anbār and Ṣalāḥ ad-Dīn experienced massive temporary displacement toward Baghdād, Karbalā', An-Najaf and the Kurdistan Region before post-2017 reconstruction restored urban populations [@Bass2016Randomized; @Koush2024Heritage]. Meanwhile, Figure \ref{fig:density-iraq} highlights how the continuous subadministrative raster concentrates Iraq's population along the Tigris-Euphrates ribbon and northern piedmont plains while leaving the western desert plateau nearly empty—contrasting with the purely area-weighted baseline priors in the governorate mask table (Appendix Table \ref{tab:app-govs}).

## Baghdād Primacy and the Iraqi Urban Hierarchy

Across all 222 catalogued Iraqi cities and towns, peak settlement sizes follow a steep Zipf rank-size power law with exponent $\alpha = 1{,}303$ and $R^2 = 0{,}786$ (Figure \ref{fig:settlements-iraq}). An exponent well above unity signifies pronounced metropolitan primacy, reflecting Baghdād's unmatched role since 1932AD as Iraq's political capital, rail-and-highway hub, industrial concentration and sanctuary for internal migrants displaced from the southern marshes and war-torn northern and western provinces [@Wojtaszek2025Isolated; @Mansour2023Iraq].

<figure class="crd-figure-block" id="fig:settlements-iraq">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iraq/fig4_modern_iraq_settlements.png" alt="fig:settlements-iraq" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Rank-size Zipf regression across 222 catalogued Iraqi settlements (left, Zipf alpha = 1,303, R² = 0,786) and the twelve leading urban agglomerations by peak population (right).</figcaption>
</figure>

Baghdād grew more than fifteenfold from 515,5k inhabitants at the 1947AD census to 1,52M in 1965AD, 3,84M in 1987AD, 5,52M in 2009AD, a peak of 8,13M in 2018AD and 7,95M in 2025AD—accounting for 27,2% of the 29,25M aggregate 2025AD population across catalogued Iraqi settlements, and more than five times the 2025AD population of Iraq's second city. Beneath the capital, a broad tier of regional metropolises anchors each major zone of the country: Al-Mawṣil leads the northern Tigris corridor (133,6k in 1947AD to a 1,8M peak in 2008AD and 1,55M in 2025AD); Al-Baṣrah anchors the Gulf outlet (101,5k in 1947AD to a 1,33M peak in 2018AD and 1,31M in 2025AD, alongside port-industrial satellites Az-Zubayr at 370k peak and Abū al-Khaṣīb at 362,8k); Kirkūk (1,27M) and Arbīl (1,02M) together with As-Sulaymāniyah (878,1k peak in 2018AD; 840,5k in 2025AD) and Dahūk (459,4k) form a multi-polar northern oil and Kurdish urban arc; Ar-Ramādī (874,5k peak in 2005AD; 299,3k in 2025AD) and Al-Fallūjah (312,8k) anchor the Euphrates steppe gateway; the Shi'a pilgrimage cities of An-Najaf (842,4k) and Karbalā' (795,3k, plus adjoining Al-Ḥur at 292,9k) expanded dramatically on religious tourism and internal migration; and the southern river capitals of An-Nāṣiriyah (860,2k peak in 2012AD; 714,9k in 2025AD), Al-'Amārah (677,8k), Al-Ḥillah (541k peak in 2015AD; 477,6k in 2025AD), Al-Kūt (513,2k), Ba'qūbah (467,9k peak in 2003AD) and Ad-Dīwāniyah (401,8k) absorbed rural outflows from the central and southern floodplains.

# Limitations

Four structural uncertainties govern Iraq's modern demographic series and warrant explicit caution when interpreting local figures. First, Iraq experienced a 27-year interruption between the October 1997 census—which excluded the three Kurdish-administered northern governorates—and the November 2024 national census [@Romano2007Refugee; @Mansour2023Iraq]. Consequently, provincial and district figures between 2000AD and 2023AD rely on COSIT demographic projections, civil-registry ration-card updates (Public Distribution System rosters) and sample household surveys such as the 2009 listing frame rather than full door-to-door enumerations.

Second, conflict-related excess mortality and international emigration introduce asymmetrical uncertainty across cohorts and regions [@Wang2017Global; @Karlinsky2023Casualties; @Kapend2020Democratic; @Alhiraki2022Conflict]. Between 1990 and 2017, cumulative war casualties, sanctions-era child mortality and the departure of educated professionals, religious minorities and refugees to Jordan, Syria, Turkey and Europe periodically depressed resident counts below natural-increase projections, particularly in Baghdād, Nīnawā and Al-Anbār [@Sharara2021Health; @Koush2024Heritage].

Third, subadministrative boundary realignments between 1976 and 2014 complicate direct longitudinal matching across identical polygons. The elevation of Ḥalabjah into Iraq's nineteenth governorate, boundary revisions across disputed territories in Kirkūk, Nīnawā and Diyālā [@Romano2007Refugee], and the rapid fragmentation of Baghdād's urban quarters into distinct qadhas (such as Al-Karkh at 2,08M and Al-Adhamiya at 1,2M in 2024AD) create residual gaps between the 88 matched geoBoundaries ADM2 polygons (37,54M in 2024AD) and the 46,04M national total. Fourth, as noted in Methodology, the 18 governorate mask entries in Appendix Table \ref{tab:app-govs} reflect area-proportional baseline allocations across the 6.066 grid cells prior to pycnophylactic ADM2 and urban-mask concentration; readers seeking actual contemporary provincial population balances should consult the ADM2 qadha series (Table \ref{tab:mod-qadhas}), the continuous census raster (Figure \ref{fig:density-iraq}) and the urban settlement ledger (Appendix Table \ref{tab:app-top15}).

# Conclusion

Between 1932AD and 2025AD, Iraq expanded from 3,45M to 46,04M inhabitants, transforming a predominantly rural society of three former Ottoman vilayets into a heavily urbanised nation dominated by Baghdād (8,13M peak; 7,95M in 2025AD) and a network of regional million-cities. Rapid mid-century mortality decline initiated sustained 2,8% to 3,4% annual growth through the 1977AD oil-boom census, while persistent high fertility—even under warfare, international sanctions and mass displacement—prevented the demographic stalls seen in many war-affected societies [@Cetorelli2014Effect; @Wang2017Global]. By reconciling COSIT national censuses (1947-1997) and 2024-2025 enumerations with 88 geoBoundaries ADM2 qadhas [@Runfola2020GeoBoundaries], 222 catalogued settlement trajectories and Matérn ($\nu = 3/2$) dasymetric scaling, HANDBOOK provides a consistent spatial-demographic record of modern Iraq across both its hydraulic core and its desert frontiers.

# Appendix

## Governorate Areal-Mask Baselines and Cell Allocations

Table \ref{tab:app-govs} tabulates all 18 governorate mask polygons ordered by 5-arcminute cell count alongside their baseline area-weighted allocations at 1932AD, 1977AD and 2025AD prior to ADM2 pycnophylactic urban-core concentration.

<figure class="crd-table-figure" id="tab:app-govs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Governorate Mask</th><th class="crd-th">Cells</th><th class="crd-th">Area Share</th><th class="crd-th">1932AD</th><th class="crd-th">1977AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Anbar</strong></td><td class="crd-td">1.919</td><td class="crd-td">31,6%</td><td class="crd-td">516,4k</td><td class="crd-td">1,8M</td><td class="crd-td">6,89M</td></tr>
<tr><td class="crd-td"><strong>Al-Muthannia</strong></td><td class="crd-td">712</td><td class="crd-td">11,7%</td><td class="crd-td">313,7k</td><td class="crd-td">1,09M</td><td class="crd-td">4,19M</td></tr>
<tr><td class="crd-td"><strong>Ninawa</strong></td><td class="crd-td">543</td><td class="crd-td">9%</td><td class="crd-td">275,2k</td><td class="crd-td">957,2k</td><td class="crd-td">3,67M</td></tr>
<tr><td class="crd-td"><strong>An-Najaf</strong></td><td class="crd-td">395</td><td class="crd-td">6,5%</td><td class="crd-td">235,1k</td><td class="crd-td">817,9k</td><td class="crd-td">3,14M</td></tr>
<tr><td class="crd-td"><strong>Sala ad-Din</strong></td><td class="crd-td">351</td><td class="crd-td">5,8%</td><td class="crd-td">223,8k</td><td class="crd-td">778,6k</td><td class="crd-td">2,99M</td></tr>
<tr><td class="crd-td"><strong>Diyala</strong></td><td class="crd-td">275</td><td class="crd-td">4,5%</td><td class="crd-td">196,5k</td><td class="crd-td">683,4k</td><td class="crd-td">2,62M</td></tr>
<tr><td class="crd-td"><strong>As-Sulaymaniyah</strong></td><td class="crd-td">252</td><td class="crd-td">4,2%</td><td class="crd-td">185k</td><td class="crd-td">643,5k</td><td class="crd-td">2,47M</td></tr>
<tr><td class="crd-td"><strong>Wasit</strong></td><td class="crd-td">245</td><td class="crd-td">4%</td><td class="crd-td">184,3k</td><td class="crd-td">641k</td><td class="crd-td">2,46M</td></tr>
<tr><td class="crd-td"><strong>Al-Basrah</strong></td><td class="crd-td">230</td><td class="crd-td">3,8%</td><td class="crd-td">179,1k</td><td class="crd-td">623k</td><td class="crd-td">2,39M</td></tr>
<tr><td class="crd-td"><strong>Maysan</strong></td><td class="crd-td">220</td><td class="crd-td">3,6%</td><td class="crd-td">175,4k</td><td class="crd-td">610,2k</td><td class="crd-td">2,34M</td></tr>
<tr><td class="crd-td"><strong>Arbil</strong></td><td class="crd-td">209</td><td class="crd-td">3,4%</td><td class="crd-td">170,5k</td><td class="crd-td">593k</td><td class="crd-td">2,28M</td></tr>
<tr><td class="crd-td"><strong>Dhi-Qar</strong></td><td class="crd-td">187</td><td class="crd-td">3,1%</td><td class="crd-td">161,2k</td><td class="crd-td">560,7k</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>At-Ta'mim</strong></td><td class="crd-td">147</td><td class="crd-td">2,4%</td><td class="crd-td">144,4k</td><td class="crd-td">502,4k</td><td class="crd-td">1,93M</td></tr>
<tr><td class="crd-td"><strong>Al-Qādisiyyah</strong></td><td class="crd-td">118</td><td class="crd-td">1,9%</td><td class="crd-td">127,6k</td><td class="crd-td">443,9k</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Dihok</strong></td><td class="crd-td">98</td><td class="crd-td">1,6%</td><td class="crd-td">115,3k</td><td class="crd-td">400,9k</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>Babil</strong></td><td class="crd-td">88</td><td class="crd-td">1,5%</td><td class="crd-td">113,3k</td><td class="crd-td">393,9k</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>Karbala'</strong></td><td class="crd-td">68</td><td class="crd-td">1,1%</td><td class="crd-td">97,5k</td><td class="crd-td">339k</td><td class="crd-td">1,3M</td></tr>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">9</td><td class="crd-td">0,1%</td><td class="crd-td">35,7k</td><td class="crd-td">124,2k</td><td class="crd-td">476,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Five-arcminute raster cell counts, territorial share and baseline areal-mask population allocations across Iraq's 18 governorates (1932AD to 2025AD).</figcaption>
</figure>

## Leading Iraqi Urban Centres (1947AD to 2025AD)

Table \ref{tab:app-top15} details the population trajectories of Iraq's fifteen largest catalogued settlements from the 1947AD census through 1965AD, 1987AD, 2009AD and 2025AD, together with their long-run expansion ratios.

<figure class="crd-table-figure" id="tab:app-top15">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">1947AD</th><th class="crd-th">1965AD</th><th class="crd-th">1987AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD (Ratio)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">515,5k</td><td class="crd-td">1,52M</td><td class="crd-td">3,84M</td><td class="crd-td">5,52M</td><td class="crd-td">7,95M (15,4x)</td></tr>
<tr><td class="crd-td"><strong>Al-Mawṣil</strong></td><td class="crd-td">133,6k</td><td class="crd-td">264,1k</td><td class="crd-td">664,2k</td><td class="crd-td">1,14M</td><td class="crd-td">1,55M (11,6x)</td></tr>
<tr><td class="crd-td"><strong>Al-Baṣrah</strong></td><td class="crd-td">101,5k</td><td class="crd-td">310,9k</td><td class="crd-td">406,3k</td><td class="crd-td">995,9k</td><td class="crd-td">1,31M (12,9x)</td></tr>
<tr><td class="crd-td"><strong>Kirkūk</strong></td><td class="crd-td">68,3k</td><td class="crd-td">175,3k</td><td class="crd-td">418,6k</td><td class="crd-td">782,1k</td><td class="crd-td">1,27M (18,5x)</td></tr>
<tr><td class="crd-td"><strong>Arbīl</strong></td><td class="crd-td">27k</td><td class="crd-td">90,3k</td><td class="crd-td">486k</td><td class="crd-td">675,5k</td><td class="crd-td">1,02M (37,6x)</td></tr>
<tr><td class="crd-td"><strong>As-Sulaymāniyah</strong></td><td class="crd-td">33,5k</td><td class="crd-td">83,6k</td><td class="crd-td">364,1k</td><td class="crd-td">559,7k</td><td class="crd-td">840,5k (25,1x)</td></tr>
<tr><td class="crd-td"><strong>Ar-Ramādī</strong></td><td class="crd-td">5,2k</td><td class="crd-td">11,4k</td><td class="crd-td">192,6k</td><td class="crd-td">181,3k</td><td class="crd-td">299,3k (57,6x)</td></tr>
<tr><td class="crd-td"><strong>An-Nāṣiriyah</strong></td><td class="crd-td">24k</td><td class="crd-td">59,3k</td><td class="crd-td">265,9k</td><td class="crd-td">455,7k</td><td class="crd-td">714,9k (29,7x)</td></tr>
<tr><td class="crd-td"><strong>An-Najaf</strong></td><td class="crd-td">56,3k</td><td class="crd-td">134k</td><td class="crd-td">309k</td><td class="crd-td">617,1k</td><td class="crd-td">842,4k (15x)</td></tr>
<tr><td class="crd-td"><strong>Karbalā'</strong></td><td class="crd-td">44,1k</td><td class="crd-td">83,3k</td><td class="crd-td">296,7k</td><td class="crd-td">395,4k</td><td class="crd-td">795,3k (18x)</td></tr>
<tr><td class="crd-td"><strong>Al-'Amārah</strong></td><td class="crd-td">26,9k</td><td class="crd-td">64,7k</td><td class="crd-td">208,8k</td><td class="crd-td">428,8k</td><td class="crd-td">677,8k (25,2x)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥillah</strong></td><td class="crd-td">36,6k</td><td class="crd-td">84,7k</td><td class="crd-td">268,8k</td><td class="crd-td">373,1k</td><td class="crd-td">477,6k (13,1x)</td></tr>
<tr><td class="crd-td"><strong>Al-Kūt</strong></td><td class="crd-td">16,2k</td><td class="crd-td">42,1k</td><td class="crd-td">183,2k</td><td class="crd-td">312,6k</td><td class="crd-td">513,2k (31,6x)</td></tr>
<tr><td class="crd-td"><strong>Ba'qūbah</strong></td><td class="crd-td">10,5k</td><td class="crd-td">34,6k</td><td class="crd-td">114,5k</td><td class="crd-td">227,8k</td><td class="crd-td">391k (37,2x)</td></tr>
<tr><td class="crd-td"><strong>Dahūk</strong></td><td class="crd-td">5,6k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">280,1k</td><td class="crd-td">459,4k (81,7x)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Population growth across Iraq's fifteen largest catalogued urban centres from 1947AD to 2025AD with expansion ratios.</figcaption>
</figure>

# Sources

::: {#refs}
:::
