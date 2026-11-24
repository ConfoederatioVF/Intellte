---
title: "Colonial Rule in North Africa (1830-1975)"
subtitle: "French, Spanish and Italian Administrations across the Maghreb and Libya"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_north_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_north_africa_spatial.png"
hero_caption: "Six colonial territorial divisions and 137 individually assessed urban settlements across Morocco, Algeria, Tunisia, Libya and Western Sahara between 1830AD and 1975AD."
hero_label: "fig:hero-colonial-north-africa"
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

Between the French landing at Sidi Ferruch in June 1830 and the Spanish withdrawal from Western Sahara in late 1975, the five territories of North Africa west of Egypt underwent a demographic transformation unmatched in their earlier recorded history. Across 4.780.234 km² partitioned into six colonial areal divisions and 63.278 five-arcminute cells, total population rose from 8,09M in 1830AD to 9,58M in 1881AD and 17,76M by the pan-regional colonial census horizon of 1936AD, before climbing past 24,8M at the mid-century independence wave across Libya (1951AD), Tunisia and Morocco (1956AD) and reaching roughly 26,3M across each territory's terminal colonial benchmark through Algeria's independence in 1962AD and Western Sahara's partition in 1975AD. That threefold expansion was neither smooth nor uniform. French conquest and the famine of 1866AD-1868AD drove Algeria's population down from 3M in 1830AD to 2,5M in 1856AD before recovery lifted it to 9,53M in 1954AD and 10,9M in 1962AD, even as the 1954AD-1962AD war inflicted massive rural mortality and triggered the exodus of nearly one million European settlers. In Cyrenaica, Italian military pacification and forced internment camps cut Libyan numbers from 860k in 1911AD to 704,1k in 1931AD prior to recovery to 1,07M by 1951AD. Tunisia expanded from 1,15M in 1830AD to 3,78M in 1956AD, Morocco from 3,25M to 10,45M between 1830AD and 1956AD, and Spanish Sahara from 14k to 76k by 1975AD. Disaggregating colonial provincial enumerations and 149 modern subadministrative districts from geoBoundaries through mass-conserving pycnophylactic scaling (65.864 unit-year checks, maximum relative error 5,85e-08) over metric-isotropic radial distance fields and non-stationary Matérn ($\nu = 3/2$) kriging alongside 137 individually assessed colonial settlements captures the decisive shift from interior caravan capitals toward Atlantic and Mediterranean port metropolises led by Casablanca (1,51M), Algiers (1,35M), Tripoli (551,5k) and Tunis (550,4k) [@Runfola2020GeoBoundaries; @Harras2024State; @Liauzu1986Soci; @Bosworth2007Historic].

# Background

## French Algeria: Conquest Shock, Tell Colonisation and Quinquennial Censuses

When French troops landed west of Algiers in June 1830, the Ottoman Regency of Algiers held roughly 3M inhabitants: 1,95M in the fertile Tell littoral and Atlas foothills (107.529 km²) and 1,05M across the semi-arid High Plateaux and Saharan oases (2.205.578 km²) [@Liauzu1986Soci; @Palard2020Religieuse]. Over the next four decades, colonial warfare, land confiscation and epidemic crises produced the sharpest demographic contraction in modern Maghrebi history. Campaigning against Emir Abd el-Kader until 1847AD and subsequently in Kabylia (1857AD) relied on scorched-earth *razzias*, livestock seizure and village destruction that hollowed out rural grain reserves across Oran, Alger and Constantine [@Palard2020Religieuse; @Buelli2025World]. By the first systematic enumeration of 1856AD, total Algerian numbers had fallen by one-sixth to 2,5M, split between 1,65M in the Tell and 850k across the interior plateaux and Sahara.

Recovery remained fragile through the 1860s. Between 1866AD and 1868AD, successive droughts, locust swarms, cholera and epidemic typhus struck a rural peasantry already weakened by tribal cantonment and communal land breakup under the *Senatus-Consulte* of 1863AD, carrying off several hundred thousand Muslim cultivators and pastoralists [@Liauzu1986Soci; @Templeton1997Population]. Yet from the 1870s onward, demographic momentum reversed decisively. Once military conquest ended after the Mokrani insurrection of 1871AD, endemic plague receded, vaccination campaigns reached coastal towns, railway lines linked Algiers, Oran, Constantine and Philippeville (Skikda), and Muslim fertility remained high around six to seven births per woman [@Harras2024State; @Palard2020Religieuse].

From 1848AD, France annexed the northern Tell outright as three metropolitan départements—Alger, Oran and Constantine—while grouping the vast desert interior under military administration, formalised in 1902AD as the Territoires du Sud [@Liauzu1986Soci; @Palard2020Religieuse]. The *Recensement Général de l'Algérie* (1856AD-1954AD) remains the longest continuous colonial statistical series in Africa. Between 1886AD and 1954AD, the four colonial divisions recorded uninterrupted growth: Alger climbed from 1,38M to 3,09M, Constantine from 1,57M to 3,44M, Oran from 870,5k to 2,15M, and the Territoires du Sud from 280k to 850k, lifting Algeria from 4,1M in 1886AD to 5,56M in 1911AD, 7,23M in 1936AD and 9,53M on the eve of the War of Independence in 1954AD [@Harras2024State; @Haas2025Intra].

European settler (*pied-noir*) immigration shaped urban and littoral demography out of all proportion to its total share. Encouraged by expropriated *habous* and tribal estates, metropolitan French migrants settled alongside Spaniards in Oranie, Italians and Maltese in Constantinois and Alsatians displaced after 1871AD [@Palard2020Religieuse; @Sayahi2011Spanish]. By 1954AD, the European and naturalised Jewish minority approached 984k—just over 10% of Algeria's population—heavily concentrated in Algiers, Oran, Annaba (Bône), Sidi Bel Abbès and Blida [@Palard2020Religieuse; @Bosworth2007Historic]. That colonial equilibrium collapsed during the 1954AD-1962AD Algerian War of Independence. Counter-insurgency warfare, aerial bombardment of Aurès and Kabyle villages and the forced relocation of over two million rural residents into guarded *regroupement* camps inflicted heavy excess mortality, estimated in modern demographic historiography at 250k to 400k Algerian deaths alongside substantial internal displacement [@Telepneva2022Cold; @Buelli2025World]. Between May and September 1962, following the Évian Accords, roughly 900k *pieds-noirs* and tens of thousands of *harki* auxiliaries departed for France in a single summer, reshaping the urban occupancy of Algiers and Oran overnight while Algeria's total stood at 10,9M [@Palard2020Religieuse; @Haas2025Intra].

## Tunisia and Morocco under the Protectorates (1881AD to 1956AD)

Tunisia and Morocco entered European rule later and under protectorate treaties rather than direct departmental annexation, sparing their indigenous polities the mid-nineteenth-century Algerian demographic trough. In Tunisia (156.828 km²), pre-colonial Husaynid tax registers and urban guild estimates indicate roughly 1,15M inhabitants in 1830AD, rising to 1,52M when French forces occupied the Beylik under the Treaty of Bardo in 1881AD [@Harras2024State; @Varley2019Defending]. Administered through thirteen *Contrôles Civils* in the north and centre alongside military territories in the southern Sahara, Tunisia escaped prolonged guerrilla warfare. Between 1881AD and 1956AD, population more than doubled, reaching 1,94M in 1911AD, 2,09M at the 1921AD *Dénombrement*, 2,61M in 1936AD, 3,23M in 1946AD and 3,78M at independence in 1956AD [@Harras2024State; @Varley2019Defending]. Unlike Algeria, Tunisia hosted an Italian settler community in Tunis, Bizerte and Cap Bon that rivalled or outnumbered French *colons* until the 1930s, creating acute diplomatic friction with Fascist Rome during the Second World War [@Varley2019Defending; @Bussotti2016History].

Morocco (592.410 km²) remained the demographic giant of the Maghreb throughout the pre-colonial and colonial eras. Stretching from the Rif and Mediterranean coast across the Gharb, Chaouia and Haouz plains to the High Atlas and Draa valleys, Morocco held roughly 3,25M inhabitants in 1830AD, 3,95M in 1881AD and 5,15M by the signing of the Treaty of Fez in 1912AD [@Aidi2023Moulay; @Clark2024Rural]. The 1912AD settlement partitioned the Sharifian Empire into a vast French Protectorate covering central and southern Morocco, a smaller Spanish Northern Protectorate across the Rif and Jebala centred on Tétouan (plus the southern Tarfaya strip), and the Tangier International Zone [@Sayahi2011Spanish; @Martin2018Western]. Colonial pacification proved bloodier in the Rif and Atlas than in Tunisia: the Rif War of 1921AD-1926AD against Abd el-Krim's republic saw Spanish and French forces deploy aerial bombardment and chemical munitions, inflicting heavy civilian and combatant losses across northern valleys before full Atlas submission in 1934AD [@Sayahi2011Spanish; @Pabst2012Western].

Once pacified, Morocco's mortality fell rapidly as road, rail and port infrastructure integrated interior agricultural basins with Atlantic trade [@Clark2024Rural; @Templeton1997Population]. General Resident Hubert Lyautey deliberately built modern *villes nouvelles* adjacent to historic *medinas* at Rabat, Casablanca, Fès and Marrakech, preserving older quarters while directing industrial capital toward the Atlantic coast [@Liauzu1986Soci; @Bosworth2007Historic]. Under the *Recensement Général du Maroc*, population advanced from 5,4M in 1921AD to 7,04M in 1936AD, 9,28M in 1952AD and 10,45M at independence in 1956AD, reaching 11,63M in the inaugural national census of 1960AD [@Clark2024Rural; @Harras2024State].

## Italian Libya and the Cyrenaican Internment Shock (1911AD to 1951AD)

East of Tunisia, Ottoman Tripolitania, Cyrenaica and Fezzan (1.627.263 km²) supported a far sparser population anchored along the Jifara coastal plain, the Jebel Akhdar plateau and scattered Saharan oasis chains [@Jarad2022Role; @Lizak2019Libya]. Estimates place Libya at 680k in 1830AD, 780k in 1881AD and 860k in 1911AD, when Italy launched its invasion during the Italo-Turkish War [@Antonelli2024Accounting; @Tarchi2023Building]. While Ottoman regular forces withdrew in 1912AD, Sanusi religious-tribal resistance confined Italian authority to coastal enclaves through the First World War [@Lizak2019Libya; @Tarchi2023Building].

The Fascist *riconquista* under Pietro Badoglio and Rodolfo Graziani between 1923AD and 1932AD produced an acute demographic catastrophe in Cyrenaica [@Tarchi2023Building; @Antonelli2024Accounting]. To sever Omar al-Mukhtar's guerrilla network from pastoral support, Italian forces erected a 270 km barbed-wire barrier along the Egyptian frontier and deported approximately 100k semi-nomadic Cyrenaicans—nearly the entire rural Bedouin population of the plateau—along with their herds into coastal concentration camps at El Agheila, Soluch, Sidi Ahmed el-Magrun and Marsa el-Brega between 1930AD and 1933AD [@Tarchi2023Building; @Ballinger2020World]. Starvation, exposure, dysentery and livestock collapse killed an estimated 40k to 60k internees. The 1931AD ISTAT census recorded a shrunken Libyan population of just 704.123 inhabitants, representing a steep contraction from pre-1911AD levels [@Antonelli2024Accounting; @Tarchi2023Building].

Following the suppression of resistance, Governor Italo Balbo merged Tripolitania and Cyrenaica into unified Libya in 1934AD and promoted state-subsidised demographic colonisation, notably the 1938AD-1939AD *Ventimila* convoy that settled 20k Italian peasant families on expropriated coastal farms alongside new port and tourist infrastructure [@Strangio2020Tourism; @Bussotti2016History; @Tarchi2023Building]. By the 1936AD ISTAT census, population rebounded to 848,6k (including roughly 66k Italian settlers, rising above 110k by 1940AD) [@Antonelli2024Accounting; @Ballinger2020World]. Second World War armoured campaigns across Tobruk, Benghazi and Tripoli (1940AD-1943AD) triggered Allied British and French military occupation and the repatriation of tens of thousands of Italian colonists to postwar Italy [@Ballinger2020World; @Varley2019Defending]. When the United Kingdom of Libya achieved independence in December 1951, population stood at 1,07M, confirmed at 1.088.873 in the 1954AD UN-assisted census [@Lizak2019Libya; @Jarad2022Role].

## Spanish Sahara (1884AD to 1975AD)

Along the Atlantic desert fringe south of Morocco, Spanish Sahara—comprising Río de Oro and Saguia el-Hamra (90.626 km² within the regional mask)—remained one of the least densely populated colonial territories on earth [@Martin2018Western; @Priaoprasit2026Case]. Spanish presence began with coastal fishing factories at Villa Cisneros (Dakhla) in 1884AD, yet interior administration barely existed until the 1930s as Hassaniya-speaking Sahrawi pastoralists moved freely across seasonal desert pastures [@Besenyo2014Western; @Pabst2012Western]. Population crept from 14k in 1830AD to 16k in 1881AD, 18k in 1912AD and 24k in 1936AD. Only after mid-century, with the expansion of El Aaiún as an administrative capital and the opening of the Bu Craa phosphate deposits in the late 1960s, did sedentarisation and Spanish garrisoning accelerate growth to 36k in 1960AD and 76k at the Madrid Accords and Spanish withdrawal in 1975AD [@Allan2016Natural; @Trinh2024Morocco; @Besenyo2014Western].

## Coastal Urbanisation and the Colonial Settlement Shift

Across all five territories, colonial rule inverted the historic spatial hierarchy of the Maghreb [@Liauzu1986Soci; @Bosworth2007Historic]. For centuries, inland capitals such as Fès, Marrakech, Constantine, Tlemcen and Qayrawan had anchored agrarian taxation, craft guilds and trans-Saharan caravan trade [@Bosworth2007Historic; @Aidi2023Moulay]. European maritime capitalism, port construction, railway termini and export agriculture shifted demographic gravity overwhelmingly toward the coast [@Liauzu1986Soci; @Haas2025Intra].

Casablanca illustrates this reorientation most vividly. A minor Atlantic anchorage of roughly 1,5k residents in 1830AD and 25,2k at the 1907AD French landing, Casablanca became the chief French industrial and shipping hub after 1912AD, outstripping both Fès and Marrakech to reach 682,4k in 1952AD, 965,3k in 1960AD and 1,51M in 1971AD [@Clark2024Rural; @Bosworth2007Historic]. Algiers expanded from 30,2k in 1830AD to 1,35M in 1975AD, while Tripoli rose from 25,2k to 551,5k by 1973AD and Tunis from 98,5k to 550,4k by 1975AD [@Liauzu1986Soci; @Bosworth2007Historic]. French and Spanish administrations also founded entirely new port, garrison and extractive settlements that entered the regional urban core mid-stream: Skikda (Philippeville) in 1838AD, Sidi Bel Abbès and Chlef (Orléansville) in 1843AD, Batna in 1844AD, Arzew in 1845AD, Kénitra (Port-Lyautey) in 1912AD, Mohammédia (Fédala) in 1913AD, the phosphate mining town of Khouribga in 1923AD, El Aaiun in 1938AD and the Saharan oil settlement of Hassi Messaoud in 1956AD [@Allan2016Natural; @Bosworth2007Historic].

# Methodology

## Six-Region Territorial Partition and Longitudinal Harmonisation

To preserve sub-regional ecological and administrative contrasts across the 1830AD-1975AD domain, the regional mask partitions 4.780.234 km² (63.278 five-arcminute cells) into six units: French Algeria's Tell Départements (107.529 km², 1.549 cells), French Algeria's High Plateaux and Territoires du Sud (2.205.578 km², 29.072 cells), the French Protectorate of Tunisia (156.828 km², 2.205 cells), the French and Spanish Protectorates of Morocco (592.410 km², 7.967 cells), Italian Libya (1.627.263 km², 21.320 cells) and Spanish Sahara (90.626 km², 1.165 cells). Dividing Algeria between the Mediterranean Tell and the semi-arid Plateaux and Sahara prevents coastal settler and port densities from masking the vast sparsely inhabited desert south.

Benchmark series for each division are anchored to primary colonial census returns rather than smooth back-projections: the *Recensement Général de l'Algérie* (1856AD-1954AD) and 1962AD independence estimate, the Tunisian *Dénombrement* (1881AD-1956AD), the *Recensement Général du Maroc* (1921AD-1960AD), the Italian ISTAT censuses of Libya (1931AD and 1936AD) plus the 1954AD UN-Libyan census, and Spanish Saharan administrative enumerations (1936AD-1975AD) [@Harras2024State; @Antonelli2024Accounting; @Martin2018Western]. Pre-census anchors at 1830AD and 1881AD reconcile Ottoman provincial tallies, Moroccan makhzen tax capacities and early military reconnaissances against backward vital-rate bounds [@Liauzu1986Soci; @Aidi2023Moulay]. Because constituent territories achieved independence in staggered years—Libya in 1951AD, Morocco and Tunisia in 1956AD, Algeria in 1962AD and Western Sahara in 1975AD—aggregate comparisons report both synchronised pan-regional benchmarks (1830AD, 1881AD and 1936AD) and territory-specific colonial termination totals.

## Colonial and Modern Subadministrative Disaggregation

Provincial and district population surfaces across HANDBOOK are constructed from polygon boundaries in geoBoundaries [@Runfola2020GeoBoundaries], combined with historical colonial division polygons covering 29 historical units across the wider Near East and North Africa and 2.629 modern administrative units. Within the colonial North African domain, seven major historical administrative aggregates govern the 1880AD-1960AD disaggregation: the four divisions of Algeria (Département d'Alger, Département de Constantine, Département d'Oran and Territoires du Sud, 1886AD-1954AD), Morocco's French and Spanish Protectorate Régions (1880AD-1960AD), Tunisia's *Contrôles Civils* (1881AD-1956AD) and Italian Libya's three historical provinces of Tripolitania, Cyrenaica and Fezzan (1880AD-1954AD). Post-colonial continuity and urban-rural gradients are further constrained by 149 modern subadministrative polygons across the five successor states: 63 ADM2 provinces and prefectures in Morocco (1994AD-2024AD), 44 ADM2 wilayas in Algeria (1977AD-2008AD), 24 ADM1 governorates in Tunisia (1984AD-2024AD), 17 ADM1 districts in Libya (2006AD-2020AD) and one ADM1 unit in Western Sahara (1994AD-2024AD) [@Runfola2020GeoBoundaries].

Each raster cell inside an administrative polygon is scaled via strictly mass-conserving pycnophylactic adjustment so that summed cell populations inside every historical and modern unit match reported census totals without spillover across boundaries. Across the entire HANDBOOK multi-year archive (83 disaggregated years, 65.864 unit-year checks), 100% of administrative units satisfy mass conservation within 0,01%, with a global maximum relative error of 5,85e-08.

## Radial Distance Fields and Non-Stationary Matérn Kriging

Rural background suitability beneath colonial towns and subadministrative polygons is inherited from HANDBOOK's metric-isotropic radial distance fields and non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) residual kriging surface. Rather than relying on planar latitude-longitude coordinates—which distort east-west distances across the Mediterranean-Saharan breadth—spatial covariance is evaluated along geodesic Voronoi catchment distances across 3.416 domestic catchments (1.942 active, median catchment radius 32,51 km, 90th percentile 40,25 km) plus 834 cross-frontier buffer catchments. Conditioning draws upon 39.196 domestic archaeological and historical records across HANDBOOK, including 5.462 Maghrebi entries (1.870 in Tunisia, 1.745 in Algeria, 1.464 in Libya, 380 in Morocco and 3 in Western Sahara) sourced from regional registers and monograph catalogues with zero crowd-sourced entries.

After fitting a weighted least-squares (WLS) biophysical trend over five covariates—habitable land fraction ($\beta_0$), natural vegetative productivity ($\beta_1$), ecozone terrain suitability ($\beta_2$), fluvial proximity ($\beta_3$) and coastal accessibility ($\beta_4$)—the two-component Matérn ($\nu = 3/2$) variogram yields a regularised dimensionless short-range parameter $\tau_1 = 1,35$ (raw empirical $\tau_1 = 1,518$), long-range parameter $\tau_2 = 2,9025$, nugget-to-sill ratio 0,04 and residual $R^2$ exceeding 0,999 across historical horizons. Urban populations from 137 individually assessed colonial and indigenous settlements (comprising 1.101 settlement-year observations, averaging 8 observations per settlement) are explicitly subtracted from subadministrative targets via urban masks before scaling the remaining rural population over the conditioned habitability surface, ensuring that coastal metropolises do not smear artificial rural halos into adjacent steppe or desert cells.

# Testing and Validation

Arithmetic reconciliation across all six sub-regional masks and colonial census tables demonstrates internal consistency from 1830AD to 1975AD. Table \ref{tab:subreg-traj} summarises the sub-regional areal footprint, cell counts and benchmark population trajectories extracted directly from the chapter register.

<figure class="crd-table-figure" id="tab:subreg-traj">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1830AD</th><th class="crd-th">1881AD</th><th class="crd-th">1936AD</th><th class="crd-th">End of Rule</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Algeria: Tell Départements</strong></td><td class="crd-td">107.529</td><td class="crd-td">1,95M</td><td class="crd-td">2,25M</td><td class="crd-td">4,95M</td><td class="crd-td">7,25M (1962)</td></tr>
<tr><td class="crd-td"><strong>Algeria: Plateaux &amp; Sahara</strong></td><td class="crd-td">2.205.578</td><td class="crd-td">1,05M</td><td class="crd-td">1,06M</td><td class="crd-td">2,29M</td><td class="crd-td">3,65M (1962)</td></tr>
<tr><td class="crd-td"><strong>Tunisia (Protectorate)</strong></td><td class="crd-td">156.828</td><td class="crd-td">1,15M</td><td class="crd-td">1,52M</td><td class="crd-td">2,61M</td><td class="crd-td">3,78M (1956)</td></tr>
<tr><td class="crd-td"><strong>Morocco (Fr. &amp; Sp.)</strong></td><td class="crd-td">592.410</td><td class="crd-td">3,25M</td><td class="crd-td">3,95M</td><td class="crd-td">7,04M</td><td class="crd-td">10,45M (1956)</td></tr>
<tr><td class="crd-td"><strong>Italian Libya</strong></td><td class="crd-td">1.627.263</td><td class="crd-td">680k</td><td class="crd-td">780k</td><td class="crd-td">848k</td><td class="crd-td">1,07M (1951)</td></tr>
<tr><td class="crd-td"><strong>Spanish Sahara</strong></td><td class="crd-td">90.626</td><td class="crd-td">14k</td><td class="crd-td">16k</td><td class="crd-td">24k</td><td class="crd-td">76k (1975)</td></tr>
<tr><td class="crd-td"><strong>Regional Total (6 Divisions)</strong></td><td class="crd-td">4.780.234</td><td class="crd-td">8,09M</td><td class="crd-td">9,58M</td><td class="crd-td">17,75M</td><td class="crd-td">26,27M (1951-75)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional area and demographic benchmarks across Colonial North Africa, 1830AD to 1975AD.</figcaption>
</figure>

To verify subadministrative provenance prior to spatial disaggregation, Table \ref{tab:hist-subadmin} compiles the seven historical colonial enumeration series cached for North Africa from the *Recensement Général de l'Algérie*, *Dénombrement de la Tunisie*, *Recensement Général du Maroc* and Italian ISTAT Libya censuses.

<figure class="crd-table-figure" id="tab:hist-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Unit</th><th class="crd-th">ISO3</th><th class="crd-th">Earliest</th><th class="crd-th">Mid-Series</th><th class="crd-th">Latest</th><th class="crd-th">Primary Census Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Morocco (French and Spanish Protectorate Régions)</strong></td><td class="crd-td">MAR</td><td class="crd-td">4,2M (1880)</td><td class="crd-td">7,04M (1936)</td><td class="crd-td">11,63M (1960)</td><td class="crd-td">Recensement Général du Maroc 1936, 1952 and 1960</td></tr>
<tr><td class="crd-td"><strong>Territoires du Sud (Algerian Sahara)</strong></td><td class="crd-td">DZA</td><td class="crd-td">280k (1886)</td><td class="crd-td">642,7k (1936)</td><td class="crd-td">850k (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>Département d'Alger (Central Algeria)</strong></td><td class="crd-td">DZA</td><td class="crd-td">1,38M (1886)</td><td class="crd-td">2,24M (1936)</td><td class="crd-td">3,09M (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>Département de Constantine (Eastern Algeria)</strong></td><td class="crd-td">DZA</td><td class="crd-td">1,57M (1886)</td><td class="crd-td">2,73M (1936)</td><td class="crd-td">3,44M (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>Département d'Oran (Western Algeria)</strong></td><td class="crd-td">DZA</td><td class="crd-td">870,5k (1886)</td><td class="crd-td">1,62M (1936)</td><td class="crd-td">2,15M (1954)</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954 (Gouvernement Général)</td></tr>
<tr><td class="crd-td"><strong>Protectorate of Tunisia (Contrôles Civils)</strong></td><td class="crd-td">TUN</td><td class="crd-td">1,5M (1881)</td><td class="crd-td">2,61M (1936)</td><td class="crd-td">3,78M (1956)</td><td class="crd-td">Dénombrement de la Population de la Tunisie 1921-1956</td></tr>
<tr><td class="crd-td"><strong>Italian Libya (Tripolitania, Cyrenaica and Fezzan)</strong></td><td class="crd-td">LBY</td><td class="crd-td">780k (1880)</td><td class="crd-td">848,6k (1936)</td><td class="crd-td">1,09M (1954)</td><td class="crd-td">ISTAT Censimento della Libia 1931, 1936 and UN/Libya 1954 Census</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Colonial subadministrative census series harmonised for North African disaggregation (1880AD to 1960AD).</figcaption>
</figure>

The underlying biophysical suitability and Matérn kriging model is checked across all ten archaeological and historical horizons in HANDBOOK, culminating in the early modern Ottoman benchmark horizon immediately preceding the colonial era. Table \ref{tab:kriging-params} reports the fitted variogram bandwidths, WLS fluvial and coastal covariates and residual fit across the five classical to early modern horizons, while Figure \ref{fig:density-cna} displays the resulting 1900AD continuous population surface alongside sub-regional population densities.

<figure class="crd-table-figure" id="tab:kriging-params">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Raw Tau1</th><th class="crd-th">Range (km)</th><th class="crd-th">Fluvial Beta3</th><th class="crd-th">Coastal Beta4</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Roman and Parthian</strong></td><td class="crd-td">1,521</td><td class="crd-td">49,44</td><td class="crd-td">0,0751</td><td class="crd-td">0,0756</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Late Antiquity</strong></td><td class="crd-td">1,534</td><td class="crd-td">49,88</td><td class="crd-td">0,0668</td><td class="crd-td">0,0629</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Early Islamic</strong></td><td class="crd-td">1,536</td><td class="crd-td">49,93</td><td class="crd-td">0,0508</td><td class="crd-td">0,0494</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Mediaeval Maghreb</strong></td><td class="crd-td">1,505</td><td class="crd-td">48,93</td><td class="crd-td">0,0464</td><td class="crd-td">0,0421</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Early Modern Ottoman</strong></td><td class="crd-td">1,513</td><td class="crd-td">49,17</td><td class="crd-td">0,0334</td><td class="crd-td">0,0282</td><td class="crd-td">0,9993</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Matérn (nu = 3/2) variogram parameters and WLS fluvial-coastal coefficients across late classical to early modern HANDBOOK horizons.</figcaption>
</figure>

Table \ref{tab:mass-audit} documents pycnophylactic mass conservation across eight representative decennial years spanning 1880AD through 1970AD, showing exact equality between target subadministrative totals and disaggregated raster cell sums.

<figure class="crd-table-figure" id="tab:mass-audit">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Active Units</th><th class="crd-th">Target Mass</th><th class="crd-th">Disaggregated Mass</th><th class="crd-th">Max Rel. Error</th><th class="crd-th">Mean Rel. Error</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1880AD</strong></td><td class="crd-td">22</td><td class="crd-td">28,75M</td><td class="crd-td">28,75M</td><td class="crd-td">7,8e-09</td><td class="crd-td">1,93e-09</td></tr>
<tr><td class="crd-td"><strong>1890AD</strong></td><td class="crd-td">29</td><td class="crd-td">40,67M</td><td class="crd-td">40,67M</td><td class="crd-td">4,58e-09</td><td class="crd-td">1,59e-09</td></tr>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">29</td><td class="crd-td">45,89M</td><td class="crd-td">45,89M</td><td class="crd-td">7,73e-09</td><td class="crd-td">1,42e-09</td></tr>
<tr><td class="crd-td"><strong>1910AD</strong></td><td class="crd-td">29</td><td class="crd-td">50,55M</td><td class="crd-td">50,55M</td><td class="crd-td">4,15e-09</td><td class="crd-td">1,87e-09</td></tr>
<tr><td class="crd-td"><strong>1930AD</strong></td><td class="crd-td">26</td><td class="crd-td">52,56M</td><td class="crd-td">52,56M</td><td class="crd-td">8,64e-09</td><td class="crd-td">1,73e-09</td></tr>
<tr><td class="crd-td"><strong>1950AD</strong></td><td class="crd-td">19</td><td class="crd-td">54,69M</td><td class="crd-td">54,69M</td><td class="crd-td">5,25e-09</td><td class="crd-td">1,64e-09</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">18</td><td class="crd-td">29,42M</td><td class="crd-td">29,42M</td><td class="crd-td">2,14e-08</td><td class="crd-td">5,36e-09</td></tr>
<tr><td class="crd-td"><strong>1970AD</strong></td><td class="crd-td">10</td><td class="crd-td">2,07M</td><td class="crd-td">2,07M</td><td class="crd-td">1,51e-08</td><td class="crd-td">6,96e-09</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Pycnophylactic mass-conservation audit across representative disaggregation years (100% pass rate within 0,01% across 65.864 checks).</figcaption>
</figure>

# Results

<figure class="crd-figure-block" id="fig:density-cna">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-colonial-north-africa/fig3_colonial_north_africa_density.png" alt="fig:density-cna" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Continuous colonial benchmark population surface (1900AD) and mean sub-regional density in inhabitants per km².</figcaption>
</figure>

## Long-Run Regional Trajectory (1830AD to 1975AD)

Figure \ref{fig:traj-cna} charts the aggregate North African trajectory alongside its leading sub-regional divisions across the colonial century and a half. In 1830AD, Morocco (3,25M) and Algeria (3M combined) accounted for nearly four-fifths of the 8,09M regional total, with Tunisia (1,15M), Libya (680k) and Spanish Sahara (14k) comprising the remainder. Over the ensuing half-century to 1881AD, aggregate numbers grew modestly by 18,3% to 9,58M, held back by Algeria's steep mid-century decline to 2,5M in 1856AD and its slow recovery after the 1866AD-1868AD famine [@Liauzu1986Soci; @Palard2020Religieuse].

<figure class="crd-figure-block" id="fig:traj-cna">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-colonial-north-africa/fig2_colonial_north_africa_trajectory.png" alt="fig:traj-cna" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Aggregate demographic trajectory and sub-regional composition across Colonial North Africa from 1830AD to 1975AD.</figcaption>
</figure>

The period between 1881AD and 1936AD marked the zenith of colonial territorial integration and accelerating natural increase. Total regional population jumped by 85,4% in fifty-five years, from 9,58M in 1881AD to 17,76M in 1936AD. All four Maghrebi divisions expanded briskly: Algeria's Tell départements more than doubled from 2,25M to 4,95M while the High Plateaux and Territoires du Sud rose from 1,06M to 2,29M; Morocco climbed from 3,95M in 1881AD to 5,15M in 1912AD and 7,04M in 1936AD; and Tunisia advanced from 1,52M to 2,61M [@Harras2024State; @Clark2024Rural]. Only Italian Libya broke this pattern, contracting from 860k in 1911AD to 704,1k in 1931AD under Cyrenaican war and internment before recovering to 848,6k by 1936AD [@Antonelli2024Accounting; @Tarchi2023Building].

## Decolonisation, War Mortality and Post-War Acceleration (1936AD to 1975AD)

From the late 1930s through the mid-1970s, declining infant mortality and persistently high birth rates pushed annual natural growth rates past 2,5% to 3% across the Maghreb, outpacing wartime disruptions [@Harras2024State; @Haas2025Intra]. Morocco added more than 3,4M inhabitants in two decades, leaping from 7,04M in 1936AD to 10,45M at independence in 1956AD and 11,63M by 1960AD. Tunisia grew by 45,1% between 1936AD and 1956AD, rising from 2,61M to 3,78M, while post-war Libya recovered from 848,6k in 1936AD to 1,07M at independence in 1951AD and 1,09M in 1954AD [@Lizak2019Libya; @Harras2024State].

In Algeria, rapid natural increase collided with the eight-year War of Independence (1954AD-1962AD). Despite heavy military and civilian mortality and the uprooting of rural families into *regroupement* centres, high baseline fertility lifted Algeria's Tell départements from 4,95M in 1936AD to 6,45M in 1954AD and 7,25M in 1962AD, and the Plateaux and Sahara from 2,29M to 3,08M and 3,65M [@Telepneva2022Cold; @Liauzu1986Soci]. Yet the composition of Algeria's cities changed abruptly in 1962AD when nearly 900k *pieds-noirs* departed for metropolitan France, leaving vacant European quarters in Algiers, Oran, Annaba and Sidi bel Abbès that were swiftly repopulated by rural Algerian migrants [@Palard2020Religieuse; @Haas2025Intra]. In Spanish Sahara, phosphate exploitation and sedentarisation tripled numbers from 24k in 1936AD to 76k by 1975AD [@Allan2016Natural; @Martin2018Western].

## Coastal Metropolises and Post-Colonial Provincial Legacies

Figure \ref{fig:sett-cna} summarises the rank-size distribution across all 137 individually assessed colonial settlements (Zipf exponent $\alpha = 1,21$, $R^2 = 0,86$) alongside the twelve largest colonial and early post-colonial cities. Combined population across catalogued settlements expanded more than fifteenfold over the study span, rising from 782,2k across 108 active points in 1830AD to 11,96M across all 137 urban entries at the terminal 1971AD-1975AD national census horizon [@Bosworth2007Historic; @Liauzu1986Soci].

Atlantic and Mediterranean ports dominated the upper tier. Casablanca reached 1,51M in 1971AD, followed by Algiers (1,35M in 1975AD), Tripoli (551,5k in 1973AD), Tunis (550,4k in 1975AD), Oran (465,4k in 1975AD) and Rabat (367,6k in 1971AD), ahead of historic interior capitals Constantine (334,2k), Marrakech (332,7k), Fez (325,3k), Benghazi (266,2k) and Meknes (248,4k). Table \ref{tab:modern-top-units} lists the leading modern subadministrative units used as post-colonial spatial anchors, illustrating how the urban-industrial corridors forged under colonial rule—Casablanca, Rabat-Salé-Kénitra, Tangier, Tunis-Ben Arous, Sfax and coastal-tell Algeria—persisted as the densest demographic concentrations of the late twentieth and early twenty-first centuries [@Runfola2020GeoBoundaries; @Harras2024State].

<figure class="crd-table-figure" id="tab:modern-top-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province or Prefecture</th><th class="crd-th">ISO3</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Earliest</th><th class="crd-th">Latest</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Prefecture of Casablanca</strong></td><td class="crd-td">MAR</td><td class="crd-td">ADM2</td><td class="crd-td">141</td><td class="crd-td">2,72M (1994)</td><td class="crd-td">3,22M (2024)</td></tr>
<tr><td class="crd-td"><strong>Préfecture de Marrakech</strong></td><td class="crd-td">MAR</td><td class="crd-td">ADM2</td><td class="crd-td">2.575</td><td class="crd-td">861,2k (1994)</td><td class="crd-td">1,57M (2024)</td></tr>
<tr><td class="crd-td"><strong>Prefecture of Tangier - Assilah</strong></td><td class="crd-td">MAR</td><td class="crd-td">ADM2</td><td class="crd-td">956</td><td class="crd-td">591,9k (1994)</td><td class="crd-td">1,49M (2024)</td></tr>
<tr><td class="crd-td"><strong>Province de Kenitra</strong></td><td class="crd-td">MAR</td><td class="crd-td">ADM2</td><td class="crd-td">3.437</td><td class="crd-td">695,1k (1994)</td><td class="crd-td">1,28M (2024)</td></tr>
<tr><td class="crd-td"><strong>Préfecture de Fès</strong></td><td class="crd-td">MAR</td><td class="crd-td">ADM2</td><td class="crd-td">360</td><td class="crd-td">796,2k (1994)</td><td class="crd-td">1,26M (2024)</td></tr>
<tr><td class="crd-td"><strong>Tizi Ouzou</strong></td><td class="crd-td">DZA</td><td class="crd-td">ADM2</td><td class="crd-td">3.192</td><td class="crd-td">702k (1977)</td><td class="crd-td">1,13M (2008)</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">DZA</td><td class="crd-td">ADM2</td><td class="crd-td">11.775</td><td class="crd-td">513,5k (1977)</td><td class="crd-td">1,12M (2008)</td></tr>
<tr><td class="crd-td"><strong>Djelfa</strong></td><td class="crd-td">DZA</td><td class="crd-td">ADM2</td><td class="crd-td">35.146</td><td class="crd-td">332,5k (1977)</td><td class="crd-td">1,09M (2008)</td></tr>
<tr><td class="crd-td"><strong>Prefecture of Salé</strong></td><td class="crd-td">MAR</td><td class="crd-td">ADM2</td><td class="crd-td">702</td><td class="crd-td">631,8k (1994)</td><td class="crd-td">1,09M (2024)</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">TUN</td><td class="crd-td">ADM1</td><td class="crd-td">345</td><td class="crd-td">774,4k (1984)</td><td class="crd-td">1,08M (2024)</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">TUN</td><td class="crd-td">ADM1</td><td class="crd-td">6.675</td><td class="crd-td">578k (1984)</td><td class="crd-td">1,05M (2024)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">DZA</td><td class="crd-td">ADM2</td><td class="crd-td">2.619</td><td class="crd-td">501k (1977)</td><td class="crd-td">1M (2008)</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">DZA</td><td class="crd-td">ADM2</td><td class="crd-td">3.883</td><td class="crd-td">429,8k (1977)</td><td class="crd-td">1M (2008)</td></tr>
<tr><td class="crd-td"><strong>M'Sila</strong></td><td class="crd-td">DZA</td><td class="crd-td">ADM2</td><td class="crd-td">18.268</td><td class="crd-td">416,7k (1977)</td><td class="crd-td">990,6k (2008)</td></tr>
<tr><td class="crd-td"><strong>Nabeul</strong></td><td class="crd-td">TUN</td><td class="crd-td">ADM1</td><td class="crd-td">2.890</td><td class="crd-td">461,4k (1984)</td><td class="crd-td">863,2k (2024)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading modern subadministrative units anchored in geoBoundaries across North Africa used for post-colonial disaggregation.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:sett-cna">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-colonial-north-africa/fig4_colonial_north_africa_settlements.png" alt="fig:sett-cna" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size curve across 137 individually assessed North African settlements (Zipf alpha = 1,21, R² = 0,86) and leading urban centres at terminal colonial peak.</figcaption>
</figure>

# Limitations

Five evidentiary and structural constraints qualify these reconstructions. First, pre-colonial benchmarks for 1830AD and early protectorate estimates for Morocco (1881AD and 1912AD) and Libya (1830AD to 1911AD) predate comprehensive household censuses and carry uncertainty margins of roughly 10% to 15%, particularly in the Moroccan *bled es-siba* highlands and southern desert margins [@Aidi2023Moulay; @Jarad2022Role]. Second, colonial enumerations systematically undercounted nomadic and transhumant pastoralists in the Algerian Territoires du Sud, southern Tunisia, Fezzan and Spanish Sahara, where mobile tribal fractions evaded tax rolls and garrison counts [@Besenyo2014Western; @Jarad2022Role].

Third, colonial vital registration operated asymmetrically: European settler births and deaths in Algeria, Tunisia and Libya were recorded with metropolitan precision, whereas indigenous Muslim rural vital events remained severely under-registered into the interwar decades [@Harras2024State; @Antonelli2024Accounting]. Fourth, mortality estimates for the Algerian War of Independence (1954AD-1962AD) and the Cyrenaican internment camps (1930AD-1933AD) remain debated across archival traditions, affecting short-term intercensal interpolation rather than the 1931AD, 1954AD and post-independence census anchors [@Tarchi2023Building; @Telepneva2022Cold]. Finally, although Spanish Sahara is now represented by seven individually assessed settlements—led by El Aaiun (28k in 1974AD), Smara (7,3k), Dakhla (5,6k in 1970AD) and the phosphate town of Bou Craa (2,5k)—alongside just three archaeological records in the regional conditioning register, its vast desert interior still relies more heavily on coastal covariates and Saharan frontier buffers than densely surveyed Tunisia or Algeria [@Allan2016Natural; @Martin2018Western].

# Conclusion

Colonial rule across North Africa between 1830AD and 1975AD reshaped both the scale and the geography of Maghrebi and Libyan settlement. Aggregate population expanded more than threefold from 8,09M in 1830AD to 17,76M in 1936AD and roughly 26,3M across each territory's terminal colonial benchmark, overcoming nineteenth-century conquest and famine shocks in Algeria as well as early twentieth-century pacification and internment mortality in Cyrenaica and the Rif. Simultaneously, colonial port engineering, railway construction and export agriculture redirected demographic growth from interior caravan capitals toward an Atlantic and Mediterranean urban corridor anchored by Casablanca, Algiers, Tripoli, Tunis, Oran and Rabat. By combining colonial département, contrôle civil, protectorate and ISTAT enumerations with mass-conserving pycnophylactic scaling across geoBoundaries polygons and non-stationary Matérn ($\nu = 3/2$) kriging, this synthesis captures both the violent demographic ruptures and the enduring coastal spatial hierarchy bequeathed to the independent Maghreb.

# Appendix

Table \ref{tab:sett-top20} lists the twenty leading settlements across the five colonial territories ordered by peak documented population within the 1830AD-1975AD window, while Table \ref{tab:arch-maghreb} documents the 5.462 Maghrebi archaeological and historical site records conditioning the regional kriging habitability surface.

<figure class="crd-table-figure" id="tab:sett-top20">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1830AD</th><th class="crd-th">1936AD</th><th class="crd-th">1950-56AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">Morocco</td><td class="crd-td">1,5k</td><td class="crd-td">257,4k</td><td class="crd-td">682,4k</td><td class="crd-td">1,51M (1971)</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">30,2k</td><td class="crd-td">264,2k</td><td class="crd-td">361,3k</td><td class="crd-td">1,35M (1975)</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Libya</td><td class="crd-td">25,2k</td><td class="crd-td">98,9k</td><td class="crd-td">129,7k</td><td class="crd-td">551,5k (1973)</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">98,5k</td><td class="crd-td">219,6k</td><td class="crd-td">410k</td><td class="crd-td">550,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">9,8k</td><td class="crd-td">200,7k</td><td class="crd-td">299k</td><td class="crd-td">465,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">24,8k</td><td class="crd-td">83,4k</td><td class="crd-td">156,2k</td><td class="crd-td">367,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">24,8k</td><td class="crd-td">113,8k</td><td class="crd-td">148,7k</td><td class="crd-td">334,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">Morocco</td><td class="crd-td">49,5k</td><td class="crd-td">190,3k</td><td class="crd-td">215,3k</td><td class="crd-td">332,7k (1971)</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">Morocco</td><td class="crd-td">84,5k</td><td class="crd-td">144,4k</td><td class="crd-td">179,4k</td><td class="crd-td">325,3k (1971)</td></tr>
<tr><td class="crd-td"><strong>Benghazi</strong></td><td class="crd-td">Libya</td><td class="crd-td">7,8k</td><td class="crd-td">48,5k</td><td class="crd-td">69,7k</td><td class="crd-td">266,2k (1973)</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">Morocco</td><td class="crd-td">29,6k</td><td class="crd-td">74,7k</td><td class="crd-td">140,4k</td><td class="crd-td">248,4k (1971)</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">5,8k</td><td class="crd-td">86,3k</td><td class="crd-td">114,1k</td><td class="crd-td">241,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tangier</strong></td><td class="crd-td">Morocco</td><td class="crd-td">10,2k</td><td class="crd-td">60,4k</td><td class="crd-td">128,5k</td><td class="crd-td">187,9k (1971)</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">Morocco</td><td class="crd-td">4,9k</td><td class="crd-td">34,5k</td><td class="crd-td">80,5k</td><td class="crd-td">175,5k (1971)</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">14,8k</td><td class="crd-td">43,3k</td><td class="crd-td">65,6k</td><td class="crd-td">171,3k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">Morocco</td><td class="crd-td">15,4k</td><td class="crd-td">31,8k</td><td class="crd-td">46,6k</td><td class="crd-td">155,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Kenitra</strong></td><td class="crd-td">Morocco</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">55,9k</td><td class="crd-td">139,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>Setif</strong></td><td class="crd-td">Algeria</td><td class="crd-td">2,6k</td><td class="crd-td">36k</td><td class="crd-td">53,1k</td><td class="crd-td">139,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tetouan</strong></td><td class="crd-td">Morocco</td><td class="crd-td">19,8k</td><td class="crd-td">49,5k</td><td class="crd-td">80,7k</td><td class="crd-td">139,1k (1971)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">Algeria</td><td class="crd-td">8,9k</td><td class="crd-td">44k</td><td class="crd-td">67,9k</td><td class="crd-td">132,5k (1975)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Top 20 individually assessed settlements across Colonial North Africa from 1830AD to 1975AD (137 total catalogued entries).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:arch-maghreb">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Conditioning Sites</th><th class="crd-th">Share</th><th class="crd-th">Crowd Sites</th><th class="crd-th">Provenance Tier</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">1.870</td><td class="crd-td">34,2%</td><td class="crd-td">0</td><td class="crd-td">Domestic register and monograph conditioning</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">1.745</td><td class="crd-td">31,9%</td><td class="crd-td">0</td><td class="crd-td">Domestic register and monograph conditioning</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">1.464</td><td class="crd-td">26,8%</td><td class="crd-td">0</td><td class="crd-td">Domestic register and monograph conditioning</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">380</td><td class="crd-td">7%</td><td class="crd-td">0</td><td class="crd-td">Domestic register and monograph conditioning</td></tr>
<tr><td class="crd-td"><strong>Western Sahara</strong></td><td class="crd-td">3</td><td class="crd-td">0,1%</td><td class="crd-td">0</td><td class="crd-td">Desert buffer and oasis conditioning</td></tr>
<tr><td class="crd-td"><strong>Maghreb and Libya Total</strong></td><td class="crd-td">5.462</td><td class="crd-td">100%</td><td class="crd-td">0</td><td class="crd-td">Five regional registers (0% crowd-sourced)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Conditioning archaeological and historical site counts across North African jurisdictions (0 crowd-sourced records).</figcaption>
</figure>

# Sources

::: {#refs}
:::
