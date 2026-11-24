---
title: "Transcaucasia in the Soviet and Post-Soviet Eras"
subtitle: "Georgia, Armenia and Azerbaijan from 1917AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_soviet_postsoviet_transcaucasia_spatial.png"
hero_caption: "Subadministrative divisions and 6.067 catalogued settlements across Georgia, Armenia and Azerbaijan from 1917AD to 2026AD, spanning 12 Georgian regions, 11 Armenian provinces and 78 Azerbaijani districts."
hero_label: "fig:hero-soviet-postsoviet-transcaucasia"
bibliography: soviet_postsoviet_transcaucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between the collapse of the Russian Empire in 1917AD and the mid-2020sAD, the population of Transcaucasia - comprising Georgia, Armenia and Azerbaijan - expanded nearly threefold, rising from 6M in 1917AD and 5,86M at the 1926AD First All-Union Census to 8,03M in 1939AD, 9,51M in 1959AD, 12,3M in 1970AD and 15,72M in 1989AD, before slowing to 15,56M in 2000AD and reaching 16,31M in 2014AD and 16,92M in 2025AD. Behind this aggregate curve lay two sharply contrasted demographic regimes. During seven decades of Soviet rule, state-directed industrialisation along the Baku-Sumqayıt oil peninsula, the Kura-Aras irrigation corridor, the Rustavi-Tbilisi industrial belt and the Yerevan basin combined with public health campaigns and universal schooling to cut infant mortality and triple regional numbers, interrupted only by the 1917AD-1922AD revolutionary wars, collectivisation and the Second World War. After the dissolution of the Soviet Union in December 1991, ethno-territorial wars and forced displacements in Abkhazia, South Ossetia and Nagorno-Karabakh, coupled with sustained labour emigration from Armenia and Georgia, cleaved the region in two. While Azerbaijan expanded briskly through natural increase and metropolitan concentration around Baku, Sumqayıt and Absheron, Georgia and Armenia experienced deep post-Soviet contraction, acute rural depopulation and rapid demographic ageing. Disaggregating these enumerations across 101 regional mask units and 150 matched modern districts from GeoStat, ArmStat and AzStat alongside 6.067 catalogued settlements recovers the spatial structure of modern South Caucasian demography.

# Background

Transcaucasia occupies the isthmus between the Black Sea and the Caspian Sea, bounded on the north by the glaciated crest of the Greater Caucasus and on the south by the Aras River and the Talysh range [@Gazi2025Historical]. Within this compact mountain-and-basin bridge, relief and rainfall divide human settlement into four distinct ecological zones. In western Georgia, humid Colchis (Samegrelo, Guria, Imereti and Ajaria) opens westward to the Black Sea along the Rioni plain, supporting dense subtropical orchards, tea and citrus terraces and port cities at Batumi and Poti [@Tukhashvili2016Socio]. East of the Likhi Range, the upper Kura (Mtkvari) basin links Shida Kartli and Tbilisi with the wine-growing Alazani valley of Kakheti and the semi-arid pastures of Kvemo Kartli. Southward, the Armenian volcanic highland rises above 1.000 m around Mount Aragats, the Shirak plateau and Lake Sevan, concentrating irrigated farming and urban industry in the Ararat plain around Yerevan [@Franklin2017Examining; @Saparov2003Alteration]. Eastward, the Kura and Aras rivers coalesce across the wide, dry Aran lowlands of central Azerbaijan before reaching the Caspian littoral, the humid Talysh-Lankaran coast and the oil-bearing Absheron peninsula [@Babashova2021Developmen; @Berglund2025Cause].

Before the First World War, the territory belonged to the Caucasus Viceroyalty of the Russian Empire, whose late nineteenth-century demographic baseline was fixed by the 1897AD Russian Imperial Census (compiled under N. A. Troinitskii in 1905AD) and the 1914AD Imperial Statistical Committee estimates. Across the five principal guberniyas mapped in Table \ref{tab:historical-baseline}, Transcaucasia rose from 3,76M in 1886AD to 4,64M in 1897AD and 5,94M on the eve of war in 1914AD. Tiflis and Kutais guberniyas in Georgia expanded from 1,68M (1886AD) to 2,11M (1897AD) and 2,6M (1914AD); Erivan guberniya in Armenia grew from 670k to 829,6k and 1M; and Baku and Elizavetpol guberniyas in Azerbaijan climbed fastest of all, from 1,41M to 1,71M and 2,34M as the Baku oil boom drew Russian, Armenian, Persian and Volga Tatar labour to the Caspian shore [@Cordier2017Once].

<figure class="crd-table-figure" id="tab:historical-baseline">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Guberniya Grouping</th><th class="crd-th">ISO3</th><th class="crd-th">1886AD</th><th class="crd-th">1897AD</th><th class="crd-th">1914AD</th><th class="crd-th">1886-1914AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tiflis &amp; Kutais Guberniyas (Georgia)</strong></td><td class="crd-td">GEO</td><td class="crd-td">1,68M</td><td class="crd-td">2,11M</td><td class="crd-td">2,6M</td><td class="crd-td">+54,8%</td></tr>
<tr><td class="crd-td"><strong>Erivan Guberniya (Armenia)</strong></td><td class="crd-td">ARM</td><td class="crd-td">670k</td><td class="crd-td">829,6k</td><td class="crd-td">1M</td><td class="crd-td">+49,3%</td></tr>
<tr><td class="crd-td"><strong>Baku &amp; Elizavetpol Guberniyas (Azerbaijan)</strong></td><td class="crd-td">AZE</td><td class="crd-td">1,41M</td><td class="crd-td">1,71M</td><td class="crd-td">2,34M</td><td class="crd-td">+65,9%</td></tr>
<tr><td class="crd-td"><strong>Transcaucasia Imperial Guberniyas Total</strong></td><td class="crd-td">ALL</td><td class="crd-td">3,76M</td><td class="crd-td">4,64M</td><td class="crd-td">5,94M</td><td class="crd-td">+58%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Late Russian Imperial guberniya population totals across Transcaucasia from 1886AD to 1914AD, forming the pre-revolutionary baseline for the 1917AD-2026AD series.</figcaption>
</figure>

The collapse of the Tsarist front in 1917AD, the brief Transcaucasian Democratic Federative Republic of spring 1918AD, the independent republics of Georgia, Armenia and Azerbaijan (1918AD-1921AD) and the Sovietisation campaigns of 1920AD-1921AD shattered pre-war administrative continuity [@Hofmann2026Build; @Gazi2025Historical]. Western Armenia's refugee flight into Erivan guberniya, Ottoman and Allied interventions, the 1918AD-1920AD Armenian-Georgian and Armenian-Azerbaijani border wars, and epidemic typhus and famine depressed total regional numbers from 6M in 1917AD to 5,86M by the time of the first Soviet Union-wide enumeration in December 1926 [@Anderson1990Growth]. Between 1922AD and December 1936, Moscow administered the three republics inside the Transcaucasian Socialist Federative Soviet Republic (TSFSR) while carving out three internal ethno-territorial autonomies that would define post-Soviet conflict zones: the Abkhazian ASSR and South Ossetian Autonomous Oblast inside Georgia, and the Nakhchivan ASSR and Nagorno-Karabakh Autonomous Oblast inside Azerbaijan [@Lundstedt2024Territoria; @Arbatova2019Three; @Nouvelle2024Legal]. Following the 1936AD Stalin Constitution, Georgia, Armenia and Azerbaijan became separate union republics within boundaries that remained essentially unchanged until 1991AD [@Plotnikova2026Soviet; @Mironov2023Hadn].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-soviet-postsoviet-transcaucasia/fig2_soviet_postsoviet_transcaucasia_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate Transcaucasian population trajectory with uncertainty envelope (Panel A) and leading regional units in 2025AD across the Chapter 21 spatial mask (Panel B).</figcaption>
</figure>

Figure \ref{fig:trajectory} charts the aggregate path of the three republics over the full 109-year span. From the 1926AD trough of 5,86M, Transcaucasia surged to 8,03M in 1939AD and - despite heavy Red Army wartime casualties and the November 1944 deportation of Meskhetian Turks, Kurds and Hemshins from southern Georgia - recovered to 9,51M by January 1959 [@Anderson1990Growth; @Hofler2020Boundaries]. Post-war public health investment, malaria eradication across the Colchis marshes and Kura-Aras lowlands, and industrial urban migration lifted the regional total to 12,3M in 1970AD and 15,72M in January 1989 [@Babashova2021Developmen; @Verdiyeva2019Population]. After 1991AD, armed conflict and out-migration halted this climb for more than a decade (15,56M in 2000AD), before renewed Caspian oil growth and gradual stabilisation brought the regional total to 16,31M in 2014AD and 16,92M in 2025AD [@Group2019South; @Adamski2023Farewell].

# Methodology

## Soviet All-Union and Post-Soviet National Censuses

Quantitative reconstruction of Transcaucasia from 1917AD to 2026AD rests on two consecutive statistical architectures: six Soviet All-Union censuses (December 1926, January 1939, January 1959, January 1970, January 1979 and January 1989) and the post-1991 national censuses and current demographic registers maintained by the National Statistics Office of Georgia (GeoStat), the Statistical Committee of the Republic of Armenia (ArmStat) and the State Statistical Committee of the Republic of Azerbaijan (AzStat) [@Anderson1990Growth; @Anon2019Migration; @Verdiyeva2019Population; @Group2019South].

The 1926AD All-Union Census was the last open, methodologically transparent Soviet survey to tabulate small rural settlements, mother tongue and detailed nationality categories before Stalinist centralisation [@Anderson1990Growth; @Plotnikova2026Soviet]. After the suppressed January 1937 census, the January 1939 enumeration introduced central redistributions of military and NKVD camp populations alongside strict *nalichnoe* (de facto present) vs *postoyannoe* (de jure permanent) tabulations. From 1959AD through 1989AD, the Central Statistical Administration (*TsSU SSSR*) published consistent republic, oblast, *rayon* and municipal volumes every nine to eleven years, recording both rural-to-urban shifts and widening fertility gaps between Azerbaijan and its two northern neighbours [@Anderson1990Growth; @group2016Soviet].

After independence in 1991AD, census timing and coverage diverged across the three states. Azerbaijan held regular decennial enumerations in January 1999, April 2009 and October 2019, supplemented by continuous annual civil-registry series across 78 ADM2 districts and city municipalities from 1959AD to 2026AD [@Verdiyeva2019Population; @Babashova2021Developmen]. Armenia completed censuses in October 2001, October 2011 and October 2022 alongside annual series across 11 ADM1 provinces (*marzer* plus Yerevan city) from 1959AD to 2025AD [@Komakhidze2021Facing; @Saparov2003Alteration]. Georgia conducted general censuses in January 2002 and November 2014 (with a 2024AD census cycle and continuous annual series through 2026AD across 61 ADM2 municipalities), though Abkhazia after 1992AD and the Tskhinvali region (South Ossetia) after 1991AD lay outside GeoStat field access [@Lundstedt2024Territoria; @Kacka2021Migration].

<figure class="crd-table-figure" id="tab:subadmin-coverage">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Republic &amp; Agency</th><th class="crd-th">GIS Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Years</th><th class="crd-th">Observed Span</th><th class="crd-th">Principal Census Years</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgia (GeoStat)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">61</td><td class="crd-td">26</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">1959, 1970, 1979, 1989, 2002, 2009, 2011, 2014, 2019, 2022, 2024</td></tr>
<tr><td class="crd-td"><strong>Armenia (ArmStat)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">11</td><td class="crd-td">17</td><td class="crd-td">1959AD-2025AD</td><td class="crd-td">1959, 1970, 1979, 1989, 2001, 2011, 2014, 2019, 2022</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan (AzStat)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">78</td><td class="crd-td">32</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">1959, 1970, 1979, 1989, 1999, 2001, 2002, 2009, 2011, 2014, 2019, 2022, 2024</td></tr>
<tr><td class="crd-td"><strong>Transcaucasia Combined</strong></td><td class="crd-td">ADM1/ADM2</td><td class="crd-td">150</td><td class="crd-td">75</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">All-Union 1959-1989; National 1999-2024</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Subadministrative census polygon coverage matched against geoBoundaries across Georgia, Armenia and Azerbaijan from 1959AD to 2026AD.</figcaption>
</figure>

## Pycnophylactic Subadministrative Disaggregation and Radial Kriging

To place Soviet *rayons*, post-1995 Armenian *marzer*, Georgian municipalities and Azerbaijani districts on a common 5-arcminute grid without distorting total population mass, HANDBOOK pairs polygonal boundaries from the geoBoundaries global political administrative database [@Runfola2020GeoBoundaries] with strictly mass-conserving pycnophylactic scaling across 150 matched modern subadministrative units in Transcaucasia (61 ADM2 units in Georgia, 11 ADM1 units in Armenia and 78 ADM2 units in Azerbaijan, summarised in Table \ref{tab:subadmin-coverage}) within the wider 29 historical and 2.629 modern unit domain. Rather than spreading district counts evenly across barren alpine ridges of the Greater Caucasus or arid salt flats along the Caspian coast, internal allocation weights derive from a dasymetric habitability surface calibrated through non-stationary Matérn ($\nu = 3/2$) residual kriging over metric-isotropic radial distance fields and biophysical suitability covariates (elevation, slope, fluvial access and coastal proximity).

Once each 5-arcminute cell receives its unscaled prior weight $w_{ij}$ inside administrative polygon $A_k$, pycnophylactic normalisation enforces exact conservation of the enumerated census count $P_k(t)$ across every polygon and benchmark year:
$$\hat{p}_{ij}(t) = P_k(t) \frac{w_{ij}}{\sum_{(u,v) \in A_k} w_{uv}}, \qquad \text{subject to } \sum_{(i,j) \in A_k} \hat{p}_{ij}(t) = P_k(t).$$
This two-stage formulation preserves subadministrative totals to machine precision while concentrating people along the Rioni, Kura, Alazani and Aras valley floors, the Yerevan oasis and the Absheron urban littoral (Figure \ref{fig:density}). Across the entire 101-subregion Chapter 21 mask (2.856 cells: 1.093 in Georgia, 442 in Armenia and 1.321 in Azerbaijan), every decennial benchmark from 1917AD to 2025AD reconciles cleanly with the 1917AD-2026AD regional series.

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-soviet-postsoviet-transcaucasia/fig3_soviet_postsoviet_transcaucasia_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Subadministrative census population surface in 2010AD (Panel A) and mean regional densities across Georgia, Armenia and Azerbaijan in 2025AD (Panel B).</figcaption>
</figure>

# Testing and Validation

Three quantitative checks anchor the Transcaucasian series before regional disaggregation is interpreted. First, splicing the 1914AD late-Imperial guberniya sum (5,94M across Tiflis, Kutais, Erivan, Baku and Elizavetpol guberniyas) into the 1917AD starting total (6M) and the 1926AD First All-Union Census (5,86M) yields an implied 1914AD-1917AD war-time growth of +1% followed by a -2,3% net contraction between 1917AD and 1926AD. That mild net drop conceals large gross transfers: up to 300k Armenian refugees from Ottoman eastern Anatolia entered Erivan guberniya and southern Georgia during 1915AD-1920AD, partially offsetting high excess mortality from the 1918AD-1920AD regional wars, Spanish influenza, typhus and the 1921AD-1922AD famine [@Hofmann2026Build; @Gazi2025Historical].

Second, mass conservation across the geoBoundaries disaggregation grid was audited over 65.864 unit-year checks spanning 29 historical units and 2.629 modern units across HANDBOOK. Every polygon-year passed within the 0,01% conservation tolerance, with a global maximum relative error of $5{,}845 \times 10^{-8}$. Settlement hierarchy coherence across the 6.067 catalogued cities, towns and rural localities yields a Zipf rank-size slope of $\alpha = 1{,}059$ with $R^2 = 0{,}967$, confirming that metropolitan concentration in Baku, Tbilisi and Yerevan sits in regular observed proportion above secondary regional hubs such as Sumqayıt, Ganja, Batumi, Gyumri and Kutaisi.

Third, comparing the 101-subregion spatial mask against the 18 leading raw ADM1 and ADM2 administrative enumerations from GeoStat, ArmStat and AzStat (Table \ref{tab:top-modern-units}) exposes an essential structural distinction. In the harmonised 101-subregion raster series, national shares were initially held at fixed baseline proportions across all benchmarks, leaving Armenia at 14,1%, Georgia at 22,8% and Azerbaijan at 63,1% of the 16,92M total in 2025AD. By contrast, the raw subadministrative enumerations in Table \ref{tab:top-modern-units} capture the true post-1991 demographic divergence: explosive growth across Baku City (2,64M), Lankaran City (933,3k), Ganja City (637,4k), Sumqayıt City (497k) and Absheron District (482,5k) alongside contraction in provincial Georgia (Gori, Zugdidi, Ozurgeti) and northern Armenia (Shirak, Lori). Reading both datasets side by side prevents baseline raster weights from masking real post-Soviet shifts.

<figure class="crd-table-figure" id="tab:top-modern-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit (ISO3)</th><th class="crd-th">Level</th><th class="crd-th">Area</th><th class="crd-th">1979/2002AD</th><th class="crd-th">1989AD</th><th class="crd-th">2024-2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baku City (AZE)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">2.098 km²</td><td class="crd-td">1,53M</td><td class="crd-td">1,79M</td><td class="crd-td">2,64M</td></tr>
<tr><td class="crd-td"><strong>Tbilisi (GEO)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">324 km²</td><td class="crd-td">1,07M</td><td class="crd-td">1,26M</td><td class="crd-td">1,37M</td></tr>
<tr><td class="crd-td"><strong>Yerevan (ARM)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">264 km²</td><td class="crd-td">1,03M</td><td class="crd-td">1,22M</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Lankaran City (AZE)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">67 km²</td><td class="crd-td">510,2k</td><td class="crd-td">602,9k</td><td class="crd-td">933,3k</td></tr>
<tr><td class="crd-td"><strong>Ganja City (AZE)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">66 km²</td><td class="crd-td">426,8k</td><td class="crd-td">484,5k</td><td class="crd-td">637,4k</td></tr>
<tr><td class="crd-td"><strong>Sumqayit City (AZE)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">121 km²</td><td class="crd-td">205,7k</td><td class="crd-td">254,4k</td><td class="crd-td">497k</td></tr>
<tr><td class="crd-td"><strong>Absheron District (AZE)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">1.706 km²</td><td class="crd-td">53,1k</td><td class="crd-td">70,4k</td><td class="crd-td">435,2k</td></tr>
<tr><td class="crd-td"><strong>Lori (ARM)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">3.718 km²</td><td class="crd-td">339,9k</td><td class="crd-td">229,5k</td><td class="crd-td">229,2k</td></tr>
<tr><td class="crd-td"><strong>Shirak (ARM)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">2.746 km²</td><td class="crd-td">332,5k</td><td class="crd-td">261,2k</td><td class="crd-td">242,4k</td></tr>
<tr><td class="crd-td"><strong>Shirvan City (AZE)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">65 km²</td><td class="crd-td">194,3k</td><td class="crd-td">209,8k</td><td class="crd-td">316,6k</td></tr>
<tr><td class="crd-td"><strong>Kotayk (ARM)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1.848 km²</td><td class="crd-td">87,9k</td><td class="crd-td">121,8k</td><td class="crd-td">293,3k</td></tr>
<tr><td class="crd-td"><strong>Armavir (ARM)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1.386 km²</td><td class="crd-td">105,2k</td><td class="crd-td">131,2k</td><td class="crd-td">267,9k</td></tr>
<tr><td class="crd-td"><strong>Ararat (ARM)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1.782 km²</td><td class="crd-td">272k</td><td class="crd-td">272k</td><td class="crd-td">267,6k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi (GEO)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">736 km²</td><td class="crd-td">167,8k</td><td class="crd-td">124,8k</td><td class="crd-td">101,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading modern subadministrative units across Georgia (ADM2), Armenia (ADM1) and Azerbaijan (ADM2), comparing late Soviet benchmarks against 2024AD-2026AD enumerations.</figcaption>
</figure>

# Results

## Soviet Industrialisation and Urban Transformation (1917AD to 1989AD)

Between 1926AD and 1989AD, Transcaucasia underwent one of the fastest demographic and urban transformations in the Soviet Union, growing by 168,3% from 5,86M to 15,72M [@Anderson1990Growth]. Three economic engines drove this expansion. On the Caspian coast, the Baku oilfields - already the Empire's leading petroleum centre before 1917AD - anchored heavy engineering, refining and maritime shipping, lifting Baku City from 1,53M in 1979AD to 1,79M in 1989AD while prompting Soviet planners to construct new industrial satellite cities from bare steppe: Sumqayıt in 1949AD (chemical and metallurgical complex north of Baku, rising to 254,4k in the 1989AD city-district enumeration) and Mingachevir in 1948AD around the giant Kura hydroelectric reservoir [@Babashova2021Developmen; @Cordier2017Once]. Along the lower Kura-Aras irrigation canals, cotton cultivation, grain collectivisation and malaria control turned once-seasonal nomadic winter pastures (*qışlaq*) in the Aran lowlands into densely settled agrarian districts [@Babashova2021Developmen].

In Georgia, heavy metallurgy at Rustavi (founded in 1948AD southeast of Tbilisi, reaching 159k in 1989AD), manganese mining at Chiatura, coal extraction at Tkibuli and Tkvarcheli, Black Sea port expansion at Batumi and Poti, and subtropical tea and citrus cultivation in Samegrelo, Guria and Ajaria propelled steady urban growth alongside Tbilisi, whose ADM2 population nearly doubled between 1959AD (703k) and 1989AD (1,26M) [@Tukhashvili2016Socio; @Anon2021Historical]. In Armenia, rapid industrialisation in the Ararat plain and northern Lori-Shirak corridor converted a predominantly rural agrarian republic into an urban manufacturing hub producing synthetic rubber, machine tools, electronics, copper and molybdenum [@Saparov2003Alteration]. Planned Soviet towns sprang up across Kotayk and Syunik - Charentsavan and Kajaran in 1947AD, Hrazdan in 1959AD, Abovyan in 1963AD and the Metsamor nuclear station settlement in 1969AD - while Yerevan surged from 517,7k in 1959AD to 1,22M in 1989AD.

Growth rates across the three republics began to diverge noticeably after 1959AD [@Anderson1990Growth; @group2016Soviet]. Georgia had already entered the late phase of its demographic transition by the 1960sAD, with urban fertility falling toward replacement level while rural mountain districts in Racha-Lechkhumi, Zemo Svaneti and Mtskheta-Mtianeti began losing young adults to Tbilisi and coastal cities. Armenia maintained higher fertility into the 1970sAD and absorbed significant diaspora repatriation (*nerkaght*) after 1946AD, though urban crowding and early out-migration slowed growth by the 1980sAD [@Saparov2003Alteration]. Azerbaijan, by contrast, preserved high rural and small-town birth rates throughout the 1960sAD and 1970sAD alongside sharply falling infant mortality, steadily raising its share of Transcaucasia's population from 39,5% in 1959AD to roughly 45% by 1989AD [@Verdiyeva2019Population; @Anderson1990Growth]. Meanwhile, Soviet linguistic and nationalities policies reshaped local identities: rural toponymy in Armenia was systematically Armenised from the 1930sAD onward [@Saparov2003Alteration], Russian served as an inter-ethnic *lingua franca* in Baku, Tbilisi and Sukhumi [@Plotnikova2026Soviet; @Anon2026Role], and wartime deportations in November 1944 removed ~90k Meskhetian Turks and smaller Kurdish and Hemshin communities from southern Georgia [@Hofler2020Boundaries].

## Georgia: Conflict Displacement, Emigration and Tbilisi Primacy

Georgia entered independence in April 1991 with roughly 5,44M inhabitants, only to suffer one of the sharpest peacetime demographic contractions in Eurasia [@Group2019South; @Kacka2021Migration]. Between 1991AD and 1994AD, civil conflict in Tbilisi and western Georgia and secessionist wars in South Ossetia (1991AD-1992AD) and Abkhazia (1992AD-1993AD) tore away effective central administration over two autonomous territories and uprooted roughly 250k-300k internally displaced persons (IDPs), predominantly ethnic Georgians from Abkhazia alongside Ossetian refugees fleeing north into North Ossetia [@Lundstedt2024Territoria; @Arbatova2019Three; @Hofmann2026Build]. In Abkhazia itself (where the 1989AD Soviet census had recorded 525k residents, including 45,7% Georgians, 17,8% Abkhaz, 14,6% Armenians and 14,3% Russians), the exodus of more than 200k Georgians and tens of thousands of Russians, Greeks and Estonians halved the de facto population to ~240k [@Lundstedt2024Territoria; @Hofler2020Boundaries].

Simultaneously, economic collapse, hyperinflation and power shortages triggered massive international emigration during the 1990sAD and 2000sAD. GeoStat's 2002AD census recorded 4,37M residents in government-controlled territory, a figure that proved inflated by unregistered migrants living in Russia, Greece, Turkey, Germany, Israel and the United States; the more rigorous November 2014 census revised Georgia's de facto population down to 3,71M [@Group2019South; @Anon2021Historical; @Chiswick2005Linguistic]. Historic minorities departed in disproportionate numbers: Pontic Greeks from Tsalka and Abkhazia emigrated to Greece and southern Russia [@Hofler2020Boundaries], Georgian Jews left Tbilisi, Kutaisi and Kulashi for Israel, Germany and North America [@Anon2021Historical; @Dietz2002Jewish; @Estraikh2022Jews], and ethnic Russians and Ukrainians departed urban garrisons and ports [@Anon2026Role].

At the ADM2 district level documented in GeoStat enumerations, post-Soviet Georgia polarised sharply between Tbilisi and its western and southern provinces. Tbilisi dipped modestly from its 1991AD peak of 1,28M to 1,12M in 2002AD and 1,11M in 2014AD, before post-2015 internal migration, higher-education clustering and foreign-resident inflows pushed the capital back up to 1,24M in 2023AD, 1,33M in 2024AD and 1,37M in 2026AD - concentrating over a third of Georgia's entire population within 324 km². Along the Black Sea, Ajaria's port capital Batumi expanded strongly after the 2004AD reintegration of regional customs and Turkish cross-border trade, climbing to 235,7k by 2024AD and 246,3k in 2026AD [@Tukhashvili2016Socio]. Elsewhere, demographic attrition persisted: Zugdidi (736 km²) swelled temporarily from 124,8k in 1989AD to 167,8k in 2002AD as Abkhazian IDPs settled across the Inguri River, only to contract to 105,5k in 2014AD and 101,7k in 2024AD; Gori (2.179 km²), adjacent to the South Ossetian boundary line after August 2008, declined from 149,5k in 1989AD to 125,7k in 2014AD and 121,9k in 2024AD; Ozurgeti in Guria fell by more than a third from 89,7k in 1989AD to 58,4k in 2024AD; and Gardabani dropped from 93k in 2002AD to 83,5k in 2024AD. Only multi-ethnic Kvemo Kartli districts such as Marneuli (1.040 km², recovering from 104,3k in 2014AD to 115,7k in 2024AD) preserved positive rural-agricultural momentum [@Anon2026Role; @Group2019South].

## Armenia: Earthquake, Blockade and Metropolitan Concentration

Armenia's post-Soviet trajectory was scarred even before formal independence in September 1991 by three compounding shocks in 1988AD-1994AD: the devastating Spitak earthquake of 7 December 1988, which destroyed much of Leninakan (Gyumri), Kirovakan (Vanadzor) and Spitak while killing at least 25k-38k residents and leaving half a million homeless; the mutual flight of ~170k-200k Azerbaijanis from rural Armenia and ~350k-400k Armenians from Azerbaijan between 1988AD and 1990AD; and the transport blockade imposed during the First Nagorno-Karabakh War (1991AD-1994AD) [@Hofmann2026Build; @Nouvelle2024Legal; @Saparov2003Alteration]. ArmStat's ADM1 series in Table \ref{tab:top-modern-units} captures the earthquake's immediate impact: Shirak province fell from 332,5k in 1979AD to 261,2k in 1989AD, and Lori dropped from 339,9k to 229,5k over the same decade.

Between 1992AD and 2015AD, high unemployment, winter energy shortages during the 1992AD-1995AD blockade and falling birth rates drove net emigration of roughly 700k-900k citizens, chiefly to the Russian Federation, Ukraine, Western Europe and the United States [@Kacka2021Migration; @Group2019South]. Whereas the 1989AD Soviet census enumerated 3,3M inhabitants in Armenia, the 2001AD national census counted 3,21M de jure (and ~3M de facto), the 2011AD census recorded 3,02M de jure (2,87M de facto), and the 2022AD census registered 2,93M resident inhabitants before the September 2023 exodus of over 100k Armenians from Nagorno-Karabakh lifted Armenia's 2025AD total back above 3,08M [@Nouvelle2024Legal; @Hofmann2026Build].

Internally, population shifted steadily toward Yerevan and the surrounding Ararat valley. Yerevan (264 km²) dipped from 1,22M in 1989AD to 1,1M in 2001AD and 1,06M in 2011AD, then climbed back to 1,09M in 2022AD and 1,14M in 2025AD - nearly 37% of the republic's population. Adjacent Ararat-basin *marzer* held dense irrigated orchard and peri-urban populations: Kotayk (1.848 km², 293,3k in 2025AD), Armavir (1.386 km², 267,9k) and Ararat (1.782 km², 267,6k). By contrast, northern and highland provinces languished: Shirak declined further to 251,9k in 2011AD and 242,4k in 2025AD, Lori stood at 229,2k in 2025AD, and borderlands in Syunik, Gegharkunik and Vayots Dzor faced chronic youth out-migration alongside minority departures among Yezidi pastoralists and Molokan Russians [@Komakhidze2021Facing; @Group2019South].

## Azerbaijan: Caspian Urbanisation and Regional Growth

Unlike Georgia and Armenia, Azerbaijan experienced uninterrupted demographic expansion after 1991AD, moving from 7,02M in 1989AD to 7,95M in 1999AD, 8,92M in 2009AD, 10M in 2019AD and over 10,2M by 2025AD [@Verdiyeva2019Population; @Babashova2021Developmen]. Two forces propelled this divergence: a younger age structure inherited from sustained 1960sAD-1980sAD fertility that produced large cohorts of reproductive-age adults during the 1990sAD-2010sAD, and hydrocarbon-funded economic expansion after the 1994AD Caspian oil contracts, which curbed permanent family emigration even as temporary labour migration to Russia remained common [@Verdiyeva2019Population; @Huseynov2017Azerbaijan].

Azerbaijan's internal geography was simultaneously reshaped by war displacement and Caspian hyper-urbanisation. Between 1988AD and 1994AD, the departure of ~350k-400k Armenians and ~200k-250k Russians, Jews and other minorities [@Cordier2017Once; @Estraikh2022Jews; @Hasanov2026Establishm] was dwarfed by the flight of 600k-700k ethnic Azerbaijanis from Armenia, Nagorno-Karabakh and the seven surrounding occupied districts (Kəlbəcər, Lachin, Qubadlı, Zəngilan, Jabrayil, Füzuli and Ağdam) [@Dadashov2024Comprehens; @Nouvelle2024Legal]. Tens of thousands of IDP families settled permanently in metropolitan Baku, Sumqayıt, Xırdalan, Gəncə, Mingəçevir and newly constructed settlements across the Aran economic region [@Babashova2021Developmen].

AzStat's 78 ADM2 districts reveal the scale of this coastal concentration. Baku City (2.098 km²) expanded from 1,53M in 1979AD and 1,79M in 1989AD to 2,62M in 2019AD and 2,64M in 2025AD; Sumqayıt City (121 km²) almost doubled from 254,4k in 1989AD to 491,1k in 2019AD and 497k in 2025AD; and Absheron District (1.706 km², ringing Baku and Sumqayıt through Xırdalan and suburban townships) surged nearly seven-fold from 70,4k in 1989AD to 475,8k in 2019AD and 482,5k in 2025AD (435,2k in 2026AD following boundary adjustments). Secondary urban axes also grew briskly: Lankaran City in the humid Talysh-Mughan south rose from 602,9k in 1989AD to 933,3k in 2025AD [@Berglund2025Cause], Ganja City expanded from 484,5k to 637,4k, and Shirvan City in the lower Kura basin grew from 209,8k to 316,6k [@Babashova2021Developmen]. Yet fertility began falling rapidly below replacement after 2015AD, initiating gradual demographic ageing across both Baku and rural districts [@Verdiyeva2019Population]. Following the 2020AD and September 2023 wars and the dissolution of the unrecognized Nagorno-Karabakh republic, Azerbaijani state reconstruction programmes began resettling former IDPs into Füzuli, Aghdam, Lachin, Shusha and Khankendi while nearly the entire remaining Armenian population departed westward [@Nouvelle2024Legal; @Dadashov2024Comprehens].

<figure class="crd-table-figure" id="tab:top-subregions-mask">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Republic)</th><th class="crd-th">1917AD</th><th class="crd-th">1939AD</th><th class="crd-th">1959AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kakheti (Georgia)</strong></td><td class="crd-td">165,6k</td><td class="crd-td">221,7k</td><td class="crd-td">262,3k</td><td class="crd-td">434k</td><td class="crd-td">467k</td></tr>
<tr><td class="crd-td"><strong>Abkhazia (Georgia)</strong></td><td class="crd-td">147k</td><td class="crd-td">196,8k</td><td class="crd-td">232,8k</td><td class="crd-td">385,2k</td><td class="crd-td">414,5k</td></tr>
<tr><td class="crd-td"><strong>Samegrelo-Zemo Svaneti (Georgia)</strong></td><td class="crd-td">137,2k</td><td class="crd-td">183,7k</td><td class="crd-td">217,4k</td><td class="crd-td">359,6k</td><td class="crd-td">386,9k</td></tr>
<tr><td class="crd-td"><strong>Mtskheta-Mtianeti (Georgia)</strong></td><td class="crd-td">131,1k</td><td class="crd-td">175,5k</td><td class="crd-td">207,7k</td><td class="crd-td">343,6k</td><td class="crd-td">369,7k</td></tr>
<tr><td class="crd-td"><strong>Samtskhe-Javakheti (Georgia)</strong></td><td class="crd-td">126,3k</td><td class="crd-td">169,1k</td><td class="crd-td">200k</td><td class="crd-td">330,9k</td><td class="crd-td">356k</td></tr>
<tr><td class="crd-td"><strong>Kvemo Kartli (Georgia)</strong></td><td class="crd-td">125,1k</td><td class="crd-td">167,5k</td><td class="crd-td">198,2k</td><td class="crd-td">327,9k</td><td class="crd-td">352,8k</td></tr>
<tr><td class="crd-td"><strong>Imereti (Georgia)</strong></td><td class="crd-td">123,9k</td><td class="crd-td">165,9k</td><td class="crd-td">196,2k</td><td class="crd-td">324,6k</td><td class="crd-td">349,3k</td></tr>
<tr><td class="crd-td"><strong>Shida Kartli (Georgia)</strong></td><td class="crd-td">118,9k</td><td class="crd-td">159,2k</td><td class="crd-td">188,4k</td><td class="crd-td">311,7k</td><td class="crd-td">335,3k</td></tr>
<tr><td class="crd-td"><strong>Racha-Lechkhumi-Kvemo Svaneti (Georgia)</strong></td><td class="crd-td">113,2k</td><td class="crd-td">151,6k</td><td class="crd-td">179,4k</td><td class="crd-td">296,8k</td><td class="crd-td">319,4k</td></tr>
<tr><td class="crd-td"><strong>Gegharkunik (Armenia)</strong></td><td class="crd-td">112,4k</td><td class="crd-td">150,5k</td><td class="crd-td">178k</td><td class="crd-td">294,6k</td><td class="crd-td">316,9k</td></tr>
<tr><td class="crd-td"><strong>Syunik (Armenia)</strong></td><td class="crd-td">102k</td><td class="crd-td">136,6k</td><td class="crd-td">161,6k</td><td class="crd-td">267,4k</td><td class="crd-td">287,7k</td></tr>
<tr><td class="crd-td"><strong>Lori (Armenia)</strong></td><td class="crd-td">95,1k</td><td class="crd-td">127,3k</td><td class="crd-td">150,6k</td><td class="crd-td">249,2k</td><td class="crd-td">268,1k</td></tr>
<tr><td class="crd-td"><strong>Ajaria (Georgia)</strong></td><td class="crd-td">85k</td><td class="crd-td">113,8k</td><td class="crd-td">134,7k</td><td class="crd-td">222,8k</td><td class="crd-td">239,7k</td></tr>
<tr><td class="crd-td"><strong>Shirak (Armenia)</strong></td><td class="crd-td">83,5k</td><td class="crd-td">111,8k</td><td class="crd-td">132,2k</td><td class="crd-td">218,8k</td><td class="crd-td">235,4k</td></tr>
<tr><td class="crd-td"><strong>Kəlbəcər (Azerbaijan)</strong></td><td class="crd-td">81,4k</td><td class="crd-td">108,9k</td><td class="crd-td">128,9k</td><td class="crd-td">213,2k</td><td class="crd-td">229,4k</td></tr>
<tr><td class="crd-td"><strong>Aragatsotn (Armenia)</strong></td><td class="crd-td">80,8k</td><td class="crd-td">108,2k</td><td class="crd-td">128k</td><td class="crd-td">211,8k</td><td class="crd-td">227,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading subregional mask trajectories across Georgia, Armenia and Azerbaijan from 1917AD to 2025AD under baseline spatial weighting.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-soviet-postsoviet-transcaucasia/fig4_soviet_postsoviet_transcaucasia_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution across all 6.067 catalogued Transcaucasian settlements (Panel A, Zipf exponent 1,059, R² = 0,967) and the 12 largest urban centres by peak population (Panel B).</figcaption>
</figure>

Across the 6.067 catalogued settlements plotted in Figure \ref{fig:settlements}, the urban summit is anchored by the three national capitals - Baku (2,3M peak in 2021AD; 1,31M core city in 2025AD), Tbilisi (1,4M peak in 1998AD; 1,27M in 2024AD-2025AD and 1,31M in 2026AD) and Yerevan (1,2M peak in 1989AD; 1,14M in 2025AD) - followed by Azerbaijan's industrial belt (Sumqayıt 440,9k, Ganja 354,6k, Xırdalan 215,8k, Mingəçevir 122,2k), Georgia's secondary ports and industrial nodes (Batumi 246,3k in 2026AD, Kutaisi 232,5k peak in 1989AD, Rustavi 159k peak in 1989AD, Sokhumi 119,2k peak in 1989AD) and Armenia's earthquake-scarred northern centres (Gyumri 238k peak in 1988AD down to 114,7k in 2025AD, Vanadzor 146k peak in 1979AD).

## Minority Departures and Linguistic Realignment

Beyond headline national totals, the period between 1979AD and 2025AD transformed the ethno-linguistic composition of every South Caucasian republic [@Plotnikova2026Soviet; @Adamski2023Farewell]. Under late Soviet rule, Baku, Tbilisi and Sukhumi functioned as cosmopolitan multi-ethnic cities housing large Slavic, Jewish, Greek and Caucasian minority populations alongside the titular nationalities [@Cordier2017Once; @Anon2021Historical]. Emigration began first among Soviet Jews during the 1970sAD and accelerated dramatically between 1989AD and 1995AD toward Israel, Germany and the United States [@Chiswick2005Linguistic; @Dietz2002Jewish; @Estraikh2022Jews], reducing Georgia's historic Georgian and Ashkenazi Jewish communities from over 55k in 1970AD to fewer than 4k by 2014AD [@Anon2021Historical], while Mountain Jewish towns such as Qırmızı Qəsəbə near Quba in northern Azerbaijan maintained closer bilateral ties with Israel despite heavy out-migration [@Hasanov2026Establishm].

Over the same quarter-century, Pontic Greeks from Tsalka and Abkhazia departed largely for Greece and Stavropol [@Hofler2020Boundaries], ethnic Russians and Ukrainians left Baku, Sumqayıt, Tbilisi and Yerevan [@Cordier2017Once; @Anon2026Role], and rural Yezidi and Molokan minorities in Armenia and Georgia contracted through both economic migration and shifting communal boundaries [@Komakhidze2021Facing]. In place of the multilingual Soviet urban order, Armenia emerged after 1991AD as an overwhelmingly mono-ethnic republic, Azerbaijan consolidated around Azerbaijani-speaking coastal and lowland cities alongside Talysh, Lezgin and Avar border districts [@Berglund2025Cause], and Georgia combined a strongly Georgian-speaking core with compact Armenian (Samtskhe-Javakheti) and Azerbaijani (Kvemo Kartli) rural districts where Russian slowly ceded ground as a second language [@Anon2026Role; @Tukhashvili2016Socio].

# Limitations

Four structural uncertainties qualify these enumerations. First, post-1991 breakaway territories - Abkhazia after 1992AD, South Ossetia after 1991AD and Nagorno-Karabakh between 1991AD and September 2023 - lay outside regular international census verification, forcing demographic series to bridge pre-conflict 1989AD Soviet counts with contested de facto tallies and IDP registries [@Arbatova2019Three; @Lundstedt2024Territoria; @Nouvelle2024Legal]. Second, post-Soviet civil registries suffered from persistent de jure vs de facto divergence: hundreds of thousands of labour migrants living in Russia or Europe remained registered at their home addresses in Georgia (until corrected by the 2014AD census) and Armenia (between 2001AD and 2022AD), while Azerbaijani IDP households frequently retained official registration in origin districts (such as Kəlbəcər or Aghdam) while residing de facto in Baku, Absheron or Sumqayıt [@Group2019South; @Anon2019Migration].

Third, subadministrative boundary reforms create sudden statistical step-changes that must be read as administrative rather than biological events. Armenia replaced 37 Soviet *rayons* with 10 *marzer* plus Yerevan in 1995AD, producing non-linear series shifts in Kotayk and Armavir around 2001AD and 2013AD-2022AD; Georgia consolidated districts into 11 *mkhare* plus Tbilisi; and Azerbaijan reallocated peri-urban settlements between Baku City and Absheron District in 2018AD-2019AD, driving Absheron's recorded jump from 210k in 2018AD to 475,8k in 2019AD. Fourth, inside the 101-subregion spatial mask, baseline polygon shares were held constant across benchmarks rather than dynamically reweighted by post-1991 republic divergence, and polygon areas rely on the 5-arcminute cell counts and ADM2 GIS vectors rather than pre-populated tabular area fields.

# Conclusion

Between 1917AD and 2026AD, Transcaucasia traversed a full demographic cycle from agrarian imperial periphery through rapid Soviet urbanisation to post-Soviet geopolitical fragmentation. Rising from 4,64M in 1897AD and 6M in 1917AD to 15,72M in 1989AD, the region absorbed war, revolution, forced deportations and earthquake destruction while building three million-plus capitals and a dense network of industrial, port and irrigated agricultural towns. Since 1991AD, the South Caucasus has split along clear demographic lines: Georgia and Armenia contracted through conflict displacement, labour emigration and low fertility before stabilising around Tbilisi and Yerevan, whereas Azerbaijan sustained natural increase and heavy urbanisation across the Baku-Sumqayıt-Absheron Caspian corridor, lifting the combined regional population to 16,92M in 2025AD. Harmonising imperial guberniyas, Soviet All-Union censuses and 150 geoBoundaries-matched modern subadministrative units preserves both the long-run unity of the isthmus and the sharp local contrasts that define it today.

# Appendix

<figure class="crd-table-figure" id="tab:country-macro-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory &amp; Mask Coverage</th><th class="crd-th">1917AD</th><th class="crd-th">1939AD</th><th class="crd-th">1959AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Georgia (12 regions, 1.093 cells)</strong></td><td class="crd-td">1,37M</td><td class="crd-td">1,83M</td><td class="crd-td">2,16M</td><td class="crd-td">3,58M</td><td class="crd-td">3,85M</td></tr>
<tr><td class="crd-td"><strong>Armenia (11 regions, 442 cells)</strong></td><td class="crd-td">846,1k</td><td class="crd-td">1,13M</td><td class="crd-td">1,34M</td><td class="crd-td">2,22M</td><td class="crd-td">2,39M</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan (78 regions, 1.321 cells)</strong></td><td class="crd-td">3,79M</td><td class="crd-td">5,07M</td><td class="crd-td">6M</td><td class="crd-td">9,93M</td><td class="crd-td">10,68M</td></tr>
<tr><td class="crd-td"><strong>Transcaucasia Total (101 regions, 2.856 cells)</strong></td><td class="crd-td">6M</td><td class="crd-td">8,03M</td><td class="crd-td">9,51M</td><td class="crd-td">15,72M</td><td class="crd-td">16,92M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Baseline spatial-mask population totals by constituent republic across five key benchmarks from 1917AD to 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:georgia-armenia-subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Republic)</th><th class="crd-th">Cells</th><th class="crd-th">1917AD</th><th class="crd-th">1959AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kakheti (Georgia)</strong></td><td class="crd-td">174</td><td class="crd-td">165,6k</td><td class="crd-td">262,3k</td><td class="crd-td">434k</td><td class="crd-td">467k</td></tr>
<tr><td class="crd-td"><strong>Abkhazia (Georgia)</strong></td><td class="crd-td">135</td><td class="crd-td">147k</td><td class="crd-td">232,8k</td><td class="crd-td">385,2k</td><td class="crd-td">414,5k</td></tr>
<tr><td class="crd-td"><strong>Samegrelo-Zemo Svaneti (Georgia)</strong></td><td class="crd-td">121</td><td class="crd-td">137,2k</td><td class="crd-td">217,4k</td><td class="crd-td">359,6k</td><td class="crd-td">386,9k</td></tr>
<tr><td class="crd-td"><strong>Mtskheta-Mtianeti (Georgia)</strong></td><td class="crd-td">109</td><td class="crd-td">131,1k</td><td class="crd-td">207,7k</td><td class="crd-td">343,6k</td><td class="crd-td">369,7k</td></tr>
<tr><td class="crd-td"><strong>Samtskhe-Javakheti (Georgia)</strong></td><td class="crd-td">103</td><td class="crd-td">126,3k</td><td class="crd-td">200k</td><td class="crd-td">330,9k</td><td class="crd-td">356k</td></tr>
<tr><td class="crd-td"><strong>Kvemo Kartli (Georgia)</strong></td><td class="crd-td">106</td><td class="crd-td">125,1k</td><td class="crd-td">198,2k</td><td class="crd-td">327,9k</td><td class="crd-td">352,8k</td></tr>
<tr><td class="crd-td"><strong>Imereti (Georgia)</strong></td><td class="crd-td">95</td><td class="crd-td">123,9k</td><td class="crd-td">196,2k</td><td class="crd-td">324,6k</td><td class="crd-td">349,3k</td></tr>
<tr><td class="crd-td"><strong>Shida Kartli (Georgia)</strong></td><td class="crd-td">86</td><td class="crd-td">118,9k</td><td class="crd-td">188,4k</td><td class="crd-td">311,7k</td><td class="crd-td">335,3k</td></tr>
<tr><td class="crd-td"><strong>Racha-Lechkhumi-Kvemo Svaneti (Georgia)</strong></td><td class="crd-td">83</td><td class="crd-td">113,2k</td><td class="crd-td">179,4k</td><td class="crd-td">296,8k</td><td class="crd-td">319,4k</td></tr>
<tr><td class="crd-td"><strong>Gegharkunik (Armenia)</strong></td><td class="crd-td">77</td><td class="crd-td">112,4k</td><td class="crd-td">178k</td><td class="crd-td">294,6k</td><td class="crd-td">316,9k</td></tr>
<tr><td class="crd-td"><strong>Syunik (Armenia)</strong></td><td class="crd-td">65</td><td class="crd-td">102k</td><td class="crd-td">161,6k</td><td class="crd-td">267,4k</td><td class="crd-td">287,7k</td></tr>
<tr><td class="crd-td"><strong>Lori (Armenia)</strong></td><td class="crd-td">57</td><td class="crd-td">95,1k</td><td class="crd-td">150,6k</td><td class="crd-td">249,2k</td><td class="crd-td">268,1k</td></tr>
<tr><td class="crd-td"><strong>Ajaria (Georgia)</strong></td><td class="crd-td">49</td><td class="crd-td">85k</td><td class="crd-td">134,7k</td><td class="crd-td">222,8k</td><td class="crd-td">239,7k</td></tr>
<tr><td class="crd-td"><strong>Shirak (Armenia)</strong></td><td class="crd-td">42</td><td class="crd-td">83,5k</td><td class="crd-td">132,2k</td><td class="crd-td">218,8k</td><td class="crd-td">235,4k</td></tr>
<tr><td class="crd-td"><strong>Aragatsotn (Armenia)</strong></td><td class="crd-td">44</td><td class="crd-td">80,8k</td><td class="crd-td">128k</td><td class="crd-td">211,8k</td><td class="crd-td">227,9k</td></tr>
<tr><td class="crd-td"><strong>Tavush (Armenia)</strong></td><td class="crd-td">39</td><td class="crd-td">79,7k</td><td class="crd-td">126,2k</td><td class="crd-td">208,8k</td><td class="crd-td">224,7k</td></tr>
<tr><td class="crd-td"><strong>Vayots Dzor (Armenia)</strong></td><td class="crd-td">35</td><td class="crd-td">75,2k</td><td class="crd-td">119,2k</td><td class="crd-td">197,2k</td><td class="crd-td">212,2k</td></tr>
<tr><td class="crd-td"><strong>Kotayk (Armenia)</strong></td><td class="crd-td">30</td><td class="crd-td">71,4k</td><td class="crd-td">113,1k</td><td class="crd-td">187,1k</td><td class="crd-td">201,3k</td></tr>
<tr><td class="crd-td"><strong>Guria (Georgia)</strong></td><td class="crd-td">29</td><td class="crd-td">68,8k</td><td class="crd-td">109k</td><td class="crd-td">180,3k</td><td class="crd-td">194k</td></tr>
<tr><td class="crd-td"><strong>Ararat (Armenia)</strong></td><td class="crd-td">28</td><td class="crd-td">68,6k</td><td class="crd-td">108,7k</td><td class="crd-td">179,8k</td><td class="crd-td">193,5k</td></tr>
<tr><td class="crd-td"><strong>Armavir (Armenia)</strong></td><td class="crd-td">21</td><td class="crd-td">54,6k</td><td class="crd-td">86,5k</td><td class="crd-td">143,1k</td><td class="crd-td">154k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi (Georgia)</strong></td><td class="crd-td">3</td><td class="crd-td">24k</td><td class="crd-td">38k</td><td class="crd-td">62,8k</td><td class="crd-td">67,6k</td></tr>
<tr><td class="crd-td"><strong>Erevan (Armenia)</strong></td><td class="crd-td">4</td><td class="crd-td">22,8k</td><td class="crd-td">36,1k</td><td class="crd-td">59,7k</td><td class="crd-td">64,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> All 12 Georgian and 11 Armenian subregions in the Chapter 21 spatial mask, listing 5-arcminute cell counts and harmonised population series from 1917AD to 2025AD.</figcaption>
</figure>

# Sources
