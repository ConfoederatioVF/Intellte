---
title: "Colonial Rule in North Africa (1830-1975)"
subtitle: "Settlement Gazetteer: Urban Centres, Colonial Ports and Saharan Oases"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_north_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_north_africa_spatial.png"
hero_caption: "Spatial distribution of 11.592 individually assessed urban centres and oasis towns across Colonial North Africa from 1830AD to 1975AD."
hero_label: "fig:hero-colonial-north-africa-settlements"
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

This gazetteer compiles longitudinal population series for 11.592 individually assessed urban centres, coastal ports, colonial military foundations, mining towns, rural villages and Saharan oases across Algeria, Morocco, Tunisia, Libya and Western Sahara between 1830AD and 1975AD. Covering 4.780.234 km² across six colonial territorial divisions, the register integrates French Algerian quinquennial census returns (1856AD-1954AD), Tunisian *Contrôles Civils* enumerations (1881AD-1956AD), Moroccan protectorate and 1960AD-1971AD national censuses, Italian ISTAT Libyan surveys (1931AD-1936AD) and Spanish Saharan INE administrative counts [@Harras2024State; @Antonelli2024Accounting; @Martin2018Western; @Bosworth2007Historic]. Across the 11.592 catalogued entries—5.920 in Morocco, 4.041 in Algeria, 1.175 in Tunisia, 415 in Libya and 41 in Western Sahara—the dataset contains 150.049 settlement-year observations (averaging 12,9 observations per town), drawn from 11.842 evaluated source-ledger candidates after excluding 250 co-located localities, multi-source census and variant-spelling duplicates within 25 km. Aggregate catalogued urban population expanded more than fifteenfold from 6,72M across 11557 active settlements in 1830AD to 11,98M across all 11.592 catalogued settlements at the terminal 1971AD-1975AD census horizon, led by Casablanca (1,51M), Algiers (1,35M), Tripoli (551,5k), Tunis (550,4k), Oran (465,4k), Rabat (367,6k), Constantine (334,2k), Marrakech (332,7k) and Fez (325,3k).

# Background

Before European colonial occupation, urban life across North Africa centred on a dual network of interior political-religious capitals and modest Mediterranean or Atlantic trading ports [@Bosworth2007Historic; @Liauzu1986Soci]. Historic cities such as Fès, Marrakech, Meknès, Tlemcen, Constantine and Qayrawan anchored artisanal guilds, Islamic scholarship and caravan trade linking the Tell and Moroccan plains to the Saharan oases of Touggourt, Ghardaïa, Murzuq and Tafilalt [@Bosworth2007Historic; @Aidi2023Moulay; @Jarad2022Role]. Coastal towns—Algiers, Tunis, Tripoli, Tangier, Salé and Annaba—sustained maritime commerce and corsair admiralties, yet remained smaller in aggregate share than the densely peopled rural hinterlands [@Liauzu1986Soci; @Bosworth2007Historic].

Colonial administration reversed that spatial equilibrium between 1830AD and 1975AD [@Haas2025Intra; @Liauzu1986Soci]. In French Algeria, military engineers built fortified coastal ports at Philippeville (Skikda, 1838AD) and Arzew (1845AD) alongside interior garrison and *colon* centres at Sidi Bel Abbès (1843AD), Orléansville (Chlef, 1843AD) and Batna (1844AD) to anchor settler agriculture across the Mitidja, Chelif and Sersou plains [@Palard2020Religieuse; @Bosworth2007Historic]. Simultaneously, *pied-noir* immigration transformed Algiers and Oran into European-majority port cities until the mass departure of roughly 900k settlers in the summer of 1962 [@Palard2020Religieuse; @Haas2025Intra].

In Morocco after the Treaty of Fez (1912AD), Resident-General Hubert Lyautey bypassed the historic *medinas* of Fès and Marrakech to channel port investment into Casablanca and the newly established Atlantic port of Kénitra (Port-Lyautey, 1912AD), alongside Fédala (Mohammédia, 1913AD) and the phosphate mining centre of Khouribga (1923AD) [@Clark2024Rural; @Bosworth2007Historic]. Across Tunisia and Libya, harbour dredging, railway construction and Italian Fascist settler schemes under Balbo concentrated commercial growth in Tunis, Sfax, Bizerte, Tripoli and Benghazi, even as Cyrenaican pacification and internment devastated nomadic camps in the early 1930s [@Tarchi2023Building; @Strangio2020Tourism; @Ballinger2020World]. Late-colonial resource extraction further generated desert industrial outposts such as Hassi Messaoud (1956AD) in the Algerian Sahara and phosphate-era urban growth across Spanish Sahara at El Aaiun (founded 1938AD), Dakhla (1884AD), Smara (1898AD) and Bou Craa (1963AD) [@Allan2016Natural; @Besenyo2014Western].

# Methodology

Settlement entries in this gazetteer were assembled by linking historical colonial municipal enumerations directly to post-independence national census series from the Haut-Commissariat au Plan (HCP Morocco), Office National des Statistiques (ONS Algeria), Institut National de la Statistique (INS Tunisia), Bureau of Statistics and Census (BSC Libya) and Spanish INE colonial censuses for Western Sahara, supplemented by scholarly historical urban compendia [@Harras2024State; @Bosworth2007Historic; @Liauzu1986Soci]. Every included settlement carries verified WGS84 coordinates and an unambiguous country assignment across the five colonial jurisdictions, while preserving clean Latin-script canonical toponymy (such as Algiers, Tripoli, Tunis, Sfax, Benghazi and El Aaiun) alongside historical colonial aliases in metadata without non-Latin script leakage in printed tables.

To prevent artificial double-counting of contiguous metropolitan footprints, the regional source ledger enforces strict spatial and temporal deduplication [@Runfola2020GeoBoundaries]. Out of 11.842 evaluated candidate settlements in the source ledger, 250 co-located localities and multi-source census or variant-spelling duplicates within 25 km of canonical urban cores (including Casablanca, Algiers, Tripoli, Rabat, Oran, Fez, Constantine, Blida, Sétif, Tlemcen and Bizerte) were collapsed into their parent municipal series, while contiguous suburban communes and post-1975AD foundations remain outside the colonial ledger. Settlements founded mid-period—such as Skikda (1838AD), Sidi Bel Abbès (1843AD), Batna (1844AD), Kénitra (1912AD), Sidi Bennour (1922AD), Khouribga (1923AD), El Aaiun (1938AD) and Hassi Messaoud (1956AD)—are strictly truncated prior to their documented foundation dates so no anachronistic populations are projected backward.

# Testing and Validation

Source-ledger accounting verifies exact reconciliation across all 11.842 evaluated ledger candidates: 11.592 included entries plus 250 excluded entries leave zero unaccounted records. Figure \ref{fig:sett-gazetteer-dist} displays the rank-size power-law distribution across all 11.592 individually assessed settlements (Zipf slope $\alpha = 1,21$, $R^2 = 0,86$; exact $\alpha = 1,208$, $R^2 = 0,863$) paired with the twelve largest North African cities at their terminal 1971AD-1975AD peak.

<figure class="crd-figure-block" id="fig:sett-gazetteer-dist">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-colonial-north-africa-settlements/fig4_colonial_north_africa_settlements.png" alt="fig:sett-gazetteer-dist" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 11.592 individually assessed North African settlements (Zipf alpha = 1,21, R² = 0,86) and leading urban centres at terminal colonial peak.</figcaption>
</figure>

# Results

## Top 45 Settlements across Colonial North Africa

Table \ref{tab:top45-cna} presents the 45 largest catalogued settlements ordered by peak population within the colonial window, highlighting the rapid ascent of Casablanca (from 1,5k in 1830AD to 965,3k in 1960AD and 1,51M in 1971AD), Algiers (30,2k to 1,35M in 1975AD), Tripoli (25,2k to 551,5k in 1973AD) and Tunis (98,5k to 550,4k in 1975AD) relative to older inland cities [@Bosworth2007Historic; @Liauzu1986Soci].

<figure class="crd-table-figure" id="tab:top45-cna">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1830AD</th><th class="crd-th">1936AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,57, -7,59</td><td class="crd-td">1,5k</td><td class="crd-td">257,4k</td><td class="crd-td">1,51M (1971)</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,75, 3,06</td><td class="crd-td">30,2k</td><td class="crd-td">264,2k</td><td class="crd-td">1,35M (1975)</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,89, 13,19</td><td class="crd-td">25,2k</td><td class="crd-td">98,9k</td><td class="crd-td">551,5k (1973)</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,81, 10,18</td><td class="crd-td">98,5k</td><td class="crd-td">219,6k</td><td class="crd-td">550,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,7, -0,63</td><td class="crd-td">9,8k</td><td class="crd-td">200,7k</td><td class="crd-td">465,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,02, -6,84</td><td class="crd-td">24,8k</td><td class="crd-td">83,4k</td><td class="crd-td">367,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 6,61</td><td class="crd-td">24,8k</td><td class="crd-td">113,8k</td><td class="crd-td">334,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,63, -7,98</td><td class="crd-td">49,5k</td><td class="crd-td">190,3k</td><td class="crd-td">332,7k (1971)</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,03, -5</td><td class="crd-td">84,5k</td><td class="crd-td">144,4k</td><td class="crd-td">325,3k (1971)</td></tr>
<tr><td class="crd-td"><strong>Benghazi</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,12, 20,09</td><td class="crd-td">7,8k</td><td class="crd-td">48,5k</td><td class="crd-td">266,2k (1973)</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,89, -5,55</td><td class="crd-td">29,6k</td><td class="crd-td">74,7k</td><td class="crd-td">248,4k (1971)</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,9, 7,77</td><td class="crd-td">5,8k</td><td class="crd-td">86,3k</td><td class="crd-td">241,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tangier</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,76, -5,83</td><td class="crd-td">10,2k</td><td class="crd-td">60,4k</td><td class="crd-td">187,9k (1971)</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,68, -1,91</td><td class="crd-td">4,9k</td><td class="crd-td">34,5k</td><td class="crd-td">175,5k (1971)</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,74, 10,76</td><td class="crd-td">14,8k</td><td class="crd-td">43,3k</td><td class="crd-td">171,3k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,05, -6,8</td><td class="crd-td">15,4k</td><td class="crd-td">31,8k</td><td class="crd-td">155,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Kenitra</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,26, -6,58</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">139,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>Setif</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,19, 5,41</td><td class="crd-td">2,6k</td><td class="crd-td">36k</td><td class="crd-td">139,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tetouan</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,58, -5,37</td><td class="crd-td">19,8k</td><td class="crd-td">49,5k</td><td class="crd-td">139,1k (1971)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,47, 2,83</td><td class="crd-td">8,9k</td><td class="crd-td">44k</td><td class="crd-td">132,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">Morocco</td><td class="crd-td">32,3, -9,24</td><td class="crd-td">6,8k</td><td class="crd-td">25,2k</td><td class="crd-td">129,1k (1971)</td></tr>
<tr><td class="crd-td"><strong>Sidi Bel Abbes</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,19, -0,63</td><td class="crd-td">-</td><td class="crd-td">54,8k</td><td class="crd-td">114,3k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,88, -1,32</td><td class="crd-td">13,9k</td><td class="crd-td">54,3k</td><td class="crd-td">106,8k (1975)</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,88, 6,91</td><td class="crd-td">-</td><td class="crd-td">64,9k</td><td class="crd-td">103,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,56, 6,17</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">94,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Bejaia</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,75, 5,06</td><td class="crd-td">2,4k</td><td class="crd-td">30,7k</td><td class="crd-td">88,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,85, 5,73</td><td class="crd-td">5,4k</td><td class="crd-td">21,3k</td><td class="crd-td">84,7k (1975)</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,93, 0,09</td><td class="crd-td">6,2k</td><td class="crd-td">38,6k</td><td class="crd-td">84,1k (1975)</td></tr>
<tr><td class="crd-td"><strong>Khouribga</strong></td><td class="crd-td">Morocco</td><td class="crd-td">32,88, -6,91</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">73,7k (1971)</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,17, 1,33</td><td class="crd-td">-</td><td class="crd-td">22,6k</td><td class="crd-td">73,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Mohammedia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,69, -7,38</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">70,4k (1971)</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,83, 10,64</td><td class="crd-td">9,8k</td><td class="crd-td">28,5k</td><td class="crd-td">69,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Misrata</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,38, 15,09</td><td class="crd-td">6,2k</td><td class="crd-td">14,7k</td><td class="crd-td">68,4k (1973)</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,27, 9,87</td><td class="crd-td">5,9k</td><td class="crd-td">28,5k</td><td class="crd-td">62,9k (1975)</td></tr>
<tr><td class="crd-td"><strong>Medea</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,26, 2,75</td><td class="crd-td">6,8k</td><td class="crd-td">21,7k</td><td class="crd-td">61,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">Morocco</td><td class="crd-td">30,43, -9,6</td><td class="crd-td">950</td><td class="crd-td">5,6k</td><td class="crd-td">61,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>Tebessa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,4, 8,12</td><td class="crd-td">2,1k</td><td class="crd-td">14,3k</td><td class="crd-td">58,9k (1975)</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,23, -8,5</td><td class="crd-td">3,1k</td><td class="crd-td">24,4k</td><td class="crd-td">55,5k (1971)</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,21, -4,01</td><td class="crd-td">4,6k</td><td class="crd-td">15k</td><td class="crd-td">55,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>Relizane</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,74, 0,56</td><td class="crd-td">1,4k</td><td class="crd-td">16,4k</td><td class="crd-td">54,9k (1975)</td></tr>
<tr><td class="crd-td"><strong>Guelma</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,46, 7,43</td><td class="crd-td">1,1k</td><td class="crd-td">15,4k</td><td class="crd-td">54,8k (1975)</td></tr>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1</td><td class="crd-td">14,2k</td><td class="crd-td">23k</td><td class="crd-td">54,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Bechar</strong></td><td class="crd-td">Algeria</td><td class="crd-td">31,62, -2,22</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">54,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Hay El Hassani</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,55, -8,73</td><td class="crd-td">27,7k</td><td class="crd-td">-</td><td class="crd-td">53,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Beni Mellal</strong></td><td class="crd-td">Morocco</td><td class="crd-td">32,34, -6,35</td><td class="crd-td">3,2k</td><td class="crd-td">11,3k</td><td class="crd-td">53,8k (1971)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 individually assessed settlements across Colonial North Africa ordered by peak population (n=11.592 total sites).</figcaption>
</figure>

## Sub-Regional Urban Profiles: Morocco, Algeria, Tunisia, Libya and Western Sahara

Tables \ref{tab:morocco-top25} through \ref{tab:libya-esh-top25} detail the leading urban centres within each constituent colonial territory. In Morocco (5.920 catalogued entries), Atlantic industrial and port towns—Casablanca, Rabat, Salé, Kénitra, Safi, Agadir and Mohammédia—alongside mining hub Khouribga grew far faster than historic interior and northern centres Fez, Marrakech, Meknes, Tangier, Oujda and Tetouan [@Clark2024Rural; @Sayahi2011Spanish]. In Algeria (4.041 entries), coastal ports Algiers, Oran, Annaba and Skikda paired with colonial agricultural centres Sidi Bel Abbès, Sétif, Batna, Blida and Chlef [@Palard2020Religieuse; @Bosworth2007Historic].

<figure class="crd-table-figure" id="tab:morocco-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950-56AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">33,57, -7,59</td><td class="crd-td">1830-1971AD</td><td class="crd-td">1,5k</td><td class="crd-td">682,4k</td><td class="crd-td">1,51M (1971)</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">34,02, -6,84</td><td class="crd-td">1830-1971AD</td><td class="crd-td">24,8k</td><td class="crd-td">156,2k</td><td class="crd-td">367,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">31,63, -7,98</td><td class="crd-td">1830-1971AD</td><td class="crd-td">49,5k</td><td class="crd-td">215,3k</td><td class="crd-td">332,7k (1971)</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">34,03, -5</td><td class="crd-td">1830-1971AD</td><td class="crd-td">84,5k</td><td class="crd-td">179,4k</td><td class="crd-td">325,3k (1971)</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">33,89, -5,55</td><td class="crd-td">1830-1971AD</td><td class="crd-td">29,6k</td><td class="crd-td">140,4k</td><td class="crd-td">248,4k (1971)</td></tr>
<tr><td class="crd-td"><strong>Tangier</strong></td><td class="crd-td">35,76, -5,83</td><td class="crd-td">1830-1971AD</td><td class="crd-td">10,2k</td><td class="crd-td">128,5k</td><td class="crd-td">187,9k (1971)</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">34,68, -1,91</td><td class="crd-td">1830-1971AD</td><td class="crd-td">4,9k</td><td class="crd-td">80,5k</td><td class="crd-td">175,5k (1971)</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">34,05, -6,8</td><td class="crd-td">1830-1971AD</td><td class="crd-td">15,4k</td><td class="crd-td">46,6k</td><td class="crd-td">155,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Kenitra</strong></td><td class="crd-td">34,26, -6,58</td><td class="crd-td">1912-1971AD</td><td class="crd-td">-</td><td class="crd-td">55,9k</td><td class="crd-td">139,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>Tetouan</strong></td><td class="crd-td">35,58, -5,37</td><td class="crd-td">1830-1971AD</td><td class="crd-td">19,8k</td><td class="crd-td">80,7k</td><td class="crd-td">139,1k (1971)</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">32,3, -9,24</td><td class="crd-td">1830-1971AD</td><td class="crd-td">6,8k</td><td class="crd-td">56,8k</td><td class="crd-td">129,1k (1971)</td></tr>
<tr><td class="crd-td"><strong>Khouribga</strong></td><td class="crd-td">32,88, -6,91</td><td class="crd-td">1923-1971AD</td><td class="crd-td">-</td><td class="crd-td">20,4k</td><td class="crd-td">73,7k (1971)</td></tr>
<tr><td class="crd-td"><strong>Mohammedia</strong></td><td class="crd-td">33,69, -7,38</td><td class="crd-td">1913-1971AD</td><td class="crd-td">-</td><td class="crd-td">25,2k</td><td class="crd-td">70,4k (1971)</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">30,43, -9,6</td><td class="crd-td">1830-1971AD</td><td class="crd-td">950</td><td class="crd-td">30,1k</td><td class="crd-td">61,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">33,23, -8,5</td><td class="crd-td">1830-1971AD</td><td class="crd-td">3,1k</td><td class="crd-td">34,8k</td><td class="crd-td">55,5k (1971)</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">34,21, -4,01</td><td class="crd-td">1830-1971AD</td><td class="crd-td">4,6k</td><td class="crd-td">22k</td><td class="crd-td">55,2k (1971)</td></tr>
<tr><td class="crd-td"><strong>Hay El Hassani</strong></td><td class="crd-td">31,55, -8,73</td><td class="crd-td">1830-1970AD</td><td class="crd-td">27,7k</td><td class="crd-td">49,8k</td><td class="crd-td">53,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Beni Mellal</strong></td><td class="crd-td">32,34, -6,35</td><td class="crd-td">1830-1971AD</td><td class="crd-td">3,2k</td><td class="crd-td">18,3k</td><td class="crd-td">53,8k (1971)</td></tr>
<tr><td class="crd-td"><strong>Hay Hassani</strong></td><td class="crd-td">33,55, -7,66</td><td class="crd-td">1830-1970AD</td><td class="crd-td">25,9k</td><td class="crd-td">48,4k</td><td class="crd-td">52,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sidi Moumen</strong></td><td class="crd-td">33,59, -7,53</td><td class="crd-td">1830-1970AD</td><td class="crd-td">24,8k</td><td class="crd-td">47,4k</td><td class="crd-td">52k (1970)</td></tr>
<tr><td class="crd-td"><strong>Aïn Chock</strong></td><td class="crd-td">33,54, -7,61</td><td class="crd-td">1830-1970AD</td><td class="crd-td">20,6k</td><td class="crd-td">43,6k</td><td class="crd-td">48,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Temara</strong></td><td class="crd-td">33,93, -6,91</td><td class="crd-td">1830-1970AD</td><td class="crd-td">20,5k</td><td class="crd-td">43,5k</td><td class="crd-td">48,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ksar el-Kebir</strong></td><td class="crd-td">35, -5,9</td><td class="crd-td">1830-1971AD</td><td class="crd-td">7,2k</td><td class="crd-td">35,8k</td><td class="crd-td">48,3k (1971)</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">35,19, -6,16</td><td class="crd-td">1830-1971AD</td><td class="crd-td">4,8k</td><td class="crd-td">41,9k</td><td class="crd-td">45,7k (1971)</td></tr>
<tr><td class="crd-td"><strong>Dar Bouazza</strong></td><td class="crd-td">33,52, -7,82</td><td class="crd-td">1830-1970AD</td><td class="crd-td">16,8k</td><td class="crd-td">39,3k</td><td class="crd-td">45k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 25 urban centres in French and Spanish Morocco (5.920 total catalogued Moroccan settlements).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:algeria-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950-56AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">36,75, 3,06</td><td class="crd-td">1830-1975AD</td><td class="crd-td">30,2k</td><td class="crd-td">361,3k</td><td class="crd-td">1,35M (1975)</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">35,7, -0,63</td><td class="crd-td">1830-1975AD</td><td class="crd-td">9,8k</td><td class="crd-td">299k</td><td class="crd-td">465,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">36,37, 6,61</td><td class="crd-td">1830-1975AD</td><td class="crd-td">24,8k</td><td class="crd-td">148,7k</td><td class="crd-td">334,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">36,9, 7,77</td><td class="crd-td">1830-1975AD</td><td class="crd-td">5,8k</td><td class="crd-td">114,1k</td><td class="crd-td">241,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Setif</strong></td><td class="crd-td">36,19, 5,41</td><td class="crd-td">1830-1975AD</td><td class="crd-td">2,6k</td><td class="crd-td">53,1k</td><td class="crd-td">139,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">36,47, 2,83</td><td class="crd-td">1830-1975AD</td><td class="crd-td">8,9k</td><td class="crd-td">67,9k</td><td class="crd-td">132,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sidi Bel Abbes</strong></td><td class="crd-td">35,19, -0,63</td><td class="crd-td">1843-1975AD</td><td class="crd-td">-</td><td class="crd-td">80,6k</td><td class="crd-td">114,3k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">34,88, -1,32</td><td class="crd-td">1830-1975AD</td><td class="crd-td">13,9k</td><td class="crd-td">73,4k</td><td class="crd-td">106,8k (1975)</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">36,88, 6,91</td><td class="crd-td">1838-1975AD</td><td class="crd-td">-</td><td class="crd-td">70,4k</td><td class="crd-td">103,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">35,56, 6,17</td><td class="crd-td">1844-1975AD</td><td class="crd-td">-</td><td class="crd-td">21,9k</td><td class="crd-td">94,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Bejaia</strong></td><td class="crd-td">36,75, 5,06</td><td class="crd-td">1830-1975AD</td><td class="crd-td">2,4k</td><td class="crd-td">43,9k</td><td class="crd-td">88,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">34,85, 5,73</td><td class="crd-td">1830-1975AD</td><td class="crd-td">5,4k</td><td class="crd-td">52,5k</td><td class="crd-td">84,7k (1975)</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">35,93, 0,09</td><td class="crd-td">1830-1975AD</td><td class="crd-td">6,2k</td><td class="crd-td">56,4k</td><td class="crd-td">84,1k (1975)</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">36,17, 1,33</td><td class="crd-td">1843-1975AD</td><td class="crd-td">-</td><td class="crd-td">35,4k</td><td class="crd-td">73,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Medea</strong></td><td class="crd-td">36,26, 2,75</td><td class="crd-td">1830-1975AD</td><td class="crd-td">6,8k</td><td class="crd-td">29,2k</td><td class="crd-td">61,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tebessa</strong></td><td class="crd-td">35,4, 8,12</td><td class="crd-td">1830-1975AD</td><td class="crd-td">2,1k</td><td class="crd-td">21,4k</td><td class="crd-td">58,9k (1975)</td></tr>
<tr><td class="crd-td"><strong>Relizane</strong></td><td class="crd-td">35,74, 0,56</td><td class="crd-td">1830-1975AD</td><td class="crd-td">1,4k</td><td class="crd-td">27,8k</td><td class="crd-td">54,9k (1975)</td></tr>
<tr><td class="crd-td"><strong>Guelma</strong></td><td class="crd-td">36,46, 7,43</td><td class="crd-td">1830-1975AD</td><td class="crd-td">1,1k</td><td class="crd-td">22,4k</td><td class="crd-td">54,8k (1975)</td></tr>
<tr><td class="crd-td"><strong>Bechar</strong></td><td class="crd-td">31,62, -2,22</td><td class="crd-td">1903-1975AD</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">54,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">35,37, 1,32</td><td class="crd-td">1830-1975AD</td><td class="crd-td">1,2k</td><td class="crd-td">22,2k</td><td class="crd-td">52,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Mascara</strong></td><td class="crd-td">35,4, 0,14</td><td class="crd-td">1830-1975AD</td><td class="crd-td">11,5k</td><td class="crd-td">39,8k</td><td class="crd-td">52,1k (1975)</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arreridj</strong></td><td class="crd-td">36,07, 4,76</td><td class="crd-td">1830-1975AD</td><td class="crd-td">1,4k</td><td class="crd-td">22,6k</td><td class="crd-td">51,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Souk Ahras</strong></td><td class="crd-td">36,29, 7,95</td><td class="crd-td">1830-1975AD</td><td class="crd-td">1,5k</td><td class="crd-td">20,7k</td><td class="crd-td">49,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Saida</strong></td><td class="crd-td">34,83, 0,15</td><td class="crd-td">1830-1975AD</td><td class="crd-td">1,4k</td><td class="crd-td">21,4k</td><td class="crd-td">48,7k (1975)</td></tr>
<tr><td class="crd-td"><strong>Ghardaia</strong></td><td class="crd-td">32,49, 3,67</td><td class="crd-td">1830-1975AD</td><td class="crd-td">9,5k</td><td class="crd-td">14,9k</td><td class="crd-td">46,5k (1975)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 25 urban centres in French Algeria across Tell Départements and Territoires du Sud (4.041 total settlements).</figcaption>
</figure>

In Tunisia (1.175 catalogued entries), metropolitan primacy centred on Tunis (550,4k in 1975AD), backed by the olive-oil and phosphate port of Sfax (171,3k), the Sahel port of Sousse (69,5k), the naval base of Bizerte (62,9k), the inland religious capital of Kairouan (54,5k) and the phosphate hub of Gafsa (42,2k) [@Harras2024State; @Varley2019Defending]. In Libya (415 entries), coastal Tripolitanian and Cyrenaican ports—Tripoli (551,5k in 1973AD), Benghazi (266,2k), Misrata (68,4k) and Zawiya (48,6k)—dwarfed interior Saharan oases such as Sabha (35,9k), Murzuq (7,8k) and Ghadames (6,2k), while Spanish Sahara's 41 individually assessed settlements were led by El Aaiun (28k in 1974AD), Smara (7,3k), Dakhla (5,6k in 1970AD) and the phosphate mining town of Bou Craa (2,5k) [@Jarad2022Role; @Lizak2019Libya; @Martin2018Western].

<figure class="crd-table-figure" id="tab:tunisia-top20">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950-56AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">36,81, 10,18</td><td class="crd-td">1830-1975AD</td><td class="crd-td">98,5k</td><td class="crd-td">410k</td><td class="crd-td">550,4k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">34,74, 10,76</td><td class="crd-td">1830-1975AD</td><td class="crd-td">14,8k</td><td class="crd-td">65,6k</td><td class="crd-td">171,3k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">35,83, 10,64</td><td class="crd-td">1830-1975AD</td><td class="crd-td">9,8k</td><td class="crd-td">48,2k</td><td class="crd-td">69,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">37,27, 9,87</td><td class="crd-td">1830-1975AD</td><td class="crd-td">5,9k</td><td class="crd-td">44,7k</td><td class="crd-td">62,9k (1975)</td></tr>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">35,68, 10,1</td><td class="crd-td">1830-1975AD</td><td class="crd-td">14,2k</td><td class="crd-td">34k</td><td class="crd-td">54,5k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sidi Bouzid</strong></td><td class="crd-td">35,04, 9,49</td><td class="crd-td">1830-1970AD</td><td class="crd-td">25k</td><td class="crd-td">47,6k</td><td class="crd-td">52,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Gafsa</strong></td><td class="crd-td">34,42, 8,78</td><td class="crd-td">1830-1975AD</td><td class="crd-td">3,8k</td><td class="crd-td">24,3k</td><td class="crd-td">42,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Menzel Bourguiba</strong></td><td class="crd-td">37,15, 9,79</td><td class="crd-td">1897-1975AD</td><td class="crd-td">-</td><td class="crd-td">34,7k</td><td class="crd-td">42,1k (1975)</td></tr>
<tr><td class="crd-td"><strong>Métouia</strong></td><td class="crd-td">33,96, 10</td><td class="crd-td">1830-1970AD</td><td class="crd-td">14,1k</td><td class="crd-td">35,5k</td><td class="crd-td">41,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">36,88, 10,25</td><td class="crd-td">1830-1970AD</td><td class="crd-td">13,4k</td><td class="crd-td">34,5k</td><td class="crd-td">40,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Gabes</strong></td><td class="crd-td">33,88, 10,1</td><td class="crd-td">1830-1975AD</td><td class="crd-td">6,4k</td><td class="crd-td">24,4k</td><td class="crd-td">40,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>Kebili</strong></td><td class="crd-td">33,7, 8,96</td><td class="crd-td">1830-1970AD</td><td class="crd-td">12,9k</td><td class="crd-td">33,8k</td><td class="crd-td">39,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ettadhamen-Mnihla</strong></td><td class="crd-td">36,84, 10,11</td><td class="crd-td">1830-1970AD</td><td class="crd-td">12,7k</td><td class="crd-td">33,5k</td><td class="crd-td">39,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Beja</strong></td><td class="crd-td">36,73, 9,18</td><td class="crd-td">1830-1975AD</td><td class="crd-td">4,6k</td><td class="crd-td">22,7k</td><td class="crd-td">39,2k (1975)</td></tr>
<tr><td class="crd-td"><strong>Sakiet ed Daier</strong></td><td class="crd-td">34,79, 10,81</td><td class="crd-td">1830-1970AD</td><td class="crd-td">10,2k</td><td class="crd-td">29,1k</td><td class="crd-td">35,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Rawād</strong></td><td class="crd-td">36,89, 10,19</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,7k</td><td class="crd-td">28,2k</td><td class="crd-td">34,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>M'saken</strong></td><td class="crd-td">35,73, 10,58</td><td class="crd-td">1830-1975AD</td><td class="crd-td">4,2k</td><td class="crd-td">14,8k</td><td class="crd-td">33,6k (1975)</td></tr>
<tr><td class="crd-td"><strong>El Mourouj</strong></td><td class="crd-td">36,71, 10,21</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,2k</td><td class="crd-td">27,1k</td><td class="crd-td">33,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Aryanah</strong></td><td class="crd-td">36,86, 10,2</td><td class="crd-td">1830-1970AD</td><td class="crd-td">8,9k</td><td class="crd-td">26,5k</td><td class="crd-td">32,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sīdī Ḥusayn</strong></td><td class="crd-td">36,76, 10,12</td><td class="crd-td">1830-1970AD</td><td class="crd-td">8,6k</td><td class="crd-td">25,9k</td><td class="crd-td">32k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 20 urban centres in the French Protectorate of Tunisia (1.175 total catalogued Tunisian settlements).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:libya-esh-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement (ISO3)</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950-56AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tripoli (LBY)</strong></td><td class="crd-td">32,89, 13,19</td><td class="crd-td">1830-1973AD</td><td class="crd-td">25,2k</td><td class="crd-td">129,7k</td><td class="crd-td">551,5k (1973)</td></tr>
<tr><td class="crd-td"><strong>Benghazi (LBY)</strong></td><td class="crd-td">32,12, 20,09</td><td class="crd-td">1830-1973AD</td><td class="crd-td">7,8k</td><td class="crd-td">69,7k</td><td class="crd-td">266,2k (1973)</td></tr>
<tr><td class="crd-td"><strong>Misrata (LBY)</strong></td><td class="crd-td">32,38, 15,09</td><td class="crd-td">1830-1973AD</td><td class="crd-td">6,2k</td><td class="crd-td">22,4k</td><td class="crd-td">68,4k (1973)</td></tr>
<tr><td class="crd-td"><strong>Zawiya (LBY)</strong></td><td class="crd-td">32,76, 12,73</td><td class="crd-td">1830-1973AD</td><td class="crd-td">3,2k</td><td class="crd-td">14,2k</td><td class="crd-td">48,6k (1973)</td></tr>
<tr><td class="crd-td"><strong>Janzur (LBY)</strong></td><td class="crd-td">32,82, 13,02</td><td class="crd-td">1830-1970AD</td><td class="crd-td">11,7k</td><td class="crd-td">31,8k</td><td class="crd-td">38k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al Jadid (LBY)</strong></td><td class="crd-td">27,05, 14,4</td><td class="crd-td">1830-1970AD</td><td class="crd-td">11,2k</td><td class="crd-td">30,8k</td><td class="crd-td">37k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tobruk (LBY)</strong></td><td class="crd-td">32,08, 23,98</td><td class="crd-td">1911-1973AD</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">36,5k (1973)</td></tr>
<tr><td class="crd-td"><strong>Sabha (LBY)</strong></td><td class="crd-td">27,04, 14,43</td><td class="crd-td">1830-1973AD</td><td class="crd-td">1,1k</td><td class="crd-td">7,2k</td><td class="crd-td">35,9k (1973)</td></tr>
<tr><td class="crd-td"><strong>Derna (LBY)</strong></td><td class="crd-td">32,77, 22,64</td><td class="crd-td">1830-1973AD</td><td class="crd-td">3,8k</td><td class="crd-td">15,9k</td><td class="crd-td">35,8k (1973)</td></tr>
<tr><td class="crd-td"><strong>Al-Bayda (LBY)</strong></td><td class="crd-td">32,76, 21,76</td><td class="crd-td">1840-1973AD</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">35,4k (1973)</td></tr>
<tr><td class="crd-td"><strong>Al Jumayl (LBY)</strong></td><td class="crd-td">32,85, 12,06</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,3k</td><td class="crd-td">27,4k</td><td class="crd-td">33,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al Ajaylat (LBY)</strong></td><td class="crd-td">32,76, 12,38</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9k</td><td class="crd-td">26,7k</td><td class="crd-td">32,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ajdabiya (LBY)</strong></td><td class="crd-td">30,76, 20,23</td><td class="crd-td">1830-1973AD</td><td class="crd-td">1,1k</td><td class="crd-td">6,8k</td><td class="crd-td">32,3k (1973)</td></tr>
<tr><td class="crd-td"><strong>Zliten (LBY)</strong></td><td class="crd-td">32,47, 14,57</td><td class="crd-td">1830-1973AD</td><td class="crd-td">3,4k</td><td class="crd-td">11,2k</td><td class="crd-td">31,4k (1973)</td></tr>
<tr><td class="crd-td"><strong>Qasr Bin Ghashir (LBY)</strong></td><td class="crd-td">32,68, 13,18</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7,3k</td><td class="crd-td">23,2k</td><td class="crd-td">29,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Surman (LBY)</strong></td><td class="crd-td">32,76, 12,57</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7,3k</td><td class="crd-td">23,1k</td><td class="crd-td">29,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tajura (LBY)</strong></td><td class="crd-td">32,88, 13,35</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7,2k</td><td class="crd-td">22,7k</td><td class="crd-td">28,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Yafran (LBY)</strong></td><td class="crd-td">32,06, 12,53</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7k</td><td class="crd-td">22,3k</td><td class="crd-td">28,2k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al Hurshah (LBY)</strong></td><td class="crd-td">32,76, 12,67</td><td class="crd-td">1830-1970AD</td><td class="crd-td">6,2k</td><td class="crd-td">20,4k</td><td class="crd-td">26,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Khums (LBY)</strong></td><td class="crd-td">32,65, 14,26</td><td class="crd-td">1830-1973AD</td><td class="crd-td">1,4k</td><td class="crd-td">8,6k</td><td class="crd-td">24,9k (1973)</td></tr>
<tr><td class="crd-td"><strong>El Aaiun (ESH)</strong></td><td class="crd-td">27,15, -13,2</td><td class="crd-td">1938-1974AD</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">28k (1974)</td></tr>
<tr><td class="crd-td"><strong>Smara (ESH)</strong></td><td class="crd-td">26,74, -11,67</td><td class="crd-td">1898-1974AD</td><td class="crd-td">-</td><td class="crd-td">980</td><td class="crd-td">7,3k (1974)</td></tr>
<tr><td class="crd-td"><strong>Meharrize (ESH)</strong></td><td class="crd-td">26,15, -11,07</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,2k</td><td class="crd-td">4,8k</td><td class="crd-td">6,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Dakhla (ESH)</strong></td><td class="crd-td">23,71, -15,94</td><td class="crd-td">1884-1974AD</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">5,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Bir Gandus (ESH)</strong></td><td class="crd-td">21,62, -16,47</td><td class="crd-td">1830-1970AD</td><td class="crd-td">723</td><td class="crd-td">3k</td><td class="crd-td">4,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tichla (ESH)</strong></td><td class="crd-td">21,58, -14,97</td><td class="crd-td">1830-1970AD</td><td class="crd-td">564</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tifariti (ESH)</strong></td><td class="crd-td">26,16, -10,56</td><td class="crd-td">1830-1970AD</td><td class="crd-td">518</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 20 urban centres in Italian Libya (415 total) and leading seven catalogued settlements in Spanish Sahara (41 total).</figcaption>
</figure>

## Ledger Exclusions and Deduplication Audit

Table \ref{tab:excluded-sample-cna} reports representative excluded duplicate-alias and suburban-merge entries documented among the 250 audited exclusions in the source ledger, illustrating how multi-source colonial census spellings were consolidated into canonical municipal tracks [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:excluded-sample-cna">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tangier</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Salé</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Benghazi</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Benghazi</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Kénitra</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Kenitra</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Ajdabiya</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Tétouan</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tétouan</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Djelfa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Al Bayda</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Misrata</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Mohammedia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Djelfa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Zawiya</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Sidi Bel Abbès</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Al Khums</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Sidi Bel Abbès</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Béjaïa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tébessa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arréridj</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Béjaïa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Ait Melloul</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Beni Mellal</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Ouargla</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Beni Mellal</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arreridj</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Zliten</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>El Oued</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Laghouat</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Béchar</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Médéa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Saïda</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Souk Ahras</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Touggourt</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Jijel</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Nador</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Sabha</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Touggourt</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Ouargla</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>M'Sila</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Derna</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Mohammedia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Settat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Guelmim</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>El Oued</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Gabès</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Médéa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Tizi Ouzou</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Relizane</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Ksar El Kebir</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Guelma</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Tobruk</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Al Bayda</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Ghardaïa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Bou Saâda</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Khenchela</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Khenchela</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sirte</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Gharyan</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Tobruk</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Medenine</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sabratha</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Guelmim</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Hammamet</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Béja</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Kasserine</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Ghardaia</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Murūj</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Mascara</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>M'saken</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Mascara</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Aryānah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Khemisset</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Hammamet</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Lqliaa</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tamanrasset</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>El Mourouj</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Jendouba</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Gafsa</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>El Bayadh</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Zuwara</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Sirte</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Al Marj</strong></td><td class="crd-td">Libya</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Ben Guerir</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tiflet</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Taroudant</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Taourirt</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Monastir</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Chelghoum Laïd</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Errachidia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Errachidia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tiznit</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Houmt Souk</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Guercif</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Sakiet Ezzit</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Bouira</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Aïn Témouchent</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>La Marsa</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Le Kram</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Zarzis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Tan-Tan</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Boufarik</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Oulad Teima</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Mahdia</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Kasserine</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Essaouira</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Ouarzazate</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Nabeul</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Feriana</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sefrou</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Ouarzazate</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Nabeul</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Adrar</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Sidi Bennour</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Arzew</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Rades</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Korba</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Menzel Bourguiba</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Aïn Sefra</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Jemmal</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sidi Kacem</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tataouine</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Fes</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tanger</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">Libya</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Marrakesh</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Banghāzī</strong></td><td class="crd-td">Libya</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Misratah</strong></td><td class="crd-td">Libya</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Tunisia settlement.</td></tr>
<tr><td class="crd-td"><strong>Az Zawiyah</strong></td><td class="crd-td">Libya</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Mohammadia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Az-Zāwiyah</strong></td><td class="crd-td">Libya</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Libya settlement.</td></tr>
<tr><td class="crd-td"><strong>Zlīṭan</strong></td><td class="crd-td">Libya</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,68 km merged into canonical Libya settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Representative excluded candidate entries documented in the colonial North African source ledger (250 total audited exclusions).</figcaption>
</figure>

# Limitations

Three constraints govern the settlement figures presented here. First, pre-protectorate 1830AD estimates for Moroccan and Libyan inland towns carry broader uncertainty bounds than post-1886AD French Algerian or post-1921AD Tunisian and Moroccan census enumerations [@Aidi2023Moulay; @Harras2024State]. Second, decennial municipal boundaries expanded periodically around Algiers, Casablanca, Tunis and Tripoli as formerly distinct villages were annexed into metropolitan communes; where suburban satellites lay within 2 km of the core, the ledger merges them consistently across time to preserve metropolitan continuity [@Liauzu1986Soci; @Bosworth2007Historic]. Third, colonial Saharan garrisons and nomadic camps in Spanish Sahara and Fezzan exhibited high seasonal mobility prior to 1960AD; even with 41 individually assessed Spanish Saharan settlements led by El Aaiun (founded 1938AD), Dakhla (1884AD) and Smara (1898AD), pre-1967AD municipal counts exclude mobile pastoral fractions enumerated only sporadically outside administrative posts [@Besenyo2014Western; @Jarad2022Role].

# Conclusion

Across 11.592 individually assessed settlements spanning 1830AD to 1975AD, the urban network of Colonial North Africa shifted decisively from interior caravan capitals toward Atlantic and Mediterranean port metropolises. Total catalogued urban population multiplied more than fifteenfold from 6,72M in 1830AD to 11,98M at the terminal 1971AD-1975AD census horizon, paced by Casablanca, Algiers, Tripoli, Tunis, Oran and Rabat alongside colonial port, garrison and mining foundations such as Skikda, Sidi Bel Abbès, Batna, Kénitra, Khouribga and El Aaiun [@Bosworth2007Historic; @Clark2024Rural; @Palard2020Religieuse]. Disaggregating municipal totals cleanly from rural subadministrative polygons preserves both the sharp coastal urban hierarchy and the sparsely settled desert interior across all five territories.

# Appendix

Table \ref{tab:country-summary-cna} sums catalogued settlement counts and aggregate urban populations across the five North African jurisdictions at four benchmark horizons from 1830AD to the 1971AD-1975AD terminal census wave.

<figure class="crd-table-figure" id="tab:country-summary-cna">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">1830AD</th><th class="crd-th">1880-85AD</th><th class="crd-th">1936AD</th><th class="crd-th">1971-75AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">4.030</td><td class="crd-td">2,82M</td><td class="crd-td">4,39M</td><td class="crd-td">1,44M</td><td class="crd-td">4,77M</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">5.949</td><td class="crd-td">2,71M</td><td class="crd-td">3,91M</td><td class="crd-td">1,2M</td><td class="crd-td">4,46M</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">1.177</td><td class="crd-td">880,1k</td><td class="crd-td">1,26M</td><td class="crd-td">486,6k</td><td class="crd-td">1,37M</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">416</td><td class="crd-td">310,4k</td><td class="crd-td">452,8k</td><td class="crd-td">242,7k</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Western Sahara</strong></td><td class="crd-td">20</td><td class="crd-td">4,4k</td><td class="crd-td">7k</td><td class="crd-td">1,7k</td><td class="crd-td">47,4k</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">11.592</td><td class="crd-td">6,72M</td><td class="crd-td">10,02M</td><td class="crd-td">3,38M</td><td class="crd-td">11,98M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlement counts and summed urban populations by territory across Colonial North Africa, 1830AD to 1971-75AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::
