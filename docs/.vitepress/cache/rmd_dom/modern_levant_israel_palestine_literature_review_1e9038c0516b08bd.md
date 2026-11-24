---
title: "Syria, Lebanon, Jordan, Israel and Palestine after 1946"
subtitle: "Censuses, Displacement and Urban Growth, 1946AD-2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_levant_israel_palestine_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_levant_israel_palestine_spatial.png"
hero_caption: "Forty-one sub-regional mask units and 6.386 catalogued settlements across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2026AD, contrasting the dense Mediterranean littoral with the Orontes-Euphrates corridors and arid steppe interior."
hero_label: "fig:hero-modern-levant-israel-palestine"
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

Between the end of the French Mandate in Syria and Lebanon in 1946AD and 2026AD, the lands bounded by the Taurus foothills, the Euphrates steppe, the Sinai frontier and the eastern Mediterranean littoral underwent one of the fastest demographic expansions in modern Eurasia. Across Syria, Lebanon, Jordan, Israel and Palestine, aggregate population multiplied more than eightfold in eight decades, rising from 6,55M inhabitants in 1946AD to 9,85M in 1960AD, 15,25M in 1975AD, 24,65M in 1990AD, 37,25M in 2005AD, 44,15M in 2015AD and 54,8M in 2025AD at an average compound rate of 2,73% per year. Unlike tranquil post-war transitions elsewhere, this growth was repeatedly reshaped by geopolitical rupture: the 1948 Nakba and the founding of Israel, subsequent Mizrahi and 1990s post-Soviet immigration waves, the 1967 June War, the 1975AD-1990AD Lebanese Civil War and the post-2011 Syrian conflict that displaced millions into Jordan, Lebanon and Turkey. HANDBOOK harmonises national censuses from CBS Syria, CAS Lebanon, DOS Jordan, CBS Israel and PCBS Palestine across 41 areal-mask units, 4.368 five-arcminute cells and 6.386 catalogued settlements, linking 76 geoBoundaries first- and second-order subadministrative census units to continuous biophysical surfaces via metric-isotropic radial distance fields, non-stationary Matérn ($\nu = 3/2$) kriging and strictly mass-conserving pycnophylactic scaling.

<figure class="crd-figure-block" id="fig:hero-modern-levant-israel-palestine">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine/fig1_modern_levant_israel_palestine_spatial.png" alt="fig:hero-modern-levant-israel-palestine" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Forty-one sub-regional mask units and 6.386 catalogued settlements across Syria, Lebanon, Jordan, Israel and Palestine between 1946AD and 2026AD, contrasting the dense Mediterranean littoral with the Orontes-Euphrates corridors and arid steppe interior.</figcaption>
</figure>

# Background

## Physical Geography, Rainfall Gradients and Post-Mandate Frontiers

From the perspective of historical demography, the modern Levant forms a narrow ribbon of Mediterranean fertility wedged between the sea and the Arabian steppe. Spanning roughly 312,7k km² across Syria (185,8k km²), Jordan (88,6k km²), Israel (22,2k km²), Lebanon (10k km²) and Palestine (6,1k km²), the region contains sharp ecological contrasts over remarkably short distances. Along the coast from Latakia and Tripoli through Beirut, Haifa and Tel Aviv to Gaza, winter cyclonic rains deliver 450 mm to 900 mm annually, nourishing citrus groves, coastal plains and dense urban ports. Immediately inland, the Mount Lebanon chain, the Syrian coastal range and the Galilean-Judaean limestone ridge catch orographic precipitation exceeding 1.000 mm on western slopes before plunging abruptly into the Jordan Rift Valley and the Bekaa-Orontes trench [@Younes2023Understand; @Muhsen2017Urban]. East of the rift and the Anti-Lebanon ridge, annual rainfall declines steadily across the Hauran basalt plateau, the Damascus oasis (Ghouta) and the Aleppo-Hama wheat belt until, beyond the 200 mm isohyet, dry-farming yields to semi-arid grazing steppe across eastern Jordan, central Homs and the Syrian desert, broken only by the Euphrates river ribbon passing Ar-Raqqah and Dayr az-Zawr [@Mohamed2020Monitoring; @Omran2017Urban].

Between 1946AD and 1948AD, the rapid dissolution of the French and British Mandates replaced continuous late Ottoman and interwar trade circuits with five sharply guarded state boundaries. Syria achieved full independence in April 1946 following Lebanon's formal separation in 1943AD-1946AD; Transjordan became the Hashemite Kingdom of Jordan in May 1946; and the end of the British Mandate in Palestine in May 1948 triggered the first Arab-Israeli war, leaving Israel within the 1949 Armistice lines, the West Bank under Jordanian administration and the Gaza Strip under Egyptian military control [@Anon2008Population; @Bartolo2024Demography; @Dhurandhar2026Forensic]. Over the ensuing eighty years, these post-Mandate borders acted as demographic membranes: capital cities such as Damascus, Beirut and Amman pulled rural villagers out of rain-fed hill districts and steppe margins, while warfare and refugee treaties redirected millions across frontiers that had scarcely existed two generations earlier [@Knudsen2024Urban; @Ahmad2012Syria].

## The 1948 and 1967 Displacements and Palestinian Demographic Structure

No demographic event in the post-1946 Levant matched the sudden spatial reordering of the 1948 Nakba. Prior to partition, the British Mandate Village Statistics of 1945AD recorded roughly 1,21M inhabitants across the northern, coastal and Negev sub-districts alongside 554,5k in the Jerusalem, Hebron, Nablus and Gaza sub-districts. During the 1947AD-1949AD hostilities, between 700k and 750k Palestinian Arabs fled or were expelled from coastal cities such as Jaffa, Haifa, Lydda and Ramle and from hundreds of Galilean and coastal villages [@Anon2008Population; @Lentin2017Race; @Amoruso2019Introducti]. Within months, the demographic weight of the Gaza Strip multiplied more than threefold as refugees crowded into urban quarters and eight UNRWA camps around Gaza City, Jabalyah, Khan Yunis and Rafah, creating one of the highest sustained population densities anywhere on earth [@Scott2001Mortality; @Fayad2025Political]. Simultaneously, hundreds of thousands entered the West Bank and East Bank of Jordan, where Transjordan's modest 1947AD population of 375k swelled to 586,9k on the East Bank alone by the 1952 housing census, while the West Bank stood near 740k [@Anon2008Population; @Bartolo2024Demography].

A second major shock arrived with the June 1967 war. Israeli forces occupied the West Bank, East Jerusalem, the Gaza Strip, the Sinai Peninsula and the Syrian Golan Heights (Quneitra governorate), triggering the Naksa displacement of roughly 300k to 400k Palestinians across the Jordan River alongside more than 100k Syrian civilians from Quneitra [@Anon2008Population; @Wood1989Israel; @Bartolo2024Demography]. Despite chronic political precarity, movement restrictions and intermittent conflict, Palestinian fertility remained among the highest in the Mediterranean basin throughout the late twentieth century, supported by early universal primary health improvements and sharp declines in infant mortality inside both Gaza and the West Bank [@Scott2001Mortality; @Courbage2006Enjeux; @Harker2012Precarious]. Total fertility rates stayed above 6 births per woman into the early 1990s before moderating gradually toward 3,4 to 3,9 in the 2010s, driving rapid natural increase across Hebron, Nablus, Ramallah and the Gaza Strip [@Courbage2006Enjeux; @Muhsen2017Urban; @Anonymous2020Israeli]. By the 1997, 2007 and 2017 PCBS censuses and 2023 projections, the Gaza governorate alone compressed 749,1k inhabitants onto 74 km²—an extraordinary 10.123 inhabitants per km²—prior to the devastating destruction and internal displacement of the war beginning in October 2023 [@Koylu2025Israel; @Ismaeel2025Violations; @Fayad2025Political].

## Israeli State Formation, Mass Immigration and Fertility Divergence

Israel's demographic trajectory after 1948AD stands apart from its Arab neighbours because state-sponsored immigration (*aliyah*) repeatedly supplemented natural increase with sudden external surges. At its first census in November 1948, Israel enumerated 872,7k residents (716,7k Jews and roughly 156k Arab citizens remaining within the armistice lines). Between 1948AD and 1951AD, nearly 687k Jewish immigrants arrived in two overlapping streams: displaced European Holocaust survivors and entire Jewish communities departing Iraq, Yemen, Libya, Egypt, Syria and North Africa [@Grinberg2013Ments; @Bartolo2024Demography]. To prevent complete concentration inside the Tel Aviv-Haifa-Jerusalem triangle, state planners built dozens of *ma'abarot* transit camps and planned development towns across the Galilee and northern Negev during the 1950s and early 1960s, founding Ashdod (1956AD), Qiryat Gat (1955AD), Dimona (1955AD), Arad (1962AD) and Karmi'el (1964AD) while expanding Beersheba and Ashqelon [@Grinberg2013Ments; @Lentin2017Race].

A second transformative wave occurred between 1989AD and 2000AD following the collapse of the Soviet Union, when approximately 900k to 1M immigrants from Russia, Ukraine, Belarus and the Caucasus settled across Haifa, Ashdod, Netanya, Petah Tiqwa, Rishon LeZiyyon and Beersheba, lifting national population by nearly a fifth in a single decade [@SimardGendron2011Fertility; @Bartolo2024Demography]. Parallel to immigration, Israel developed one of the sharpest internal fertility gradients in the industrialised world. While secular urban districts around Tel Aviv-Yafo aged slowly with fertility near replacement, ultra-Orthodox (*Haredi*) municipalities such as Bene Beraq, Modi'in Illit, Betar Illit and parts of Jerusalem maintained total fertility rates between 6 and 7 births per woman, reinforced by state housing expansion in West Bank settlements after 1967AD [@SimardGendron2011Fertility; @Rosenthal2016Establishe; @Anonymous2020Israeli]. Meanwhile, Israel's Arab minority—concentrated in Nazareth, the Galilee, the Triangle and the Negev Bedouin towns—experienced its own demographic transition, shifting from high rural fertility in the 1960s toward convergence with the national average around 2,7 to 3 births per woman by the 2020s [@Bartolo2024Demography; @Lentin2017Race].

## Syria: Agrarian Expansion, Rural-Urban Migration and Post-2011 Displacement

Among the five jurisdictions, Syria possessed by far the largest land area and demographic base, advancing from roughly 3,04M inhabitants at the 1947AD registration to 4,57M at the 1960AD census, 6,3M in 1970AD, 9,05M in 1981AD, 13,78M in 1994AD and 17,92M in 2004AD (excluding Palestinians and diaspora) under successive Central Bureau of Statistics (CBS Syria) enumerations [@Omran2017Urban; @Ahmad2012Syria]. Until the 1990s, state agricultural investments—most notably the Tabqa (Euphrates) Dam completed in 1973AD—turned northeastern Al-Hasakeh and Ar-Raqqah into booming cotton and irrigated wheat frontiers, raising Al-Hasakeh governorate from 669,8k in 1981AD to 1,28M in 2004AD [@Mohamed2020Monitoring]. At the same time, rapid rural natural increase outpaced farm plots in Idlib, Hama and Daraa, pushing hundreds of thousands of labour migrants into informal self-built rings (*ashwa'iyat*) encircling Damascus, Rural Damascus and eastern Aleppo [@Ahmad2012Syria; @Omran2017Urban]. Between 1981AD and 2004AD, Rural Damascus governorate more than doubled from 917,4k to 2,27M, while Aleppo governorate climbed from 1,88M to 4,05M.

That half-century of steady expansion broke abruptly after 2006AD. Severe multi-year drought across the eastern Jazira steppe between 2006AD and 2010AD ruined rain-fed harvests and pushed pastoral families toward southern suburbs on the eve of the 2011 uprising [@Olson2017People; @Ari2020Questionin]. As peaceful protests turned into prolonged civil war from 2011AD onward, Syria's demographic geography fractured along siege lines and front lines [@Morrison2018Providing; @Manachi2022General]. Heavy bombardment and economic collapse hollowed out eastern Aleppo, Homs, Dayr az-Zawr and parts of Rural Damascus: CBS governorate estimates show Aleppo contracting by roughly 750k residents between 2011AD (4,87M) and 2021AD (4,12M), while Homs stagnated from 1,8M to 1,79M [@Omran2017Urban; @Mohamed2020Monitoring]. Conversely, millions of internally displaced Syrians sought shelter in coastal Tartus and Latakia—where satellite land-cover analysis records rapid peri-urban expansion [@Younes2023Understand]—and across government-held Damascus and Hama, while over 5,5M fled abroad into Turkey, Lebanon, Jordan and Europe [@CAM2021Socioecono; @Knudsen2024Urban].

## Lebanon and Jordan: Confessional Equilibrium, Civil War and Refugee Absorption

Lebanon and Jordan illustrate two opposite statistical responses to external demographic shocks. In Lebanon, the 1932AD French Mandate census (793,4k residents) served as the constitutional bedrock for confessional power-sharing under the 1943 National Pact; precisely because differential Christian, Sunni, Shi'a and Druze fertility threatened that ratio, no official full population census has been conducted since 1932AD [@Knudsen2024Urban]. Instead, demographers rely on the 1970AD active-population sample survey by the Central Administration of Statistics (CAS Lebanon), municipal voter rolls, household budget surveys (1996AD, 2004AD, 2007AD, 2011AD, 2017AD) and UN refugee registrations. Lebanon's 1975AD-1990AD Civil War checked natural growth through battlefield casualties and massive overseas emigration of skilled professionals to the Gulf, North America and Europe, while driving rural Shi'a and Maronite families into segregated belts across Greater Beirut and Baabda (which reached 568,7k by 2017AD) [@Knudsen2024Urban]. After 2011AD, over 1M displaced Syrians arrived in the Beqaa, Akkar, North Lebanon and Beirut's informal settlements alongside earlier Palestinian camp populations, raising resident totals steeply without a formal census count [@Knudsen2024Urban].

Jordan, by contrast, conducted regular national censuses through the Department of Statistics (DOS Jordan) in 1952AD, 1961AD, 1979AD, 1994AD, 2004AD and 2015AD, documenting one of the most dramatic migration-driven expansions in modern history. Repeated regional crises converged on the Amman-Zarqa-Irbid highland corridor: the 1948 and 1967 Palestinian refugees, roughly 300k Jordanian-Palestinian returnees expelled from Kuwait during the 1990AD-1991AD Gulf crisis, hundreds of thousands of Iraqis after 2003AD and over 1,2M Syrians counted in the landmark November 2015 census [@Knudsen2024Urban]. Between 2004AD and 2015AD alone, Amman governorate doubled from 1,94M to 4,01M, Irbid surged from 928,3k to 1,77M, Zarqa climbed from 764,7k to 1,36M and border-adjacent Mafraq (site of Zaatari camp) more than doubled from 244,2k to 549,9k before reaching 637k in 2021AD.

# Methodology

## Areal Mask Partition and National Statistical Agencies

HANDBOOK models the modern Levant from 1946AD to 2026AD under Regime 3, designed for states possessing modern decennial enumerations, civil vital registers and subadministrative boundary polygons. The domain is partitioned into 41 contiguous sub-regional mask units covering 4.368 five-arcminute cells (roughly 312,7k km²): 15 units in Syria (the 14 governorates plus the UNDOF Golan disengagement buffer), 12 governorates in Jordan, 6 administrative districts in Israel, 6 governorates in Lebanon and 2 territorial entities in Palestine (the West Bank and the Gaza Strip). Seven evenly spaced chronological horizons anchor the regional trajectory at 1946AD, 1960AD, 1975AD, 1990AD, 2005AD, 2015AD and 2025AD, capturing the immediate post-Mandate baseline, early postcolonial industrialisation, post-1967 territorial shifts, the end of the Lebanese Civil War, pre-2011 Syrian stability, peak Syrian refugee displacement and contemporary post-pandemic projections.

Because no single statistical bureau covers all five jurisdictions, HANDBOOK reconciles five distinct national enumeration traditions. Syrian urban and governorate series draw upon CBS Syria censuses (1960AD, 1970AD, 1981AD, 1994AD, 2004AD) and mid-year civil-registration updates to 2021AD, cross-checked against post-2011 humanitarian displacement baselines [@Omran2017Urban; @Mohamed2020Monitoring]. Jordanian counts rely on DOS Jordan housing and population censuses (1952AD, 1961AD, 1979AD, 1994AD, 2004AD, 2015AD) and 2021AD governorate estimates, which explicitly enumerate non-citizen Syrian, Palestinian and Egyptian residents inside national borders. Israeli figures incorporate CBS Israel censuses (1948AD, 1961AD, 1972AD, 1983AD, 1995AD, 2008AD, 2022AD) and annual municipal population files, retaining explicit *foundation_year* truncation for post-1948 development towns such as Ashdod (1956AD), Qiryat Gat (1955AD), Dimona (1955AD), Arad (1962AD) and Karmi'el (1964AD) so modern cities never appear as anachronistic dots in 1946AD. Palestinian series combine PCBS censuses (1997AD, 2007AD, 2017AD) and 2023AD mid-year projections with pre-1997 Jordanian, Egyptian and Israeli Military Administration estimates [@Anon2008Population; @Courbage2006Enjeux]. Lebanese series bridge the absence of post-1932 national censuses using CAS Lebanon 1970AD survey tables, 1996AD-2017AD district estimates across 21 ADM2 *qada* units and UN refugee camp totals [@Knudsen2024Urban].

## Metric-Isotropic Radial Distance Fields and Non-Stationary Matérn Kriging

Even in a census-rich modern region, administrative polygons alone cannot reveal fine-grained settlement concentration inside large arid governorates such as Homs (43.552 km²), Rural Damascus (26.517 km²), Mafraq (26.697 km²) or Israel's HaDarom (Negev) district. Simply spreading governorate populations uniformly across polygon pixels would illuminate vast empty expanses of the Syrian desert and Wadi Araba at the expense of oasis valleys and coastal strips. To maintain crisp dasymetric realism across the entire 4.368-cell Levantine grid, HANDBOOK anchors modern disaggregation upon a continental biophysical suitability surface derived across the wider 168.112-cell macro-domain (3.416 Voronoi catchments and 83.857 historical domestic records).

Distances between urban anchors and raster cells are measured in true geodesic metres within local equal-area frames and normalised by each catchment's empirical Voronoi radius (median 32,51 km, ninetieth percentile 40,25 km) to produce dimensionless geodesic lags $u_{ij}$. Weighted least-squares regression first models background habitability intensity against five biophysical covariates: habitable land fraction ($\beta_{0,\text{hab}}$), natural vegetative productivity ($\beta_1$), terrain ecozone suitability ($\beta_2$), fluvial proximity decay ($\beta_3$) and coastal buffer proximity ($\beta_4$). Across the pre-industrial benchmark layer anchoring modern rural baselines, fluvial proximity ($\beta_3 = 0{,}0334$) and coastal proximity ($\beta_4 = 0{,}0282$) exert clear positive spatial attraction above positive baseline intercepts ($\beta_{0,\text{hab}} = 0{,}01$), ensuring that the Orontes, Euphrates, Jordan valley, Ghouta oasis and Mediterranean littoral retain high rural carrying capacity while hyper-arid Hamad and Negev interiors remain sparse. Residual spatial correlation is interpolated via a dual-range non-stationary Matérn ($\nu = 3/2$) kernel with regularised dimensionless bandwidths $\tau_1 = 1{,}35$ (raw $\tau_1 = 1{,}513$) and $\tau_2 = 2{,}9025$, short-range weight $c_1 = 0{,}8$, long-range weight $c_2 = 0{,}2$ and nugget-to-sill ratio $0{,}04$ (effective short range 49,17 km, residual semivariogram $R^2 = 0{,}9993$). An explicit two-cell urban buffer mask isolates compact metropolitan cores from surrounding farmland.

## Mass-Conserving Pycnophylactic Subadministrative Scaling

To prevent statistical leakage across international borders or governorate boundaries, HANDBOOK embeds all 41 areal-mask zones within high-resolution geoBoundaries administrative polygons [@Runfola2020GeoBoundaries]. Across the five Levantine jurisdictions, 76 matched modern subadministrative divisions—13 Syrian ADM1 governorates, 21 Lebanese ADM2 districts, 12 Jordanian ADM1 governorates, 14 Israeli ADM2 sub-districts and 16 Palestinian ADM2 governorates—supply exact multi-year census benchmarks alongside 5 historical late Ottoman and Mandate regional series (1881AD to 1952AD).

Every census polygon total is disaggregated onto underlying five-arcminute cells through strictly mass-conserving pycnophylactic scaling: rural suitability weights and urban settlement point masses distribute inhabitants smoothly inside each administrative boundary while iterative multiplicative balancing guarantees that the sum of cell values within every polygon reproduces the official census figure exactly. Across the macro-domain encompassing 29 historical units and 2.629 modern ADM1 and ADM2 districts evaluated over 83 census and benchmark years, 65.864 unit-year conservation checks establish 100% boundary adherence within 0,01%, with a global maximum relative error of $5{,}845 \times 10^{-8}$. Crucially, this two-tier design distinguishes between the uniform mask-weighted regional baseline stored in the staged chapter matrix (where each mask unit scales smoothly with aggregate regional growth) and the exact geoBoundaries ADM1 and ADM2 census trajectories tabulated below for post-1970 enumerations.

# Testing and Validation

Validating a multi-country demographic synthesis across active conflict zones requires auditing three distinct layers: settlement ledger deduplication, historical-to-modern continuity against late Ottoman and Mandate censuses, and exact subadministrative conservation across all 76 modern ADM1 and ADM2 units. Out of 15.251 official national census rows compiled across the five national bureaus (CBS Syria 2004, CBS Israel, PCBS Palestine, DOS Jordan and CAS Lebanon), 6.386 settlements meet independent spatial-core thresholds and enter the chapter ledger, while duplicate aliases and contiguous suburban municipalities are excluded or merged into their parent metropolitan nuclei to eliminate double counting across dense conurbations such as Greater Tel Aviv, Haifa, Damascus, Gaza and Ramallah (Table \ref{tab:levant-ledger}).

<figure class="crd-table-figure" id="tab:levant-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Statistical Agency &amp; Census Series</th><th class="crd-th">Included</th><th class="crd-th">Excluded</th><th class="crd-th">Candidates</th><th class="crd-th">Jurisdictional Scope</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central Bureau of Statistics (CBS Syria) Censuses (1960-2004)</strong></td><td class="crd-td">3.888</td><td class="crd-td">122</td><td class="crd-td">4.010</td><td class="crd-td">Syria (14 governorates, 1946-2025)</td></tr>
<tr><td class="crd-td"><strong>Central Bureau of Statistics (CBS Israel) Localities &amp; Censuses (1948-2024)</strong></td><td class="crd-td">895</td><td class="crd-td">62</td><td class="crd-td">957</td><td class="crd-td">Israel (6 districts / 14 ADM2, 1946-2025)</td></tr>
<tr><td class="crd-td"><strong>Palestinian Central Bureau of Statistics (PCBS) &amp; Village Statistics (1922-2017)</strong></td><td class="crd-td">484</td><td class="crd-td">21</td><td class="crd-td">505</td><td class="crd-td">West Bank &amp; Gaza (16 ADM2, 1946-2025)</td></tr>
<tr><td class="crd-td"><strong>Department of Statistics (DOS Jordan) Censuses (1952-2015)</strong></td><td class="crd-td">616</td><td class="crd-td">29</td><td class="crd-td">645</td><td class="crd-td">Jordan (12 governorates, 1946-2025)</td></tr>
<tr><td class="crd-td"><strong>Central Administration of Statistics (CAS Lebanon) &amp; 1932 Census</strong></td><td class="crd-td">503</td><td class="crd-td">16</td><td class="crd-td">519</td><td class="crd-td">Lebanon (6 governorates / 21 ADM2, 1946-2025)</td></tr>
<tr><td class="crd-td"><strong>All Five National Statistical Agencies</strong></td><td class="crd-td">6.386</td><td class="crd-td">250</td><td class="crd-td">6.636</td><td class="crd-td">41 mask units across 5 jurisdictions</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> National census agencies and settlement ledger counts across the five Levantine jurisdictions (6.386 included localities; merged or duplicate exclusions logged by jurisdiction).</figcaption>
</figure>

Before 1946AD, Ottoman *salname* registers and British and French Mandate enumerations establish the structural baseline against which post-war accelerations must be tested (Table \ref{tab:hist-subadmin}). In 1914AD, on the eve of the First World War, the Ottoman vilayets of Aleppo and Damascus held 1,95M inhabitants, Mount Lebanon and Beirut held 680k, the sanjaks of Karak and Balqa in Transjordan held only 225k and the districts of Palestine held 722k combined (460k in the coastal, northern and Negev districts and 262k in the Jerusalem, Hebron, Nablus and Gaza districts). Over the Mandate interlude from 1922AD to 1947AD, Syria expanded steadily from 2,14M to 3,04M (+42,2%), Lebanon recovered from wartime famine (609k in 1922AD) to 793,4k at the 1932AD census and 1,15M by 1945AD, and Mandate Palestine doubled from 757,2k in 1922AD to 1,76M by 1945AD under rapid Jewish immigration and declining Palestinian mortality [@Anon2008Population; @Grinberg2013Ments]. By contrast, Transjordan grew modestly to 375k in 1947AD before jumping 56,5% in just five years to 586,9k in 1952AD as West Bank and coastal refugees settled east of the river.

<figure class="crd-table-figure" id="tab:hist-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Historical Administrative Region</th><th class="crd-th">1914AD</th><th class="crd-th">1922AD</th><th class="crd-th">Interwar Benchmark</th><th class="crd-th">Transition Benchmark</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Vilayets of Aleppo and Syria (Damascus)</td><td class="crd-td">1,95M</td><td class="crd-td">2,14M</td><td class="crd-td">2,62M (1938)</td><td class="crd-td">3,04M (1947)</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">Mutasarrifate of Mount Lebanon and Beirut</td><td class="crd-td">680k</td><td class="crd-td">609k</td><td class="crd-td">793,4k (1932)</td><td class="crd-td">1,15M (1945)</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">Transjordan (Sanjaks of Karak and Balqa)</td><td class="crd-td">225k</td><td class="crd-td">225,3k</td><td class="crd-td">375k (1947)</td><td class="crd-td">586,9k (1952)</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">Mandate Palestine (Northern, Coastal and Negev Sub-Districts)</td><td class="crd-td">460k</td><td class="crd-td">472k</td><td class="crd-td">1,21M (1945)</td><td class="crd-td">872,7k (1948)</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">Mandate Palestine (Jerusalem, Hebron, Nablus and Gaza Sub-Districts)</td><td class="crd-td">262k</td><td class="crd-td">285,2k</td><td class="crd-td">554,5k (1945)</td><td class="crd-td">1,02M (1952)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Late Ottoman and Mandate subadministrative benchmarks (1914AD-1952AD) anchoring the post-1946 demographic transition across all five jurisdictions.</figcaption>
</figure>

Transitioning from Mandate districts to modern sovereign administration multiplies subadministrative granularity across geoBoundaries polygons [@Runfola2020GeoBoundaries]. Table \ref{tab:mod-subadmin} summarises the 76 matched ADM1 and ADM2 units governing modern census disaggregation across the five states and territories, spanning 1970AD to 2023AD.

<figure class="crd-table-figure" id="tab:mod-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Admin Level</th><th class="crd-th">Matched Units</th><th class="crd-th">Span</th><th class="crd-th">Waves</th><th class="crd-th">Census &amp; Benchmark Years</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">1981-2021</td><td class="crd-td">4</td><td class="crd-td">1981, 2004, 2011, 2021</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">1970-2017</td><td class="crd-td">5</td><td class="crd-td">1970, 1996, 2007, 2011, 2017</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">1994-2021</td><td class="crd-td">5</td><td class="crd-td">1994, 2004, 2015, 2016, 2021</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">1983-2021</td><td class="crd-td">5</td><td class="crd-td">1983, 1995, 2008, 2013, 2021</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">1997-2023</td><td class="crd-td">4</td><td class="crd-td">1997, 2007, 2017, 2023</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Modern geoBoundaries subadministrative census coverage across Syria, Lebanon, Jordan, Israel and Palestine (76 matched ADM1 and ADM2 units).</figcaption>
</figure>

Inspection of individual ADM1 and ADM2 series in Table \ref{tab:top-adm-units} confirms that pycnophylactic scaling captures every decisive post-1980 demographic shift rather than smoothing over local shocks. In Syria, Aleppo governorate (19.765 km²) rose 159,1% from 1,88M in 1981AD to 4,87M on the eve of war in 2011AD before contracting by 750k (-15,4%) to 4,12M in 2021AD, while Homs (43.552 km²) dipped from 1,8M to 1,79M over the same decade. Conversely, Rural Damascus (26.517 km²) expanded 267,6% between 1981AD and 2021AD (917,4k to 3,37M) and Damascus city (72 km²) climbed to 2,1M (29.208,3 inhabitants per km²). Across the southern border in Jordan, the 2015 census recorded a sudden step jump driven by Syrian refugee inflows: Amman (8.407 km²) more than doubled between 2004AD (1,94M) and 2015AD (4,01M), reaching 4,64M in 2021AD (552,2 per km²), while Irbid reached 2,05M (1.123,5 per km²) and desert Mafraq surged 256% from 178,9k in 1994AD to 637k in 2021AD.

<figure class="crd-table-figure" id="tab:top-adm-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">First Count</th><th class="crd-th">Latest Count</th><th class="crd-th">Net Change</th><th class="crd-th">Density (/km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aleppo (SYR, ADM1)</strong></td><td class="crd-td">19.765</td><td class="crd-td">1,88M (1981)</td><td class="crd-td">4,12M (2021)</td><td class="crd-td">+119,2%</td><td class="crd-td">208,3</td></tr>
<tr><td class="crd-td"><strong>Amman (JOR, ADM1)</strong></td><td class="crd-td">8.407</td><td class="crd-td">1,58M (1994)</td><td class="crd-td">4,64M (2021)</td><td class="crd-td">+194,5%</td><td class="crd-td">552,2</td></tr>
<tr><td class="crd-td"><strong>Rural Damascus (SYR, ADM1)</strong></td><td class="crd-td">26.517</td><td class="crd-td">917,4k (1981)</td><td class="crd-td">3,37M (2021)</td><td class="crd-td">+267,6%</td><td class="crd-td">127,2</td></tr>
<tr><td class="crd-td"><strong>Hama (SYR, ADM1)</strong></td><td class="crd-td">11.269</td><td class="crd-td">736,5k (1981)</td><td class="crd-td">2,15M (2021)</td><td class="crd-td">+191,5%</td><td class="crd-td">190,5</td></tr>
<tr><td class="crd-td"><strong>Damascus (SYR, ADM1)</strong></td><td class="crd-td">72</td><td class="crd-td">1,11M (1981)</td><td class="crd-td">2,1M (2021)</td><td class="crd-td">+89,1%</td><td class="crd-td">29.208,3</td></tr>
<tr><td class="crd-td"><strong>Irbid (JOR, ADM1)</strong></td><td class="crd-td">1.825</td><td class="crd-td">751,6k (1994)</td><td class="crd-td">2,05M (2021)</td><td class="crd-td">+172,8%</td><td class="crd-td">1.123,5</td></tr>
<tr><td class="crd-td"><strong>Al-Hasakeh (SYR, ADM1)</strong></td><td class="crd-td">22.989</td><td class="crd-td">669,8k (1981)</td><td class="crd-td">1,86M (2021)</td><td class="crd-td">+178,5%</td><td class="crd-td">81,1</td></tr>
<tr><td class="crd-td"><strong>Homs (SYR, ADM1)</strong></td><td class="crd-td">43.552</td><td class="crd-td">815,1k (1981)</td><td class="crd-td">1,79M (2021)</td><td class="crd-td">+119,6%</td><td class="crd-td">41,1</td></tr>
<tr><td class="crd-td"><strong>Zarqa (JOR, ADM1)</strong></td><td class="crd-td">4.548</td><td class="crd-td">639,5k (1994)</td><td class="crd-td">1,58M (2021)</td><td class="crd-td">+147,2%</td><td class="crd-td">347,6</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv (ISR, ADM2)</strong></td><td class="crd-td">118</td><td class="crd-td">1M (1983)</td><td class="crd-td">1,48M (2021)</td><td class="crd-td">+48,1%</td><td class="crd-td">12.554,2</td></tr>
<tr><td class="crd-td"><strong>Jerusalem (ISR, ADM2)</strong></td><td class="crd-td">661</td><td class="crd-td">472,9k (1983)</td><td class="crd-td">1,21M (2021)</td><td class="crd-td">+155,8%</td><td class="crd-td">1.830,1</td></tr>
<tr><td class="crd-td"><strong>Haifa (ISR, ADM2)</strong></td><td class="crd-td">333</td><td class="crd-td">575,3k (1983)</td><td class="crd-td">1,09M (2021)</td><td class="crd-td">+89,9%</td><td class="crd-td">3.281,4</td></tr>
<tr><td class="crd-td"><strong>Hebron (PSE, ADM2)</strong></td><td class="crd-td">1.110</td><td class="crd-td">405,7k (1997)</td><td class="crd-td">822,4k (2023)</td><td class="crd-td">+102,7%</td><td class="crd-td">740,9</td></tr>
<tr><td class="crd-td"><strong>Gaza (PSE, ADM2)</strong></td><td class="crd-td">74</td><td class="crd-td">367,4k (1997)</td><td class="crd-td">749,1k (2023)</td><td class="crd-td">+103,9%</td><td class="crd-td">10.123</td></tr>
<tr><td class="crd-td"><strong>Mafraq (JOR, ADM1)</strong></td><td class="crd-td">26.697</td><td class="crd-td">178,9k (1994)</td><td class="crd-td">637k (2021)</td><td class="crd-td">+256%</td><td class="crd-td">23,9</td></tr>
<tr><td class="crd-td"><strong>Balqa (JOR, ADM1)</strong></td><td class="crd-td">961</td><td class="crd-td">276,1k (1994)</td><td class="crd-td">569,5k (2021)</td><td class="crd-td">+106,3%</td><td class="crd-td">592,6</td></tr>
<tr><td class="crd-td"><strong>Baabda (LBN, ADM2)</strong></td><td class="crd-td">144</td><td class="crd-td">371,9k (1996)</td><td class="crd-td">568,7k (2017)</td><td class="crd-td">+52,9%</td><td class="crd-td">3.949,4</td></tr>
<tr><td class="crd-td"><strong>Jerusalem (PSE, ADM2)</strong></td><td class="crd-td">219</td><td class="crd-td">328,6k (1997)</td><td class="crd-td">492,3k (2023)</td><td class="crd-td">+49,8%</td><td class="crd-td">2.248,1</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading recorded ADM1 and ADM2 census units across the Levant, showing land area, earliest and latest census counts, net growth and latest density (inhabitants per km²).</figcaption>
</figure>

In Israel and Palestine, second-order ADM2 sub-district data reveal extreme coastal and metropolitan compression alongside diverging peripheral trajectories. Tel Aviv sub-district (118 km²) rose more moderately (+48,1% from 1M in 1983AD to 1,48M in 2021AD, 12.554,2 per km²) as housing expansion spilled eastward into HaMerkaz and southward toward Ashdod, whereas Jerusalem sub-district (661 km²) surged 155,8% from 472,9k to 1,21M (1.830,1 per km²) and Haifa (333 km²) climbed 89,9% to 1,09M (3.281,4 per km²). Across the Palestinian governorates between 1997AD and 2023AD, Hebron doubled (+102,7%, 405,7k to 822,4k), Jerusalem governorate grew 49,8% (328,6k to 492,3k) and Gaza governorate more than doubled (+103,9%, 367,4k to 749,1k) on just 74 km²—exceeding ten thousand persons per km² even before accounting for neighbouring North Gaza, Deir al-Balah, Khan Yunis and Rafah [@Scott2001Mortality; @Fayad2025Political].

# Results

## Aggregate Trajectory and Phase Shifts (1946AD to 2025AD)

Over the seventy-nine years from 1946AD to 2025AD, aggregate population across the Levantine domain grew 8,37-fold, climbing from 6,55M to 54,8M inhabitants (Figure \ref{fig:trajectory}). Growth proceeded in two distinct demographic regimes separated by the 1990s. Between 1946AD and 1990AD, the combined population expanded at roughly 3% to 3,25% annually—adding 50,4% between 1946AD and 1960AD (6,55M to 9,85M), 54,8% between 1960AD and 1975AD (9,85M to 15,25M) and 61,6% between 1975AD and 1990AD (15,25M to 24,65M). During this first half-century, sharp declines in infant and infectious-disease mortality coincided with high total fertility rates across Syria, Jordan and Palestine, reinforced in Israel by state-sponsored immigration and in Jordan by displaced West Bank and Gulf returnees [@Scott2001Mortality; @Courbage2006Enjeux; @Bartolo2024Demography].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine/fig2_modern_levant_israel_palestine_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate demographic trajectory across Syria, Lebanon, Jordan, Israel and Palestine from 1946AD to 2025AD with uncertainty envelope (left) and country totals in 2025AD (right).</figcaption>
</figure>

After 1990AD, aggregate growth moderated as fertility transitions took hold across every urban stratum, though total absolute increments remained immense because of the enlarged reproductive base. Population rose 51,1% between 1990AD and 2005AD (from 24,65M to 37,25M, 2,79% per year), decelerated sharply to 18,5% between 2005AD and 2015AD (37,25M to 44,15M, 1,71% per year) under the combined weight of lower fertility and Syrian wartime emigration out of the five-state domain into Turkey and Europe, and then rebounded by 24,1% between 2015AD and 2025AD (44,15M to 54,8M, 2,18% per year). Table \ref{tab:country-series} presents the staged areal-mask trajectory disaggregated across the five constituent jurisdictions from 1946AD to 2025AD.

<figure class="crd-table-figure" id="tab:country-series">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction (Mask Units)</th><th class="crd-th">1946AD</th><th class="crd-th">1960AD</th><th class="crd-th">1990AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Syria (15 units)</strong></td><td class="crd-td">3,25M</td><td class="crd-td">4,89M</td><td class="crd-td">12,23M</td><td class="crd-td">21,9M</td><td class="crd-td">27,18M</td></tr>
<tr><td class="crd-td"><strong>Jordan (12 units)</strong></td><td class="crd-td">1,9M</td><td class="crd-td">2,86M</td><td class="crd-td">7,15M</td><td class="crd-td">12,81M</td><td class="crd-td">15,9M</td></tr>
<tr><td class="crd-td"><strong>Israel (6 units)</strong></td><td class="crd-td">664,7k</td><td class="crd-td">999,6k</td><td class="crd-td">2,5M</td><td class="crd-td">4,48M</td><td class="crd-td">5,56M</td></tr>
<tr><td class="crd-td"><strong>Lebanon (6 units)</strong></td><td class="crd-td">520,8k</td><td class="crd-td">783,2k</td><td class="crd-td">1,96M</td><td class="crd-td">3,51M</td><td class="crd-td">4,36M</td></tr>
<tr><td class="crd-td"><strong>Palestine (2 units)</strong></td><td class="crd-td">214,4k</td><td class="crd-td">322,4k</td><td class="crd-td">806,9k</td><td class="crd-td">1,45M</td><td class="crd-td">1,79M</td></tr>
<tr><td class="crd-td"><strong>Total Levant Domain (41 units)</strong></td><td class="crd-td">6,55M</td><td class="crd-td">9,85M</td><td class="crd-td">24,65M</td><td class="crd-td">44,15M</td><td class="crd-td">54,8M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Staged areal-mask demographic trajectory across the five Levantine jurisdictions (41 sub-regional mask units, 1946AD-2025AD).</figcaption>
</figure>

## Sub-Regional Contrasts: Littoral Core, Inland Oases and Desert Steppe

Figure \ref{fig:density} illustrates the spatial intensity of modern Levantine habitation: population concentrates intensely along a western maritime and rift-margin belt from Latakia and Beirut through Haifa, Tel Aviv and Gaza, alongside two inland metropolitan corridors running north-south through Aleppo-Hama-Homs-Damascus and Irbid-Zarqa-Amman. Across the Syrian northern and eastern plains, the Tabqa dam and Euphrates pumps elevated Dayr az-Zawr, Ar-Raqqah and Al-Hasakeh into major agrarian provinces before 2011AD, yet their dry-land and irrigated densities remain an order of magnitude below the coastal mountains of Tartus and Latakia or the intensive peri-urban belt of the Ghouta [@Younes2023Understand; @Mohamed2020Monitoring; @Omran2017Urban]. In Jordan, over four-fifths of the population occupies the northwestern rain-fed hills and desert-edge plateau between Irbid, Jarash, Ajlun, Balqa, Amman and Zarqa, leaving vast southern governorates such as Ma'an and eastern Mafraq sparsely inhabited outside oasis towns and the Red Sea port of Aqaba [@Knudsen2024Urban].

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine/fig3_modern_levant_israel_palestine_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Continuous subadministrative population surface in 2010AD (left) and mean areal-mask densities by jurisdiction in 2025AD (right).</figcaption>
</figure>

Along the southern littoral, Israel's coastal metropolis contrasts sharply with Palestine's dual territorial enclaves. Israel's Tel Aviv and Central districts form a continuous urban strip from Netanya through Petah Tiqwa, Ramat Gan, Holon, Bat Yam and Rishon LeZiyyon to Ashdod, flanked by Haifa, Jerusalem and Beersheba [@Grinberg2013Ments; @SimardGendron2011Fertility]. In Palestine, West Bank settlement clusters along the Nablus-Ramallah-Jerusalem-Hebron ridge, whereas Gaza forms an uninterrupted coastal corridor from Bayt Lahiya through Gaza City to Khan Yunis and Rafah [@Muhsen2017Urban; @Harker2012Precarious; @Scott2001Mortality].

## Urban Hierarchy: Aleppo, Damascus, Amman, Beirut, Tel Aviv and Gaza

Across all 6.386 catalogued cities, towns and rural localities in Chapter 22, enumerated settlement totals climbed from 2,14M in 1946AD (36 active localities) to 15,14M in 1960AD, 26,42M in 1980AD, 34,39M in 1990AD, 42,75M in 2000AD, 53,37M in 2010AD, 59,65M in 2020AD and 63,55M by 2025AD. Extending the corpus from municipal capitals down to full village registers from CBS Israel, PCBS Palestine, CBS Syria 2004 and DOS Jordan produces a steep, tightly fitted Zipf rank-size distribution ($\alpha = 1{,}556$, $R^2 = 0{,}967$, Figure \ref{fig:settlements}). That steep slope captures both metropolitan primacy inside each post-Mandate state and the long tail of dense rural villages across the Syrian plains, Galilee and West Bank hills.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-levant-israel-palestine/fig4_modern_levant_israel_palestine_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 5.</span> Log-log rank-size regression across 6.386 catalogued Levantine settlements (left, Zipf alpha = 1,556, R² = 0,967) and the twelve largest settlements by peak population, 1946AD-2025AD (right).</figcaption>
</figure>

Within this upper tier, individual urban trajectories diverge sharply along lines of conflict and administrative structure. Aleppo (324,9k in 1946AD to 2,86M peak in 2025AD) and Damascus (291,2k in 1946AD to 2,69M metropolitan peak in 2024AD and 1,9M core in 2025AD, surrounded by dense Rif Dimashq satellites such as Duma at 400k peak) anchored Syria's bipolar urban network from 1946AD onward, supported by Dayr az-Zawr (1,92M governorate-agglomeration peak in 2009AD, 284,3k urban core in 2025AD), Homs (875,7k), Latakia (709k peak in 2004AD) and Hama (696,9k peak in 2009AD), though post-2011 conflict battered Aleppo and Homs far harder than coastal Latakia or Tartus [@Ahmad2012Syria; @Omran2017Urban; @Morrison2018Providing]. Amman experienced the region's most explosive transformation: rising from 72k in 1949AD and 108,3k in 1952AD to 878k in 1990AD and 2,08M in 2025AD, Amman coalesced with northern hub Irbid (1,91M governorate-level 2018AD peak; 578,3k city proper in 2025AD), industrial Zarqa (730,6k), Ar-Rusayfah (543,6k) and Wadi as-Sir (278,2k) into a multi-million highland conurbation [@Knudsen2024Urban].

In Israel and Lebanon, municipal boundaries explain why city-proper rankings differ from metropolitan scale. Tel Aviv-Yafo proper peaks at 494,9k in 2024AD because its historic 52 km² core saturated early, deflecting post-1970 growth into ring cities such as Netanya (276,8k peak in 2024AD), Rishon LeZiyyon (271,9k), Petah Tiqwa (270,4k peak in 2024AD), Ashdod (founded 1956AD) and Bene Beraq alongside northern Haifa (299,1k), while Jerusalem (Yerushalayim, reaching 1,05M peak in 2024AD and 1,02M in 2025AD) expanded steadily across its mountain ridge [@SimardGendron2011Fertility]. Similarly, Beirut reaches 2,42M across its 2023AD Greater Beirut metropolitan peak (484,6k municipal proper in 2025AD), flanked by North Lebanon (791k in 2017AD), Al-Biqa' (597,7k), Ba'albak-Al-Harmal (512,2k), Akkar (473,8k) and An-Nabatiyah (429,3k) [@Knudsen2024Urban]. In Gaza, finally, natural growth and forced containment packed 749,1k people into Gaza City at its 2023AD peak alongside 275,5k in Khan Yunis and 248,5k in Jabalyah by 2025AD benchmarks [@Scott2001Mortality; @Fayad2025Political].

# Limitations

Four structural uncertainties govern these estimates across the 1946AD-2025AD horizon. First, Lebanon has held no official national population census since 1932AD; CAS Lebanon district series (1970AD, 1996AD, 2007AD, 2011AD, 2017AD) rely on sample surveys, building-footprint updates and voter registers that under-count unregistered labour migrants and shift sharply when over 1M Syrian refugees enter or depart [@Knudsen2024Urban]. Second, Syria's last full enumeration occurred in 2004AD; all post-2011 governorate and city totals depend on civil-registry extrapolations, UNHCR/OCHA displacement tracking and satellite land-use proxies [@Mohamed2020Monitoring; @Omran2017Urban; @Morrison2018Providing]. Although Aleppo's 2011AD-2021AD contraction and Damascus's persistence appear clearly in ADM1 records, exact neighbourhood-level distributions inside besieged eastern Ghouta, Raqqa or Idlib retain $\pm 10\%$ to $\pm 20\%$ uncertainty.

Third, census granularity and municipal boundary conventions create asymmetry across states: full CBS Syria 2004, CBS Israel and PCBS Palestine village registers yield 3.888 catalogued localities in Syria, 895 in Israel and 484 in Palestine, whereas DOS Jordan (616 entries) and CAS Lebanon (503 entries) report more aggregated urban and qada clusters alongside excluded duplicate aliases and suburban satellites. Similarly, Jerusalem municipal series (Yerushalayim) integrate both western and eastern municipal registers requiring careful boundary reconciliation in spatial totals [@Bartolo2024Demography; @Anonymous2020Israeli]. Finally, acute wartime mortality and mass internal displacement across the Gaza Strip and southern Lebanon after October 2023 continue to alter local settlement totals faster than decennial census schedules can record [@Koylu2025Israel; @Ismaeel2025Violations; @Fayad2025Political].

# Conclusion

From 1946AD to 2025AD, Syria, Lebanon, Jordan, Israel and Palestine expanded more than eightfold from 6,55M to 54,8M inhabitants across 312,7k km², transforming a predominantly agrarian post-Mandate landscape into one of the most urbanised, densely settled and politically contested belts in Western Asia. Unlike regions shaped purely by peaceful industrial transition, Levantine demography was repeatedly punctuated by mass cross-border displacement: the 1948 Nakba, post-1948 Jewish immigration and the 1990s post-Soviet *aliyah*, the 1967 Naksa, the 1975AD-1990AD Lebanese Civil War and the post-2011 Syrian war that reshaped Aleppo, Damascus, Amman, Irbid, Mafraq, Beirut and the Beqaa. By anchoring five disparate national statistical traditions onto 41 areal-mask units, 76 matched geoBoundaries ADM1 and ADM2 census polygons and 6.386 catalogued settlements ($\alpha = 1{,}556$, $R^2 = 0{,}967$), HANDBOOK provides a mass-conserving spatial bridge linking modern census demography to the long-term ecological history of the eastern Mediterranean.

# Appendix

## Biophysical Kriging Calibration and Mass Conservation Diagnostics

Table \ref{tab:appendix-krig} documents the continental Matérn ($\nu = 3/2$) semivariogram calibration and pycnophylactic subadministrative audit parameters governing the underlying five-arcminute habitability grid on which modern Levantine censuses are disaggregated.

<figure class="crd-table-figure" id="tab:appendix-krig">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Diagnostic Component</th><th class="crd-th">Calibrated Parameter &amp; Verification Metric</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Macro-domain habitable cells / catchments</strong></td><td class="crd-td">168.112 cells / 3.416 catchments (med. 32,51 km)</td></tr>
<tr><td class="crd-td"><strong>Chapter mask units / 5-arcmin pixels</strong></td><td class="crd-td">41 sub-regions / 4.368 pixels</td></tr>
<tr><td class="crd-td"><strong>Matérn (nu = 3/2) range parameters</strong></td><td class="crd-td">tau1 = 1,35 (raw 1,513), tau2 = 2,9025 (49,17 km)</td></tr>
<tr><td class="crd-td"><strong>Nugget-to-sill ratio / Semivariogram R²</strong></td><td class="crd-td">c0 = 0,04 / R² = 0,9993</td></tr>
<tr><td class="crd-td"><strong>WLS biophysical covariates (Hab / Fluv / Coast)</strong></td><td class="crd-td">beta0 = 0,01 / beta3 = 0,0334 / beta4 = 0,0282</td></tr>
<tr><td class="crd-td"><strong>Pycnophylactic subadmin audit (Hist / Mod / Checks)</strong></td><td class="crd-td">29 hist. / 2.629 mod. / 65.864 checks (max err. 5,845e-08)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Spatial kriging, biophysical covariate and mass-conserving pycnophylactic audit parameters underlying modern Levantine census disaggregation.</figcaption>
</figure>

## Jurisdiction Area, Settlement Counts and Urban Share

Table \ref{tab:appendix-jur} summarises land area, catalogued settlement counts, excluded suburban nodes and urban population totals across the five jurisdictions from 1946AD to 2025AD.

<figure class="crd-table-figure" id="tab:appendix-jur">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Area (km²)</th><th class="crd-th">Census Units</th><th class="crd-th">Urban Sites</th><th class="crd-th">Urban 1946AD</th><th class="crd-th">Urban 2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">185,8k</td><td class="crd-td">13 ADM1</td><td class="crd-td">3888 (+122 merged)</td><td class="crd-td">1,06M</td><td class="crd-td">28,41M</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">88,6k</td><td class="crd-td">12 ADM1</td><td class="crd-td">616 (+29 merged)</td><td class="crd-td">0</td><td class="crd-td">8,98M</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">22,2k</td><td class="crd-td">14 ADM2</td><td class="crd-td">895 (+62 merged)</td><td class="crd-td">223,3k</td><td class="crd-td">11,4M</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">6,1k</td><td class="crd-td">16 ADM2</td><td class="crd-td">484 (+21 merged)</td><td class="crd-td">205,1k</td><td class="crd-td">6,82M</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">10k</td><td class="crd-td">21 ADM2</td><td class="crd-td">503 (+16 merged)</td><td class="crd-td">654,3k</td><td class="crd-td">7,93M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Jurisdictional land area (km²), matched geoBoundaries census units, catalogued urban sites and urban population totals (1946AD-2025AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::
