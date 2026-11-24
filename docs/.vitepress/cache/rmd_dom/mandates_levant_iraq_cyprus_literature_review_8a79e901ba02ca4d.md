---
title: "British and French Mandates in the Levant, Iraq and Cyprus"
subtitle: "Population, Urbanisation and Subadministrative Censuses, 1918AD to 1960AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: mandates_levant_iraq_cyprus_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_mandates_levant_iraq_cyprus_spatial.png"
hero_caption: "Six British and French Mandate and colonial jurisdictions across Iraq, Syria, Greater Lebanon, Transjordan, Palestine and Cyprus between 1918AD and 1960AD, showing 138 individually assessed Mandate-era towns and administrative centres."
hero_label: "fig:hero-mandates-levant-iraq-cyprus"

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

This study reconstructs population and urban growth across the British and French Mandates of the Levant and Mesopotamia alongside British Cyprus from the armistice of 1918AD until Cypriot independence in 1960AD. Covering roughly 760,7k km² across six jurisdictions — Iraq, Syria, Greater Lebanon, Transjordan, Palestine and Cyprus — the combined population stood at 6,49M in 1918AD after wartime famine, conscription and typhus had thinned rural districts and coastal ports alike. Over the next three decades, public sanitation, road and railway construction, citrus and grain commercialisation, oil extraction in northern Iraq and sustained immigration transformed the region. By the mid-Mandate benchmarks of 1931AD and 1932AD the six territories held roughly 8,18M inhabitants, rising to about 11,9M across 1946–1947AD despite the territorial cession of the Sanjak of Alexandretta in 1939AD. Disaggregated across nine historical subadministrative provinces and 169 modern administrative districts linked through geoBoundaries polygons [@Runfola2020GeoBoundaries] and non-stationary Matérn kriging ($\nu = 3/2$), the urban system grew even faster than the rural hinterland: 138 individually assessed Mandate-era towns and administrative centres expanded from 1,83M inhabitants across the 1918–1922AD early-Mandate counts to 3,94M across 1945–1947AD and 5,88M in combined peak population (5M across Iraq, Syria, Lebanon, Jordan and Cyprus in 1957–1960AD), led by Baghdad (202k in 1920AD to 515,5k in 1947AD and 793,2k in 1957AD), Damascus (170k in 1922AD to 530k in 1960AD), Beirut (115k in 1920AD to 450k in 1960AD), Aleppo (156,7k in 1922AD to 425,5k in 1960AD) and Amman (3,5k in 1918AD to 108,3k in 1952AD and 218k in 1960AD), alongside Mosul (72k to 178,2k), Tel Aviv (15,2k in 1922AD to 166,7k in 1945AD), Jerusalem (62,6k to 157,1k in 1945AD) and Haifa (24,6k to 128,8k in 1945AD) before the 1948AD Nakba displaced roughly 700k–750k Palestinian Arabs across the West Bank, Gaza, Transjordan, Lebanon and Syria.

# Background



## Post-Ottoman Territorial Partition and Ecological Frame

When Ottoman armies retreated northwards across Palestine, Syria and Mesopotamia in autumn 1918AD, Britain and France partitioned the Fertile Crescent into five League of Nations Class A Mandates ratified at San Remo in April 1920 and confirmed between 1922AD and 1923AD, while confirming British sovereignty over Cyprus, occupied since 1878AD and formally proclaimed a Crown Colony in 1925AD [@Saber2023French; @Galletti2007Some]. Together these six jurisdictions spanned 760,7k km² (10.880 five-arcminute cells), stretching from the Troodos Mountains and Mesaoria Plain of Cyprus across the Lebanese range, Galilee and Judean highlands, the Jordan Rift and the Syrian steppe to the alluvial floodplains of the Tigris and Euphrates.

Population density across this expanse followed rainfall, irrigation and port access rather than straight-line diplomatic frontiers. Along the humid Mediterranean littoral — Cyprus (9,3k km²), Greater Lebanon (10k km²) and the Palestinian coastal plain (28,3k km² total Mandate area) — winter rains above 400 mm supported dense olive, citrus, vine and wheat cultivation alongside ancient maritime outlets at Beirut, Haifa, Jaffa, Limassol and Larnaca [@Kastrissianakis2016Exploring; @Beenstock2025Origins]. Inland across Syria (186,2k km²), the Orontes valley, the Ghouta oasis around Damascus and the Aleppo rain-fed crescent formed narrow ribbons of intense settlement hemmed in by the semi-arid Badiya steppe, while the upper Jazira east of the Euphrates remained sparsely grazed pasture until Mandate security and railway branches drew Kurdish, Armenian, Assyrian and Arab cultivators north-eastwards [@Chukov2022Kurdish; @Galletti2007Some; @Pashayan2026Minority]. Transjordan (88,8k km²) held most of its villages in the Ajlun, Balqa and Karak highlands overlooking the Jordan valley, leaving four-fifths of the emirate to seasonal pastoralists [@Frantzman2011Bedouin]. Mesopotamia (438k km²) concentrated the bulk of its rural population along the Euphrates canals south of Ramadi, the lower Tigris marshes and the Assyrian piedmont around Mosul, Erbil and Kirkuk [@Bosworth2007Historic].

## Demographic Trajectory across Six Jurisdictions

The baseline of 6,49M inhabitants in 1918AD reflects severe late-war demographic contraction rather than pre-1914 levels. Between 1915AD and 1918AD, Allied naval blockades, Ottoman grain requisitioning, locust swarms and epidemic typhus killed a fifth or more of the Mount Lebanon population and sharply reduced urban numbers in Jerusalem, Beirut, Damascus and Baghdad [@Saber2023French; @Greenshields2025Settlment]. Recovery began immediately after 1919AD as demobilised soldiers returned, maritime food imports resumed and Mandate health services curtailed malaria, cholera and smallpox [@Scott2001Mortality; @Hasso2021Children].

In Iraq, the largest territory in the group, British civil administrators estimated 2,85M inhabitants in 1918AD and 2,849M in 1920AD across the former Baghdad, Basra and Mosul vilayets. By 1932AD, when Iraq entered the League of Nations as an independent kingdom and passed out of Mandate jurisdiction, its population had climbed to 3,45M, continuing afterwards to 4,82M at the first national census of 1947AD. French Mandate Syria recovered from 1,85M in 1918AD to 1,95M in 1922AD, 2,25M in 1932AD and 3,05M upon French evacuation in April 1946, even though the transfer of the Sanjak of Alexandretta (Hatay) to Turkey in 1939AD removed roughly 220k residents and triggered an exodus of Armenians and Arabs into Aleppo and Beirut [@USTUN2016Example; @Hovhannisyan2025Catholicos; @Abdulla2022].

Greater Lebanon expanded from 580k in 1918AD to 640k in 1922AD, 793,4k at the landmark 1932AD census and 1,18M in 1946AD, reinforced by Armenian refugees from Cilicia and Alexandretta who settled in Bourj Hammoud and Beirut [@Greenshields2025Settlment; @Dionigi2017Statehood; @Orall2023Lebanese]. Transjordan doubled under British supervision from 225k in 1918AD to 240k in 1922AD, 300k in 1931AD and 430k at independence in May 1946, before absorbing hundreds of thousands of Palestinian refugees after 1948AD to reach 586,9k at the 1952AD housing census. British Mandate Palestine experienced the fastest relative growth of any Mandate territory: from 680k in 1918AD to 757,2k in 1922AD, 1,036M in 1931AD, 1,97M in 1947AD and 1,95M in early 1948AD on the eve of partition and war, driven both by Jewish immigration from Europe and by sharp declines in Arab infant and child mortality [@Beenstock2025Origins; @Scott2001Mortality; @Kreiner2025British]. British Cyprus, sheltered from continental warfare and retaining colonial status until August 1960, traced a steady demographic climb from 300k in 1918AD through 310,7k (1921AD), 348k (1931AD) and 450,1k (1946AD) to 573,6k in 1960AD.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Area (km²)</th><th class="crd-th">1918AD</th><th class="crd-th">1931-1932AD</th><th class="crd-th">End Benchmark</th><th class="crd-th">Domain Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>British Mandate for Mesopotamia (Iraq)</strong></td><td class="crd-td">437.968</td><td class="crd-td">2,85M</td><td class="crd-td">3,45M</td><td class="crd-td">3,45M</td><td class="crd-td">1918-1932AD</td></tr>
<tr><td class="crd-td"><strong>French Mandate for Syria</strong></td><td class="crd-td">186.202</td><td class="crd-td">1,85M</td><td class="crd-td">2,25M</td><td class="crd-td">3,05M</td><td class="crd-td">1918-1946AD</td></tr>
<tr><td class="crd-td"><strong>French Mandate for Greater Lebanon</strong></td><td class="crd-td">10.035</td><td class="crd-td">580k</td><td class="crd-td">793k</td><td class="crd-td">1,18M</td><td class="crd-td">1918-1946AD</td></tr>
<tr><td class="crd-td"><strong>British Mandate for Palestine</strong></td><td class="crd-td">28.315</td><td class="crd-td">680k</td><td class="crd-td">1,04M</td><td class="crd-td">1,95M</td><td class="crd-td">1918-1948AD</td></tr>
<tr><td class="crd-td"><strong>Emirate of Transjordan</strong></td><td class="crd-td">88.844</td><td class="crd-td">225k</td><td class="crd-td">300k</td><td class="crd-td">430k</td><td class="crd-td">1918-1946AD</td></tr>
<tr><td class="crd-td"><strong>British Crown Colony of Cyprus</strong></td><td class="crd-td">9.346</td><td class="crd-td">300k</td><td class="crd-td">348k</td><td class="crd-td">574k</td><td class="crd-td">1918-1960AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial areas, baseline 1918AD populations, mid-Mandate enumerations and terminal Mandate or colonial benchmarks across the six jurisdictions.</figcaption>
</figure>

# Methodology

## Census Sources, Enumeration Mechanics and Staggered Mandate Spans

Demographic reconstruction across the Mandate era rests on an uneven patchwork of colonial censuses, confessional registers and village tax assessments rather than uniform decennial counts. British administrations inherited the Indian and Colonial Office census tradition and conducted systematic household enumerations wherever political conditions permitted. Cyprus possessed the longest continuous record, with full island-wide censuses every ten years from 1881AD to 1931AD, followed by post-war counts in 1946AD and 1960AD [@Runfola2020GeoBoundaries]. Palestine conducted two formal censuses in October 1922 (757.182 inhabitants) and November 1931 (1.035.821 inhabitants), supplemented in April 1945 by the Mandate Department of Statistics Village Statistics (1.764.520 settled inhabitants before adding nomadic Beersheba Bedouin estimates) and regular quarterly vital-registration bulletins [@Frantzman2011Bedouin; @Marom2021Jind; @Marom2024Lajjun].

Iraq and Transjordan presented greater enumeration obstacles because pastoral confederations resisted conscription-linked headcounts. Iraq's 1920AD British Civil Administration estimate tallied 2.931.372 persons across its three former Ottoman vilayets (adjusted to 2,849M in the Mandate series), but political unrest in 1920AD and rapid independence in October 1932 delayed a full modern household census until October 1947 (4.816.000 inhabitants across fourteen liwas). Transjordan relied on district tax lists and tribal estimates until its 1952AD Housing Census recorded 586.885 residents. Under French administration, Greater Lebanon held its only comprehensive Mandate census in January 1932 (793.426 residents, including emigrants registered for confessional seat apportionment), while Syria combined Ottoman 1914AD civil registers with French Mandate estimates in 1922AD, 1932AD and 1938AD and civil-registry tabulations in 1946–1947AD [@Saber2023French; @Abdulla2022].

Because each jurisdiction terminated Mandate or colonial status in a different year — Iraq in October 1932, Syria and Lebanon in April 1946 (following formal 1943AD–1944AD constitutional transfers), Transjordan in May 1946, Palestine in May 1948 and Cyprus in August 1960 — HANDBOOK records territorial totals only while a region remains inside this chapter's Mandate or colonial domain. Consequently, the unadjusted chapter headline sum moves from 6,49M across all six territories in 1918AD to 6,49M across Iraq, Syria and Lebanon in 1932AD, 5,11M across Syria, Lebanon, Transjordan and Cyprus in 1946AD, 1,95M for Palestine in 1948AD and 574k for Cyprus alone in 1960AD. In the urban settlement gazetteer, all 138 individually assessed towns are anchored strictly to their documented Mandate and successor-state census years: 1920–1957AD in Iraq, 1922–1960AD in Syria, 1920–1960AD in Lebanon, 1918–1960AD in Transjordan and Jordan, 1921–1960AD in Cyprus, and 1922–1945AD (through 1948AD for Holon) in Mandate Palestine prior to partition.

## Historical Subadministrative Units and Modern Polygon Disaggregation

To prevent population totals from being smeared evenly across deserts and mountain ridges, historical subadministrative enumerations were assembled into nine territorial polygons spanning the seven modern successor states (Syria, Lebanon, Jordan, Israel, Palestine, Iraq and Cyprus). Syria is represented by the combined Aleppo and Damascus vilayet frame (1,45M in 1881AD, 1,95M in 1914AD, 2,14M in 1922AD, 2,62M in 1938AD and 3,04M in 1947AD); Lebanon by the Mutasarrifate of Mount Lebanon and Beirut extended to Greater Lebanon's 1920AD borders; Transjordan by the Sanjaks of Karak and Balqa; Mandate Palestine split analytically between the northern, coastal and Negev sub-districts (Israel frame) and the Jerusalem, Hebron, Nablus and Gaza sub-districts (Palestine frame); Iraq partitioned across its three historic vilayet liwa clusters (Baghdad Central Liwas, Basra Southern Liwas and Mosul Northern Liwas); and Cyprus across its six British colonial districts.

These nine historical aggregates link directly onto 169 modern ADM1 and ADM2 polygons retrieved from geoBoundaries [@Runfola2020GeoBoundaries]: 13 governorates in Syria, 21 districts in Lebanon, 12 governorates in Jordan, 14 sub-districts in Israel, 16 governorates in Palestine, 88 districts in Iraq and 5 districts in Cyprus. Disaggregation from provincial totals onto the five-arcminute grid uses strictly mass-conserving pycnophylactic scaling, ensuring that pixel sums within every polygon reproduce the enumerated census figure to machine precision while respecting local environmental carrying capacity.

## Radial Distance Fields, Matérn Kriging and Urban-Rural Partitioning

Between urban centres, rural population density is distributed using non-stationary Matérn kriging ($\nu = 3/2$) conditioned on metric-isotropic radial distance fields from settlements and biophysical suitability covariates. Across the wider MENA calibration surface, the isotropic two-scale Matérn semivariogram attains a dimensionless short-range correlation scale $\tau_1 = 1{,}52$ and long-range scale $\tau_2 = 2{,}9$ with nugget-to-sill ratio $0{,}04$ and residual $R^2 = 0{,}999$, corresponding to an effective short-range correlation distance near 48 to 50 km across alluvial valleys and coastal plains. Weighted least-squares covariates give positive weight to baseline habitability ($\beta_{0,\text{hab}} > 0$), fluvial proximity along the Tigris, Euphrates, Orontes and Jordan basins ($\beta_{3,\text{fluvial}}$) and Mediterranean coastal access ($\beta_{4,\text{coastal}}$).

Urban populations from the 138 individually assessed towns are separated cleanly via an urban mask before residual rural densities are scaled within each historical subadministrative unit. Thirty-six redundant, suburban or overlapping candidates in the regional ledger were excluded or consolidated into parent municipalities so that suburban sprawl never double-counts metropolitan residents or creates spurious secondary peaks on the rural background surface.

# Testing and Validation

## Subadministrative Mass Conservation and Cross-Census Consistency

Pycnophylactic disaggregation across the wider regional domain was evaluated across 65.864 unit-year checks spanning 29 historical provincial units and 2.629 modern subadministrative units over 83 benchmark years. Every single unit-year check (100%) conserved enumerated mass within 0,01%, with a global maximum relative error of $5{,}85 \times 10^{-8}$ and representative decennial errors in 1920AD, 1930AD, 1940AD, 1950AD and 1960AD remaining below $1{,}33 \times 10^{-8}$. Within the Mandate chapter itself, summing the three Iraqi vilayet liwa clusters in 1920AD (1.360.304 in Baghdad, 785.600 in Basra and 785.468 in Mosul) yields 2.931.372, matching the Mandate administrative total of 2,849M within 2,9% once tribal nomad adjustments on the desert fringes are accounted for. In Palestine, summing the two sub-district groups reproduces the official 1922AD (472k plus 285,2k = 757,2k) and 1931AD (685k plus 350,8k = 1,04M) censuses exactly, and matches the 1945AD settled total of 1.764.520 prior to nomadic adjustments.

<figure class="crd-table-figure" id="tab:modern-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Modern Span</th><th class="crd-th">Leading Disaggregation Unit</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">ADM2</td><td class="crd-td">88</td><td class="crd-td">1977-2024AD</td><td class="crd-td">Al-Basrah (3,66M in 2024AD)</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">1981-2021AD</td><td class="crd-td">Aleppo (4,12M in 2021AD)</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">1970-2017AD</td><td class="crd-td">District series</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">1994-2021AD</td><td class="crd-td">Amman (4,64M in 2021AD)</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">1983-2021AD</td><td class="crd-td">Tel Aviv (1,48M in 2021AD)</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">1997-2023AD</td><td class="crd-td">District series</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">ADM1</td><td class="crd-td">5</td><td class="crd-td">1982-2021AD</td><td class="crd-td">District series</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Modern geoBoundaries subadministrative units matched across the seven successor jurisdictions, showing administrative level, unit count, census span and leading polygon.</figcaption>
</figure>

## Settlement Ledger Saturation, Foundation Truncation and Zipf Structure

Direct case-by-case assessment from official Mandate and successor-state censuses evaluated towns across Iraq's 1920AD Civil Administration estimates and 1947AD and 1957AD censuses, Syria's French Mandate civil registries and 1960AD census, Lebanon's 1932AD census and caza registries, British Mandate Palestine's 1922AD and 1931AD censuses and 1945AD Village Statistics, Transjordan's colonial reports and Jordan's 1952AD and 1961AD censuses, and British Cyprus's 1921AD, 1931AD, 1946AD and 1960AD censuses alongside archival monographs [@Greenshields2025Settlment; @Marom2021Jind; @Marom2024Lajjun]. After excluding 36 redundant, suburban or overlapping candidates from the ledger, 138 individually assessed Mandate-era settlements enter the final gazetteer with 0% back-projected or crowd-sourced fallback entries. Iraq contributes 28 towns, Israel 27, Syria 23, Cyprus 19, Lebanon 15, Jordan 14 and Palestine 12.

To prevent twentieth-century planned settlements and agricultural colonies from receiving anachronistic early-Mandate populations, explicit foundation-year truncation was applied to ten settlements: Zarqa (1902AD) in Transjordan, Tel Aviv (1909AD), Ramat Gan (1921AD), Bnei Brak (1924AD), Herzliya (1924AD), Afula (1925AD), Bat Yam (1926AD), Netanya (1929AD) and Holon (1935AD) in Mandate Palestine, and Qamishli (1926AD) in the Syrian Jazira [@Beenstock2025Origins; @Remer2025Degania]. None of these settlements carry any positive population prior to their historical foundation date. Across all $n = 138$ individually assessed settlements at peak population, log-log rank-size testing yields a Zipf exponent $\alpha = 1{,}31$ with $R^2 = 0{,}94$, confirming a steep, primate urban hierarchy dominated by Mandate administrative capitals and Mediterranean ports.

# Results

## Regional Totals and Mandate-Era Growth

Across the four decades between 1918AD and 1960AD, every territory under British or French administration experienced sustained demographic expansion once post-1918AD famine recovery gave way to falling crude death rates. Figure \ref{fig:trajectory} traces the aggregate population across the active Mandate domains alongside the leading jurisdictions at the close of the period. While Iraq dominated the regional total throughout (rising from 2,85M in 1918AD to 3,45M at independence in 1932AD and 4,82M by the 1947AD census), Syria grew by 64,9% between 1918AD and 1946AD (1,85M to 3,05M), Greater Lebanon doubled from 580k to 1,18M over the same span, Transjordan rose by 91,1% (225k to 430k) and Mandate Palestine nearly tripled from 680k in 1918AD to 1,97M in 1947AD. Cyprus, tracked across the full 42-year span to 1960AD, grew by 91,2% from 300k to 573,6k.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mandates-levant-iraq-cyprus/fig2_mandates_levant_iraq_cyprus_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate Mandate population trajectory across active jurisdictions from 1918AD to 1960AD and leading regional units at terminal benchmarks.</figcaption>
</figure>

## Subadministrative Enumerations across Syria, Lebanon, Jordan, Palestine, Iraq and Cyprus

Provincial and district enumerations reveal sharp internal shifts hidden behind national totals. Table \ref{tab:hist-subadmin} compiles the nine historical subadministrative series extending back to the late Ottoman baseline of 1881AD and 1914AD through the inter-war Mandate censuses. In Syria, the combined Aleppo and Damascus vilayet zone climbed from 1,95M in 1914AD to 2,14M in 1922AD, 2,62M in 1938AD and 3,043M in 1947AD [@Abdulla2022; @Stanley2019Syria]. Within northern Syria, agricultural settlement of the Jazira and Kurdish-Armenian migration transformed sparsely populated frontier kazas around Qamishli and Hasakeh into permanent market towns, even as the 1939AD transfer of Alexandretta detached Antioch and Iskenderun [@Chukov2022Kurdish; @Tillo2022Lights; @Galletti2007Some; @Pashayan2026Minority]. Alawite mountain districts along the Latakia coast grew steadily under French autonomous administration before integration into the Syrian Republic in 1936–1946AD [@Goldsmith2012Politics].

In Lebanon, the 1932AD census enumerated 793.426 inhabitants across Beirut and the four provincial districts of Mount Lebanon, North Lebanon, South Lebanon and the Bekaa, rebounding decisively from the wartime famine losses reflected in the dip from 680k (1914AD) to 609k (1922AD) [@Saber2023French; @Kastrissianakis2016Exploring]. By 1945AD Lebanon's population reached 1,147M. In Iraq, growth between the 1920AD British administration estimate and the 1947AD census was fastest in the Baghdad Central Liwas (1.360.304 to 2.305.000, +69,4%) and the Mosul Northern Liwas (785.468 to 1.365.000, +73,8%), where Kirkuk oil development and northern cereal cultivation expanded rapidly, while the Basra Southern Liwas (Basra, Muntafiq and Amara) grew more moderately from 785.600 to 1.146.000 (+45,9%) as rural marsh and sharecropping populations migrated towards Baghdad and Basra port.

In Mandate Palestine, the split between the northern, coastal and Negev sub-districts on one hand and the Jerusalem, Hebron, Nablus and Gaza sub-districts on the other captures diverging demographic dynamics prior to 1948AD. Between 1922AD and 1945AD, the coastal and northern sub-districts grew by 156,4% (from 472k to 1,21M), fuelled by Zionist immigration into Tel Aviv, Haifa and the Sharon plain alongside Arab coastal labour migration, whereas the central hill country and Gaza rose by 94,4% (from 285.182 to 554.520) primarily through high natural increase [@Beenstock2025Origins; @Anderson2017British; @Marom2024Lajjun]. Across the sea in Cyprus, six British colonial districts recorded unbroken growth from 186.173 in 1881AD through 274.108 (1911AD), 310.715 (1921AD), 347.959 (1931AD) and 450.114 (1946AD) to 573.566 in 1960AD, driven by malaria eradication and falling post-war infant mortality.

<figure class="crd-table-figure" id="tab:hist-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subadministrative Unit</th><th class="crd-th">1881AD</th><th class="crd-th">1914AD</th><th class="crd-th">Early Mandate</th><th class="crd-th">Mid Mandate</th><th class="crd-th">Terminal Count</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Vilayets of Aleppo &amp; Syria (Damascus)</strong></td><td class="crd-td">1,45M</td><td class="crd-td">1,95M</td><td class="crd-td">2,14M (1922)</td><td class="crd-td">2,62M (1938)</td><td class="crd-td">3,04M (1947)</td></tr>
<tr><td class="crd-td"><strong>Mutasarrifate of Mount Lebanon &amp; Beirut</strong></td><td class="crd-td">520k</td><td class="crd-td">680k</td><td class="crd-td">609k (1922)</td><td class="crd-td">793,4k (1932)</td><td class="crd-td">1,15M (1945)</td></tr>
<tr><td class="crd-td"><strong>Transjordan (Sanjaks of Karak &amp; Balqa)</strong></td><td class="crd-td">185k</td><td class="crd-td">225k</td><td class="crd-td">225,3k (1922)</td><td class="crd-td">300k (1938)</td><td class="crd-td">586,9k (1952)</td></tr>
<tr><td class="crd-td"><strong>Mandate Palestine (Northern, Coastal &amp; Negev Sub-Districts)</strong></td><td class="crd-td">310k</td><td class="crd-td">460k</td><td class="crd-td">472k (1922)</td><td class="crd-td">685k (1931)</td><td class="crd-td">872,7k (1948)</td></tr>
<tr><td class="crd-td"><strong>Mandate Palestine (Jerusalem, Hebron, Nablus &amp; Gaza Sub-Districts)</strong></td><td class="crd-td">190k</td><td class="crd-td">262k</td><td class="crd-td">285,2k (1922)</td><td class="crd-td">350,8k (1931)</td><td class="crd-td">1,02M (1952)</td></tr>
<tr><td class="crd-td"><strong>Baghdad Vilayet (Central Liwas: Baghdad, Diyala, Anbar, Babil, Karbala, Kut)</strong></td><td class="crd-td">850k</td><td class="crd-td">1,18M</td><td class="crd-td">1,36M (1920)</td><td class="crd-td">-</td><td class="crd-td">2,31M (1947)</td></tr>
<tr><td class="crd-td"><strong>Basra Vilayet (Southern Liwas: Basra, Muntafiq/Dhi Qar, Amara/Maysan)</strong></td><td class="crd-td">470k</td><td class="crd-td">650k</td><td class="crd-td">785,6k (1920)</td><td class="crd-td">-</td><td class="crd-td">1,15M (1947)</td></tr>
<tr><td class="crd-td"><strong>Mosul Vilayet (Northern Liwas: Mosul, Erbil, Kirkuk, Sulaymaniyah)</strong></td><td class="crd-td">480k</td><td class="crd-td">685k</td><td class="crd-td">785,5k (1920)</td><td class="crd-td">-</td><td class="crd-td">1,36M (1947)</td></tr>
<tr><td class="crd-td"><strong>Cyprus (6 British Colonial Districts)</strong></td><td class="crd-td">186,2k</td><td class="crd-td">-</td><td class="crd-td">310,7k (1921)</td><td class="crd-td">348k (1931)</td><td class="crd-td">573,6k (1960)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Historical subadministrative census enumerations from 1881AD to 1960AD across Ottoman vilayets, Mandate districts, Iraqi liwas and British Cyprus.</figcaption>
</figure>

## Spatial Density, Urban Expansion and Metropolitan Primacy

As Figure \ref{fig:density} illustrates, continuous population density in 1930AD remained overwhelmingly concentrated along a crescent linking the Nile-Sinai approaches, coastal Palestine, Mount Lebanon, western Syria and the Mesopotamian river axis, leaving the Syrian desert and southern Transjordan below 1 inhabitant per km². Mean territory densities at terminal benchmarks varied by more than an order of magnitude, from around 4,8 persons per km² in Transjordan (1946AD) and 7,9 in Iraq (1932AD) to 16,4 in Syria (1946AD), 61,4 in Cyprus (1960AD), 68,9 in Palestine (1948AD) and 117,6 in Greater Lebanon (1946AD).

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mandates-levant-iraq-cyprus/fig3_mandates_levant_iraq_cyprus_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Continuous kriged and census-scaled population surface at the 1930AD Mandate benchmark alongside mean territory densities in inhabitants per km².</figcaption>
</figure>

Urban expansion outpaced national growth across all seven successor territories, raising the combined population of the 138 individually assessed Mandate-era towns from 1,83M across the early-Mandate enumerations (1918–1922AD) to 2,64M at mid-Mandate (1930–1936AD) and 3,94M across 1945–1947AD, with Iraq, Syria, Lebanon, Jordan and Cyprus continuing to 5M in 1957–1960AD and the full 138-site gazetteer totalling 5,88M in combined peak population (Figure \ref{fig:settlements} and Table \ref{tab:top-cities}). Baghdad nearly quadrupled from 202k in 1920AD to 340k in 1935AD, 515,5k at the 1947AD census and 793,2k in 1957AD as railways, British-built administrative ministries and southern rural migration concentrated Iraq's urban growth in the capital [@Bosworth2007Historic]. Across northern and southern Iraq, Mosul grew from 72k in 1920AD to 133,6k (1947AD) and 178,2k (1957AD), Basra from 54k to 164,9k as Iraq's sole deep-water oil and maritime outlet, Kirkuk more than quadrupled from 28k to 120,4k following the 1927AD Baba Gurgur oil discovery, Sulaymaniyah expanded from 18,5k to 48,8k and Erbil from 15,5k to 39,9k.

In the Levant, Beirut nearly quadrupled from 115k in 1920AD to 161k at the 1932AD census, 240k in 1946AD and 450k in 1960AD as port transit, banking and Armenian and Palestinian refugee quarters turned it into the commercial hub of the French Levant, while Tripoli expanded from 38k to 115k [@Kastrissianakis2016Exploring; @Greenshields2025Settlment]. Damascus grew from 170k in 1922AD to 291,2k in 1946AD and 530k at the 1960AD Syrian census, Aleppo from 156,7k to 324,9k and 425,5k, and Homs from 52k to 137,2k. The most dramatic transformation among inland capitals occurred in Amman: from a Circassian and Arab Hejaz Railway village of 3,5k in 1918AD, it grew to 10,5k in 1930AD and 30k in 1945AD after becoming Emirate capital in 1921AD before post-1948AD Palestinian refugee settlement propelled it to 108,3k at the 1952AD housing census and 218k in 1960AD, alongside neighbouring Zarqa (1,8k in 1918AD to 28,5k in 1952AD and 82k in 1960AD). Along the Palestinian coast, Tel Aviv expanded eleven-fold from 15,2k in 1922AD to 46,1k in 1931AD and 166,7k in 1945AD (flanked by Jaffa at 47,7k to 94,3k and newly founded satellites Ramat Gan, Bnei Brak, Bat Yam and Holon), driven by agglomeration economies, Jewish municipal administration and white-collar service employment [@Beenstock2025Origins; @VRIES1997Productive; @Remer2025Degania]. Haifa grew more than five-fold from 24,6k in 1922AD to 50,4k in 1931AD and 128,8k in 1945AD around the deep-water harbour opened in 1933AD and the Kirkuk-Haifa oil pipeline terminus, while Mandate Jerusalem more than doubled from 62,6k in 1922AD to 90,5k in 1931AD and 157,1k in 1945AD [@Daam2022Chapter; @Rioli2020Breach].

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mandates-levant-iraq-cyprus/fig4_mandates_levant_iraq_cyprus_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution across 138 individually assessed Mandate-era settlements and peak populations of the twelve largest urban centres from 1918AD to 1960AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:top-cities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">1918-1922AD</th><th class="crd-th">1930-1936AD</th><th class="crd-th">1945-1947AD</th><th class="crd-th">1957-1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">Iraq</td><td class="crd-td">202k (1920)</td><td class="crd-td">340k (1935)</td><td class="crd-td">515,5k (1947)</td><td class="crd-td">793,2k (1957)</td></tr>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">Syria</td><td class="crd-td">170k (1922)</td><td class="crd-td">235k (1936)</td><td class="crd-td">291,2k (1946)</td><td class="crd-td">530k (1960)</td></tr>
<tr><td class="crd-td"><strong>Beirut</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">115k (1920)</td><td class="crd-td">161k (1932)</td><td class="crd-td">240k (1946)</td><td class="crd-td">450k (1960)</td></tr>
<tr><td class="crd-td"><strong>Aleppo</strong></td><td class="crd-td">Syria</td><td class="crd-td">156,7k (1922)</td><td class="crd-td">255k (1936)</td><td class="crd-td">324,9k (1946)</td><td class="crd-td">425,5k (1960)</td></tr>
<tr><td class="crd-td"><strong>Amman</strong></td><td class="crd-td">Jordan</td><td class="crd-td">3,5k (1918)</td><td class="crd-td">10,5k (1930)</td><td class="crd-td">30k (1945)</td><td class="crd-td">218k (1960)</td></tr>
<tr><td class="crd-td"><strong>Mosul</strong></td><td class="crd-td">Iraq</td><td class="crd-td">72k (1920)</td><td class="crd-td">98k (1935)</td><td class="crd-td">133,6k (1947)</td><td class="crd-td">178,2k (1957)</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv</strong></td><td class="crd-td">Israel</td><td class="crd-td">15,2k (1922)</td><td class="crd-td">46,1k (1931)</td><td class="crd-td">166,7k (1945)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Basra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">54k (1920)</td><td class="crd-td">76k (1935)</td><td class="crd-td">101,5k (1947)</td><td class="crd-td">164,9k (1957)</td></tr>
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">Israel</td><td class="crd-td">62,6k (1922)</td><td class="crd-td">90,5k (1931)</td><td class="crd-td">157,1k (1945)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Homs</strong></td><td class="crd-td">Syria</td><td class="crd-td">52k (1922)</td><td class="crd-td">75k (1936)</td><td class="crd-td">100k (1946)</td><td class="crd-td">137,2k (1960)</td></tr>
<tr><td class="crd-td"><strong>Haifa</strong></td><td class="crd-td">Israel</td><td class="crd-td">24,6k (1922)</td><td class="crd-td">50,4k (1931)</td><td class="crd-td">128,8k (1945)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kirkuk</strong></td><td class="crd-td">Iraq</td><td class="crd-td">28k (1920)</td><td class="crd-td">44k (1935)</td><td class="crd-td">68,3k (1947)</td><td class="crd-td">120,4k (1957)</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">38k (1920)</td><td class="crd-td">51,2k (1932)</td><td class="crd-td">85k (1946)</td><td class="crd-td">115k (1960)</td></tr>
<tr><td class="crd-td"><strong>Hama</strong></td><td class="crd-td">Syria</td><td class="crd-td">36k (1922)</td><td class="crd-td">55k (1936)</td><td class="crd-td">71,4k (1946)</td><td class="crd-td">97,4k (1960)</td></tr>
<tr><td class="crd-td"><strong>Jaffa</strong></td><td class="crd-td">Israel</td><td class="crd-td">47,7k (1922)</td><td class="crd-td">51,9k (1931)</td><td class="crd-td">94,3k (1945)</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading fifteen urban centres in the Mandate and colonial settlement ledger across documented census windows, 1918AD to 1960AD.</figcaption>
</figure>

## Palestinian Landlessness, Bedouin Sedentarisation and the 1948AD Nakba

Behind the aggregate growth of Mandate Palestine lay acute structural tension over land tenure, public health and political representation. Between 1929AD and 1936AD, rising rural natural increase collided with land sales from absentee landlords to Zionist purchasing agencies, creating a growing class of landless Arab cultivators who drifted into shantytowns around Haifa and Jaffa [@Anderson2017British; @Kreiner2025British]. In the Beersheba sub-district and the Jordan Rift, Mandate registration policies and drought pressures gradually sedentarised semi-nomadic Bedouin encampments into permanent stone and mudbrick hamlets [@Frantzman2011Bedouin]. At the same time, village-level studies around Lydda and al-Lajjun document expanding grain and citrus output alongside falling mortality, while archival investigations of Gaza City quarters and British medical missions trace an early mortality transition in which infant survival rose faster than fertility fell [@Marom2021Jind; @Marom2024Lajjun; @Scott2001Mortality; @Hasso2021Children].

These cumulative pressures culminated in the 1947–1949AD conflict and the 1948AD Nakba, which violently reordered the population map of the southern Levant [@Koylu2025Israel; @Moran2025Religious; @Rioli2020Breach]. Roughly 700k–750k Palestinian Arabs fled or were expelled from coastal, Galilee and mixed-urban districts inside the newly established State of Israel, shifting demographic mass abruptly across armistice lines. In the subadministrative series (Table \ref{tab:hist-subadmin}), the northern, coastal and Negev sub-districts fell from 1,21M in 1945AD to 872,7k in 1948AD even as Jewish mass immigration began, whereas the West Bank and Gaza sub-districts jumped from 554.520 inhabitants in 1945AD to 1,02M by 1952AD. Even prior to 1948AD, Mandate-era Gaza City had nearly doubled from 17,5k in 1922AD to 34,2k in 1945AD alongside Khan Yunis (3,9k to 11,2k), Hebron (16,6k to 24,6k), Nablus (15,9k to 23,3k), Ramallah (3,1k to 5,1k) and Rafah (599 to 2,2k); after 1948AD, the permanent incorporation of refugee camps drove explosive post-Mandate growth across Gaza, the West Bank, Lebanon and Jordan, visible most starkly in Amman (30k in 1945AD to 108,3k in 1952AD and 218k in 1960AD) and Zarqa (10,5k to 28,5k and 82k) [@Scott2001Mortality; @Muhsen2017Urban; @Dionigi2017Statehood].

# Limitations

Four structural constraints qualify the precision of these estimates. First, nomadic pastoralists in the Iraqi Jazira, the Syrian Badiya, eastern Transjordan and the Beersheba Negev were consistently under-counted in early Mandate tax lists and 1920–1922AD estimates, while rural female and infant under-registration persisted in conservative agrarian districts until mid-century [@Frantzman2011Bedouin; @Galletti2007Some]. Second, political and confessional sensitivities prevented Lebanon from conducting any national census after 1932AD [@Saber2023French; @Dionigi2017Statehood], so the fifteen Lebanese towns in the settlement gazetteer rely on the 1932AD enumeration paired with Mandate civil registries, 1943AD Admiralty handbooks and 1946–1960AD municipal projections rather than decennial post-war censuses.

Third, international boundary changes complicate continuous longitudinal comparison: the 1939AD transfer of the Sanjak of Alexandretta to Turkey excised a major mixed Turkish-Arab-Armenian population from Mandate Syria [@USTUN2016Example; @Hovhannisyan2025Catholicos], while the 1948AD armistice lines bisected Jerusalem and severed rural villages such as Jindas and al-Lajjun from their pre-war market towns [@Marom2021Jind; @Marom2024Lajjun; @Oron2021Century]. Fourth, because each jurisdiction's settlement series preserve authentic Mandate and successor-state census dates rather than synthetic decennial interpolations — closing at 1945AD (1948AD for Holon) in Mandate Palestine and at 1957AD in Iraq — abrupt single-year shocks such as the 1941AD Anglo-Iraqi war displacements or the 1948–1949AD Nakba appear across inter-censal jumps (such as Amman's leap from 30k in 1945AD to 72k in 1949AD and 108,3k in 1952AD) rather than annual time series.

# Conclusion

Between 1918AD and 1960AD the Mandate and colonial territories of the Levant, Iraq and Cyprus underwent a decisive transition from war-ravaged late Ottoman provinces to urbanising nation-states. Across six jurisdictions covering 760,7k km², population nearly doubled from 6,49M in 1918AD to roughly 11,9M at the 1946–1947AD transition, while Cyprus continued upward to 573,6k by 1960AD. Simultaneously, urban concentration reshaped regional geography: 138 individually assessed Mandate-era towns expanded from 1,83M inhabitants across 1918–1922AD to 3,94M in 1945–1947AD and 5,88M in combined peak population (5M across Iraq, Syria, Lebanon, Jordan and Cyprus in 1957–1960AD), anchored by primate capitals in Baghdad, Damascus, Beirut, Aleppo and Amman alongside Mosul, Basra, Tel Aviv, Jerusalem, Haifa, Nicosia and Limassol. Disaggregating historical vilayet, liwa and Mandate district censuses onto 169 modern administrative polygons via mass-conserving pycnophylactic scaling and Matérn ($\nu = 3/2$) kriging preserves exact enumerated totals while exposing the ecological corridors, refugee ruptures and metropolitan agglomerations that defined the twentieth-century Near East.

# Appendix

## Country-Level Urban Ledger Summary

Table \ref{tab:appendix-country-summary} aggregates all 138 individually assessed Mandate-era settlements by modern successor jurisdiction across four documented census windows from 1918AD to 1960AD alongside combined peak totals.

<figure class="crd-table-figure" id="tab:appendix-country-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">1918-1922AD</th><th class="crd-th">1930-1936AD</th><th class="crd-th">1945-1947AD</th><th class="crd-th">1957-1960AD</th><th class="crd-th">Peak Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">28</td><td class="crd-td">635k</td><td class="crd-td">924,7k</td><td class="crd-td">1,3M</td><td class="crd-td">1,98M</td><td class="crd-td">1,98M</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">23</td><td class="crd-td">542,4k</td><td class="crd-td">815,6k</td><td class="crd-td">1,07M</td><td class="crd-td">1,61M</td><td class="crd-td">1,61M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">27</td><td class="crd-td">214,7k</td><td class="crd-td">331,5k</td><td class="crd-td">735,9k</td><td class="crd-td">-</td><td class="crd-td">742,2k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">15</td><td class="crd-td">228,8k</td><td class="crd-td">310,8k</td><td class="crd-td">464,4k</td><td class="crd-td">769k</td><td class="crd-td">769k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">14</td><td class="crd-td">50,1k</td><td class="crd-td">69,9k</td><td class="crd-td">107,8k</td><td class="crd-td">438,6k</td><td class="crd-td">440,5k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">19</td><td class="crd-td">82,1k</td><td class="crd-td">97,8k</td><td class="crd-td">134,9k</td><td class="crd-td">197,8k</td><td class="crd-td">199,7k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">12</td><td class="crd-td">75,7k</td><td class="crd-td">88k</td><td class="crd-td">133,6k</td><td class="crd-td">-</td><td class="crd-td">133,7k</td></tr>
<tr><td class="crd-td"><strong>All Jurisdictions</strong></td><td class="crd-td">138</td><td class="crd-td">1,83M</td><td class="crd-td">2,64M</td><td class="crd-td">3,94M</td><td class="crd-td">5M</td><td class="crd-td">5,88M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued urban populations across the 138 individually assessed Mandate-era settlements grouped by successor jurisdiction across census windows, 1918AD to 1960AD.</figcaption>
</figure>

## Leading Modern Subadministrative Units

Table \ref{tab:appendix-modern-top} lists the ten largest modern geoBoundaries subadministrative polygons intersecting the Mandate domain alongside their areas and earliest and latest recorded modern census counts.

<figure class="crd-table-figure" id="tab:appendix-modern-top">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Earliest Census</th><th class="crd-th">Latest Census</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aleppo (SYR)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">19.765</td><td class="crd-td">1,88M (1981)</td><td class="crd-td">4,12M (2021)</td></tr>
<tr><td class="crd-td"><strong>Amman (JOR)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">8.407</td><td class="crd-td">1,58M (1994)</td><td class="crd-td">4,64M (2021)</td></tr>
<tr><td class="crd-td"><strong>Al-Basrah (IRQ)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">1.181</td><td class="crd-td">1,01M (1977)</td><td class="crd-td">3,66M (2024)</td></tr>
<tr><td class="crd-td"><strong>Rural Damascus (SYR)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">26.517</td><td class="crd-td">917,4k (1981)</td><td class="crd-td">3,37M (2021)</td></tr>
<tr><td class="crd-td"><strong>Erbil (IRQ)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">2.660</td><td class="crd-td">541,5k (1977)</td><td class="crd-td">2,52M (2024)</td></tr>
<tr><td class="crd-td"><strong>Al-Mosul (IRQ)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">4.758</td><td class="crd-td">1,59M (2009)</td><td class="crd-td">2,35M (2024)</td></tr>
<tr><td class="crd-td"><strong>Al-Sulaymaniyah (IRQ)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">2.322</td><td class="crd-td">690,6k (1977)</td><td class="crd-td">2,29M (2024)</td></tr>
<tr><td class="crd-td"><strong>Hama (SYR)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">11.269</td><td class="crd-td">736,5k (1981)</td><td class="crd-td">2,15M (2021)</td></tr>
<tr><td class="crd-td"><strong>Damascus (SYR)</strong></td><td class="crd-td">ADM1</td><td class="crd-td">72</td><td class="crd-td">1,11M (1981)</td><td class="crd-td">2,1M (2021)</td></tr>
<tr><td class="crd-td"><strong>Al-Karkh (IRQ)</strong></td><td class="crd-td">ADM2</td><td class="crd-td">288</td><td class="crd-td">1,31M (2009)</td><td class="crd-td">2,08M (2024)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Ten largest modern geoBoundaries polygons anchoring pycnophylactic disaggregation across the Levant and Iraq.</figcaption>
</figure>

# Sources

::: {#refs}
:::

<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>
