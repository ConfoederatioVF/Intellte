---
title: "Colonial West Africa and the Sahel"
subtitle: "British, French, German, Portuguese Territories and Liberia (1880s-1975)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_west_sahel_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Fourteen colonial territories and 4.123 individually assessed settlements across West Africa and the Sahel between 1880AD and 1975AD."
hero_label: "fig:hero-colonial-west-sahel"

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

Between the Berlin partition of the 1880s and the mid-1970s, colonial rule, railway construction, export agriculture and post-1945 public health campaigns reshaped the demography of West Africa and the Sahel. Across a territorial domain of 6.050.194 km² spanning 17 modern countries, NICETHI reconstructs an aggregate regional population that rose from 20,43M inhabitants in 1880AD to 30,12M in 1900AD, 43,7M in 1930AD, 53,14M in 1950AD and 82,97M in 1960AD before reaching 91,17M by 1975AD, yielding a mean end-epoch density of 15,07 persons/km². Growth diverged sharply between coastal export belts and the arid interior. In British West Africa, Southern Nigeria and Lagos rose more than fivefold to 16,96M (105,59 persons/km²) and the Gold Coast expanded eightfold to 11,14M, while Northern Nigeria grew from 6,52M to 25,25M despite severe 1913-1914 and 1968-1974 Sahelian droughts and the 1918-1919 influenza pandemic. Across French West Africa, railway termini and deep-water ports such as Dakar, Abidjan, Conakry and Cotonou drew seasonal labour from French Sudan, Upper Volta and Niger, while German and Mandate Togo, Portuguese Guinea, Sierra Leone, The Gambia and Liberia underwent parallel post-war urban acceleration. These trajectories rest on 4.123 individually assessed settlements across 22.108 chronological observations, combined with non-stationary Matérn spatial interpolation and mass-conserving pycnophylactic disaggregation across colonial territorial and post-independence census divisions.



# Background

## Colonial Partition, Railways and Export Ecologies

On the eve of European partition in 1880AD, West Africa and the Sahel remained predominantly rural, with population concentrated in the Yoruba and Igbo forest belts, the Hausa-Fulani Emirates of Sokoto, the Mossi plateau, Futa Jallon and the Wolof groundnut coast [@Services2013WritingHistory; @FrankemaJerven2014AfricanPop]. Between 1884AD and 1903AD, rival French, British, German and Portuguese expeditions drew borders across older political frontiers, creating the federation of Afrique Occidentale Française (AOF) across eight territories, four British jurisdictions (Nigeria, the Gold Coast, Sierra Leone and The Gambia), German Togoland (split in 1919AD into British and French League of Nations mandates), Portuguese Guinea and the independent Republic of Liberia [@Ittmann2010DemographicsEmpire; @Kuczynski1948DemographicSurvey1; @AOFAnnuaire1936].

Colonial fiscal policy tethered demographic mobility to transport corridors and export crops [@Manchuelle1997WillingMigrants; @Adjepong2013StrangersAnd]. Where earlier caravan trade ran north-south across the Sahara, colonial railways ran inland from deep-water Atlantic ports: Dakar to Saint-Louis and Koulikoro on the Niger, Conakry to Kankan, Abidjan northward into Côte d'Ivoire and Upper Volta, Lomé into Togoland, Sekondi and Accra to Kumasi, and Lagos and Port Harcourt northward to Ibadan, Enugu, Kaduna and Kano [@AOFAnnuaire1936; @Cardinall1932GoldCoast]. Groundnuts in Senegal and The Gambia, cocoa in the Gold Coast, southern Nigeria and Côte d'Ivoire, palm oil in Dahomey and eastern Nigeria, rubber in Liberia and tin and coal mining on the Jos Plateau and around Enugu drew hundreds of thousands of seasonal and permanent migrants from interior savannas toward coastal cities and forest farms [@Manchuelle1997WillingMigrants; @Keese2016WolofSenegal; @Afaha2013MigrationRemittance].

## Censuses, Epidemics and the Post-1945 Mortality Transition

Early colonial population figures were administrative guesses built from hut-tax lists, head-tax rolls and district officers' tour diaries [@Kuczynski1948DemographicSurvey1; @Akinyoade2017CensusTaking]. In British territories, regular decennial enumerations began on the coast - Freetown in 1881AD, Accra and Lagos in 1881AD-1891AD and Bathurst in 1881AD - before expanding cautiously into the interior protectorates in 1911AD, 1921AD and 1931AD [@Kuczynski1948DemographicSurvey1; @Cardinall1932GoldCoast; @Office1951AnnualReport]. Even then, tax avoidance and understaffing caused substantial undercounts outside municipal boundaries, prompting later historians to revise early twentieth-century baselines upward [@Services2013WritingHistory; @FrankemaJerven2014AfricanPop]. French officials in Dakar published parallel five-year administrative censuses in the *Annuaire Statistique de l'Afrique Occidentale Française* alongside detailed registers for Senegal's Four Communes of Saint-Louis, Dakar, Gorée and Rufisque [@AOFAnnuaire1936; @Keese2016WolofSenegal].

Demographic growth stayed modest until the 1920s. Colonial pacification, forced porterage, the 1913-1914 Sahelian famine and especially the 1918-1919 influenza pandemic imposed heavy mortality across ports and railway towns alike [@Ittmann2010DemographicsEmpire; @Vrooman2025TheColonial]. Tropical medical campaigns began earlier in coastal enclaves - Ross's 1899AD malaria expedition to Freetown and sanitation drives in Dakar and Accra - yet rural health coverage remained thin until the late 1930s [@History1899ReportThe; @Vrooman2025TheColonial; @Faye2021WaterResources]. After 1945AD, antibiotics, malaria and yellow-fever control, smallpox vaccination and improved famine transport lowered infant and crude death rates sharply while birth rates stayed high, inaugurating sustained natural increase alongside explosive rural-to-urban migration through 1975AD [@Adedini2014NeighbourhoodCharacteristics; @Vrooman2025TheColonial; @Akanle2017RemittancesAnd].

# Methodology

## Sub-Regional Territorial Partition and Accounting Domain

The study area spans 6.050.194 km² (73.158 five-arcminute pixels) across 17 contemporary states from Mauritania and Senegal east to Chad and south-east to Cameroon. Within NICETHI, Chapter 11 bridges early modern West Africa and the post-colonial national era across 14 colonial territorial sub-regions derived from colonial boundary maps, League of Nations mandate limits and historical administrative polygons (Table \ref{tab:subregions}). Six AOF sub-regions group the eight French territories: Senegal and Mauritania; French Sudan (Soudan Français); Upper Volta and Niger (including Haute-Volta during its 1932AD-1947AD partition); French Guinea; Côte d'Ivoire; and Dahomey [@AOFAnnuaire1936; @Runfola2020GeoBoundaries]. Four British sub-regions distinguish Northern Nigeria, Southern Nigeria and Lagos, the Gold Coast (with Ashanti and Northern Territories), Sierra Leone and The Gambia (five British jurisdictions counting Northern and Southern Nigeria separately), flanked by German and Mandate Togo, Portuguese Guinea and the Republic of Liberia [@Kuczynski1948DemographicSurvey1; @Cardinall1932GoldCoast].

Population totals are evaluated at 14 benchmark years between 1880AD and 1975AD (1880, 1900, 1930, 1950, 1953, 1955, 1958, 1960, 1963, 1965, 1968, 1970, 1973 and 1975), with six primary checkpoints reported in compact tables: 1880AD, 1900AD, 1930AD, 1950AD, 1960AD and 1975AD. Sub-regional series represent full resident populations combining nucleated cities, mining camps, farming villages and nomadic Sahelian pastoralists [@Ittmann2010DemographicsEmpire; @Gamble1999NorthBankGambia].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Era</th><th class="crd-th">Assessed Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>AOF: Senegal and Mauritania</strong></td><td class="crd-td">1.236.727</td><td class="crd-td">15.293</td><td class="crd-td">1895AD-1960AD</td><td class="crd-td">397</td><td class="crd-td">20,4</td></tr>
<tr><td class="crd-td"><strong>AOF: French Sudan (Soudan Francais)</strong></td><td class="crd-td">1.256.126</td><td class="crd-td">15.354</td><td class="crd-td">1892AD-1960AD</td><td class="crd-td">318</td><td class="crd-td">20,8</td></tr>
<tr><td class="crd-td"><strong>AOF: Upper Volta and Niger Territory</strong></td><td class="crd-td">1.458.832</td><td class="crd-td">17.745</td><td class="crd-td">1898AD-1960AD</td><td class="crd-td">608</td><td class="crd-td">24,1</td></tr>
<tr><td class="crd-td"><strong>AOF: French Guinea (Guinee Francaise)</strong></td><td class="crd-td">244.746</td><td class="crd-td">2.899</td><td class="crd-td">1891AD-1958AD</td><td class="crd-td">119</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>AOF: Cote d'Ivoire</strong></td><td class="crd-td">322.346</td><td class="crd-td">3.789</td><td class="crd-td">1893AD-1960AD</td><td class="crd-td">368</td><td class="crd-td">5,3</td></tr>
<tr><td class="crd-td"><strong>AOF: Colony of Dahomey</strong></td><td class="crd-td">117.626</td><td class="crd-td">1.390</td><td class="crd-td">1894AD-1960AD</td><td class="crd-td">198</td><td class="crd-td">1,9</td></tr>
<tr><td class="crd-td"><strong>Northern Nigeria Protectorate and Provinces</strong></td><td class="crd-td">746.269</td><td class="crd-td">8.838</td><td class="crd-td">1900AD-1960AD</td><td class="crd-td">734</td><td class="crd-td">12,3</td></tr>
<tr><td class="crd-td"><strong>Southern Nigeria, Lagos and Eastern Provinces</strong></td><td class="crd-td">160.629</td><td class="crd-td">1.882</td><td class="crd-td">1885AD-1960AD</td><td class="crd-td">457</td><td class="crd-td">2,7</td></tr>
<tr><td class="crd-td"><strong>British Gold Coast, Ashanti and N. Territories</strong></td><td class="crd-td">239.620</td><td class="crd-td">2.819</td><td class="crd-td">1880AD-1957AD</td><td class="crd-td">453</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Colony and Protectorate of Sierra Leone</strong></td><td class="crd-td">72.419</td><td class="crd-td">853</td><td class="crd-td">1896AD-1961AD</td><td class="crd-td">88</td><td class="crd-td">1,2</td></tr>
<tr><td class="crd-td"><strong>Gambia Colony and Protectorate</strong></td><td class="crd-td">10.271</td><td class="crd-td">123</td><td class="crd-td">1888AD-1965AD</td><td class="crd-td">90</td><td class="crd-td">0,2</td></tr>
<tr><td class="crd-td"><strong>German Togoland and Mandate Togo</strong></td><td class="crd-td">56.450</td><td class="crd-td">665</td><td class="crd-td">1884AD-1960AD</td><td class="crd-td">122</td><td class="crd-td">0,9</td></tr>
<tr><td class="crd-td"><strong>Portuguese Guinea (Guine Portuguesa)</strong></td><td class="crd-td">32.332</td><td class="crd-td">385</td><td class="crd-td">1879AD-1974AD</td><td class="crd-td">53</td><td class="crd-td">0,5</td></tr>
<tr><td class="crd-td"><strong>Republic of Liberia</strong></td><td class="crd-td">95.800</td><td class="crd-td">1.123</td><td class="crd-td">1880AD-1975AD</td><td class="crd-td">80</td><td class="crd-td">1,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Fourteen colonial sub-regions of West Africa and the Sahel showing surface area, 5-arcminute pixels, administrative spans and interior assessed sites.</figcaption>
</figure>

## Settlement Screening and Urban Enumeration Sources

To capture urban growth from early colonial ports to post-independence metropolises, 6.392 candidate towns, railway stations, district headquarters and metropolitan agglomerations between 1880AD and 1975AD were screened across four saturation waves. Wave 1 compiled 701 urban records from colonial blue books, AOF *Annuaires Statistiques*, national census volumes and international historical tables; subsequent deduplication removed 2.269 alias duplicates and out-of-epoch fragments while Wave 4 gap-sweeps added six missing provincial towns (marginal gain 0,81%), leaving 4.123 individually assessed entries across 22.108 dated observations (4.068 city-proper series and 55 post-1950 metropolitan agglomerations; Figure \ref{fig:hero-colonial-west-sahel}).

Keeping city-proper counts distinct from metropolitan agglomerations prevents boundary inflation from masquerading as demographic acceleration [@Faye2021WaterResources; @Akinyoade2017CensusTaking]. For example, Lagos city-proper grew from 37.452 in 1881AD to 126.108 in 1931AD, 267.407 in 1952AD and 901k in 1970AD, whereas the wider Lagos metropolitan agglomeration reached 288,9k in 1950AD, 822,3k in 1960AD and 1,49M by 1970AD [@Akinyoade2017CensusTaking; @Afaha2013MigrationRemittance]. Similarly, Dakar city-proper expanded from 18.447 in 1904AD to 92.634 in 1936AD and 591k in 1970AD alongside an agglomeration of 557,3k [@AOFAnnuaire1936; @Faye2021WaterResources]. During bibliographic curation, automated keyword matching also flagged homonymous non-African studies on Queensland's Gold Coast [@Cunningham2020AustralianCultural], which were excluded from all demographic parameterisation.

## Spatial Interpolation and Pycnophylactic Sub-Administrative Disaggregation

Because urban registers capture only town-dwellers, NICETHI distributes rural populations across 5-arcminute grid cells by combining historical sub-administrative census aggregates with non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) spatial interpolation and mass-conserving pycnophylactic disaggregation [@Runfola2020GeoBoundaries; @Services2013WritingHistory]. Across the broader continental surface, residual kriging draws on 11.199 domestic archaeological and historical site records (6.970 unique-coordinate points) across 6.431 Voronoi catchments (median radius 31,72 km, 90th percentile 49,29 km), with West Africa contributing 2.591 records across 1.528 unique locations (75,69% from regional registers and monographs, zero crowd-sourced entries). In the nineteenth-century and early modern transition horizons feeding pre-census baselines, weighted least-squares variogram fits converge at dimensionless scales $\tau_1 = 1,35$ (raw 1,41) and $\tau_2 = 2,90$ with nugget-to-sill ratio 0,04 ($R^2 = 0,9992$), weighting fluvial proximity ($\beta_3 = 0,0342$ to $0,0595$) and coastal access ($\beta_4 = 0,0475$ to $0,0717$) under a two-pixel modern urban buffer.

Where sub-administrative colonial or post-colonial enumerations exist, polygon totals from geoBoundaries and historical territorial archives are disaggregated downward across pixels via strictly mass-conserving pycnophylactic scaling [@Runfola2020GeoBoundaries; @AOFAnnuaire1936; @Cardinall1932GoldCoast]. Across 81 disaggregated benchmark years and 30.911 unit-year checks spanning 1900AD to 2020AD (including 1914 colonial provinces, 1925 League of Nations mandates, 1940 colonial boundaries and 119 to 325 post-1950 administrative divisions between 1950AD and 1970AD), 100% of administrative polygons satisfy mass conservation within 0,01%, with a worst unit relative error of $5,603 \times 10^{-8}$.

# Testing and Validation

## Colonial Sub-Administrative Census Cross-Checks

To test territorial alignment against historical enumerations, Table \ref{tab:aof-censuses} and Table \ref{tab:british-censuses} compare the primary archival sub-administrative tables assembled in the chapter cache for French West Africa, Nigeria and the Gold Coast [@AOFAnnuaire1936; @Cardinall1932GoldCoast; @Akinyoade2017CensusTaking; @FrankemaJerven2014AfricanPop]. In AOF, enumerated territory totals grew from 15,05M in 1931AD to 17,36M in 1951AD (+15,3%), paced by rapid gains in Niger (+68,3% as southern Hausa-Zarma districts entered regular tax rolls), Mauritania (+89,8% from deeper nomadic registration) and Dahomey (+41%), while French Sudan (-3,7%) and Upper Volta (reconstituted in 1947AD at 3,12M after its 1932AD partition) registered substantial out-migration toward Senegal and Côte d'Ivoire [@AOFAnnuaire1936; @Manchuelle1997WillingMigrants; @Vrooman2025TheColonial].

<figure class="crd-table-figure" id="tab:aof-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">1931 Census</th><th class="crd-th">1951 Census</th><th class="crd-th">Change (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Soudan Français (Mali)</strong></td><td class="crd-td">3,58M</td><td class="crd-td">3,44M</td><td class="crd-td">-3,7</td></tr>
<tr><td class="crd-td"><strong>Haute-Volta (Burkina Faso)</strong></td><td class="crd-td">2,97M</td><td class="crd-td">3,12M</td><td class="crd-td">4,8</td></tr>
<tr><td class="crd-td"><strong>Guinée Française</strong></td><td class="crd-td">2,22M</td><td class="crd-td">2,26M</td><td class="crd-td">1,6</td></tr>
<tr><td class="crd-td"><strong>Côte d'Ivoire</strong></td><td class="crd-td">1,87M</td><td class="crd-td">2,17M</td><td class="crd-td">16</td></tr>
<tr><td class="crd-td"><strong>Sénégal (incl. Dakar)</strong></td><td class="crd-td">1,73M</td><td class="crd-td">2,09M</td><td class="crd-td">21,3</td></tr>
<tr><td class="crd-td"><strong>Niger</strong></td><td class="crd-td">1,29M</td><td class="crd-td">2,16M</td><td class="crd-td">68,3</td></tr>
<tr><td class="crd-td"><strong>Dahomey (Bénin)</strong></td><td class="crd-td">1,11M</td><td class="crd-td">1,57M</td><td class="crd-td">41</td></tr>
<tr><td class="crd-td"><strong>Mauritanie</strong></td><td class="crd-td">287,6k</td><td class="crd-td">546k</td><td class="crd-td">89,8</td></tr>
<tr><td class="crd-td"><strong>Total AOF Federation</strong></td><td class="crd-td">15,05M</td><td class="crd-td">17,36M</td><td class="crd-td">15,3</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> French West Africa (AOF) territorial enumerations in 1931AD and 1951AD from official federal yearbooks.</figcaption>
</figure>

In British West Africa, Nigeria's 1911AD administrative count returned 16,05M (8,12M Northern Protectorate, 7,93M Southern Colony and Protectorate), rising to 19,55M across Northern (11,43M), Eastern (4,32M) and Western (3,8M) provinces in 1931AD (20,06M including British Cameroons) before jumping to 30,42M in 1952-1953 and 55,64M across the disputed 1963AD federal count [@Kuczynski1948DemographicSurvey1; @Akinyoade2017CensusTaking; @FrankemaJerven2014AfricanPop]. In the Gold Coast, enumerations expanded from 764,2k in the 1891AD coastal Colony to 3,16M across all four divisions (Colony, Ashanti, Northern Territories and British Togoland) in 1931AD and 8,56M across nine regions in 1970AD [@Cardinall1932GoldCoast; @Adjepong2013StrangersAnd].

<figure class="crd-table-figure" id="tab:british-censuses">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Year</th><th class="crd-th">Administrative Division</th><th class="crd-th">Enumerated Pop.</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nigeria (1911)</strong></td><td class="crd-td">Northern Protectorate</td><td class="crd-td">8,12M</td><td class="crd-td">50,6%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1911)</strong></td><td class="crd-td">Southern Colony and Protectorate</td><td class="crd-td">7,93M</td><td class="crd-td">49,4%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1931)</strong></td><td class="crd-td">Northern Provinces</td><td class="crd-td">11,43M</td><td class="crd-td">58,5%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1931)</strong></td><td class="crd-td">Eastern Provinces</td><td class="crd-td">4,32M</td><td class="crd-td">22,1%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1931)</strong></td><td class="crd-td">Western Provinces</td><td class="crd-td">3,8M</td><td class="crd-td">19,4%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1963)</strong></td><td class="crd-td">Northern Region</td><td class="crd-td">29,78M</td><td class="crd-td">53,5%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1963)</strong></td><td class="crd-td">Eastern Region</td><td class="crd-td">12,39M</td><td class="crd-td">22,3%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1963)</strong></td><td class="crd-td">Western and Mid-Western Regions</td><td class="crd-td">12,8M</td><td class="crd-td">23%</td></tr>
<tr><td class="crd-td"><strong>Nigeria (1963)</strong></td><td class="crd-td">Federal Territory of Lagos</td><td class="crd-td">665k</td><td class="crd-td">1,2%</td></tr>
<tr><td class="crd-td"><strong>Gold Coast (1931)</strong></td><td class="crd-td">Gold Coast Colony</td><td class="crd-td">1,57M</td><td class="crd-td">49,7%</td></tr>
<tr><td class="crd-td"><strong>Gold Coast (1931)</strong></td><td class="crd-td">Northern Territories</td><td class="crd-td">717,3k</td><td class="crd-td">22,7%</td></tr>
<tr><td class="crd-td"><strong>Gold Coast (1931)</strong></td><td class="crd-td">Ashanti</td><td class="crd-td">578,1k</td><td class="crd-td">18,3%</td></tr>
<tr><td class="crd-td"><strong>Gold Coast (1931)</strong></td><td class="crd-td">British Togoland (Mandate)</td><td class="crd-td">293,7k</td><td class="crd-td">9,3%</td></tr>
<tr><td class="crd-td"><strong>Ghana (1970)</strong></td><td class="crd-td">All Nine Administrative Regions</td><td class="crd-td">8,56M</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Selected colonial and early post-colonial regional census benchmarks for Nigeria (1911-1963) and the Gold Coast/Ghana (1931-1970).</figcaption>
</figure>

## Urban Rank-Size Calibration and Ledger Saturation

Across all 4.123 settlements in the chapter ledger, ordinary least-squares rank-size regression on the upper tier ($n = 180$) yields a Zipf slope of $q = 0,93$ ($R^2 = 0,98$, intercept 6,52), while full-sample regression gives $q = 1,19$ ($R^2 = 0,86$). On the spatially deduplicated urban series plotted in Figure \ref{fig:rank-size} ($n = 679$), the log-log fit records $q = 0,88$ ($R^2 = 0,99$), confirming a balanced polycentric urban system without a single regional metropolis monopolising growth. Instead of one dominant primate city, colonial West Africa developed twin coastal commercial hubs in Nigeria (Lagos agglomeration 1,49M, Ibadan 768k, Onitsha 248k, Port Harcourt 237k) alongside major port capitals in Côte d'Ivoire (Abidjan 951,2k), Ghana (Accra 624,1k, Kumasi 346,3k), Senegal (Dakar 591k), Guinea (Conakry agglomeration 355,2k) and Sierra Leone (Freetown 276,2k), paired with historic Sahelian inland markets led by Kano (390k) [@Faye2021WaterResources; @Akinyoade2017CensusTaking].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-west-sahel/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size distribution across 679 spatially deduplicated colonial towns (q = 0,88, R² = 0,99) and mean sub-regional densities in 1975AD.</figcaption>
</figure>

Four-wave saturation checks confirm full territorial coverage across all 14 sub-regions (zero empty inhabited sub-regions), with a unique-peak ratio of 0,7818 and a log-interquartile range of 0,576. Jurisdictional counts track both demographic weight and census archive depth: Nigeria contributes 281 settlements (875 observations), Ghana 105 (288), Ivory Coast 64 (172), Mali 41 (175), Sierra Leone 31 (92), Senegal 29 (142), Niger 28 (86), Guinea 26 (100), Liberia 26 (53), Burkina Faso 20 (82), Mauritania 20 (76), Togo 20 (58), Benin 19 (77), Guinea-Bissau 9 (29), Cameroon 9 (34), Gambia 8 (30) and Chad 2 (8) [@Slrobbins1996GambianStudies; @Gamble1946GambianStudies; @Office1951AnnualReport].

# Results

## Early Colonial Consolidation and Railway Reorientation (1880AD to 1930AD)

Between 1880AD and 1930AD, total population across the 14 sub-regions more than doubled from 20,43M to 43,7M (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). Much of the apparent jump between 1880AD and 1900AD (30,12M) reflects the transition from sparse precolonial traveller estimates to territorial protectorate accounting in Northern Nigeria, whose baseline rises from 6,52M in 1880AD to 15,24M in 1900AD and 20,96M by 1930AD [@Services2013WritingHistory; @FrankemaJerven2014AfricanPop]. Across Southern Nigeria and Lagos, palm-kernel and cocoa exports plus railway expansion lifted numbers from 2,98M in 1880AD to 7,99M in 1930AD, while the Gold Coast grew from 1,36M to 2,25M [@Cardinall1932GoldCoast; @Adjepong2013StrangersAnd].

Urban trajectories during this first colonial half-century reveal sharp institutional contrasts. Dakar, founded in 1857AD and made federal capital of AOF in 1902AD, expanded from 1k in 1880AD to 18.447 in 1904AD and 53.982 in 1931AD, eclipsing the older river port of Saint-Louis (20.173 in 1891AD to 33.066 in 1936AD) [@AOFAnnuaire1936; @Faye2021WaterResources]. In Côte d'Ivoire, Abidjan grew from roughly 1k in 1910AD to 10k in 1930AD as the railway terminal displaced Grand-Bassam and Bingerville; in Nigeria, new colonial railway and mining towns appeared where none existed before 1910AD - Port Harcourt growing from 2.480 in 1915AD to 15.201 in 1931AD, Kaduna from 3.420 in 1917AD to 10.628 in 1931AD, and Enugu from 3.170 in 1917AD to 12.959 in 1931AD [@Akinyoade2017CensusTaking; @Afaha2013MigrationRemittance]. Older precolonial cities adapted unevenly: Ibadan climbed from 150k in 1890AD to 387.133 in 1931AD as the Yoruba cocoa hub, whereas Kano dipped to 20k in 1906AD during early conquest and restructuring before rebounding to 89.162 in 1931AD after the railway arrived in 1911AD [@Kuczynski1948DemographicSurvey1].

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-west-sahel/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories, active settlement counts and growth of five leading colonial cities from 1880AD to 1975AD.</figcaption>
</figure>

## Cash-Crop Migration, Famines and Medical Campaigns (1914AD to 1950AD)

Between 1914AD and 1950AD, regional population reached 53,14M despite severe demographic shocks in the interwar decades (Table \ref{tab:trajectory}). In the Sahel, the 1913-1914 drought and requisitioning during the First World War depressed French Sudan (2,04M in 1930AD) and Upper Volta-Niger (3,46M), before the 1918-1919 influenza pandemic swept inward from Freetown, Dakar and Lagos along rail and river routes [@Ittmann2010DemographicsEmpire; @Vrooman2025TheColonial]. In 1932AD, French authorities dissolved Upper Volta and divided its Mossi labour reserve among Côte d'Ivoire, French Sudan and Niger to supply cocoa plantations and the Abidjan-Niger railway, restoring the colony only in 1947AD [@AOFAnnuaire1936; @Vrooman2025TheColonial].

Cash-crop labour diasporas tied savanna and forest regions together throughout this period. In Senegambia, Soninke *laptots* and seasonal *navétanes* from French Sudan, Futa Jallon and upper Senegal cultivated groundnuts across the Sine-Saloum, Kaolack and Gambia basins, feeding rapid growth in Senegal-Mauritania from 1,37M in 1930AD to 2,69M in 1950AD [@Manchuelle1997WillingMigrants; @Keese2016WolofSenegal; @Gamble1996GambianStudies]. Across the Gambia valley, colonial protectorate surveys documented dense riverside farming districts across Kantora, Fuladuu, Nyaamina, Jaara, Kiyang, Fonyi and the North Bank, lifting Gambia from 111,4k in 1900AD to 147,8k in 1950AD while Bathurst (modern Banjul) rose from 6.138 in 1881AD to 19.602 in 1951AD [@Slrobbins1996GambianStudies; @Gamble1946GambianStudies; @Gamble1999NorthBankGambia]. Farther east, Voltaic, Togolese and Nigerian migrants poured into Gold Coast cocoa farms and Ashanti mines, pushing Accra from 16.267 in 1891AD to 135.926 in 1948AD and Kumasi from 6.280 in 1901AD to 78.483 in 1948AD [@Cardinall1932GoldCoast; @Adjepong2013StrangersAnd].

Colonial medical services also left uneven urban and rural imprints. Following Ronald Ross's 1899AD malaria mission to Freetown, British administrations concentrated drainage and segregation works in port capitals such as Freetown (30.033 in 1891AD to 64.576 in 1948AD), Lagos and Accra [@History1899ReportThe; @Northcote1970AnthropologicalReport; @Office1951AnnualReport]. By contrast, comparative health histories of the Gold Coast and Côte d'Ivoire show that French mobile sleeping-sickness teams (*Service Général Autonome de la Maladie du Sommeil*) reached rural populations earlier in the 1930s, whereas British spending favoured stationary urban hospitals until post-1945 antibiotics and DDT campaigns generalised mortality decline across both empires [@Vrooman2025TheColonial; @Adedini2014NeighbourhoodCharacteristics].

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1975AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>AOF: Senegal and Mauritania</strong></td><td class="crd-td">963k</td><td class="crd-td">1,09M</td><td class="crd-td">1,37M</td><td class="crd-td">2,69M</td><td class="crd-td">1,74M</td><td class="crd-td">3,68M</td></tr>
<tr><td class="crd-td"><strong>AOF: French Sudan (Soudan Francais)</strong></td><td class="crd-td">1,6M</td><td class="crd-td">1,7M</td><td class="crd-td">2,04M</td><td class="crd-td">3,46M</td><td class="crd-td">2,34M</td><td class="crd-td">5,73M</td></tr>
<tr><td class="crd-td"><strong>AOF: Upper Volta and Niger Territory</strong></td><td class="crd-td">2,45M</td><td class="crd-td">2,64M</td><td class="crd-td">3,46M</td><td class="crd-td">5,29M</td><td class="crd-td">5,62M</td><td class="crd-td">10,73M</td></tr>
<tr><td class="crd-td"><strong>AOF: French Guinea (Guinee Francaise)</strong></td><td class="crd-td">887,7k</td><td class="crd-td">987k</td><td class="crd-td">1,25M</td><td class="crd-td">2,25M</td><td class="crd-td">1,6M</td><td class="crd-td">3,43M</td></tr>
<tr><td class="crd-td"><strong>AOF: Cote d'Ivoire</strong></td><td class="crd-td">1,1M</td><td class="crd-td">1,01M</td><td class="crd-td">1,18M</td><td class="crd-td">2,26M</td><td class="crd-td">2,05M</td><td class="crd-td">4,45M</td></tr>
<tr><td class="crd-td"><strong>AOF: Colony of Dahomey</strong></td><td class="crd-td">1,21M</td><td class="crd-td">1,2M</td><td class="crd-td">1,15M</td><td class="crd-td">1,63M</td><td class="crd-td">1,13M</td><td class="crd-td">2,07M</td></tr>
<tr><td class="crd-td"><strong>Northern Nigeria Protectorate and Provinces</strong></td><td class="crd-td">6,52M</td><td class="crd-td">15,24M</td><td class="crd-td">20,96M</td><td class="crd-td">16,14M</td><td class="crd-td">31,04M</td><td class="crd-td">25,25M</td></tr>
<tr><td class="crd-td"><strong>Southern Nigeria, Lagos and Eastern Provinces</strong></td><td class="crd-td">2,98M</td><td class="crd-td">3,19M</td><td class="crd-td">7,99M</td><td class="crd-td">11,89M</td><td class="crd-td">21,42M</td><td class="crd-td">16,96M</td></tr>
<tr><td class="crd-td"><strong>British Gold Coast, Ashanti and N. Territories</strong></td><td class="crd-td">1,36M</td><td class="crd-td">1,52M</td><td class="crd-td">2,25M</td><td class="crd-td">2,99M</td><td class="crd-td">10,47M</td><td class="crd-td">11,14M</td></tr>
<tr><td class="crd-td"><strong>Colony and Protectorate of Sierra Leone</strong></td><td class="crd-td">607,4k</td><td class="crd-td">682,5k</td><td class="crd-td">806,1k</td><td class="crd-td">991k</td><td class="crd-td">2,06M</td><td class="crd-td">2,8M</td></tr>
<tr><td class="crd-td"><strong>Gambia Colony and Protectorate</strong></td><td class="crd-td">99,6k</td><td class="crd-td">111,4k</td><td class="crd-td">139,6k</td><td class="crd-td">147,8k</td><td class="crd-td">210,1k</td><td class="crd-td">395,2k</td></tr>
<tr><td class="crd-td"><strong>German Togoland and Mandate Togo</strong></td><td class="crd-td">391,6k</td><td class="crd-td">434,7k</td><td class="crd-td">613,4k</td><td class="crd-td">1,29M</td><td class="crd-td">1,55M</td><td class="crd-td">2,18M</td></tr>
<tr><td class="crd-td"><strong>Portuguese Guinea (Guine Portuguesa)</strong></td><td class="crd-td">136,8k</td><td class="crd-td">156,3k</td><td class="crd-td">187,9k</td><td class="crd-td">311k</td><td class="crd-td">354,3k</td><td class="crd-td">631,8k</td></tr>
<tr><td class="crd-td"><strong>Republic of Liberia</strong></td><td class="crd-td">130,5k</td><td class="crd-td">150,7k</td><td class="crd-td">302,2k</td><td class="crd-td">1,81M</td><td class="crd-td">1,39M</td><td class="crd-td">1,72M</td></tr>
<tr><td class="crd-td"><strong>Total Study Area</strong></td><td class="crd-td">20,43M</td><td class="crd-td">30,12M</td><td class="crd-td">43,7M</td><td class="crd-td">53,14M</td><td class="crd-td">82,97M</td><td class="crd-td">91,17M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sub-regional and aggregate population trajectories across fourteen colonial jurisdictions at six benchmarks from 1880AD to 1975AD.</figcaption>
</figure>

## Post-War Urban Surge, Independence Transitions and Regional Contrasts (1950AD to 1975AD)

Between 1950AD and 1975AD, regional population expanded by 71,6% from 53,14M to 91,17M, while attested active settlements in Figure \ref{fig:trends} climbed from 406 in 1950AD to 476 by 1970AD (Table \ref{tab:top-centres}). Two structural discontinuities visible in Table \ref{tab:trajectory} and Figure \ref{fig:trends} stem from enumeration coverage shifts rather than sudden biological mortality swings. First, the leap from 53,14M in 1950AD to 78,45M in 1953AD reflects Nigeria's first complete territorial census of 1952-1953 (30,42M enumerated; 31,01M northern and 21,37M southern raster allocations in the regional mask), replacing earlier under-counted 1950AD baselines [@Akinyoade2017CensusTaking; @FrankemaJerven2014AfricanPop]. Second, the sharp dip between 1965AD (92,98M) and 1968AD (69,13M) reflects Nigerian Civil War displacement and the suspension of reliable federal reporting in Eastern and Northern Nigeria before recovery to 91,17M by 1975AD, alongside 1957AD-1960AD decolonisation boundary splices in Ghana, Guinea, Senegal and Mali [@Akinyoade2017CensusTaking; @Services2013WritingHistory].

Coastal capitals grew fastest after 1950AD. Opening the Vridi Canal in 1950AD turned Abidjan into a deep-water port whose city-proper population multiplied seventeen-fold from 56k in 1950AD to 282k in 1960AD and 951.216 in 1975AD [@Vrooman2025TheColonial]. Dakar reached 591k in 1970AD, stretching Cap-Vert's municipal water systems as rural migrants arrived from the groundnut basin and Casamance [@Faye2021WaterResources; @Keese2016WolofSenegal]. Lagos's metropolitan agglomeration surged from 288.895 in 1950AD to 1,49M in 1970AD, while Accra hit 624.091, Conakry 355.217, Freetown 276.247 (1974AD), Bamako 202.016, Monrovia 204.210 (1974AD), Lomé 188.876, Cotonou 162.166, Ouagadougou 146.367, Bissau 118.572 and Niamey 100.820 [@Office1951AnnualReport; @Afaha2013MigrationRemittance]. Meanwhile, inland territories such as French Sudan (5,73M in 1975AD, 4,56 persons/km²), Senegal-Mauritania (2,98 persons/km²) and Upper Volta-Niger (10,73M, 7,36 persons/km²) remained far sparser than Southern Nigeria (105,59 persons/km²) or the Gold Coast (46,48 persons/km²), a gradient compounded by the 1968-1974 Sahelian drought [@FrankemaJerven2014AfricanPop; @Manchuelle1997WillingMigrants].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Year</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lagos (Agglomeration)</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1970AD</td><td class="crd-td">1,49M</td><td class="crd-td">1970AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Abidjan</strong></td><td class="crd-td">Ivory Coast</td><td class="crd-td">City</td><td class="crd-td">1904AD-1975AD</td><td class="crd-td">951,2k</td><td class="crd-td">1975AD</td><td class="crd-td">18</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">City</td><td class="crd-td">1881AD-1970AD</td><td class="crd-td">901k</td><td class="crd-td">1970AD</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Ibadan</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">City</td><td class="crd-td">1884AD-1970AD</td><td class="crd-td">768k</td><td class="crd-td">1970AD</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Accra</strong></td><td class="crd-td">Ghana</td><td class="crd-td">City</td><td class="crd-td">1891AD-1970AD</td><td class="crd-td">624,1k</td><td class="crd-td">1970AD</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Accra (Agglomeration)</strong></td><td class="crd-td">Ghana</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1970AD</td><td class="crd-td">624,1k</td><td class="crd-td">1970AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Dakar</strong></td><td class="crd-td">Senegal</td><td class="crd-td">City</td><td class="crd-td">1880AD-1970AD</td><td class="crd-td">591k</td><td class="crd-td">1970AD</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>Abidjan (Agglomeration)</strong></td><td class="crd-td">Ivory Coast</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1970AD</td><td class="crd-td">580,8k</td><td class="crd-td">1970AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Dakar (Agglomeration)</strong></td><td class="crd-td">Senegal</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1970AD</td><td class="crd-td">557,3k</td><td class="crd-td">1970AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">City</td><td class="crd-td">1885AD-1970AD</td><td class="crd-td">390k</td><td class="crd-td">1970AD</td><td class="crd-td">16</td></tr>
<tr><td class="crd-td"><strong>Conakry (Agglomeration)</strong></td><td class="crd-td">Guinea</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1970AD</td><td class="crd-td">355,2k</td><td class="crd-td">1970AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kumasi</strong></td><td class="crd-td">Ghana</td><td class="crd-td">City</td><td class="crd-td">1891AD-1970AD</td><td class="crd-td">346,3k</td><td class="crd-td">1970AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Kumasi (Agglomeration)</strong></td><td class="crd-td">Ghana</td><td class="crd-td">Metro</td><td class="crd-td">1950AD-1970AD</td><td class="crd-td">346,3k</td><td class="crd-td">1970AD</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">Sierra Leone</td><td class="crd-td">City</td><td class="crd-td">1881AD-1974AD</td><td class="crd-td">276,2k</td><td class="crd-td">1974AD</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Ilorin</strong></td><td class="crd-td">Nigeria</td><td class="crd-td">City</td><td class="crd-td">1880AD-1970AD</td><td class="crd-td">248k</td><td class="crd-td">1970AD</td><td class="crd-td">11</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Fifteen largest individually assessed urban centres and metropolitan agglomerations in Colonial West Africa and the Sahel (1880AD to 1975AD).</figcaption>
</figure>

# Limitations

Four structural constraints qualify these colonial reconstructions. First, administrative headcounts before 1945AD suffered systematic under-enumeration wherever census-taking doubled as tax assessment or labour recruitment [@Kuczynski1948DemographicSurvey1; @Ittmann2010DemographicsEmpire; @Services2013WritingHistory]. Rural populations in Northern Nigeria, interior Sierra Leone, Liberia, Portuguese Guinea and Sahelian AOF cercles were frequently estimated by applying assumed household multipliers to tax rolls, leaving pre-1930AD provincial totals with wider margins than post-war sample surveys [@Northcote1970AnthropologicalReport; @FrankemaJerven2014AfricanPop]. Second, post-war Nigerian censuses became politically contested after 1953AD, with the 1963AD figure of 55,64M widely judged by demographers to reflect regional over-reporting ahead of federal seat allocations, whereas the 1968AD-1970AD Civil War years produced severe under-coverage in eastern provinces [@Akinyoade2017CensusTaking; @FrankemaJerven2014AfricanPop].

Third, colonial border partitions and post-1950AD territorial splits introduce step-changes across specific years in the underlying sub-administrative mask, notably Haute-Volta's 1932AD-1947AD dismemberment, British and French Togoland's partition and 1957AD Gold Coast integration, Guinea's 1958AD break from French community statistics and AOF's 1960AD dissolution [@AOFAnnuaire1936; @Cardinall1932GoldCoast]. Fourth, 207 of the 738 settlement entries carry single-date observations, and 55 post-1950 metropolitan agglomerations coexist alongside city-proper records for leading capitals; while both scopes are explicitly labelled in the companion gazetteer, readers comparing urban growth across 1950AD must keep city-proper and agglomeration boundaries distinct [@Faye2021WaterResources].

# Conclusion

Between the 1880s and 1975AD, West Africa and the Sahel grew more than fourfold from 20,43M to 91,17M inhabitants, shifting decisively toward coastal port corridors and export-crop zones. Colonial railways, cocoa and groundnut frontiers, port investments and post-1945 public health campaigns produced a thirty-five-fold density gradient by 1975AD between Southern Nigeria (105,59 persons/km²) and Senegal-Mauritania (2,98 persons/km²), while metropolitan corridors led by Lagos, Abidjan, Ibadan, Accra and Dakar launched West Africa's modern urban transition. By pairing 4.123 individually assessed settlements with archival territorial enumerations and mass-conserving spatial scaling, NICETHI connects colonial demographic history directly to post-independence national censuses.

# Appendix

## Sub-Regional Density, Territorial Shares and Consensus Benchmarks

Table \ref{tab:density-appendix} reports mean population density in persons per km² across all 14 colonial sub-regions from 1880AD to 1975AD, while Table \ref{tab:shares-appendix} traces each territory's percentage share of the regional total. Table \ref{tab:fj-comparison} reproduces the Frankema and Jerven (2014) consensus benchmark comparison against official colonial and post-colonial census totals for Nigeria (1911AD-1963AD) and the Gold Coast/Ghana (1891AD-1960AD) [@Services2013WritingHistory; @FrankemaJerven2014AfricanPop].

<figure class="crd-table-figure" id="tab:density-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">1975AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>AOF: Senegal and Mauritania</strong></td><td class="crd-td">0,78</td><td class="crd-td">0,88</td><td class="crd-td">1,11</td><td class="crd-td">2,18</td><td class="crd-td">1,41</td><td class="crd-td">2,98</td></tr>
<tr><td class="crd-td"><strong>AOF: French Sudan (Soudan Francais)</strong></td><td class="crd-td">1,27</td><td class="crd-td">1,35</td><td class="crd-td">1,62</td><td class="crd-td">2,75</td><td class="crd-td">1,87</td><td class="crd-td">4,56</td></tr>
<tr><td class="crd-td"><strong>AOF: Upper Volta and Niger Territory</strong></td><td class="crd-td">1,68</td><td class="crd-td">1,81</td><td class="crd-td">2,37</td><td class="crd-td">3,63</td><td class="crd-td">3,85</td><td class="crd-td">7,36</td></tr>
<tr><td class="crd-td"><strong>AOF: French Guinea (Guinee Francaise)</strong></td><td class="crd-td">3,63</td><td class="crd-td">4,03</td><td class="crd-td">5,09</td><td class="crd-td">9,17</td><td class="crd-td">6,53</td><td class="crd-td">14,01</td></tr>
<tr><td class="crd-td"><strong>AOF: Cote d'Ivoire</strong></td><td class="crd-td">3,4</td><td class="crd-td">3,12</td><td class="crd-td">3,67</td><td class="crd-td">7</td><td class="crd-td">6,36</td><td class="crd-td">13,81</td></tr>
<tr><td class="crd-td"><strong>AOF: Colony of Dahomey</strong></td><td class="crd-td">10,25</td><td class="crd-td">10,23</td><td class="crd-td">9,77</td><td class="crd-td">13,87</td><td class="crd-td">9,58</td><td class="crd-td">17,6</td></tr>
<tr><td class="crd-td"><strong>Northern Nigeria Protectorate and Provinces</strong></td><td class="crd-td">8,74</td><td class="crd-td">20,42</td><td class="crd-td">28,08</td><td class="crd-td">21,63</td><td class="crd-td">41,59</td><td class="crd-td">33,83</td></tr>
<tr><td class="crd-td"><strong>Southern Nigeria, Lagos and Eastern Provinces</strong></td><td class="crd-td">18,58</td><td class="crd-td">19,88</td><td class="crd-td">49,77</td><td class="crd-td">74,02</td><td class="crd-td">133,37</td><td class="crd-td">105,59</td></tr>
<tr><td class="crd-td"><strong>British Gold Coast, Ashanti and N. Territories</strong></td><td class="crd-td">5,66</td><td class="crd-td">6,36</td><td class="crd-td">9,41</td><td class="crd-td">12,48</td><td class="crd-td">43,69</td><td class="crd-td">46,47</td></tr>
<tr><td class="crd-td"><strong>Colony and Protectorate of Sierra Leone</strong></td><td class="crd-td">8,39</td><td class="crd-td">9,42</td><td class="crd-td">11,13</td><td class="crd-td">13,68</td><td class="crd-td">28,47</td><td class="crd-td">38,68</td></tr>
<tr><td class="crd-td"><strong>Gambia Colony and Protectorate</strong></td><td class="crd-td">9,7</td><td class="crd-td">10,85</td><td class="crd-td">13,59</td><td class="crd-td">14,39</td><td class="crd-td">20,46</td><td class="crd-td">38,48</td></tr>
<tr><td class="crd-td"><strong>German Togoland and Mandate Togo</strong></td><td class="crd-td">6,94</td><td class="crd-td">7,7</td><td class="crd-td">10,87</td><td class="crd-td">22,77</td><td class="crd-td">27,49</td><td class="crd-td">38,7</td></tr>
<tr><td class="crd-td"><strong>Portuguese Guinea (Guine Portuguesa)</strong></td><td class="crd-td">4,23</td><td class="crd-td">4,83</td><td class="crd-td">5,81</td><td class="crd-td">9,62</td><td class="crd-td">10,96</td><td class="crd-td">19,54</td></tr>
<tr><td class="crd-td"><strong>Republic of Liberia</strong></td><td class="crd-td">1,36</td><td class="crd-td">1,57</td><td class="crd-td">3,15</td><td class="crd-td">18,85</td><td class="crd-td">14,46</td><td class="crd-td">17,94</td></tr>
<tr><td class="crd-td"><strong>Mean Study Area</strong></td><td class="crd-td">3,38</td><td class="crd-td">4,98</td><td class="crd-td">7,22</td><td class="crd-td">8,78</td><td class="crd-td">13,71</td><td class="crd-td">15,07</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Mean population density (persons per km²) across the fourteen colonial sub-regions from 1880AD to 1975AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:shares-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">1880AD (%)</th><th class="crd-th">1900AD (%)</th><th class="crd-th">1930AD (%)</th><th class="crd-th">1950AD (%)</th><th class="crd-th">1960AD (%)</th><th class="crd-th">1975AD (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>AOF: Senegal and Mauritania</strong></td><td class="crd-td">4,7</td><td class="crd-td">3,6</td><td class="crd-td">3,1</td><td class="crd-td">5,1</td><td class="crd-td">2,1</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>AOF: French Sudan (Soudan Francais)</strong></td><td class="crd-td">7,8</td><td class="crd-td">5,6</td><td class="crd-td">4,7</td><td class="crd-td">6,5</td><td class="crd-td">2,8</td><td class="crd-td">6,3</td></tr>
<tr><td class="crd-td"><strong>AOF: Upper Volta and Niger Territory</strong></td><td class="crd-td">12</td><td class="crd-td">8,8</td><td class="crd-td">7,9</td><td class="crd-td">10</td><td class="crd-td">6,8</td><td class="crd-td">11,8</td></tr>
<tr><td class="crd-td"><strong>AOF: French Guinea (Guinee Francaise)</strong></td><td class="crd-td">4,3</td><td class="crd-td">3,3</td><td class="crd-td">2,9</td><td class="crd-td">4,2</td><td class="crd-td">1,9</td><td class="crd-td">3,8</td></tr>
<tr><td class="crd-td"><strong>AOF: Cote d'Ivoire</strong></td><td class="crd-td">5,4</td><td class="crd-td">3,3</td><td class="crd-td">2,7</td><td class="crd-td">4,2</td><td class="crd-td">2,5</td><td class="crd-td">4,9</td></tr>
<tr><td class="crd-td"><strong>AOF: Colony of Dahomey</strong></td><td class="crd-td">5,9</td><td class="crd-td">4</td><td class="crd-td">2,6</td><td class="crd-td">3,1</td><td class="crd-td">1,4</td><td class="crd-td">2,3</td></tr>
<tr><td class="crd-td"><strong>Northern Nigeria Protectorate and Provinces</strong></td><td class="crd-td">31,9</td><td class="crd-td">50,6</td><td class="crd-td">48</td><td class="crd-td">30,4</td><td class="crd-td">37,4</td><td class="crd-td">27,7</td></tr>
<tr><td class="crd-td"><strong>Southern Nigeria, Lagos and Eastern Provinces</strong></td><td class="crd-td">14,6</td><td class="crd-td">10,6</td><td class="crd-td">18,3</td><td class="crd-td">22,4</td><td class="crd-td">25,8</td><td class="crd-td">18,6</td></tr>
<tr><td class="crd-td"><strong>British Gold Coast, Ashanti and N. Territories</strong></td><td class="crd-td">6,6</td><td class="crd-td">5,1</td><td class="crd-td">5,2</td><td class="crd-td">5,6</td><td class="crd-td">12,6</td><td class="crd-td">12,2</td></tr>
<tr><td class="crd-td"><strong>Colony and Protectorate of Sierra Leone</strong></td><td class="crd-td">3</td><td class="crd-td">2,3</td><td class="crd-td">1,8</td><td class="crd-td">1,9</td><td class="crd-td">2,5</td><td class="crd-td">3,1</td></tr>
<tr><td class="crd-td"><strong>Gambia Colony and Protectorate</strong></td><td class="crd-td">0,5</td><td class="crd-td">0,4</td><td class="crd-td">0,3</td><td class="crd-td">0,3</td><td class="crd-td">0,3</td><td class="crd-td">0,4</td></tr>
<tr><td class="crd-td"><strong>German Togoland and Mandate Togo</strong></td><td class="crd-td">1,9</td><td class="crd-td">1,4</td><td class="crd-td">1,4</td><td class="crd-td">2,4</td><td class="crd-td">1,9</td><td class="crd-td">2,4</td></tr>
<tr><td class="crd-td"><strong>Portuguese Guinea (Guine Portuguesa)</strong></td><td class="crd-td">0,7</td><td class="crd-td">0,5</td><td class="crd-td">0,4</td><td class="crd-td">0,6</td><td class="crd-td">0,4</td><td class="crd-td">0,7</td></tr>
<tr><td class="crd-td"><strong>Republic of Liberia</strong></td><td class="crd-td">0,6</td><td class="crd-td">0,5</td><td class="crd-td">0,7</td><td class="crd-td">3,4</td><td class="crd-td">1,7</td><td class="crd-td">1,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Percentage share of total regional population across fourteen colonial sub-regions from 1880AD to 1975AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:fj-comparison">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Year</th><th class="crd-th">Official Census</th><th class="crd-th">Revised Estimate</th><th class="crd-th">Ratio</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">1911AD</td><td class="crd-td">16,05M</td><td class="crd-td">22,19M</td><td class="crd-td">1,38</td></tr>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">1921AD</td><td class="crd-td">18,72M</td><td class="crd-td">24,54M</td><td class="crd-td">1,31</td></tr>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">1931AD</td><td class="crd-td">20,06M</td><td class="crd-td">27,97M</td><td class="crd-td">1,39</td></tr>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">1953AD</td><td class="crd-td">30,42M</td><td class="crd-td">39M</td><td class="crd-td">1,28</td></tr>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">1963AD</td><td class="crd-td">55,66M</td><td class="crd-td">48,22M</td><td class="crd-td">0,87</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1891AD</td><td class="crd-td">764k</td><td class="crd-td">1,65M</td><td class="crd-td">2,16</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1901AD</td><td class="crd-td">1,55M</td><td class="crd-td">1,8M</td><td class="crd-td">1,16</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1911AD</td><td class="crd-td">1,5M</td><td class="crd-td">2M</td><td class="crd-td">1,33</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1921AD</td><td class="crd-td">2,3M</td><td class="crd-td">2,53M</td><td class="crd-td">1,1</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1931AD</td><td class="crd-td">3,16M</td><td class="crd-td">3,23M</td><td class="crd-td">1,02</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1948AD</td><td class="crd-td">4,12M</td><td class="crd-td">4,61M</td><td class="crd-td">1,12</td></tr>
<tr><td class="crd-td"><strong>Gold Coast / Ghana</strong></td><td class="crd-td">1960AD</td><td class="crd-td">6,73M</td><td class="crd-td">6,73M</td><td class="crd-td">1</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Comparison of official colonial and post-colonial census totals against Frankema and Jerven (2014) backward projections for Nigeria and Ghana.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1: Modern calendar month-year dates omit AD, whereas benchmark years in prose and compact tables carry attached AD suffixes (1880AD to 1975AD) to maintain uniformity across NICETHI chapters.

Note 2: In Table \ref{tab:subregions}, 729 settlements fall within the 5-arcminute continental territorial mask; nine border-margin towns in Cameroon and Chad (Garoua, Goulfeil, Kousséri, Makari, Mamfé, Mora, Wum, Ndjamena and Ndjamena agglomeration) lie marginally outside the mask perimeter and are reconciled in the companion settlement gazetteer so all 4.123 entries appear in full.
