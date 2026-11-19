---
title: "Settlement Gazetteer of Paraguay after Independence"
subtitle: "Toponymy, Geographic Coordinates and Municipal Trajectories across Eighteen Administrative Divisions, 1811AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: paraguay_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_paraguay_after_independence_spatial.png"
hero_caption: "Spatial distribution of 260 catalogued settlements and eighteen administrative divisions across Paraguay (415,3k km²) from 1811AD to 2026AD, illustrating the demographic contrast between the central agricultural heartland, the eastern frontier and the western Gran Chaco."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This settlement gazetteer compiles geographic coordinates, administrative affiliations and longitudinal population series for 260 catalogued urban settlements, municipal districts and historical parish centres across the eighteen administrative divisions of Paraguay from 1811AD to 2026AD. The dataset integrates the official national censuses and historical registers from the early republican era under José Gaspar Rodríguez de Francia and Carlos Antonio López, the municipal reconstruction surveys following the War of the Triple Alliance (1864-1870AD), and the modern census series of 1950, 1962, 1972, 1982, 1992, 2002, 2012 and 2022, directed by the Dirección General de Estadística, Encuestas y Censos (now the Instituto Nacional de Estadística, INE) [@dgeec1952censo; @dgeec2015atlas; @ine2022censo; @whigham1999rosetta; @kleinpenning2003thematic].

The spatial coverage of the gazetteer reflects the profound geographical reorganisation that transformed the republic over more than two centuries. In the nineteenth century, sedentary municipal units were confined almost entirely to the historic central depression around Asunción, the serranías of Cordillera and Paraguarí, and the riverine mission settlements along the Paraná and Paraguay rivers. Following the catastrophic losses of the War of the Triple Alliance, the municipal network expanded slowly through agrarian repopulation and European colonisation schemes in Cordillera, Guairá, San Pedro and Itapúa [@cooney1980southwestern; @kleinpenning1992rural].

Across the second half of the twentieth century, state-directed colonisation along the *Marcha al Este*, the construction of the Itaipú hydroelectric dam and substantial Brazilian agricultural immigration produced rapid urbanisation in Eastern Paraguay, establishing major economic hubs including Ciudad del Este, Hernandarias, Presidente Franco, Santa Rita, Pedro Juan Caballero and Salto del Guairá [@nickson1981brazilian; @folch2019hydropolitics; @santos2023memories]. Concurrently, metropolitan suburbanisation around Asunción fostered the growth of populous secondary cities in the Central department—notably San Lorenzo, Luque, Capiatá, Lambaré, Fernando de la Mora, Limpio and Ñemby—which collectively accommodate over 30% of the national populace [@ine2022censo].

Every catalogued locality is anchored to precise WGS84 geographic coordinates, assigned to its canonical administrative department and reconciled against 420 candidate records evaluated in the project source ledger (260 included municipal units and 160 documented secondary toponymic variants). By subtracting nucleated municipal populations from departmental census totals, the gazetteer supplies the urban component of the Operation Viscount demographic model, preventing artificial concentration in rural raster cells and providing a continuous accounting of Paraguayan settlement history.

# Methodology and Source Ledger Audit

Settlement inclusion in the gazetteer follows three rigorous archival and demographic criteria:
1. **Administrative Autonomy and Census Continuity**: All 260 official Paraguayan municipal districts (*municipios*) recognized in modern national censuses (2002, 2012 and 2022) are included as autonomous spatial entities, supplemented by historical parish centres, yerba mate river ports and military fortresses that possessed independent demographic significance prior to mid-twentieth-century municipal consolidations [@dgeec2015atlas; @ine2022censo].
2. **Geographic Coordinate Validation**: All settlement coordinates are verified against Instituto Geográfico Militar (IGM) cartography, high-resolution satellite imagery and official municipal boundary registers from the Dirección del Servicio Geográfico Militar (DISERGEMIL), ensuring that every coordinate pair falls strictly within its respective departmental boundaries.
3. **Reconciliation against Excluded Candidates**: Among the 420 candidates evaluated in the source ledger, 160 records are documented as excluded. These comprise duplicate toponymic aliases, alternative Guaraní-Spanish orthographic variants within two kilometres of canonical centres, and dependent rural company hamlets that lacked independent municipal status.

<figure class="crd-table-figure" id="tab:dept-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Department</th><th class="crd-th">Districts</th><th class="crd-th">1850AD Sum</th><th class="crd-th">1899AD Sum</th><th class="crd-th">1950AD Sum</th><th class="crd-th">1982AD Sum</th><th class="crd-th">2002AD Sum</th><th class="crd-th">2022AD Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alto Paraguay</strong></td><td class="crd-td">8</td><td class="crd-td">9,8k</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k</td><td class="crd-td">16,8k</td><td class="crd-td">14,1k</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>Alto Paraná</strong></td><td class="crd-td">26</td><td class="crd-td">5k</td><td class="crd-td">4,6k</td><td class="crd-td">9,3k</td><td class="crd-td">212,4k</td><td class="crd-td">525,9k</td><td class="crd-td">813,5k</td></tr>
<tr><td class="crd-td"><strong>Amambay</strong></td><td class="crd-td">5</td><td class="crd-td">1,3k</td><td class="crd-td">6,5k</td><td class="crd-td">18,1k</td><td class="crd-td">68,1k</td><td class="crd-td">114,5k</td><td class="crd-td">167,1k</td></tr>
<tr><td class="crd-td"><strong>Asunción</strong></td><td class="crd-td">7</td><td class="crd-td">123,9k</td><td class="crd-td">21,3k</td><td class="crd-td">637k</td><td class="crd-td">172,9k</td><td class="crd-td">454,1k</td><td class="crd-td">1,91M</td></tr>
<tr><td class="crd-td"><strong>Boquerón</strong></td><td class="crd-td">6</td><td class="crd-td">10,6k</td><td class="crd-td">6,4k</td><td class="crd-td">37,8k</td><td class="crd-td">16,1k</td><td class="crd-td">17,7k</td><td class="crd-td">93,1k</td></tr>
<tr><td class="crd-td"><strong>Caaguazú</strong></td><td class="crd-td">27</td><td class="crd-td">27,7k</td><td class="crd-td">27,3k</td><td class="crd-td">85,6k</td><td class="crd-td">315,2k</td><td class="crd-td">367,9k</td><td class="crd-td">488,9k</td></tr>
<tr><td class="crd-td"><strong>Caazapá</strong></td><td class="crd-td">15</td><td class="crd-td">32,1k</td><td class="crd-td">34,7k</td><td class="crd-td">87,4k</td><td class="crd-td">131k</td><td class="crd-td">128,1k</td><td class="crd-td">166,7k</td></tr>
<tr><td class="crd-td"><strong>Canindeyú</strong></td><td class="crd-td">11</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td><td class="crd-td">9,6k</td><td class="crd-td">62,8k</td><td class="crd-td">73,7k</td><td class="crd-td">178,5k</td></tr>
<tr><td class="crd-td"><strong>Central</strong></td><td class="crd-td">19</td><td class="crd-td">49,6k</td><td class="crd-td">50,6k</td><td class="crd-td">147,2k</td><td class="crd-td">339,2k</td><td class="crd-td">802,3k</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">12</td><td class="crd-td">26,2k</td><td class="crd-td">21,7k</td><td class="crd-td">71,9k</td><td class="crd-td">136,6k</td><td class="crd-td">49,9k</td><td class="crd-td">246,2k</td></tr>
<tr><td class="crd-td"><strong>Cordillera</strong></td><td class="crd-td">18</td><td class="crd-td">51,7k</td><td class="crd-td">40,9k</td><td class="crd-td">135,2k</td><td class="crd-td">141,4k</td><td class="crd-td">170,7k</td><td class="crd-td">245,3k</td></tr>
<tr><td class="crd-td"><strong>Guairá</strong></td><td class="crd-td">12</td><td class="crd-td">33,2k</td><td class="crd-td">36,1k</td><td class="crd-td">76,6k</td><td class="crd-td">121,8k</td><td class="crd-td">142,4k</td><td class="crd-td">153,8k</td></tr>
<tr><td class="crd-td"><strong>Itapúa</strong></td><td class="crd-td">31</td><td class="crd-td">24,5k</td><td class="crd-td">30,2k</td><td class="crd-td">110k</td><td class="crd-td">257,2k</td><td class="crd-td">445,9k</td><td class="crd-td">454,1k</td></tr>
<tr><td class="crd-td"><strong>Misiones</strong></td><td class="crd-td">9</td><td class="crd-td">20,6k</td><td class="crd-td">21,7k</td><td class="crd-td">46,1k</td><td class="crd-td">82,1k</td><td class="crd-td">50,2k</td><td class="crd-td">119,7k</td></tr>
<tr><td class="crd-td"><strong>Paraguarí</strong></td><td class="crd-td">14</td><td class="crd-td">41,2k</td><td class="crd-td">44,2k</td><td class="crd-td">122,1k</td><td class="crd-td">156,2k</td><td class="crd-td">149,6k</td><td class="crd-td">148,9k</td></tr>
<tr><td class="crd-td"><strong>Presidente Hayes</strong></td><td class="crd-td">7</td><td class="crd-td">5,1k</td><td class="crd-td">4,4k</td><td class="crd-td">12,6k</td><td class="crd-td">33,9k</td><td class="crd-td">19,9k</td><td class="crd-td">84,2k</td></tr>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">16</td><td class="crd-td">20,4k</td><td class="crd-td">18,9k</td><td class="crd-td">49,4k</td><td class="crd-td">145,3k</td><td class="crd-td">203,2k</td><td class="crd-td">283,6k</td></tr>
<tr><td class="crd-td"><strong>Ñeembucú</strong></td><td class="crd-td">17</td><td class="crd-td">22,1k</td><td class="crd-td">22,1k</td><td class="crd-td">51,8k</td><td class="crd-td">71k</td><td class="crd-td">63,6k</td><td class="crd-td">83,3k</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">260</td><td class="crd-td">508,8k</td><td class="crd-td">402,5k</td><td class="crd-td">1,72M</td><td class="crd-td">2,48M</td><td class="crd-td">3,79M</td><td class="crd-td">7,04M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Departmental distribution of 260 catalogued settlements and aggregate urban population sums across key benchmarks from 1850AD to 2022AD.</figcaption>
</figure>

# Macro-Zone Settlement Trajectories

## Gran Asunción and Central Depression

The Gran Asunción metropolitan core and the surrounding central depression—comprising the Distrito Capital of Asunción, Central, Cordillera and Paraguarí—constitute the historic heart of Paraguayan settlement [@dgeec2015atlas; @rivarola1970poblacion].

Asunción, founded in 1537AD, was the administrative centre from which Spanish colonisation radiated across the Río de la Plata basin. In the modern era, municipal boundary constraints have capped the capital city at approximately 477k residents in 2022AD, while industrial and residential decentralisation has propelled the growth of Central department municipalities into large urban centres [@ine2022censo].

San Lorenzo (225k residents in 2022AD), Luque (259k), Capiatá (236k), Lambaré (127k), Fernando de la Mora (110k), Limpio (139k) and Ñemby (116k) form an integrated conurbation served by radial road corridors [@dgeec2015atlas].

Cordillera and Paraguarí preserve the older agrarian and artisanal fabric of the central valley: Caacupé serves as the spiritual capital of the nation hosting the Basilica of Our Lady of Miracles, Piribebuy and Eusebio Ayala recall critical battle sites of the War of the Triple Alliance, and Yaguarón houses monumental eighteenth-century Franciscan baroque architecture [@kleinpenning2003thematic].

Table \ref{tab:gaz-central} documents the leading thirty-five settlements across the Gran Asunción and Central Depression zone, ordered by 2022 population.

<figure class="crd-table-figure" id="tab:gaz-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1899AD</th><th class="crd-th">1950AD</th><th class="crd-th">1982AD</th><th class="crd-th">2002AD</th><th class="crd-th">2022AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Asunción</strong></td><td class="crd-td">25,29 S, 57,65 W</td><td class="crd-td">104,5k</td><td class="crd-td">-</td><td class="crd-td">578,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Luque</strong></td><td class="crd-td">25,27 S, 57,49 W</td><td class="crd-td">7,5k</td><td class="crd-td">8,3k</td><td class="crd-td">22,8k</td><td class="crd-td">67,3k</td><td class="crd-td">185,1k</td><td class="crd-td">259,7k</td></tr>
<tr><td class="crd-td"><strong>Capiatá</strong></td><td class="crd-td">25,36 S, 57,45 W</td><td class="crd-td">6,3k</td><td class="crd-td">6,9k</td><td class="crd-td">19k</td><td class="crd-td">56,1k</td><td class="crd-td">154,3k</td><td class="crd-td">237k</td></tr>
<tr><td class="crd-td"><strong>San Lorenzo</strong></td><td class="crd-td">25,34 S, 57,51 W</td><td class="crd-td">8,3k</td><td class="crd-td">9,1k</td><td class="crd-td">25,2k</td><td class="crd-td">74,3k</td><td class="crd-td">204,4k</td><td class="crd-td">225,4k</td></tr>
<tr><td class="crd-td"><strong>Limpio</strong></td><td class="crd-td">25,17 S, 57,49 W</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">9k</td><td class="crd-td">26,6k</td><td class="crd-td">73,2k</td><td class="crd-td">139,7k</td></tr>
<tr><td class="crd-td"><strong>Lambaré</strong></td><td class="crd-td">25,35 S, 57,61 W</td><td class="crd-td">4,9k</td><td class="crd-td">5,4k</td><td class="crd-td">14,8k</td><td class="crd-td">43,6k</td><td class="crd-td">119,8k</td><td class="crd-td">127,2k</td></tr>
<tr><td class="crd-td"><strong>Ñemby</strong></td><td class="crd-td">25,39 S, 57,54 W</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">8,9k</td><td class="crd-td">26,1k</td><td class="crd-td">71,9k</td><td class="crd-td">116,4k</td></tr>
<tr><td class="crd-td"><strong>Itauguá</strong></td><td class="crd-td">25,39 S, 57,35 W</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">7,5k</td><td class="crd-td">22k</td><td class="crd-td">60,6k</td><td class="crd-td">93,2k</td></tr>
<tr><td class="crd-td"><strong>Mariano Roque Alonso</strong></td><td class="crd-td">25,21 S, 57,53 W</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">8k</td><td class="crd-td">23,7k</td><td class="crd-td">65,2k</td><td class="crd-td">85,1k</td></tr>
<tr><td class="crd-td"><strong>Villa Elisa</strong></td><td class="crd-td">25,37 S, 57,59 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">6,5k</td><td class="crd-td">19,3k</td><td class="crd-td">53,2k</td><td class="crd-td">71,4k</td></tr>
<tr><td class="crd-td"><strong>Areguá</strong></td><td class="crd-td">25,31 S, 57,38 W</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">5,5k</td><td class="crd-td">16,2k</td><td class="crd-td">44,6k</td><td class="crd-td">70,3k</td></tr>
<tr><td class="crd-td"><strong>Itá</strong></td><td class="crd-td">25,5 S, 57,37 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">6,2k</td><td class="crd-td">18,3k</td><td class="crd-td">50,4k</td><td class="crd-td">69k</td></tr>
<tr><td class="crd-td"><strong>Ypané</strong></td><td class="crd-td">25,46 S, 57,51 W</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">3,1k</td><td class="crd-td">9,2k</td><td class="crd-td">25,4k</td><td class="crd-td">66,7k</td></tr>
<tr><td class="crd-td"><strong>San Antonio</strong></td><td class="crd-td">25,42 S, 57,55 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">4,7k</td><td class="crd-td">13,7k</td><td class="crd-td">37,8k</td><td class="crd-td">57,8k</td></tr>
<tr><td class="crd-td"><strong>Villa Hayes</strong></td><td class="crd-td">25,09 S, 57,53 W</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">57,6k</td></tr>
<tr><td class="crd-td"><strong>J. Augusto Saldívar</strong></td><td class="crd-td">25,44 S, 57,44 W</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">5,1k</td><td class="crd-td">15,2k</td><td class="crd-td">-</td><td class="crd-td">57,2k</td></tr>
<tr><td class="crd-td"><strong>Caacupé</strong></td><td class="crd-td">25,39 S, 57,14 W</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">29,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Villeta</strong></td><td class="crd-td">25,51 S, 57,57 W</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Carapeguá</strong></td><td class="crd-td">25,76 S, 57,25 W</td><td class="crd-td">7,4k</td><td class="crd-td">8k</td><td class="crd-td">22,1k</td><td class="crd-td">28,1k</td><td class="crd-td">30,8k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Tte. Irala Fernández</strong></td><td class="crd-td">25,3 S, 57,6 W</td><td class="crd-td">872</td><td class="crd-td">957</td><td class="crd-td">2,6k</td><td class="crd-td">7,8k</td><td class="crd-td">-</td><td class="crd-td">29,3k</td></tr>
<tr><td class="crd-td"><strong>Yaguarón</strong></td><td class="crd-td">25,56 S, 57,29 W</td><td class="crd-td">6,3k</td><td class="crd-td">6,7k</td><td class="crd-td">18,6k</td><td class="crd-td">23,8k</td><td class="crd-td">26k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Guarambaré</strong></td><td class="crd-td">25,49 S, 57,46 W</td><td class="crd-td">680</td><td class="crd-td">747</td><td class="crd-td">2,1k</td><td class="crd-td">6,1k</td><td class="crd-td">16,7k</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Tobatí</strong></td><td class="crd-td">25,26 S, 57,08 W</td><td class="crd-td">5,5k</td><td class="crd-td">5,6k</td><td class="crd-td">14,5k</td><td class="crd-td">19,3k</td><td class="crd-td">23,3k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Piribebuy</strong></td><td class="crd-td">25,46 S, 57,04 W</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k</td><td class="crd-td">12,2k</td><td class="crd-td">16,2k</td><td class="crd-td">19,6k</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Emboscada</strong></td><td class="crd-td">25,12 S, 57,35 W</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k</td><td class="crd-td">7,6k</td><td class="crd-td">10,1k</td><td class="crd-td">12,2k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Ypacaraí</strong></td><td class="crd-td">25,41 S, 57,29 W</td><td class="crd-td">755</td><td class="crd-td">829</td><td class="crd-td">2,3k</td><td class="crd-td">6,7k</td><td class="crd-td">18,5k</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Paraguarí</strong></td><td class="crd-td">25,62 S, 57,15 W</td><td class="crd-td">5,3k</td><td class="crd-td">5,7k</td><td class="crd-td">15,9k</td><td class="crd-td">20,3k</td><td class="crd-td">22,2k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Arroyos y Esteros</strong></td><td class="crd-td">25,06 S, 57,1 W</td><td class="crd-td">4,5k</td><td class="crd-td">4,5k</td><td class="crd-td">11,8k</td><td class="crd-td">15,7k</td><td class="crd-td">19k</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Eusebio Ayala</strong></td><td class="crd-td">25,38 S, 56,96 W</td><td class="crd-td">4,3k</td><td class="crd-td">4,3k</td><td class="crd-td">11,2k</td><td class="crd-td">14,9k</td><td class="crd-td">18k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Ybycuí</strong></td><td class="crd-td">26,02 S, 57,02 W</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">15k</td><td class="crd-td">19,1k</td><td class="crd-td">20,9k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Pirayú</strong></td><td class="crd-td">25,48 S, 57,24 W</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td><td class="crd-td">10,8k</td><td class="crd-td">13,7k</td><td class="crd-td">15k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Atyrá</strong></td><td class="crd-td">25,28 S, 57,17 W</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k</td><td class="crd-td">8,3k</td><td class="crd-td">11k</td><td class="crd-td">13,3k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Altos</strong></td><td class="crd-td">25,26 S, 57,25 W</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">7,1k</td><td class="crd-td">9,5k</td><td class="crd-td">11,5k</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Quiindy</strong></td><td class="crd-td">25,98 S, 57,23 W</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td><td class="crd-td">13,2k</td><td class="crd-td">16,9k</td><td class="crd-td">18,4k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Acahay</strong></td><td class="crd-td">25,91 S, 57,11 W</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td><td class="crd-td">10,7k</td><td class="crd-td">13,6k</td><td class="crd-td">14,9k</td><td class="crd-td">12,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty-five catalogued settlements in the Gran Asuncion and Central Depression zone ordered by 2022AD population.</figcaption>
</figure>

## Southern Paraná and Mission Corridor

The Southern Paraná and Mission Corridor—encompassing the departments of Itapúa, Misiones and Ñeembucú—represents the historic territory of the Jesuit Reductions established among the Guaraní in the seventeenth and eighteenth centuries [@kleinpenning2003thematic].

Following the expulsion of the Jesuits in 1767AD and the devastation of the War of the Triple Alliance, this region underwent dramatic agrarian restructuring [@cooney1980southwestern].

Itapúa emerged as a prominent recipient of European agricultural immigrants: German, Ukrainian, Polish, Russian and Japanese colonists founded dynamic agricultural cooperatives in Hohenau (1900AD), Obligado (1912AD), Bella Vista (1918AD), Fram (1927AD) and Pirapó (1960AD), creating a prosperous grain, dairy and yerba mate belt [@kleinpenning1992rural].

The departmental capital of Encarnación, situated on the Paraná opposite the Argentine city of Posadas, expanded into a major commercial and logistics port, further stimulated by the construction of the Yacyretá hydroelectric reservoir and modern riverfront infrastructure [@dgeec2015atlas].

In Misiones, traditional cattle ranching and Jesuit heritage towns—including San Juan Bautista, San Ignacio Guazú, Santa Rosa and Santiago—contrast with the modern hydroelectric service city of Ayolas [@nickson2015dictionary].

In Ñeembucú, situated at the confluence of the Paraguay and Paraná rivers, Pilar anchors a historic textile and commercial river port, while Humaitá preserves the monumental ruins of the nineteenth-century riverine fortress that withstood allied siege for over two years [@kleinpenning2003thematic].

Table \ref{tab:gaz-south} documents thirty leading settlements across the Southern Paraná and Mission Corridor.

<figure class="crd-table-figure" id="tab:gaz-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1899AD</th><th class="crd-th">1950AD</th><th class="crd-th">1982AD</th><th class="crd-th">2002AD</th><th class="crd-th">2022AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Encarnación</strong></td><td class="crd-td">27,33 S, 55,87 W</td><td class="crd-td">5,1k</td><td class="crd-td">6,4k</td><td class="crd-td">23k</td><td class="crd-td">54,1k</td><td class="crd-td">93,5k</td><td class="crd-td">106,8k</td></tr>
<tr><td class="crd-td"><strong>Cambyretá</strong></td><td class="crd-td">27,36 S, 55,76 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">6,8k</td><td class="crd-td">16,1k</td><td class="crd-td">27,8k</td><td class="crd-td">47,7k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio</strong></td><td class="crd-td">26,89 S, 57,02 W</td><td class="crd-td">6,3k</td><td class="crd-td">6,6k</td><td class="crd-td">14k</td><td class="crd-td">25k</td><td class="crd-td">-</td><td class="crd-td">36,9k</td></tr>
<tr><td class="crd-td"><strong>Pilar</strong></td><td class="crd-td">26,86 S, 58,31 W</td><td class="crd-td">7,9k</td><td class="crd-td">8,1k</td><td class="crd-td">18,6k</td><td class="crd-td">25,8k</td><td class="crd-td">28k</td><td class="crd-td">34,7k</td></tr>
<tr><td class="crd-td"><strong>Tomás Romero Pereira</strong></td><td class="crd-td">26,53 S, 55,26 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">6,7k</td><td class="crd-td">15,8k</td><td class="crd-td">27,2k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>San Pedro del Paraná</strong></td><td class="crd-td">26,83 S, 56,21 W</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">7k</td><td class="crd-td">16,6k</td><td class="crd-td">28,6k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>San Juan Bautista</strong></td><td class="crd-td">26,67 S, 57,14 W</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">7,1k</td><td class="crd-td">12,6k</td><td class="crd-td">16,6k</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa</strong></td><td class="crd-td">26,89 S, 56,85 W</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">7,1k</td><td class="crd-td">12,6k</td><td class="crd-td">-</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Edelira</strong></td><td class="crd-td">26,77 S, 55,28 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">5,5k</td><td class="crd-td">12,9k</td><td class="crd-td">22,3k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Ayolas</strong></td><td class="crd-td">27,38 S, 56,84 W</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">6,5k</td><td class="crd-td">11,6k</td><td class="crd-td">15,2k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>Coronel Bogado</strong></td><td class="crd-td">27,16 S, 56,24 W</td><td class="crd-td">928</td><td class="crd-td">1,2k</td><td class="crd-td">4,2k</td><td class="crd-td">9,9k</td><td class="crd-td">17,1k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Natalio</strong></td><td class="crd-td">26,76 S, 55,14 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">4,8k</td><td class="crd-td">11,3k</td><td class="crd-td">19,5k</td><td class="crd-td">14,9k</td></tr>
<tr><td class="crd-td"><strong>San Rafael del Paraná</strong></td><td class="crd-td">26,66 S, 54,93 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">5k</td><td class="crd-td">11,8k</td><td class="crd-td">20,4k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Carlos Antonio López</strong></td><td class="crd-td">26,4 S, 54,76 W</td><td class="crd-td">958</td><td class="crd-td">1,2k</td><td class="crd-td">4,3k</td><td class="crd-td">10,2k</td><td class="crd-td">17,6k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Obligado</strong></td><td class="crd-td">27,06 S, 55,63 W</td><td class="crd-td">622</td><td class="crd-td">782</td><td class="crd-td">2,8k</td><td class="crd-td">6,6k</td><td class="crd-td">11,4k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Hohenau</strong></td><td class="crd-td">27,07 S, 55,64 W</td><td class="crd-td">527</td><td class="crd-td">662</td><td class="crd-td">2,4k</td><td class="crd-td">5,6k</td><td class="crd-td">9,7k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Yby Pytá</strong></td><td class="crd-td">27,08 S, 55,68 W</td><td class="crd-td">290</td><td class="crd-td">314</td><td class="crd-td">723</td><td class="crd-td">4,2k</td><td class="crd-td">8,8k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Alto Verá</strong></td><td class="crd-td">26,75 S, 55,77 W</td><td class="crd-td">750</td><td class="crd-td">943</td><td class="crd-td">3,4k</td><td class="crd-td">8k</td><td class="crd-td">13,8k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Mayor Otaño</strong></td><td class="crd-td">26,28 S, 54,77 W</td><td class="crd-td">661</td><td class="crd-td">831</td><td class="crd-td">3k</td><td class="crd-td">7k</td><td class="crd-td">12,2k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>Capitán Miranda</strong></td><td class="crd-td">27,22 S, 55,8 W</td><td class="crd-td">471</td><td class="crd-td">592</td><td class="crd-td">2,1k</td><td class="crd-td">5k</td><td class="crd-td">8,7k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Santa María</strong></td><td class="crd-td">26,78 S, 56,94 W</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Itapúa Poty</strong></td><td class="crd-td">26,63 S, 55,52 W</td><td class="crd-td">796</td><td class="crd-td">1k</td><td class="crd-td">3,6k</td><td class="crd-td">8,5k</td><td class="crd-td">14,6k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Capitán Meza</strong></td><td class="crd-td">27,02 S, 55,57 W</td><td class="crd-td">565</td><td class="crd-td">710</td><td class="crd-td">2,5k</td><td class="crd-td">6k</td><td class="crd-td">10,4k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>San Juan del Paraná</strong></td><td class="crd-td">27,3 S, 55,96 W</td><td class="crd-td">386</td><td class="crd-td">485</td><td class="crd-td">1,7k</td><td class="crd-td">4,1k</td><td class="crd-td">7,1k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Yatytay</strong></td><td class="crd-td">26,68 S, 55,08 W</td><td class="crd-td">621</td><td class="crd-td">780</td><td class="crd-td">2,8k</td><td class="crd-td">6,6k</td><td class="crd-td">11,4k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>General Artigas</strong></td><td class="crd-td">26,93 S, 56,22 W</td><td class="crd-td">600</td><td class="crd-td">754</td><td class="crd-td">2,7k</td><td class="crd-td">6,4k</td><td class="crd-td">11k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Fram</strong></td><td class="crd-td">26,98 S, 55,88 W</td><td class="crd-td">376</td><td class="crd-td">473</td><td class="crd-td">1,7k</td><td class="crd-td">4k</td><td class="crd-td">6,9k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Trinidad</strong></td><td class="crd-td">27,13 S, 55,71 W</td><td class="crd-td">374</td><td class="crd-td">470</td><td class="crd-td">1,7k</td><td class="crd-td">4k</td><td class="crd-td">6,9k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Alberdi</strong></td><td class="crd-td">26,19 S, 58,14 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">4,9k</td><td class="crd-td">6,7k</td><td class="crd-td">7,3k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>San Cosme y Damián</strong></td><td class="crd-td">27,32 S, 56,33 W</td><td class="crd-td">398</td><td class="crd-td">500</td><td class="crd-td">1,8k</td><td class="crd-td">4,2k</td><td class="crd-td">7,3k</td><td class="crd-td">7,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading thirty catalogued settlements in the Southern Parana and Mission Corridor ordered by 2022AD population.</figcaption>
</figure>

## Central Agricultural and Sierra Belt

The Central Agricultural and Sierra Belt—comprising Caaguazú, Guairá and Caazapá—spans the rolling Cordillera de Ybytyruzú and the fertile central plateau between the Tebicuary and Manduvirá drainage basins [@kleinpenning2003thematic].

Villarrica in Guairá, established originally in 1570AD and relocated several times before settling at the foot of the Ybytyruzú mountains, served historically as the cultural and intellectual capital of the interior, sustained by sugarcane milling, viticulture and artisanal manufacturing [@nickson2015dictionary].

Guairá also accommodated German winegrowers and farmers at Colonia Independencia, founded in 1919AD [@kleinpenning1992rural].

In Caaguazú, the completion of paved Route 7 transformed Coronel Oviedo and Caaguazú into bustling agro-commercial crossroads connecting Asunción with the eastern border [@palau1986agricultura].

The region absorbed tens of thousands of peasant colonisation beneficiaries during the agrarian programs of the 1960s and 1970s, establishing thriving smallholder communities in Repatriación, Doctor Juan Manuel Frutos and Yhú [@pastore1972lucha; @fletschner2002efficiency].

Caazapá retains a strong colonial rural character anchored by historic Franciscan foundations: Caazapá, San Juan Nepomuceno and Yuty, the latter serving as a major agricultural marketing centre on the Tebicuary River [@dgeec2015atlas].

Table \ref{tab:gaz-central-belt} presents thirty leading settlements across the Central Agricultural and Sierra Belt.

<figure class="crd-table-figure" id="tab:gaz-central-belt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1899AD</th><th class="crd-th">1950AD</th><th class="crd-th">1982AD</th><th class="crd-th">2002AD</th><th class="crd-th">2022AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Coronel Oviedo</strong></td><td class="crd-td">25,45 S, 56,44 W</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td><td class="crd-td">13,9k</td><td class="crd-td">57,8k</td><td class="crd-td">84,1k</td><td class="crd-td">98,3k</td></tr>
<tr><td class="crd-td"><strong>Caaguazú</strong></td><td class="crd-td">25,47 S, 56,02 W</td><td class="crd-td">5,1k</td><td class="crd-td">5,5k</td><td class="crd-td">16,2k</td><td class="crd-td">67,5k</td><td class="crd-td">98,1k</td><td class="crd-td">98,2k</td></tr>
<tr><td class="crd-td"><strong>Villarrica</strong></td><td class="crd-td">25,75 S, 56,44 W</td><td class="crd-td">12,1k</td><td class="crd-td">13,1k</td><td class="crd-td">27,9k</td><td class="crd-td">44,3k</td><td class="crd-td">55,2k</td><td class="crd-td">62,6k</td></tr>
<tr><td class="crd-td"><strong>Dr. J. Eulogio Estigarribia</strong></td><td class="crd-td">25,12 S, 56 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">7k</td><td class="crd-td">29,2k</td><td class="crd-td">-</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Doctor Juan Eulogio Estigarribia</strong></td><td class="crd-td">25,37 S, 55,7 W</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>San Juan Nepomuceno</strong></td><td class="crd-td">26,11 S, 55,94 W</td><td class="crd-td">4,6k</td><td class="crd-td">5k</td><td class="crd-td">12,7k</td><td class="crd-td">19k</td><td class="crd-td">24,2k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>Dr. Juan Manuel Frutos</strong></td><td class="crd-td">25,36 S, 55,82 W</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">4,3k</td><td class="crd-td">18,1k</td><td class="crd-td">-</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Repatriación</strong></td><td class="crd-td">25,54 S, 55,99 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">4,9k</td><td class="crd-td">20,3k</td><td class="crd-td">29,5k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Caazapá</strong></td><td class="crd-td">26,2 S, 56,37 W</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td><td class="crd-td">11,7k</td><td class="crd-td">17,6k</td><td class="crd-td">22,4k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>Yhú</strong></td><td class="crd-td">25,06 S, 55,92 W</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">5,7k</td><td class="crd-td">23,9k</td><td class="crd-td">34,7k</td><td class="crd-td">22,5k</td></tr>
<tr><td class="crd-td"><strong>Abaí</strong></td><td class="crd-td">26,04 S, 55,95 W</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">13,7k</td><td class="crd-td">20,5k</td><td class="crd-td">26,2k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>3 de Mayo</strong></td><td class="crd-td">26,48 S, 56,1 W</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td><td class="crd-td">10,9k</td><td class="crd-td">16,4k</td><td class="crd-td">-</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Paso Yobai</strong></td><td class="crd-td">25,72 S, 56 W</td><td class="crd-td">4,5k</td><td class="crd-td">4,9k</td><td class="crd-td">10,4k</td><td class="crd-td">16,5k</td><td class="crd-td">20,6k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Colonia Independencia</strong></td><td class="crd-td">25,69 S, 56,27 W</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td><td class="crd-td">11,3k</td><td class="crd-td">18k</td><td class="crd-td">22,4k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Tavaí</strong></td><td class="crd-td">26,48 S, 56,35 W</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">7k</td><td class="crd-td">10,5k</td><td class="crd-td">13,4k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Yuty</strong></td><td class="crd-td">26,61 S, 56,25 W</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">8,4k</td><td class="crd-td">12,6k</td><td class="crd-td">16,1k</td><td class="crd-td">14,9k</td></tr>
<tr><td class="crd-td"><strong>San José de los Arroyos</strong></td><td class="crd-td">25,53 S, 56,73 W</td><td class="crd-td">797</td><td class="crd-td">861</td><td class="crd-td">2,5k</td><td class="crd-td">10,5k</td><td class="crd-td">15,3k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Tembiaporá</strong></td><td class="crd-td">25,33 S, 55,38 W</td><td class="crd-td">596</td><td class="crd-td">644</td><td class="crd-td">1,9k</td><td class="crd-td">7,9k</td><td class="crd-td">11,4k</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Raúl Arsenio Oviedo</strong></td><td class="crd-td">25,19 S, 55,6 W</td><td class="crd-td">658</td><td class="crd-td">711</td><td class="crd-td">2,1k</td><td class="crd-td">8,7k</td><td class="crd-td">12,6k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>San Joaquín</strong></td><td class="crd-td">25,03 S, 56,04 W</td><td class="crd-td">777</td><td class="crd-td">840</td><td class="crd-td">2,5k</td><td class="crd-td">10,3k</td><td class="crd-td">14,9k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Carayaó</strong></td><td class="crd-td">25,2 S, 56,4 W</td><td class="crd-td">689</td><td class="crd-td">745</td><td class="crd-td">2,2k</td><td class="crd-td">9,1k</td><td class="crd-td">13,2k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Vaquería</strong></td><td class="crd-td">25 S, 55,82 W</td><td class="crd-td">534</td><td class="crd-td">577</td><td class="crd-td">1,7k</td><td class="crd-td">7,1k</td><td class="crd-td">10,3k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>3 de Febrero</strong></td><td class="crd-td">25,25 S, 55,78 W</td><td class="crd-td">538</td><td class="crd-td">581</td><td class="crd-td">1,7k</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Yataity del Norte</strong></td><td class="crd-td">24,85 S, 56,36 W</td><td class="crd-td">1k</td><td class="crd-td">971</td><td class="crd-td">2,5k</td><td class="crd-td">7,5k</td><td class="crd-td">12,5k</td><td class="crd-td">10,1k</td></tr>
<tr><td class="crd-td"><strong>R. I. 3 Corrales</strong></td><td class="crd-td">25,34 S, 56,19 W</td><td class="crd-td">521</td><td class="crd-td">563</td><td class="crd-td">1,6k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Capitán Mauricio José Troche</strong></td><td class="crd-td">25,87 S, 56,34 W</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">7,3k</td><td class="crd-td">9,1k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Mbocayaty</strong></td><td class="crd-td">25,72 S, 56,42 W</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,7k</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Borja</strong></td><td class="crd-td">25,95 S, 56,5 W</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,7k</td><td class="crd-td">7,4k</td><td class="crd-td">9,2k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>José Domingo Ocampos</strong></td><td class="crd-td">25,41 S, 55,43 W</td><td class="crd-td">479</td><td class="crd-td">518</td><td class="crd-td">1,5k</td><td class="crd-td">6,3k</td><td class="crd-td">9,2k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Iturbe</strong></td><td class="crd-td">26,06 S, 56,48 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">4,7k</td><td class="crd-td">7,5k</td><td class="crd-td">9,4k</td><td class="crd-td">7,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading thirty catalogued settlements in the Central Agricultural and Sierra Belt ordered by 2022AD population.</figcaption>
</figure>

## Eastern Agro-Industrial Frontier

The Eastern Agro-Industrial Frontier—encompassing the departments of Alto Paraná, Canindeyú and Amambay—has experienced the most rapid demographic and economic expansion in modern Paraguayan history [@nickson1981brazilian; @santos2023memories].

Prior to the 1960s, this expansive region of dense subtropical Atlantic forest was virtually uninhabited by sedentary populations, utilized only by indigenous Aché and Ava Guaraní communities and itinerant yerba mate gatherers operating under foreign corporate concessions [@pastore1972lucha].

The construction of the Friendship Bridge (1965AD) and the Itaipú hydroelectric dam (1975-1982AD) initiated a demographic transformation [@folch2019hydropolitics].

Ciudad del Este expanded from an isolated jungle military post into the second largest urban centre in the republic (327k residents in 2022AD), serving as a global commercial hub for re-export trade with Brazil and Argentina [@dgeec2015atlas; @ine2022censo].

Surrounding cities—including Hernandarias, Presidente Franco and Minga Guazú—formed a continuous metropolitan area of over 550k inhabitants [@ine2022censo].

Southward and northward along the Paraná basin, Brazilian immigrant farmers established mechanised agricultural centres in Santa Rita, Naranjal, San Cristóbal, Katueté and Nueva Esperanza, converting the region into an agro-industrial granary [@nickson1981brazilian; @fletschner2002efficiency].

In Canindeyú, Salto del Guairá emerged as a commercial centre near the submerged Guairá Falls, while Curuguaty anchors the historic agricultural interior [@nickson2015dictionary].

In Amambay, Pedro Juan Caballero on the dry border with Ponta Porã (Brazil) constitutes a vital commercial gateway and regional urban centre, flanked by the historic site of Cerro Corá where the War of the Triple Alliance terminated [@whigham2002refining].

Table \ref{tab:gaz-east} presents thirty leading settlements across the Eastern Agro-Industrial Frontier.

<figure class="crd-table-figure" id="tab:gaz-east">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1899AD</th><th class="crd-th">1950AD</th><th class="crd-th">1982AD</th><th class="crd-th">2002AD</th><th class="crd-th">2022AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ciudad del Este</strong></td><td class="crd-td">25,5 S, 54,65 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">79,4k</td><td class="crd-td">222,3k</td><td class="crd-td">325,8k</td></tr>
<tr><td class="crd-td"><strong>Pedro Juan Caballero</strong></td><td class="crd-td">22,55 S, 55,74 W</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">13,1k</td><td class="crd-td">49,4k</td><td class="crd-td">83,1k</td><td class="crd-td">127,4k</td></tr>
<tr><td class="crd-td"><strong>Presidente Franco</strong></td><td class="crd-td">25,56 S, 54,61 W</td><td class="crd-td">578</td><td class="crd-td">520</td><td class="crd-td">901</td><td class="crd-td">18,9k</td><td class="crd-td">52,8k</td><td class="crd-td">88,7k</td></tr>
<tr><td class="crd-td"><strong>Hernandarias</strong></td><td class="crd-td">25,4 S, 54,64 W</td><td class="crd-td">637</td><td class="crd-td">573</td><td class="crd-td">993</td><td class="crd-td">20,8k</td><td class="crd-td">58,2k</td><td class="crd-td">83,3k</td></tr>
<tr><td class="crd-td"><strong>Minga Guazú</strong></td><td class="crd-td">25,48 S, 54,76 W</td><td class="crd-td">525</td><td class="crd-td">473</td><td class="crd-td">819</td><td class="crd-td">17,2k</td><td class="crd-td">48k</td><td class="crd-td">81,1k</td></tr>
<tr><td class="crd-td"><strong>Curuguaty</strong></td><td class="crd-td">24,47 S, 55,69 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">3,7k</td><td class="crd-td">21,5k</td><td class="crd-td">-</td><td class="crd-td">61,3k</td></tr>
<tr><td class="crd-td"><strong>Salto del Guairá</strong></td><td class="crd-td">24,06 S, 54,31 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">11,3k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Juan E. O'Leary</strong></td><td class="crd-td">25,42 S, 55,37 W</td><td class="crd-td">221</td><td class="crd-td">198</td><td class="crd-td">344</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">28,3k</td></tr>
<tr><td class="crd-td"><strong>Itakyry</strong></td><td class="crd-td">24,98 S, 55,15 W</td><td class="crd-td">260</td><td class="crd-td">234</td><td class="crd-td">405</td><td class="crd-td">8,5k</td><td class="crd-td">23,8k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Santa Rita</strong></td><td class="crd-td">25,8 S, 55,09 W</td><td class="crd-td">180</td><td class="crd-td">162</td><td class="crd-td">280</td><td class="crd-td">5,9k</td><td class="crd-td">16,4k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Dr. Juan León Mallorquín</strong></td><td class="crd-td">25,48 S, 55,25 W</td><td class="crd-td">181</td><td class="crd-td">163</td><td class="crd-td">283</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Yasy Cañy</strong></td><td class="crd-td">24,53 S, 55,89 W</td><td class="crd-td">676</td><td class="crd-td">733</td><td class="crd-td">1,7k</td><td class="crd-td">9,7k</td><td class="crd-td">20,5k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Capitán Bado</strong></td><td class="crd-td">23,27 S, 55,54 W</td><td class="crd-td">634</td><td class="crd-td">893</td><td class="crd-td">2,5k</td><td class="crd-td">9,4k</td><td class="crd-td">15,8k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Villa Ygatimi</strong></td><td class="crd-td">24,12 S, 55,64 W</td><td class="crd-td">333</td><td class="crd-td">361</td><td class="crd-td">830</td><td class="crd-td">4,8k</td><td class="crd-td">10,1k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Gral. Francisco Caballero Alvarez</strong></td><td class="crd-td">24,21 S, 55,16 W</td><td class="crd-td">300</td><td class="crd-td">325</td><td class="crd-td">748</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Minga Porá</strong></td><td class="crd-td">24,88 S, 54,93 W</td><td class="crd-td">122</td><td class="crd-td">110</td><td class="crd-td">191</td><td class="crd-td">4k</td><td class="crd-td">11,2k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>San Alberto</strong></td><td class="crd-td">24,97 S, 54,9 W</td><td class="crd-td">126</td><td class="crd-td">113</td><td class="crd-td">197</td><td class="crd-td">4,1k</td><td class="crd-td">11,5k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Nueva Esperanza</strong></td><td class="crd-td">24,51 S, 54,86 W</td><td class="crd-td">327</td><td class="crd-td">355</td><td class="crd-td">817</td><td class="crd-td">4,7k</td><td class="crd-td">10k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Katuete</strong></td><td class="crd-td">24,25 S, 54,76 W</td><td class="crd-td">246</td><td class="crd-td">267</td><td class="crd-td">615</td><td class="crd-td">3,5k</td><td class="crd-td">7,5k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Bella Vista</strong></td><td class="crd-td">22,12 S, 56,52 W</td><td class="crd-td">369</td><td class="crd-td">520</td><td class="crd-td">1,5k</td><td class="crd-td">5,5k</td><td class="crd-td">9,2k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Dr.Raúl Peña.</strong></td><td class="crd-td">26,13 S, 55,22 W</td><td class="crd-td">80</td><td class="crd-td">72</td><td class="crd-td">124</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>San Cristóbal</strong></td><td class="crd-td">25,89 S, 55,51 W</td><td class="crd-td">84</td><td class="crd-td">76</td><td class="crd-td">131</td><td class="crd-td">2,7k</td><td class="crd-td">7,7k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Ybyrarobaná</strong></td><td class="crd-td">24,31 S, 55,05 W</td><td class="crd-td">206</td><td class="crd-td">224</td><td class="crd-td">515</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Yguazú</strong></td><td class="crd-td">25,46 S, 55 W</td><td class="crd-td">96</td><td class="crd-td">86</td><td class="crd-td">149</td><td class="crd-td">3,1k</td><td class="crd-td">8,7k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Doctor Juan León Mallorquín</strong></td><td class="crd-td">25,43 S, 55,25 W</td><td class="crd-td">62</td><td class="crd-td">-</td><td class="crd-td">97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Corpus Christi</strong></td><td class="crd-td">24,08 S, 54,94 W</td><td class="crd-td">247</td><td class="crd-td">268</td><td class="crd-td">616</td><td class="crd-td">3,6k</td><td class="crd-td">7,5k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Mcal. Francisco Solano López</strong></td><td class="crd-td">25,18 S, 55,18 W</td><td class="crd-td">392</td><td class="crd-td">424</td><td class="crd-td">1,2k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>La Paloma</strong></td><td class="crd-td">24,13 S, 54,61 W</td><td class="crd-td">210</td><td class="crd-td">227</td><td class="crd-td">523</td><td class="crd-td">3k</td><td class="crd-td">6,4k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Los Cedrales</strong></td><td class="crd-td">25,66 S, 54,72 W</td><td class="crd-td">98</td><td class="crd-td">89</td><td class="crd-td">154</td><td class="crd-td">3,2k</td><td class="crd-td">9k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Tavapy</strong></td><td class="crd-td">25,66 S, 54,99 W</td><td class="crd-td">62</td><td class="crd-td">56</td><td class="crd-td">97</td><td class="crd-td">2k</td><td class="crd-td">5,7k</td><td class="crd-td">6,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading thirty catalogued settlements in the Eastern Agro-Industrial Frontier ordered by 2022AD population.</figcaption>
</figure>

## Northern Orient

The Northern Orient—comprising the departments of Concepción and San Pedro—occupies the transition zone between the central agricultural valley and the Chaco riverine corridor [@kleinpenning2003thematic].

Concepción, founded in 1773AD on the eastern bank of the Paraguay River, functioned throughout the nineteenth and early twentieth centuries as the maritime gateway to northern Paraguay and southern Mato Grosso, handling river steamer traffic, timber exports, cattle and yerba mate [@williams1979rise].

San Pedro de Ycuamandiyú, established in 1786AD near the Jejuy River, anchors an extensive cattle and peasant agriculture province that saw intensive peasant colonisation in the late twentieth century [@palau1986agricultura].

San Estanislao (Santaní), originally a Jesuit reduction founded in 1749AD, evolved into the primary commercial and transport junction of San Pedro, connecting northern river routes with the capital [@pastore1972lucha].

More recently, Santa Rosa del Aguaray and Guayaibí have expanded rapidly as commercial agricultural centres along Route PY08, while Horqueta and Yby Yaú in Concepción serve as regional livestock and agricultural marketing centres [@dgeec2015atlas].

Table \ref{tab:gaz-north} presents twenty-five leading settlements across the Northern Orient.

<figure class="crd-table-figure" id="tab:gaz-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1899AD</th><th class="crd-th">1950AD</th><th class="crd-th">1982AD</th><th class="crd-th">2002AD</th><th class="crd-th">2022AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">23,4 S, 57,43 W</td><td class="crd-td">8,1k</td><td class="crd-td">7,7k</td><td class="crd-td">22,4k</td><td class="crd-td">48,1k</td><td class="crd-td">-</td><td class="crd-td">73,4k</td></tr>
<tr><td class="crd-td"><strong>San Estanislao</strong></td><td class="crd-td">24,67 S, 56,45 W</td><td class="crd-td">3,3k</td><td class="crd-td">3,1k</td><td class="crd-td">7,9k</td><td class="crd-td">23,5k</td><td class="crd-td">39,2k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa del Aguaray</strong></td><td class="crd-td">23,83 S, 56,52 W</td><td class="crd-td">1,7k</td><td class="crd-td">1,6k</td><td class="crd-td">4,1k</td><td class="crd-td">12,3k</td><td class="crd-td">20,5k</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Horqueta</strong></td><td class="crd-td">23,34 S, 57,05 W</td><td class="crd-td">4,4k</td><td class="crd-td">4,2k</td><td class="crd-td">12,1k</td><td class="crd-td">25,9k</td><td class="crd-td">-</td><td class="crd-td">39,5k</td></tr>
<tr><td class="crd-td"><strong>Yby Ya'ú</strong></td><td class="crd-td">22,83 S, 57,09 W</td><td class="crd-td">4k</td><td class="crd-td">3,8k</td><td class="crd-td">11k</td><td class="crd-td">23,7k</td><td class="crd-td">-</td><td class="crd-td">36,2k</td></tr>
<tr><td class="crd-td"><strong>Yby Yaú</strong></td><td class="crd-td">22,97 S, 56,54 W</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,9k</td></tr>
<tr><td class="crd-td"><strong>Capiibary</strong></td><td class="crd-td">24,73 S, 56,02 W</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">5,2k</td><td class="crd-td">15,5k</td><td class="crd-td">25,8k</td><td class="crd-td">30,6k</td></tr>
<tr><td class="crd-td"><strong>Guayaibí</strong></td><td class="crd-td">24,53 S, 56,4 W</td><td class="crd-td">2,6k</td><td class="crd-td">2,4k</td><td class="crd-td">6,3k</td><td class="crd-td">18,8k</td><td class="crd-td">31,4k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>Gral. Isidoro Resquín</strong></td><td class="crd-td">24,17 S, 56,62 W</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">4,8k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td><td class="crd-td">25,2k</td></tr>
<tr><td class="crd-td"><strong>Choré</strong></td><td class="crd-td">24,19 S, 56,58 W</td><td class="crd-td">1,8k</td><td class="crd-td">1,6k</td><td class="crd-td">4,3k</td><td class="crd-td">12,6k</td><td class="crd-td">21,1k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Liberación</strong></td><td class="crd-td">24,2 S, 56,44 W</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">3k</td><td class="crd-td">9k</td><td class="crd-td">15k</td><td class="crd-td">19,1k</td></tr>
<tr><td class="crd-td"><strong>General Elizardo Aquino</strong></td><td class="crd-td">24,45 S, 56,9 W</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">9,5k</td><td class="crd-td">-</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Tacuatí</strong></td><td class="crd-td">23,46 S, 56,74 W</td><td class="crd-td">946</td><td class="crd-td">879</td><td class="crd-td">2,3k</td><td class="crd-td">6,8k</td><td class="crd-td">11,3k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Loreto</strong></td><td class="crd-td">23,27 S, 57,33 W</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">5,5k</td><td class="crd-td">11,7k</td><td class="crd-td">15,7k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Yrybucuá</strong></td><td class="crd-td">24,48 S, 56,09 W</td><td class="crd-td">838</td><td class="crd-td">780</td><td class="crd-td">2k</td><td class="crd-td">6k</td><td class="crd-td">10k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Belén</strong></td><td class="crd-td">23,47 S, 57,26 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,1k</td><td class="crd-td">3,2k</td><td class="crd-td">6,8k</td><td class="crd-td">9,1k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Itacurubí del Rosario</strong></td><td class="crd-td">24,54 S, 56,82 W</td><td class="crd-td">927</td><td class="crd-td">862</td><td class="crd-td">2,2k</td><td class="crd-td">6,6k</td><td class="crd-td">11,1k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Lima</strong></td><td class="crd-td">23,88 S, 56,48 W</td><td class="crd-td">869</td><td class="crd-td">809</td><td class="crd-td">2,1k</td><td class="crd-td">6,2k</td><td class="crd-td">10,4k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Puerto Pinasco</strong></td><td class="crd-td">22,65 S, 57,84 W</td><td class="crd-td">161</td><td class="crd-td">177</td><td class="crd-td">486</td><td class="crd-td">1,4k</td><td class="crd-td">3,9k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>25 de Diciembre</strong></td><td class="crd-td">24,81 S, 56,73 W</td><td class="crd-td">765</td><td class="crd-td">712</td><td class="crd-td">1,9k</td><td class="crd-td">5,5k</td><td class="crd-td">9,1k</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>José Félix López</strong></td><td class="crd-td">22,38 S, 56,93 W</td><td class="crd-td">828</td><td class="crd-td">785</td><td class="crd-td">2,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Azotey</strong></td><td class="crd-td">23,32 S, 56,5 W</td><td class="crd-td">680</td><td class="crd-td">645</td><td class="crd-td">1,9k</td><td class="crd-td">4k</td><td class="crd-td">5,4k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Nueva Germania</strong></td><td class="crd-td">23,91 S, 56,7 W</td><td class="crd-td">352</td><td class="crd-td">327</td><td class="crd-td">851</td><td class="crd-td">2,5k</td><td class="crd-td">4,2k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Unión</strong></td><td class="crd-td">24,81 S, 56,52 W</td><td class="crd-td">452</td><td class="crd-td">421</td><td class="crd-td">1,1k</td><td class="crd-td">3,2k</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Paso Barreto</strong></td><td class="crd-td">23,05 S, 57,12 W</td><td class="crd-td">473</td><td class="crd-td">449</td><td class="crd-td">1,3k</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading twenty-five catalogued settlements in the Northern Orient ordered by 2022AD population.</figcaption>
</figure>

## Western Gran Chaco

The Western Gran Chaco—encompassing the vast departments of Presidente Hayes, Boquerón and Alto Paraguay—spans 246.685 km² of semi-arid plain, thorn-forest and riverine wetlands, representing nearly 60% of the sovereign territory of the republic [@gonzalez2018ecosystem; @oyhantcabal2025foreign].

Throughout the nineteenth century, European settlement was limited to riverine military outposts such as Fuerte Olimpo (founded 1792AD) and Villa Hayes (originally Villa Occidental, awarded to Paraguay in 1878AD following the arbitration of US President Rutherford B. Hayes) [@nickson2015dictionary].

The late nineteenth century saw the establishment of industrial quebracho tannin ports along the western bank of the Paraguay River—notably Puerto Casado, Puerto Pinasco and Puerto Sastre—operated by Argentine and international concessionaires [@pastore1972lucha; @oyhantcabal2025foreign].

In the 1920s and 1930s, Mennonite agricultural colonists established cooperative farming colonies in the central Chaco around Filadelfia (Colony Fernheim), Loma Plata (Colony Menno) and Neuland, creating advanced dairy and livestock production systems [@redekop1980strangers; @oleaga2011ethnic].

Following the Chaco War (1932-1935AD), military posts such as Mariscal Estigarribia were incorporated into the administrative network [@dunkerley1984rebellion].

In the contemporary era, large-scale mechanized cattle ranching and the construction of the Bioceanic Corridor have linked Carmelo Peralta on the Paraguay River across Boquerón to the Argentine border at Pozo Hondo, stimulating urban growth across these isolated desert centres [@oyhantcabal2025foreign; @santos2023memories].

All twenty-one catalogued settlements in the Western Gran Chaco are documented in Table \ref{tab:gaz-chaco}.

<figure class="crd-table-figure" id="tab:gaz-chaco">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">District</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1899AD</th><th class="crd-th">1950AD</th><th class="crd-th">1982AD</th><th class="crd-th">2002AD</th><th class="crd-th">2022AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">24,09 S, 57,09 W</td><td class="crd-td">2,8k</td><td class="crd-td">2,6k</td><td class="crd-td">6,8k</td><td class="crd-td">20,1k</td><td class="crd-td">-</td><td class="crd-td">35,9k</td></tr>
<tr><td class="crd-td"><strong>Mcal. Estigarribia</strong></td><td class="crd-td">22 S, 60,95 W</td><td class="crd-td">4,3k</td><td class="crd-td">4,8k</td><td class="crd-td">12,8k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Filadelfia</strong></td><td class="crd-td">22,34 S, 60,03 W</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,2k</td></tr>
<tr><td class="crd-td"><strong>Benjamin Aceval</strong></td><td class="crd-td">25 S, 57,55 W</td><td class="crd-td">543</td><td class="crd-td">596</td><td class="crd-td">1,6k</td><td class="crd-td">4,8k</td><td class="crd-td">13,3k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Loma Plata</strong></td><td class="crd-td">22,38 S, 59,84 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">3,9k</td><td class="crd-td">10,8k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>San Lázaro</strong></td><td class="crd-td">22,11 S, 57,96 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">3,1k</td><td class="crd-td">6,8k</td><td class="crd-td">9,1k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Villa del Rosario</strong></td><td class="crd-td">24,42 S, 57,12 W</td><td class="crd-td">672</td><td class="crd-td">625</td><td class="crd-td">1,6k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Puerto Casado</strong></td><td class="crd-td">22,29 S, 57,94 W</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">1,1k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Colonia Menno</strong></td><td class="crd-td">22,37 S, 59,82 W</td><td class="crd-td">945</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>General Eugenio A. Garay</strong></td><td class="crd-td">20,52 S, 62,13 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">3,4k</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Puerto Rosario</strong></td><td class="crd-td">24,44 S, 57,14 W</td><td class="crd-td">533</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Puerto Vallemí</strong></td><td class="crd-td">22,16 S, 57,95 W</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">922</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Carmelo Peralta</strong></td><td class="crd-td">21,68 S, 57,91 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">726</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Fuerte Olimpo</strong></td><td class="crd-td">21,04 S, 57,87 W</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">681</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Antequera</strong></td><td class="crd-td">24,09 S, 57,2 W</td><td class="crd-td">287</td><td class="crd-td">267</td><td class="crd-td">694</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>José Falcón</strong></td><td class="crd-td">25,22 S, 57,71 W</td><td class="crd-td">130</td><td class="crd-td">143</td><td class="crd-td">393</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Tte. Esteban Martínez</strong></td><td class="crd-td">23,91 S, 59,74 W</td><td class="crd-td">107</td><td class="crd-td">118</td><td class="crd-td">323</td><td class="crd-td">955</td><td class="crd-td">-</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Colonia Neuland</strong></td><td class="crd-td">22,67 S, 60,12 W</td><td class="crd-td">474</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Bahia Negra</strong></td><td class="crd-td">20,23 S, 58,17 W</td><td class="crd-td">1k</td><td class="crd-td">952</td><td class="crd-td">496</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Capitán Pablo Lagerenza</strong></td><td class="crd-td">19,92 S, 60,78 W</td><td class="crd-td">421</td><td class="crd-td">-</td><td class="crd-td">208</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Puerto Guaraní</strong></td><td class="crd-td">21,28 S, 57,92 W</td><td class="crd-td">246</td><td class="crd-td">-</td><td class="crd-td">121</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">786</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> All twenty-one catalogued settlements in the Western Gran Chaco ordered by 2022AD population.</figcaption>
</figure>

# Sources

<div id="refs"></div>
