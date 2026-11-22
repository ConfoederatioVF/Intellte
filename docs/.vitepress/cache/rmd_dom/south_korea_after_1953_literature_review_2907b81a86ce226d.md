---
title: "Demographic Trajectory of South Korea after 1953"
subtitle: "Postwar Reconstruction, Industrial Concentration, Compressed Transition and Depopulation, 1953AD to 2026AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: south_korea_after_1953_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_south_korea_after_1953_spatial.png"
hero_caption: "Administrative divisions, metropolitan corridors and municipal centres across seventeen provincial-level territories from 1953AD to 2026AD."
hero_label: "fig:hero-sk-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the demographic trajectory, settlement hierarchy and spatial population density of South Korea across seventy-three years from the Korean Armistice Agreement in 1953AD through 2026AD. Across seventeen provincial-level administrative divisions covering 102.845 km² (1.549 five-arcminute raster cells), national population expanded from 20,45M in 1953AD and 21,5M at the first postwar census in 1955AD, climbed through a sustained baby boom to 31,47M in 1970AD, reached 43,41M in 1990AD and 48,58M in 2010AD, and attained an absolute historical apex of 51,83M in 2020AD [@KOSIS2021Census; @Kwon1977Demography; @Caldwell2020Social]. Over the succeeding six years, the nation entered unprecedented demographic contraction, plateauing at 51,82M under the lowest total fertility rate in recorded global history (0,72 births per woman in 2023AD and 0,7 in 2025AD) [@KOSIS2021Census; @Song2018Factors; @Park2026Chronic]. This trajectory was accompanied by an extraordinary spatial reorganisation. The Seoul Capital Area (Sudogwon—comprising Seoul Special City, Incheon Metropolitan City and Gyeonggi Province) expanded from 3,35M residents (16,4% of the national total) in 1953AD to 26,04M (50,2%) in 2020AD and 26,45M (51%) in 2026AD, establishing an extreme urban concentration that drained youth cohorts from agrarian regions [@KOSIS2021Census; @Kim2018People; @Lee2025Passenger]. Concurrently, the rural provinces of Honam (South and North Jeolla) and Yeongnam (North Gyeongsang) saw their collective share drop from 51% in 1953AD to 23,2% in 2026AD [@KOSIS2021Census; @Dyrting2024Estimating]. Harmonising official quinquennial censuses from Statistics Korea, municipal gazetteers, submunicipal registers and spatial density surfaces, this paper calibrates national settlement patterns using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 383 active domestic catchments and 1.229 geocoded settlements [@Paciorek2006Matern; @NSTAC2026SSDSE].

# Background

## Postwar Partition and Armistice Reconstruction (1953AD to 1960AD)

The modern demography of the Republic of Korea begins in the ruins of the Korean War (1950AD to 1953AD) [@Kwon1977Demography; @Cha2009LivingStandards]. The conflict confirmed the territorial partition of the Korean Peninsula along the Military Demarcation Line and Demilitarised Zone, dividing historical Joseon provincial networks and isolating the southern republic from the northern mineral and hydroelectric basins [@KwonShin1977Joseon; @EberstadtBanister1992; @Spoorenberg2012DPRK]. Hostilities caused widespread loss of life, destroyed more than forty per cent of industrial infrastructure, and triggered mass population displacements involving hundreds of thousands of refugees who fled southward ahead of military advances [@Kwon1977Demography; @Caldwell2020Social].

At the signing of the armistice in 1953AD, the southern republic held approximately 20,45M people, heavily concentrated in agrarian villages across the southern agricultural plains [@KOSIS2021Census; @Cha2009LivingStandards]. The capital city of Seoul, which changed hands four times during the conflict, was devastated, with its resident population dropping to 1,01M in 1953AD [@KOSIS2021Census]. Busan, which had served as the temporary wartime capital and primary arrival port for United Nations assistance, was inundated with refugees, swelling past 1,06M in 1953AD and 1,19M in 1955AD [@KOSIS2021Census; @Kwon1977Demography].

In the years immediately preceding the war, between liberation in 1945AD and the outbreak of hostilities in 1950AD, southern Korea had already absorbed an estimated 1,8M repatriates from Japan, Manchuria and China alongside several hundred thousand refugees fleeing Soviet-occupied northern Korea [@Kwon1977Demography; @KwonShin1977Joseon]. The subsequent wartime dislocation compounded this demographic pressure, pushing the total number of northern-origin refugees (*wolnammin*) residing in South Korea past 1,2M by 1953AD [@Kwon1977Demography; @EberstadtBanister1992]. These displaced populations clustered disproportionately in urban shanty districts in Seoul and Busan, as well as coastal enclaves across Gangwon and Gyeonggi, establishing commercial networks that subsequently catalysed early urban commerce [@KOSIS2021Census; @Cha2009LivingStandards].

The cessation of combat initiated an immediate demographic rebound [@Kwon1977Demography]. Between 1953AD and 1960AD, natural population growth averaged more than 2,8% annually, generating the classic postwar Korean baby boom [@KOSIS2021Census; @Repetto1981Socioeconomic]. Discharged soldiers returned to civilian life, marriage rates surged, and the total fertility rate rose above 6 births per woman [@Kwon1977Demography; @Caldwell2020Social]. At the same time, the introduction of modern antibiotics, DDT vector control and basic public health sanitation rapidly reduced infant and childhood mortality, causing the crude death rate to plunge from wartime highs toward peacetime levels [@Kwon1977Demography; @Im2021Spatial]. By the national census of 1960AD, South Korea's population had climbed to 24,99M, with Seoul recovering rapidly to 2,45M residents [@KOSIS2021Census].

## State-Led Industrialisation and the Urban Exodus (1961AD to 1987AD)

The military revolution of 1961AD and the accession of the Park Chung-hee administration marked a decisive transition from post-armistice relief to export-led industrialisation [@Repetto1981Socioeconomic; @Cha2009LivingStandards]. Structured through consecutive Five-Year Economic Development Plans, the state channelled capital into export manufacturing, infrastructure construction and heavy heavy-chemical industrial complexes (*jung-hwahak gongeop*) [@Repetto1981Socioeconomic; @Lee2025Passenger]. This strategy triggered one of the fastest rural-to-urban migrations in Asian history [@Kim2018People; @Dyrting2024Estimating].

Agrarian life in South Korea during the early 1960s remained constrained by small farm sizes, seasonal rural poverty and underemployment [@Kwon1977Demography; @Repetto1981Socioeconomic]. While the Saemaul Undong (New Village Movement) launched in 1970AD modernised village infrastructure with tiled roofs, paved tracks and agricultural cooperatives, it could not stem the massive income gap opening between agrarian labour and manufacturing employment [@Repetto1981Socioeconomic; @Kim2018People]. Between 1966AD and 1985AD, more than ten million rural Koreans departed agricultural townships (*myeon*) for urban wage labour, an exodus colloquially termed *ichonhyangdo* (departing the village for the capital) [@KOSIS2021Census; @Kim2018People; @Dyrting2024Estimating].

To manage the demographic strains of this hyper-growth, the government instituted an aggressive nationwide family planning programme in 1962AD [@Repetto1981Socioeconomic; @Repetto2020Socioeconomic]. Operating through village mothers' clubs, rural health centres and mobile clinics, the campaign distributed modern contraceptives and promoted smaller family ideals under slogans such as "Have few children and raise them well" [@Repetto1981Socioeconomic; @Yoo2014Educational]. The demographic response was exceptionally rapid: total fertility fell from 6 in 1960AD to 4,5 in 1970AD and 2,8 in 1980AD, before dropping below the biological replacement threshold of 2,1 in 1983AD [@KOSIS2021Census; @Repetto1981Socioeconomic; @Yoo2014Educational].

## The Seoul Capital Area Hegemony and Regional Imbalance

The spatial counterpart of rapid industrialisation was the emergence of extreme territorial concentration centred on the Seoul Capital Area (Sudogwon) [@Kim2018People; @Lee2025Passenger]. Early manufacturing clusters in Kuro, Yeongdeungpo and Cheonggyecheon drew hundreds of thousands of young women and men from Jeolla and Chungcheong into textile, garment and electronics assembly plants [@Repetto1981Socioeconomic; @Kim2018People]. Seoul's population crossed 3M in 1963AD, 5M in 1970AD and 8M in 1980AD, eventually reaching an urban apex of 10,61M in the census of 1990AD [@KOSIS2021Census].

To absorb this demographic influx, municipal and national planners developed the Gangnam district south of the Han River in the 1970s, relocating prestigious high schools, government offices and corporate headquarters [@KOSIS2021Census; @Kim2018People]. When housing prices and congestion within the municipal boundaries of Seoul became intolerable in the late 1980s, the national government initiated the First Generation New Towns programme (*sindosi*), building five massive planned satellite cities in Gyeonggi Province between 1989AD and 1995AD: Bundang (Seongnam), Ilsan (Goyang), Sanbon (Gunpo), Jungdong (Bucheon) and Pyeongchon (Anyang) [@KOSIS2021Census; @Liu2026Perceived; @Lee2025Passenger].

This suburbanisation transformed Gyeonggi Province into the primary demographic engine of the nation, with its population expanding from 4,88M in 1985AD to 8,98M in 2000AD, 12,48M in 2015AD and 13,97M in 2025AD [@KOSIS2021Census]. Including the port metropolis of Incheon (which grew from 1,58M in 1985AD to 3,09M in 2025AD), the contiguous Sudogwon agglomeration absorbed virtually all net demographic growth generated in South Korea after 1990AD [@KOSIS2021Census; @Lee2025Passenger]. By 2020AD, Sudogwon housed more than fifty per cent of the national population, a degree of spatial concentration unmatched among major economies [@KOSIS2021Census; @Kim2018People].

The physical integration of Sudogwon was consolidated through sustained infrastructure investments [@Lee2025Passenger]. The opening of the Gyeongbu Expressway in 1970AD linked Seoul directly to Daejeon, Daegu and Busan, establishing the primary arterial axis for industrial haulage and passenger transit [@Lee2025Passenger]. Within the capital metropolis, the inauguration of Seoul Subway Line 1 in 1974AD initiated an extensive electrified commuter rail network that expanded across subsequent decades into twenty-three intersecting urban and suburban rapid-transit lines [@Lee2025Passenger; @Kim2018People]. By connecting satellite centres across Gyeonggi Province directly to central Seoul terminals (such as Seoul Station, Cheongnyangni and Yeongdeungpo), the metropolitan transit system enabled millions of commuters to reside tens of kilometres away in suburban housing developments while remaining tied to employment clusters in the central business district, Yeouido and Gangnam [@Kim2018People; @Lee2025Passenger].

## Compressed Fertility Transition and Demographic Contraction

While economic development initially reduced fertility toward replacement levels, the decline did not stabilise [@Yoo2014Educational; @Park2026Chronic]. Instead, South Korea entered an unprecedented phase of ultra-low fertility that accelerated across the early twenty-first century [@Song2018Factors; @Yoo2021Paradox]. Total fertility dropped to 1,57 in 1990AD, 1,48 in 2000AD and 1,23 in 2010AD [@KOSIS2021Census; @Yoo2014Educational]. After 2015AD, the decline became a precipitous collapse: TFR fell below 1 in 2018AD (0,98), reached 0,81 in 2021AD, 0,72 in 2023AD and hovered near 0,7 in 2025AD [@KOSIS2021Census; @Park2026Chronic].

Demographic research demonstrates that this ultra-low fertility reflects severe socio-economic pressures unique to Korea's compressed modernisation [@Song2018Factors; @Park2026Chronic; @Yoo2014Educational]. The hyper-concentration of employment, elite universities and corporate headquarters in Seoul generated intense educational competition, driving parents into heavy private tutoring expenditures (*hagwon*) [@Song2018Factors; @Yoo2014Educational]. Concurrently, soaring apartment real estate prices in the capital region made independent household formation prohibitively expensive for young adults [@Song2018Factors; @Liu2026Perceived].

Gender inequalities in domestic labour and corporate workplace culture further elevated the opportunity cost of motherhood for highly educated women, leading millions to delay or forgo marriage entirely [@Song2018Factors; @Szotysek2026Patriarchy; @Park2026Chronic]. The mean age at first marriage for women climbed from 24,8 years in 1990AD to 31,5 years in 2024AD, while the marriage rate plummeted [@KOSIS2021Census; @Song2018Factors]. In 2020AD, South Korea recorded its first natural population decrease (*inggu dedeu keuroseu*, or demographic dead cross), with annual deaths exceeding live births [@KOSIS2021Census]. By 2025AD, total population had tipped into absolute decline, inaugurating an era of accelerated super-ageing [@KOSIS2021Census; @Parsons2018Evaluation].

The contraction of birth cohorts also created structural challenges for national institutions designed during periods of high demographic growth [@KOSIS2021Census; @Park2026Chronic]. With twenty-year-old male cohorts projected to plunge from 330k in 2020AD to under 190k by 2035AD, the Republic of Korea Armed Forces faced personnel deficits, prompting force reorganisations, base consolidations and the expansion of automated defense systems along the Military Demarcation Line [@KOSIS2021Census; @Park2026Chronic]. Concurrently, universities outside Sudogwon experienced existential enrolment crises, with dozens of provincial private colleges failing to meet student quotas as prospective applicants gravitated exclusively toward metropolitan Seoul institutions [@Song2018Factors; @Park2026Chronic].

# Methodology

## Provincial Territorial Frame and Administrative Restructuring

To maintain spatial consistency across the post-1953AD era, this study partitions South Korea into seventeen contemporary provincial-level administrative territories covering 102.845 km² (Table \ref{tab:prov-baseline-sk}):

1. One Special City (*teukbyeolsi*): Seoul (1.171 km² in expanded grid frame, 605 km² core administrative).
2. Six Metropolitan Cities (*gwangyeoksi*): Busan (70 km² core, 770 km² municipal), Daegu (350 km²), Incheon (527 km²), Gwangju (142 km²), Daejeon (70 km²) and Ulsan (1.631 km²).
3. One Special Self-Governing City (*teukbyeol jachisi*): Sejong (485 km²), inaugurated in 2012AD.
4. Nine Provinces (*do* and Special Self-Governing Provinces *teukbyeol jachido*): Gyeonggi (10.053 km²), Gangwon (17.455 km²), North Chungcheong (6.780 km²), South Chungcheong (9.836 km²), North Jeolla (7.182 km²), South Jeolla (13.943 km²), North Gyeongsang (19.671 km²), South Gyeongsang (11.614 km²) and Jeju (1.865 km²).

A central methodological challenge lies in the extensive administrative restructuring that accompanied postwar urbanisation [@KOSIS2021Census; @Dyrting2024Estimating]. Major metropolitan centres were progressively severed from their parent provinces to reflect municipal maturity: Busan separated from South Gyeongsang in 1963AD; Daegu was detached from North Gyeongsang and Incheon from Gyeonggi in 1981AD; Gwangju separated from South Jeolla in 1986AD; Daejeon was detached from South Chungcheong in 1989AD; and Ulsan separated from South Gyeongsang in 1997AD [@KOSIS2021Census]. In 2012AD, Sejong was carved out of South Chungcheong's Yeonki County. In this study, longitudinal data across all seventeen units are harmonised retrospectively into stable modern boundaries, ensuring that comparative population shares reflect consistent spatial envelopes rather than administrative boundary adjustments [@KOSIS2021Census; @Dyrting2024Estimating].

## Census Harmonisation and Demographic Multipliers

Primary demographic data derive from the official quinquennial Population and Housing Censuses conducted by Statistics Korea (KOSTAT) and distributed through KOSIS [@KOSIS2021Census]. Postwar counts began with the simplified enumeration of 1955AD, followed by full decennial and quinquennial rounds in 1960AD, 1966AD, 1970AD, 1975AD, 1980AD, 1985AD, 1990AD, 1995AD, 2000AD, 2005AD, 2010AD, 2015AD, 2020AD and 2025AD [@KOSIS2021Census; @Kwon1977Demography].

Census figures were harmonised to reconcile de jure resident registrations (*jumin deungnok*) with de facto enumerated counts [@KOSIS2021Census]. Under-enumeration adjustments were applied to early rounds (1955AD and 1960AD) to account for military personnel in forward frontier garrisons along the Demilitarised Zone, transient shanty-town residents in post-armistice Busan and Seoul, and maritime fishing populations [@Kwon1977Demography; @Cha2009LivingStandards]. For censuses conducted after 2000AD, registers incorporate registered foreign nationals and foreign migrant workers, who expanded from less than 200k in 1995AD to over 2,5M by 2024AD, concentrated in Gyeonggi manufacturing clusters (such as Ansan, Hwaseong and Gimpo) and industrial ports [@KOSIS2021Census; @Liu2026Perceived].

Average household size experienced a profound contraction across the study era [@KOSIS2021Census; @Yoo2014Educational]. In 1960AD, the mean Korean household contained 5,7 persons, reflecting extended stem families and high marital fertility [@Kwon1977Demography]. By 1980AD, average size dropped to 4,5, falling to 3,1 in 2000AD, 2,4 in 2020AD and 2,2 in 2025AD [@KOSIS2021Census]. Single-person households (*il-in gagu*), driven by youth marriage postponement and elderly rural isolation, surged from 9% of all households in 1990AD to 34,5% in 2023AD, altering urban housing demand even as gross population plateaued [@KOSIS2021Census; @Song2018Factors].

Longitudinal harmonisation also captures the dramatic transformation of South Korea's age pyramid and life expectancy [@KOSIS2021Census; @Kwon1977Demography; @Parsons2018Evaluation]. In 1955AD, the population was overwhelmingly youthful: children aged zero to fourteen accounted for 42,3% of all inhabitants, while the elderly population aged sixty-five and over stood at just 3,3%, yielding a classic expansive pyramidal structure [@KOSIS2021Census; @Kwon1977Demography]. Over the succeeding seven decades, life expectancy at birth expanded from 52,4 years in 1960AD to 65,7 years in 1980AD, 76 years in 2000AD and 83,6 years in 2024AD, placing South Korea among the longest-lived populations globally [@KOSIS2021Census; @Parsons2018Evaluation]. By 2025AD, the proportion of children aged zero to fourteen had plummeted to 10,6%, while the elderly share surged past 20%, creating an inverted age distribution that places unprecedented fiscal strain on the National Pension Service (*Gungmin Yeon-geum*) and National Health Insurance system [@KOSIS2021Census; @Park2026Chronic; @Parsons2018Evaluation].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the seventeen provincial units is modelled using the regional kriging domain, which aggregates 103.889 unique historical and archaeological site records across 383 active domestic catchments (9.224 valid land cells) covering the Korean Peninsula and the Japanese archipelago [@Paciorek2006Matern; @NSTAC2026SSDSE]. Residual spatial dependence is structured via Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,4211$ and $\tau_2 = 2,6291$, with median Voronoi catchment radius 25,09 km and P90 radius 28,32 km (Table \ref{tab:kriging-sk}). The spatial model integrates five biophysical covariates: habitable land fraction (reflecting rugged granite topography that concentrates human settlement into alluvial valleys and coastal plains), vegetative productivity index, ecozone terrain suitability, fluvial proximity along major river arteries (notably the Han, Nakdong, Geum and Yeongsan basins), and coastal distance [@Paciorek2006Matern; @Im2021Spatial; @Lee2025Passenger]. High-density urban populations from 1.229 catalogued municipal centres condition local settlement peaks, with urban masks subtracted to preserve rural totals inside provincial boundaries.

The five-arcminute raster grid (comprising 1.549 land cells over South Korea) resolves sub-provincial terrain variations with high spatial fidelity [@Paciorek2006Matern; @NSTAC2026SSDSE]. In particular, the rugged granite escarpments of the Taebaek and Sobaek mountain ranges, which separate the Yeongnam basin from the central plains of Chungcheong and Honam, impose severe topographic constraints on settlement expansion [@Paciorek2006Matern; @Im2021Spatial]. By conditioning non-stationary covariance on habitable land fraction and fluvial buffers along the Han, Nakdong, Geum and Yeongsan river channels, the kriging interpolation captures the linear concentration of population along alluvial transport corridors while preventing artificial population smearing into uninhabited alpine crests [@Paciorek2006Matern; @Lee2025Passenger].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the regional database totals and the official census records compiled by Statistics Korea [@KOSIS2021Census]. Table \ref{tab:validation-sk} presents the longitudinal trajectory across ten benchmark years from 1953AD to 2026AD, decomposed into five macro-regions: Sudogwon, Yeongnam, Hoseo, Honam and Gangwon-Jeju.

<figure class="crd-table-figure" id="tab:validation-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Sudogwon</th><th class="crd-th">Yeongnam</th><th class="crd-th">Hoseo</th><th class="crd-th">Honam</th><th class="crd-th">Gangwon and Jeju</th><th class="crd-th">National Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1953AD</strong></td><td class="crd-td">3,35M</td><td class="crd-td">6,6M</td><td class="crd-td">3,54M</td><td class="crd-td">5,62M</td><td class="crd-td">1,34M</td><td class="crd-td">20,45M</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">5,71M</td><td class="crd-td">7,92M</td><td class="crd-td">3,85M</td><td class="crd-td">5,92M</td><td class="crd-td">1,59M</td><td class="crd-td">24,99M</td></tr>
<tr><td class="crd-td"><strong>1970AD</strong></td><td class="crd-td">9,9M</td><td class="crd-td">9,73M</td><td class="crd-td">4,06M</td><td class="crd-td">5,85M</td><td class="crd-td">1,93M</td><td class="crd-td">31,47M</td></tr>
<tr><td class="crd-td"><strong>1980AD</strong></td><td class="crd-td">13,3M</td><td class="crd-td">11,44M</td><td class="crd-td">4,38M</td><td class="crd-td">6,07M</td><td class="crd-td">2,25M</td><td class="crd-td">37,44M</td></tr>
<tr><td class="crd-td"><strong>1990AD</strong></td><td class="crd-td">18,59M</td><td class="crd-td">12,56M</td><td class="crd-td">4,45M</td><td class="crd-td">5,72M</td><td class="crd-td">2,1M</td><td class="crd-td">43,41M</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">21,35M</td><td class="crd-td">12,86M</td><td class="crd-td">4,68M</td><td class="crd-td">5,24M</td><td class="crd-td">2M</td><td class="crd-td">46,14M</td></tr>
<tr><td class="crd-td"><strong>2010AD</strong></td><td class="crd-td">23,84M</td><td class="crd-td">12,7M</td><td class="crd-td">5,04M</td><td class="crd-td">4,99M</td><td class="crd-td">2M</td><td class="crd-td">48,58M</td></tr>
<tr><td class="crd-td"><strong>2020AD</strong></td><td class="crd-td">26,04M</td><td class="crd-td">12,87M</td><td class="crd-td">5,65M</td><td class="crd-td">5,07M</td><td class="crd-td">2,19M</td><td class="crd-td">51,83M</td></tr>
<tr><td class="crd-td"><strong>2025AD</strong></td><td class="crd-td">26,38M</td><td class="crd-td">12,52M</td><td class="crd-td">5,77M</td><td class="crd-td">4,96M</td><td class="crd-td">2,19M</td><td class="crd-td">51,82M</td></tr>
<tr><td class="crd-td"><strong>2026AD</strong></td><td class="crd-td">26,45M</td><td class="crd-td">12,45M</td><td class="crd-td">5,79M</td><td class="crd-td">4,94M</td><td class="crd-td">2,19M</td><td class="crd-td">51,82M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across South Korea, 1953AD to 2026AD, harmonised from Statistics Korea censuses.</figcaption>
</figure>

Across all nine chronological horizons in the Korean Peninsula and Japanese archipelago kriging domain, Table \ref{tab:kriging-sk} documents tightly constrained Matérn variogram parameters [@Paciorek2006Matern; @NSTAC2026SSDSE]. Residual $R^2$ exceeds 0,93 across all epochs, with nugget-to-sill ratios fixed between 0,04 and 0,22.

<figure class="crd-table-figure" id="tab:kriging-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Chulmun (before 3500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Chulmun and Middle Jomon (3500BC to 2000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late Chulmun and Mumun Bronze (2000BC to 300BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Gojoseon, Early Iron and Commanderies (300BC to 100AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Three Kingdoms and Gaya (100AD to 668AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Unified Silla and Balhae (668AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Goryeo Dynasty (935AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Early Joseon Dynasty (1392AD to 1592AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Late Joseon and Modern Era (1592AD to 1953AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Regional kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:prov-baseline-sk} outlines the baseline geographic parameters and longitudinal population changes across the seventeen provincial-level territories, highlighting the stark divergence between capital-area growth and peripheral contraction.

<figure class="crd-table-figure" id="tab:prov-baseline-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1955AD</th><th class="crd-th">1985AD</th><th class="crd-th">2025AD</th><th class="crd-th">Density (2025AD)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Busan</strong></td><td class="crd-td">70</td><td class="crd-td">1,19M</td><td class="crd-td">3,55M</td><td class="crd-td">3,24M</td><td class="crd-td">46.219,5 / km²</td></tr>
<tr><td class="crd-td"><strong>Daegu</strong></td><td class="crd-td">350</td><td class="crd-td">698,3k</td><td class="crd-td">2,13M</td><td class="crd-td">2,36M</td><td class="crd-td">6.753,3 / km²</td></tr>
<tr><td class="crd-td"><strong>Daejeon</strong></td><td class="crd-td">70</td><td class="crd-td">498,5k</td><td class="crd-td">926,8k</td><td class="crd-td">1,47M</td><td class="crd-td">20.990 / km²</td></tr>
<tr><td class="crd-td"><strong>Gangwon</strong></td><td class="crd-td">17.455</td><td class="crd-td">1,11M</td><td class="crd-td">1,69M</td><td class="crd-td">1,52M</td><td class="crd-td">87 / km²</td></tr>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">142</td><td class="crd-td">531,1k</td><td class="crd-td">997,8k</td><td class="crd-td">1,43M</td><td class="crd-td">10.083,8 / km²</td></tr>
<tr><td class="crd-td"><strong>Gyeonggi</strong></td><td class="crd-td">10.053</td><td class="crd-td">1,57M</td><td class="crd-td">4,88M</td><td class="crd-td">13,97M</td><td class="crd-td">1.389,4 / km²</td></tr>
<tr><td class="crd-td"><strong>Incheon</strong></td><td class="crd-td">527</td><td class="crd-td">381,3k</td><td class="crd-td">1,58M</td><td class="crd-td">3,09M</td><td class="crd-td">5.870,2 / km²</td></tr>
<tr><td class="crd-td"><strong>Jeju</strong></td><td class="crd-td">1.865</td><td class="crd-td">287k</td><td class="crd-td">488,8k</td><td class="crd-td">669,4k</td><td class="crd-td">358,9 / km²</td></tr>
<tr><td class="crd-td"><strong>North Chungcheong</strong></td><td class="crd-td">6.780</td><td class="crd-td">1,24M</td><td class="crd-td">1,41M</td><td class="crd-td">1,66M</td><td class="crd-td">244,3 / km²</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang</strong></td><td class="crd-td">19.671</td><td class="crd-td">2,66M</td><td class="crd-td">2,89M</td><td class="crd-td">2,57M</td><td class="crd-td">130,5 / km²</td></tr>
<tr><td class="crd-td"><strong>North Jeolla</strong></td><td class="crd-td">7.182</td><td class="crd-td">2,26M</td><td class="crd-td">2,18M</td><td class="crd-td">1,75M</td><td class="crd-td">243,9 / km²</td></tr>
<tr><td class="crd-td"><strong>Sejong</strong></td><td class="crd-td">485</td><td class="crd-td">65,8k</td><td class="crd-td">93,9k</td><td class="crd-td">392,5k</td><td class="crd-td">809,2 / km²</td></tr>
<tr><td class="crd-td"><strong>Seoul</strong></td><td class="crd-td">1.171</td><td class="crd-td">1,98M</td><td class="crd-td">9,49M</td><td class="crd-td">9,32M</td><td class="crd-td">7.954,8 / km²</td></tr>
<tr><td class="crd-td"><strong>South Chungcheong</strong></td><td class="crd-td">9.836</td><td class="crd-td">1,8M</td><td class="crd-td">1,99M</td><td class="crd-td">2,25M</td><td class="crd-td">228,7 / km²</td></tr>
<tr><td class="crd-td"><strong>South Gyeongsang</strong></td><td class="crd-td">11.614</td><td class="crd-td">2,2M</td><td class="crd-td">2,75M</td><td class="crd-td">3,25M</td><td class="crd-td">280,1 / km²</td></tr>
<tr><td class="crd-td"><strong>South Jeolla</strong></td><td class="crd-td">13.943</td><td class="crd-td">2,88M</td><td class="crd-td">2,72M</td><td class="crd-td">1,78M</td><td class="crd-td">127,6 / km²</td></tr>
<tr><td class="crd-td"><strong>Ulsan</strong></td><td class="crd-td">1.631</td><td class="crd-td">153,4k</td><td class="crd-td">674,8k</td><td class="crd-td">1,1M</td><td class="crd-td">676,6 / km²</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Geographic baseline and longitudinal population distribution across seventeen South Korean administrative territories.</figcaption>
</figure>

# Results

## Post-Armistice Rehabilitation and Baby Boom Expansion (1953 to 1966AD)

Following the cessation of combat in 1953AD, South Korea entered a period of rapid demographic expansion (Figure \ref{fig:traj-sk}). Aggregate population expanded by 42,6% over thirteen years, rising from 20,45M in 1953AD to 24,99M in 1960AD and 29,16M in 1966AD (Table \ref{tab:validation-sk}) [@KOSIS2021Census; @Kwon1977Demography].

<figure class="crd-figure-block" id="fig:traj-sk">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-south-korea-after-1953/fig2_south_korea_after_1953_trajectory.png" alt="fig:traj-sk" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of South Korea from 1953AD to 2026AD across five macro-regions with official census benchmarks.</figcaption>
</figure>

During this initial reconstruction phase, the demographic weight of the republic remained solidly rural and southern [@KOSIS2021Census; @KwonShin1977Joseon]. In 1953AD, Honam (South and North Jeolla) held 5,62M residents (27,5% of the national total), while Yeongnam held 6,6M (32,3%) [@KOSIS2021Census]. Together, these two southern agricultural and coastal regions accounted for 59,8% of the southern republic's inhabitants [@KOSIS2021Census; @Cha2009LivingStandards]. Rice farming in the fertile plains of Honam and the Nakdong basin supported dense agricultural populations, with South Jeolla standing as the most populous single province in the nation (2,87M in 1953AD and 3,05M in 1966AD), followed closely by North Gyeongsang (2,63M in 1953AD and 2,9M in 1966AD) [@KOSIS2021Census].

Meanwhile, the capital area grew at an astonishing pace [@KOSIS2021Census; @Kwon1977Demography]. Seoul Special City expanded by 140% between 1953AD and 1960AD (from 1,01M to 2,45M) and grew by another 55,1% by 1966AD to reach 3,79M [@KOSIS2021Census]. Displaced families from northern provinces, returning overseas labourers from Japan and demobilised soldiers clustered in hillside settlements (*daldongne*) and informal settlements along the Cheonggyecheon stream [@Kwon1977Demography; @Kim2018People]. By 1966AD, Sudogwon housed 8,19M people, lifting its national share from 16,4% to 28,1% in just thirteen years [@KOSIS2021Census].

## Industrial Decentralisation and the Yeongnam Maritime Corridor (1966 to 1990AD)

Between 1966AD and 1990AD, national population expanded from 29,16M to 43,41M, an increase of 48,9% driven by young baby-boom cohorts entering adulthood (Figure \ref{fig:shares-sk}) [@KOSIS2021Census; @Repetto1981Socioeconomic]. During this era of rapid export-led industrialisation, the spatial growth of South Korea was structured along the Seoul-Busan corridor (the Gyeongbu axis), anchored by the Southeastern Maritime Industrial Belt in Yeongnam [@KOSIS2021Census; @Lee2025Passenger].

<figure class="crd-figure-block" id="fig:shares-sk">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-south-korea-after-1953/fig3_south_korea_after_1953_shares.png" alt="fig:shares-sk" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional population shares and longitudinal shifts across seventeen South Korean administrative territories.</figcaption>
</figure>

The Yeongnam macro-region experienced massive industrial expansion [@KOSIS2021Census; @Lee2025Passenger]. Busan expanded from 1,59M in 1960AD to 3,16M in 1980AD and attained a historical peak of 3,85M in 1990AD, serving as the central logistics port handling South Korea's expanding container export trade [@KOSIS2021Census]. Daegu grew rapidly from 933,4k in 1960AD to 2,36M in 1990AD, propelled by textile mills and machinery manufacturing [@KOSIS2021Census]. Along the southeastern coast, the state developed dedicated industrial cities: Ulsan expanded from a modest county town of 129,4k in 1953AD into an industrial metropolis of 1,05M by the late 1990s, hosting the world's largest shipyard and automobile assembly plants [@KOSIS2021Census; @Lee2025Passenger]. Pohang became the citadel of Korean steel production under POSCO, while Changwon was laid out as an advanced precision machinery and defense industrial hub [@KOSIS2021Census; @Lee2025Passenger].

However, this industrial concentration came at the direct expense of agrarian provinces lacking industrial ports [@KOSIS2021Census; @Kim2018People]. Honam suffered severe net out-migration: North Jeolla peaked in 1966AD at 2,52M before dropping to 2,18M in 1985AD, while South Jeolla plateaued near 3M before entering structural decline [@KOSIS2021Census]. Rural counties in Gangwon and North Gyeongsang experienced similar depopulation as young agricultural labourers migrated to industrial assembly lines in Yeongnam and Sudogwon [@KOSIS2021Census; @Dyrting2024Estimating].

## The Sudogwon Inversion and Capital Region Primacy (1990 to 2015AD)

Between 1990AD and 2015AD, South Korea's demographic growth moderated from 43,41M to 51,07M, growing by 17,6% as fertility rates fell below replacement [@KOSIS2021Census; @Yoo2014Educational]. During this quarter-century, the spatial distribution of the nation crossed a historic threshold: the concentration of population into Sudogwon ceased to be merely an urban trend and became the defining structural feature of the republic [@KOSIS2021Census; @Kim2018People].

Within the capital region, the focal point of expansion shifted from the municipal core of Seoul to the suburban belt of Gyeonggi Province and Incheon [@KOSIS2021Census; @Liu2026Perceived]. Seoul Special City peaked at 10,61M in the census of 1990AD and gradually declined to 9,9M by 2015AD as residential housing costs and commercial conversions prompted millions of middle-class families to migrate into planned new towns [@KOSIS2021Census; @Liu2026Perceived]. Gyeonggi Province absorbed this outward wave, surging from 4,88M in 1985AD to 8,98M in 2000AD, 12,48M in 2015AD and 13,97M in 2025AD (Table \ref{tab:regions-sk}) [@KOSIS2021Census]. Satellite cities including Suwon (1,22M), Seongnam (950k), Goyang (1,05M), Yongin (1,09M), Bucheon (853k), Ansan (747k) and Hwaseong (1,03M) emerged as major metropolises in their own right [@KOSIS2021Census].

By 2015AD, Sudogwon held 25,27M inhabitants, representing 49,5% of the national population [@KOSIS2021Census]. In contrast, provincial industrial centres outside the capital began to stagnate: Busan entered population decline after 1995AD, dropping from 3,85M to 3,45M in 2015AD, while Daegu plateaued at 2,5M [@KOSIS2021Census]. Traditional agrarian provinces continued their decline: North Jeolla fell to 1,83M, South Jeolla dropped to 1,8M, and Gangwon stagnated near 1,5M [@KOSIS2021Census].

## Super-Ageing, Depopulation and Provincial Dissolution (2015 to 2026AD)

From 2015AD to 2026AD, South Korea entered the most critical demographic climacteric of its modern history [@KOSIS2021Census; @Park2026Chronic; @Parsons2018Evaluation]. National population reached an all-time peak of 51,83M in 2020AD before commencing absolute natural decline, easing to 51,82M by 2025AD and 2026AD [@KOSIS2021Census]. With total fertility dropping below 0,75, the number of annual births collapsed from 438k in 2015AD to approximately 230k in 2023AD and 225k in 2025AD, while annual deaths rose above 350k as baby-boom cohorts entered elderly brackets [@KOSIS2021Census; @Song2018Factors; @Park2026Chronic].

In 2020AD, the Seoul Capital Area officially crossed the majority threshold, reaching 26,04M residents (50,2% of the national total), and climbed further to 26,45M (51%) in 2026AD (Table \ref{tab:validation-sk}) [@KOSIS2021Census]. Even as national births collapsed, net internal migration continued to siphon young college graduates and skilled workers from Busan, Daegu, Gwangju and rural counties into Gyeonggi and Seoul [@Kim2018People; @Lee2025Passenger].

This spatial concentration created severe regional divergence [@Song2018Factors; @Park2026Chronic]. More than half of South Korea's 228 municipal cities, counties and districts (*si-gun-gu*) entered the extinction risk zone (*somyeol wigigun*), characterised by an elderly population (aged 65+) outnumbering female youth (aged 20 to 39) by more than two to one [@Song2018Factors; @Park2026Chronic]. In rural counties across South Jeolla (e.g. Goheung, Boseong, Sinan) and North Gyeongsang (e.g. Gunwi, Uiseong, Cheongsong), median ages rose above 58 years, obstetric clinics closed, and elementary schools merged or shut down entirely [@Song2018Factors; @Im2021Spatial; @Park2026Chronic]. The creation of Sejong Special Self-Governing City in 2012AD, which reached 392,5k by 2025AD, demonstrated that targeted public investment could establish a successful secondary administrative core in Hoseo, yet it proved insufficient to alter the wider gravitation toward Sudogwon [@KOSIS2021Census; @Lee2025Passenger].

<figure class="crd-table-figure" id="tab:regions-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1955AD</th><th class="crd-th">1970AD</th><th class="crd-th">1985AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Busan</strong></td><td class="crd-td">70</td><td class="crd-td">1,19M</td><td class="crd-td">2,5M</td><td class="crd-td">3,55M</td><td class="crd-td">3,66M</td><td class="crd-td">3,45M</td><td class="crd-td">3,24M</td></tr>
<tr><td class="crd-td"><strong>Daegu</strong></td><td class="crd-td">350</td><td class="crd-td">698,3k</td><td class="crd-td">1,47M</td><td class="crd-td">2,13M</td><td class="crd-td">2,51M</td><td class="crd-td">2,49M</td><td class="crd-td">2,36M</td></tr>
<tr><td class="crd-td"><strong>Daejeon</strong></td><td class="crd-td">70</td><td class="crd-td">498,5k</td><td class="crd-td">688,4k</td><td class="crd-td">926,8k</td><td class="crd-td">1,37M</td><td class="crd-td">1,54M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Gangwon</strong></td><td class="crd-td">17.455</td><td class="crd-td">1,11M</td><td class="crd-td">1,53M</td><td class="crd-td">1,69M</td><td class="crd-td">1,49M</td><td class="crd-td">1,52M</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">142</td><td class="crd-td">531,1k</td><td class="crd-td">733,4k</td><td class="crd-td">997,8k</td><td class="crd-td">1,35M</td><td class="crd-td">1,5M</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Gyeonggi</strong></td><td class="crd-td">10.053</td><td class="crd-td">1,57M</td><td class="crd-td">2,92M</td><td class="crd-td">4,88M</td><td class="crd-td">8,98M</td><td class="crd-td">12,48M</td><td class="crd-td">13,97M</td></tr>
<tr><td class="crd-td"><strong>Incheon</strong></td><td class="crd-td">527</td><td class="crd-td">381,3k</td><td class="crd-td">921,6k</td><td class="crd-td">1,58M</td><td class="crd-td">2,48M</td><td class="crd-td">2,89M</td><td class="crd-td">3,09M</td></tr>
<tr><td class="crd-td"><strong>Jeju</strong></td><td class="crd-td">1.865</td><td class="crd-td">287k</td><td class="crd-td">396,4k</td><td class="crd-td">488,8k</td><td class="crd-td">513,3k</td><td class="crd-td">605,6k</td><td class="crd-td">669,4k</td></tr>
<tr><td class="crd-td"><strong>North Chungcheong</strong></td><td class="crd-td">6.780</td><td class="crd-td">1,24M</td><td class="crd-td">1,34M</td><td class="crd-td">1,41M</td><td class="crd-td">1,47M</td><td class="crd-td">1,59M</td><td class="crd-td">1,66M</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang</strong></td><td class="crd-td">19.671</td><td class="crd-td">2,66M</td><td class="crd-td">2,88M</td><td class="crd-td">2,89M</td><td class="crd-td">2,7M</td><td class="crd-td">2,66M</td><td class="crd-td">2,57M</td></tr>
<tr><td class="crd-td"><strong>North Jeolla</strong></td><td class="crd-td">7.182</td><td class="crd-td">2,26M</td><td class="crd-td">2,25M</td><td class="crd-td">2,18M</td><td class="crd-td">1,89M</td><td class="crd-td">1,83M</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Sejong</strong></td><td class="crd-td">485</td><td class="crd-td">65,8k</td><td class="crd-td">85,3k</td><td class="crd-td">93,9k</td><td class="crd-td">80k</td><td class="crd-td">204,1k</td><td class="crd-td">392,5k</td></tr>
<tr><td class="crd-td"><strong>Seoul</strong></td><td class="crd-td">1.171</td><td class="crd-td">1,98M</td><td class="crd-td">6,06M</td><td class="crd-td">9,49M</td><td class="crd-td">9,9M</td><td class="crd-td">9,9M</td><td class="crd-td">9,32M</td></tr>
<tr><td class="crd-td"><strong>South Chungcheong</strong></td><td class="crd-td">9.836</td><td class="crd-td">1,8M</td><td class="crd-td">1,94M</td><td class="crd-td">1,99M</td><td class="crd-td">1,77M</td><td class="crd-td">2,11M</td><td class="crd-td">2,25M</td></tr>
<tr><td class="crd-td"><strong>South Gyeongsang</strong></td><td class="crd-td">11.614</td><td class="crd-td">2,2M</td><td class="crd-td">2,49M</td><td class="crd-td">2,75M</td><td class="crd-td">2,98M</td><td class="crd-td">3,33M</td><td class="crd-td">3,25M</td></tr>
<tr><td class="crd-td"><strong>South Jeolla</strong></td><td class="crd-td">13.943</td><td class="crd-td">2,88M</td><td class="crd-td">2,87M</td><td class="crd-td">2,72M</td><td class="crd-td">2M</td><td class="crd-td">1,8M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Ulsan</strong></td><td class="crd-td">1.631</td><td class="crd-td">153,4k</td><td class="crd-td">402,5k</td><td class="crd-td">674,8k</td><td class="crd-td">1,01M</td><td class="crd-td">1,17M</td><td class="crd-td">1,1M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population trajectories across seventeen South Korean administrative territories at key census benchmarks.</figcaption>
</figure>

## Sub-Regional Trajectories and Provincial Analysis

### The Sudogwon Metropolis and Gyeonggi Satellites

The spatial expansion of the Seoul Capital Area constitutes the single most transformative phenomenon in modern Korean demographic history [@KOSIS2021Census; @Kim2018People]. In 1953AD, Sudogwon housed only 3,35M residents across Seoul Special City (1,01M), Incheon (329k) and Gyeonggi Province (1,43M), representing 16,4% of the southern republic's population [@KOSIS2021Census]. Over the subsequent seventy-three years, Sudogwon expanded nearly eightfold to 26,45M in 2026AD, capturing 51% of the entire national population [@KOSIS2021Census].

This expansion evolved through distinct geographical phases [@KOSIS2021Census; @Lee2025Passenger]. From 1953AD to 1990AD, growth concentrated primarily within the municipal borders of Seoul Special City, which expanded from 1,01M to an all-time peak of 10,61M as rural migrants settled in high-density hillside districts and later in the planned apartment complexes of Gangnam, Jamsil and Mokdong [@KOSIS2021Census; @Kim2018People]. After 1990AD, municipal Seoul reached physical saturation, and population overflowed into Gyeonggi Province, propelled by massive state new town construction programmes [@KOSIS2021Census; @Liu2026Perceived]. Gyeonggi's population multiplied from 4,88M in 1985AD to 8,98M in 2000AD, 12,48M in 2015AD and 13,97M in 2025AD, making it the most populous administrative division in the country by a wide margin [@KOSIS2021Census]. Incheon similarly expanded along the coastal industrial corridor, climbing from 1,58M in 1985AD to 3,09M in 2025AD, bolstered by Songdo International Business District and expanded port infrastructure [@KOSIS2021Census; @Lee2025Passenger].

### The Southeastern Industrial Belt of Yeongnam

The Yeongnam macro-region, encompassing North and South Gyeongsang alongside the independent metropolitan cities of Busan, Daegu and Ulsan, served as the primary industrial counterbalance to the capital region during the mid-to-late twentieth century [@KOSIS2021Census; @Lee2025Passenger]. In 1953AD, Yeongnam was home to 6,6M people (32,3% of the national total), expanding through heavy industrialisation to reach 11,44M in 1980AD and peaking at 13,1M in 2015AD [@KOSIS2021Census].

Busan expanded from 1,06M in 1953AD to 3,85M in 1990AD, driven by light manufacturing, shoe production and its status as the primary transshipment container port [@KOSIS2021Census]. However, following the 1990s, Busan began to experience sustained population decline, contracting to 3,45M in 2015AD and 3,24M in 2025AD as young graduates departed for opportunities in Seoul [@KOSIS2021Census; @Song2018Factors]. Daegu followed a parallel trajectory, rising from 623,1k in 1953AD to a peak of 2,51M in 2000AD before easing to 2,36M in 2025AD [@KOSIS2021Census]. In contrast, heavy industrial nodes retained demographic momentum longer: Ulsan grew from 129,4k in 1953AD to 1,17M in 2015AD, anchored by shipbuilding, petrochemicals and automotive manufacturing, though it too entered minor decline after 2015AD (1,1M in 2025AD) [@KOSIS2021Census; @Lee2025Passenger]. North Gyeongsang remained relatively stable around 2,6M to 2,9M, though its interior rural counties experienced severe ageing and school consolidations [@KOSIS2021Census; @Im2021Spatial].

### The Central Transportation Corridor of Hoseo

The Hoseo macro-region, encompassing North and South Chungcheong alongside Daejeon Metropolitan City and Sejong Special Self-Governing City, functioned as the central geographic crossroads of the peninsula [@KOSIS2021Census; @Lee2025Passenger]. Population in Hoseo expanded from 3,54M in 1953AD (17,3% of national total) to 4,38M in 1980AD, 5,04M in 2010AD and 5,77M in 2025AD (11,1%) [@KOSIS2021Census].

Daejeon expanded from 477,9k in 1953AD to 1,05M in 1990AD and 1,54M in 2015AD, developing as a major science and research hub centred on Daedeok Science Town and the Government Complex Daejeon [@KOSIS2021Census; @Lee2025Passenger]. In 2012AD, the creation of Sejong Special Self-Governing City relocated dozens of central government ministries from Seoul, stimulating rapid growth from 63,7k in 1953AD (as Yeonki County) to 204,1k in 2015AD and 392,5k in 2025AD [@KOSIS2021Census]. Concurrently, northern South Chungcheong (Cheonan and Asan) integrated directly into the Sudogwon commuter network via Seoul Subway Line 1 and the Gyeongbu High-Speed Railway (KTX), attracting semiconductor manufacturing and displaying sustained demographic resilience [@KOSIS2021Census; @Lee2025Passenger].

### The Agrarian De-population of Honam

The southwestern macro-region of Honam, encompassing North and South Jeolla alongside Gwangju Metropolitan City, experienced the most dramatic relative and absolute demographic depletion in post-armistice Korea [@KOSIS2021Census; @Kim2018People]. In 1953AD, Honam was the traditional agricultural heartland, containing 5,62M inhabitants and representing 27,5% of the national population [@KOSIS2021Census; @Cha2009LivingStandards]. By 2025AD, Honam's population had contracted to 4,96M, representing just 9,6% of the national total [@KOSIS2021Census].

While Gwangju grew as a regional administrative and university metropolis, expanding from 509,1k in 1953AD to 1,5M in 2015AD before easing to 1,43M in 2025AD, the surrounding rural provinces endured continuous out-migration [@KOSIS2021Census]. South Jeolla reached an apex of 3,05M in 1966AD before declining relentlessly to 2M in 2000AD and 1,78M in 2025AD [@KOSIS2021Census]. North Jeolla peaked at 2,52M in 1966AD and shrank to 1,75M in 2025AD [@KOSIS2021Census]. The absence of large-scale heavy industrial investments during the Park Chung-hee era, combined with agricultural mechanisation, channelled several generations of rural youth toward Seoul and Incheon, leaving Honam with the highest median ages and lowest child dependency ratios in the country [@KOSIS2021Census; @Song2018Factors; @Im2021Spatial].

### The Mountainous and Maritime Peripheries: Gangwon and Jeju

The northeastern province of Gangwon and the southern island of Jeju represent distinct peripheral demographic trajectories [@KOSIS2021Census; @Lee2025Passenger]. Gangwon, bounded by the rugged Taebaek Mountains and the military Demilitarised Zone, held 1,06M people in 1953AD, expanded to a peak of 1,79M in 1980AD during the height of domestic coal mining and tungsten extraction, and subsequently contracted as coal mines closed under the Rationalisation of Coal Industry policy [@KOSIS2021Census]. By 2025AD, Gangwon stabilised around 1,52M, sustained by tourism and transport links along the Yeongdong Expressway and Gyeonggang KTX line connecting Wonju (367,3k), Chuncheon (291,2k) and Gangneung (212,1k) [@KOSIS2021Census; @Lee2025Passenger].

Jeju Special Self-Governing Province displayed continuous secular expansion across the study era [@KOSIS2021Census]. Population grew from 275,2k in 1953AD to 488,8k in 1985AD, 513,3k in 2000AD and 669,4k in 2025AD [@KOSIS2021Census]. Fostered by international tourism, citrus cultivation, visa-free travel policies and corporate domestic relocations, Jeju maintained positive net in-migration from the mainland until the late 2010s, standing as one of the few non-capital provinces to achieve historical population peaks in the 2020s [@KOSIS2021Census; @Kim2018People].

## Urban Hierarchy and Settlement Centrality

The urban system of South Korea demonstrates exceptional rank-size primacy centred on the capital metropolis [@KOSIS2021Census; @Lee2025Passenger]. Analysis of the 1.229 catalogued settlements indicates that while classical rank-size distributions assume a linear log-log relationship between settlement rank and population size, South Korea exhibits pronounced capital-city convexity [@KOSIS2021Census; @Kim2018People]. Seoul's peak population of 10,61M in 1990AD stood nearly three times larger than second-ranked Busan (3,85M) and four times larger than third-ranked Incheon (3,09M) [@KOSIS2021Census].

Furthermore, when evaluated as an integrated functional urban region, the Sudogwon metropolitan complex encompasses over twenty-six million inhabitants within a single contiguous labour market, generating severe spatial imbalances against secondary regional centres [@KOSIS2021Census; @Lee2025Passenger]. High-speed rail networks, beginning with the opening of KTX in 2004AD, further compressed inter-city transit times, paradoxically intensifying the suction effect toward Seoul by enabling regional residents to access specialised medical, cultural and corporate services in the capital without relocating [@Kim2018People; @Lee2025Passenger].

Beyond the primary administrative tier, South Korea's urban hierarchy evolved through the development of specialised industrial and research technopoles [@KOSIS2021Census; @Lee2025Passenger]. In Gyeonggi Province, Pangyo Techno Valley emerged in the late 2000s as the national capital for software engineering, biotechnology and video game design, attracting tens of thousands of technical professionals and turning southern Seongnam into an affluent high-technology corridor [@Kim2018People; @Lee2025Passenger]. In the southeast, Gumi concentrated television display and mobile handset manufacturing, while Pohang developed around the Pohang University of Science and Technology (POSTECH) and integrated steel mills [@KOSIS2021Census; @Lee2025Passenger]. In Honam, the development of the Yeosu Petrochemical Complex and Gwangyang Container Port created an industrial enclave along Gwangyang Bay, although these capital-intensive installations generated fewer service-sector jobs than metropolitan Seoul, limiting their capacity to arrest wider provincial youth outflows [@KOSIS2021Census; @Kim2018People].

# Limitations

Several administrative and statistical considerations condition the demographic time series harmonised in this study. First, municipal consolidations (*dosi-gun tonghap*) carried out in 1994AD and 1995AD merged independent county seats (*gun*) with urban municipal cores (*si*), altering the administrative classification of suburban farming townships [@KOSIS2021Census; @Dyrting2024Estimating]. In this analysis, historical populations are mapped to fixed contemporary boundaries to maintain geographic consistency across municipal boundaries.

Second, changes in official census methodology—specifically the transition in 2015AD from traditional door-to-door field enumerations to register-based censuses (*deungnok senseoseu*) utilising administrative datasets from thirteen government agencies—improved coverage of foreign nationals and single-person households while introducing minor series breaks in submunicipal counts [@KOSIS2021Census; @Yoo2014Educational]. Finally, the rapid rise of unrecorded international commuters, short-term visa holders and undocumented migrant labourers in rural agricultural processing and small manufacturing firms introduces small residual uncertainties into submunicipal population estimates, though national provincial totals remain tightly constrained by official registrations [@KOSIS2021Census; @Liu2026Perceived; @Dyrting2024Estimating].

# Discussion and Regional Implications

The demographic trajectory of South Korea provides an exceptional case study in the dynamics of compressed modernisation [@Kwon1977Demography; @Repetto1981Socioeconomic; @Caldwell2020Social]. In the span of seven decades, the nation evolved from a war-torn, high-fertility agrarian society into a technologically advanced, hyper-urbanised economy experiencing the most severe demographic contraction in modern history [@KOSIS2021Census; @Park2026Chronic].

This transition highlights the profound feedback between spatial concentration and demographic decline [@Song2018Factors; @Park2026Chronic; @Kim2018People]. The extreme density of the Seoul Capital Area—where over twenty-six million people reside within forty kilometres of the Han River—generates fierce competition for housing, employment and educational credentials [@Song2018Factors; @Liu2026Perceived; @Park2026Chronic]. The resulting financial and psychological burdens delay family formation, driving total fertility to levels that make long-term demographic replacement impossible without unprecedented immigration or profound structural decentralisation [@Song2018Factors; @Szotysek2026Patriarchy; @Parsons2018Evaluation].

When compared to regional neighbours in East Asia, South Korea's trajectory appears both familiar in direction and extreme in magnitude [@SBJ2021Census; @Wu2021Spatiality; @GietelBasten2019Assessing]. Japan preceded South Korea in experiencing sub-replacement fertility and rural depopulation, yet Japan's total fertility rate remained between 1,25 and 1,45, allowing for a far more gradual transition into super-aged demographics [@SBJ2021Census; @Parsons2018Evaluation]. In South Korea, the compression of economic development into a single generation compressed the demographic transition to an extraordinary degree, compressing fifty years of European or Japanese demographic change into barely twenty years [@Kwon1977Demography; @Repetto1981Socioeconomic; @Park2026Chronic].

As South Korea advances through the late 2020s, policy makers confront twin imperatives: managing the fiscal and healthcare demands of a super-aged society while attempting to decentralise economic opportunity away from Sudogwon [@Parsons2018Evaluation; @Park2026Chronic]. The historical evidence harmonised in this study indicates that without reversing the spatial suction of the capital region, policies aimed at reviving birth rates will continue to struggle against the formidable economic and spatial realities of modern Korean urban life [@Song2018Factors; @Kim2018People; @Park2026Chronic].

# Sources

<div id="refs"></div>
