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
hero_caption: "Spatial distribution of 755 catalogued urban centres and oasis towns across Colonial North Africa from 1830AD to 1975AD."
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

This gazetteer compiles longitudinal population series for 755 urban centres, coastal ports, colonial military foundations, mining towns and Saharan oases across Algeria, Morocco, Tunisia, Libya and Western Sahara between 1830AD and 1975AD. Covering 4.780.234 km² across six colonial territorial divisions, the register integrates French Algerian quinquennial census returns (1856AD-1954AD), Tunisian *Contrôles Civils* enumerations (1881AD-1956AD), Moroccan protectorate and 1960AD-1971AD national censuses, Italian ISTAT Libyan surveys (1931AD-1936AD) and Spanish Saharan administrative counts [@Harras2024State; @Antonelli2024Accounting; @Martin2018Western; @Bosworth2007Historic]. Across the 755 catalogued entries—280 in Algeria, 204 in Morocco, 139 in Tunisia, 131 in Libya and one in Western Sahara—the dataset contains 8.535 settlement-year observations (averaging 11,3 observations per town), drawn from 822 evaluated source-ledger candidates after excluding 58 merged suburban municipalities, eight variant-spelling duplicates and one post-1975AD Libyan foundation. Aggregate catalogued urban population expanded over eightfold from 2,11M across 604 active settlements in 1830AD to 5,32M in 1910AD, 11,78M in 1950AD and 17,59M across 528 surviving urban cores by 1970AD, led by Casablanca (1,64M), El Djazaïr (1,31M), Ṭarābulus (532,8k), Tūnis (504,4k), Oran (421,7k), Rabat (404k), Fès (371,8k) and Marrakech (337,7k).

# Background

Before European colonial occupation, urban life across North Africa centred on a dual network of interior political-religious capitals and modest Mediterranean or Atlantic trading ports [@Bosworth2007Historic; @Liauzu1986Soci]. Historic cities such as Fès, Marrakech, Meknès, Tlemcen, Constantine and Qayrawan anchored artisanal guilds, Islamic scholarship and caravan trade linking the Tell and Moroccan plains to the Saharan oases of Touggourt, Ghardaïa, Murzuq and Tafilalt [@Bosworth2007Historic; @Aidi2023Moulay; @Jarad2022Role]. Coastal towns—Algiers, Tunis, Tripoli, Tangier, Salé and Annaba—sustained maritime commerce and corsair admiralties, yet remained smaller in aggregate share than the densely peopled rural hinterlands [@Liauzu1986Soci; @Bosworth2007Historic].

Colonial administration reversed that spatial equilibrium between 1830AD and 1975AD [@Haas2025Intra; @Liauzu1986Soci]. In French Algeria, military engineers built fortified coastal ports at Philippeville (Skikda, 1838AD) and Arzew (1845AD) alongside interior garrison and *colon* centres at Sidi bel Abbès (1843AD), Orléansville (Chlef, 1843AD) and Batna (1844AD) to anchor settler agriculture across the Mitidja, Chelif and Sersou plains [@Palard2020Religieuse; @Bosworth2007Historic]. Simultaneously, *pied-noir* immigration transformed El Djazaïr and Oran into European-majority port cities until the mass departure of roughly 900k settlers in the summer of 1962 [@Palard2020Religieuse; @Haas2025Intra].

In Morocco after the Treaty of Fez (1912AD), Resident-General Hubert Lyautey bypassed the historic *medinas* of Fès and Marrakech to channel port investment into Casablanca and the newly established Atlantic port of Kénitra (Port-Lyautey, 1912AD), alongside Fédala (Mohammédia, 1913AD) and the phosphate mining centre of Khouribga (1923AD) [@Clark2024Rural; @Bosworth2007Historic]. Across Tunisia and Libya, harbour dredging, railway construction and Italian Fascist settler schemes under Balbo concentrated commercial growth in Tūnis, Ṣafāqis, Banzart, Ṭarābulus and Banghāzī, even as Cyrenaican pacification and internment devastated nomadic camps in the early 1930s [@Tarchi2023Building; @Strangio2020Tourism; @Ballinger2020World]. Late-colonial resource extraction further generated desert industrial outposts such as Hassi Messaoud (1956AD) in the Algerian Sahara and phosphate-era sedentarisation across Spanish Sahara [@Allan2016Natural; @Besenyo2014Western].

# Methodology

Settlement entries in this gazetteer were assembled by linking historical colonial municipal enumerations directly to post-independence national census series from the Haut-Commissariat au Plan (HCP Morocco), Office National des Statistiques (ONS Algeria), Institut National de la Statistique (INS Tunisia) and Bureau of Statistics and Census (BSC Libya), supplemented by scholarly historical urban compendia [@Harras2024State; @Bosworth2007Historic; @Liauzu1986Soci]. Every included settlement carries verified WGS84 coordinates and an unambiguous country assignment across the five colonial jurisdictions, while preserving scholarly ALA-LC and French-orthographic Latin naming (such as Ṭarābulus, Ṣafāqis, Banghāzī, Tūnis and El Djazaïr) without non-Latin script leakage in printed tables.

To prevent artificial double-counting of contiguous metropolitan footprints, the regional source ledger enforces strict spatial and temporal deduplication [@Runfola2020GeoBoundaries]. Out of 822 evaluated candidate settlements, 58 subordinate suburban communes situated within 2 km of primary urban cores (such as Miliana in Algeria, Khénifra's suburban perimeter or Ḥammām Sūsah, Al-'Ayn and Dār Sha'bān around Tunisian coastal cities) were merged into their parent agglomerations. Eight variant-spelling duplicates within 25 km (including Tiaret, el Bayadh, Ammi Moussa and Ain Bessem in Algeria, plus Asilah and Souk el Arba in Morocco) were collapsed into canonical entries, and one late Libyan settlement (Badr, founded in 1982AD) was excluded as post-dating the 1830AD-1975AD colonial window. Settlements founded mid-period—such as Skikda (1838AD), Sidi bel Abbès (1843AD), Batna (1844AD), Kénitra (1912AD), Khouribga (1923AD) and Hassi Messaoud (1956AD)—are strictly truncated prior to their documented foundation dates so no anachronistic populations are projected backward.

# Testing and Validation

Source-ledger accounting verifies exact reconciliation across all 822 evaluated candidates: 755 included entries plus 67 excluded entries leave zero unaccounted records. Figure \ref{fig:sett-gazetteer-dist} displays the rank-size power-law distribution across all 755 catalogued settlements (Zipf slope $\alpha = 1,143$, $R^2 = 0,909$) paired with the twelve largest North African cities at their 1970AD terminal peak.

<figure class="crd-figure-block" id="fig:sett-gazetteer-dist">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-colonial-north-africa-settlements/fig4_colonial_north_africa_settlements.png" alt="fig:sett-gazetteer-dist" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 755 North African settlements and leading urban centres at 1970AD peak.</figcaption>
</figure>

# Results

## Top 45 Settlements across Colonial North Africa

Table \ref{tab:top45-cna} presents the 45 largest catalogued settlements ordered by peak population within the colonial window, highlighting the rapid ascent of Casablanca (from 75,5k in 1830AD to 1,64M in 1970AD), El Djazaïr (60k to 1,31M), Ṭarābulus (24,5k to 532,8k) and Tūnis (94k to 504,4k) relative to older inland cities [@Bosworth2007Historic; @Liauzu1986Soci].

<figure class="crd-table-figure" id="tab:top45-cna">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1830AD</th><th class="crd-th">1930AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,59, -7,61</td><td class="crd-td">75,5k</td><td class="crd-td">681,4k</td><td class="crd-td">1,64M (1970)</td></tr>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,73, 3,09</td><td class="crd-td">60k</td><td class="crd-td">541,6k</td><td class="crd-td">1,31M (1970)</td></tr>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,89, 13,19</td><td class="crd-td">24,5k</td><td class="crd-td">221k</td><td class="crd-td">532,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,82, 10,17</td><td class="crd-td">94k</td><td class="crd-td">312,1k</td><td class="crd-td">504,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,7, -0,64</td><td class="crd-td">19,4k</td><td class="crd-td">174,9k</td><td class="crd-td">421,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,01, -6,83</td><td class="crd-td">18,6k</td><td class="crd-td">167,6k</td><td class="crd-td">404k (1970)</td></tr>
<tr><td class="crd-td"><strong>Fès</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,03, -5</td><td class="crd-td">17,1k</td><td class="crd-td">154,2k</td><td class="crd-td">371,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">Morocco</td><td class="crd-td">31,63, -8</td><td class="crd-td">15,5k</td><td class="crd-td">140,1k</td><td class="crd-td">337,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Banghāzī</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,11, 20,07</td><td class="crd-td">15k</td><td class="crd-td">135k</td><td class="crd-td">325,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 6,61</td><td class="crd-td">13,6k</td><td class="crd-td">122,5k</td><td class="crd-td">295,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Meknès</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,89, -5,55</td><td class="crd-td">11,3k</td><td class="crd-td">101,9k</td><td class="crd-td">245,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Salé</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,05, -6,8</td><td class="crd-td">10,8k</td><td class="crd-td">97,6k</td><td class="crd-td">235,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tanger</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,77, -5,8</td><td class="crd-td">10,4k</td><td class="crd-td">93,5k</td><td class="crd-td">225,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,68, -1,91</td><td class="crd-td">9,2k</td><td class="crd-td">82,8k</td><td class="crd-td">199,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,74, 10,76</td><td class="crd-td">36,5k</td><td class="crd-td">121,3k</td><td class="crd-td">196k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tétouan</strong></td><td class="crd-td">Morocco</td><td class="crd-td">35,58, -5,37</td><td class="crd-td">7k</td><td class="crd-td">63,6k</td><td class="crd-td">153,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,9, 7,77</td><td class="crd-td">7k</td><td class="crd-td">63,5k</td><td class="crd-td">153,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">Morocco</td><td class="crd-td">32,3, -9,24</td><td class="crd-td">7k</td><td class="crd-td">62,9k</td><td class="crd-td">151,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Kénitra</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,26, -6,58</td><td class="crd-td">-</td><td class="crd-td">59,9k</td><td class="crd-td">144,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,19, 5,41</td><td class="crd-td">5,1k</td><td class="crd-td">46,1k</td><td class="crd-td">111,2k (1970)</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">Morocco</td><td class="crd-td">30,42, -9,6</td><td class="crd-td">4,7k</td><td class="crd-td">42,2k</td><td class="crd-td">101,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Khouribga</strong></td><td class="crd-td">Morocco</td><td class="crd-td">32,88, -6,91</td><td class="crd-td">-</td><td class="crd-td">40,5k</td><td class="crd-td">97,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sidi bel Abbès</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,19, -0,63</td><td class="crd-td">-</td><td class="crd-td">40,2k</td><td class="crd-td">96,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Miṣrātah</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,38, 15,09</td><td class="crd-td">4,4k</td><td class="crd-td">39,9k</td><td class="crd-td">96,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,88, -1,31</td><td class="crd-td">4,3k</td><td class="crd-td">38,9k</td><td class="crd-td">93,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,56, 6,17</td><td class="crd-td">-</td><td class="crd-td">36,5k</td><td class="crd-td">88,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,47, 2,83</td><td class="crd-td">4k</td><td class="crd-td">35,8k</td><td class="crd-td">86,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Mohammédia</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,69, -7,38</td><td class="crd-td">-</td><td class="crd-td">33,5k</td><td class="crd-td">80,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,27, 9,87</td><td class="crd-td">14,9k</td><td class="crd-td">49,4k</td><td class="crd-td">79,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,88, 6,91</td><td class="crd-td">-</td><td class="crd-td">32,5k</td><td class="crd-td">78,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Qābis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,88, 10,1</td><td class="crd-td">14,5k</td><td class="crd-td">48,3k</td><td class="crd-td">78k (1970)</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,85, 5,73</td><td class="crd-td">3,6k</td><td class="crd-td">32,2k</td><td class="crd-td">77,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Béni Mellal</strong></td><td class="crd-td">Morocco</td><td class="crd-td">32,34, -6,35</td><td class="crd-td">3,4k</td><td class="crd-td">30,3k</td><td class="crd-td">73k (1970)</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,93, 0,09</td><td class="crd-td">3,4k</td><td class="crd-td">30,2k</td><td class="crd-td">72,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,83, 10,64</td><td class="crd-td">13,2k</td><td class="crd-td">43,7k</td><td class="crd-td">70,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Az-Zāwiyah</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,75, 12,73</td><td class="crd-td">3,1k</td><td class="crd-td">27,9k</td><td class="crd-td">67,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,17, 1,33</td><td class="crd-td">-</td><td class="crd-td">27k</td><td class="crd-td">65k (1970)</td></tr>
<tr><td class="crd-td"><strong>Aryānah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,86, 10,19</td><td class="crd-td">12,1k</td><td class="crd-td">40,2k</td><td class="crd-td">65k (1970)</td></tr>
<tr><td class="crd-td"><strong>Béjaïa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,76, 5,08</td><td class="crd-td">2,9k</td><td class="crd-td">26,3k</td><td class="crd-td">63,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">Morocco</td><td class="crd-td">33,26, -8,51</td><td class="crd-td">2,9k</td><td class="crd-td">25,9k</td><td class="crd-td">62,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Béchar</strong></td><td class="crd-td">Algeria</td><td class="crd-td">31,62, -2,22</td><td class="crd-td">2,9k</td><td class="crd-td">25,9k</td><td class="crd-td">62,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Qayrawān</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1</td><td class="crd-td">11,4k</td><td class="crd-td">37,8k</td><td class="crd-td">61,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">Morocco</td><td class="crd-td">34,21, -4,01</td><td class="crd-td">2,7k</td><td class="crd-td">24,6k</td><td class="crd-td">59,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,88, 10,25</td><td class="crd-td">11k</td><td class="crd-td">36,7k</td><td class="crd-td">59,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Janzūr</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,82, 13,02</td><td class="crd-td">2,6k</td><td class="crd-td">23,7k</td><td class="crd-td">57,1k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements across Colonial North Africa ordered by peak population (n=755 total sites).</figcaption>
</figure>

## Sub-Regional Urban Profiles: Morocco, Algeria, Tunisia, Libya and Western Sahara

Tables \ref{tab:morocco-top25} through \ref{tab:libya-esh-top25} detail the leading urban centres within each constituent colonial territory. In Morocco (204 catalogued entries), Atlantic industrial and port towns—Casablanca, Rabat, Salé, Kénitra, Safi, Agadir and Mohammédia—alongside mining hub Khouribga grew far faster than historic interior and northern centres Fès, Marrakech, Meknès, Tanger, Oujda and Tétouan [@Clark2024Rural; @Sayahi2011Spanish]. In Algeria (280 entries), coastal ports El Djazaïr, Oran, Annaba and Skikda paired with colonial agricultural centres Sidi bel Abbès, Sétif, Batna, Blida and Chlef [@Palard2020Religieuse; @Bosworth2007Historic].

<figure class="crd-table-figure" id="tab:morocco-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Casablanca</strong></td><td class="crd-td">33,59, -7,61</td><td class="crd-td">1830-1970AD</td><td class="crd-td">75,5k</td><td class="crd-td">1,06M</td><td class="crd-td">1,64M (1970)</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">34,01, -6,83</td><td class="crd-td">1830-1970AD</td><td class="crd-td">18,6k</td><td class="crd-td">260,2k</td><td class="crd-td">404k (1970)</td></tr>
<tr><td class="crd-td"><strong>Fès</strong></td><td class="crd-td">34,03, -5</td><td class="crd-td">1830-1970AD</td><td class="crd-td">17,1k</td><td class="crd-td">239,5k</td><td class="crd-td">371,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">31,63, -8</td><td class="crd-td">1830-1970AD</td><td class="crd-td">15,5k</td><td class="crd-td">217,5k</td><td class="crd-td">337,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Meknès</strong></td><td class="crd-td">33,89, -5,55</td><td class="crd-td">1830-1970AD</td><td class="crd-td">11,3k</td><td class="crd-td">158,2k</td><td class="crd-td">245,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Salé</strong></td><td class="crd-td">34,05, -6,8</td><td class="crd-td">1830-1970AD</td><td class="crd-td">10,8k</td><td class="crd-td">151,5k</td><td class="crd-td">235,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tanger</strong></td><td class="crd-td">35,77, -5,8</td><td class="crd-td">1830-1970AD</td><td class="crd-td">10,4k</td><td class="crd-td">145,1k</td><td class="crd-td">225,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">34,68, -1,91</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,2k</td><td class="crd-td">128,6k</td><td class="crd-td">199,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tétouan</strong></td><td class="crd-td">35,58, -5,37</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7k</td><td class="crd-td">98,7k</td><td class="crd-td">153,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">32,3, -9,24</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7k</td><td class="crd-td">97,6k</td><td class="crd-td">151,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Kénitra</strong></td><td class="crd-td">34,26, -6,58</td><td class="crd-td">1912-1970AD</td><td class="crd-td">-</td><td class="crd-td">93,1k</td><td class="crd-td">144,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">30,42, -9,6</td><td class="crd-td">1830-1970AD</td><td class="crd-td">4,7k</td><td class="crd-td">65,5k</td><td class="crd-td">101,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Khouribga</strong></td><td class="crd-td">32,88, -6,91</td><td class="crd-td">1923-1970AD</td><td class="crd-td">-</td><td class="crd-td">62,9k</td><td class="crd-td">97,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Mohammédia</strong></td><td class="crd-td">33,69, -7,38</td><td class="crd-td">1913-1970AD</td><td class="crd-td">-</td><td class="crd-td">52k</td><td class="crd-td">80,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Béni Mellal</strong></td><td class="crd-td">32,34, -6,35</td><td class="crd-td">1830-1970AD</td><td class="crd-td">3,4k</td><td class="crd-td">47k</td><td class="crd-td">73k (1970)</td></tr>
<tr><td class="crd-td"><strong>El Jadida</strong></td><td class="crd-td">33,26, -8,51</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,9k</td><td class="crd-td">40,3k</td><td class="crd-td">62,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">34,21, -4,01</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,7k</td><td class="crd-td">38,2k</td><td class="crd-td">59,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ksar El Kébir</strong></td><td class="crd-td">35, -5,9</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,6k</td><td class="crd-td">36,4k</td><td class="crd-td">56,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Settat</strong></td><td class="crd-td">33, -7,62</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,3k</td><td class="crd-td">32,2k</td><td class="crd-td">50,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">35,19, -6,16</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,3k</td><td class="crd-td">31,6k</td><td class="crd-td">49,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Nador</strong></td><td class="crd-td">35,17, -2,93</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,2k</td><td class="crd-td">30,7k</td><td class="crd-td">47,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Berkane</strong></td><td class="crd-td">34,92, -2,32</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">29,9k</td><td class="crd-td">46,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Khémisset</strong></td><td class="crd-td">33,82, -6,07</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">29,1k</td><td class="crd-td">45,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Oued Zem</strong></td><td class="crd-td">32,86, -6,57</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">29,1k</td><td class="crd-td">45,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sidi Kacem</strong></td><td class="crd-td">34,22, -5,71</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2k</td><td class="crd-td">27,6k</td><td class="crd-td">42,9k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 25 urban centres in French and Spanish Morocco (204 total catalogued Moroccan settlements).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:algeria-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">36,73, 3,09</td><td class="crd-td">1830-1970AD</td><td class="crd-td">60k</td><td class="crd-td">840,9k</td><td class="crd-td">1,31M (1970)</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">35,7, -0,64</td><td class="crd-td">1830-1970AD</td><td class="crd-td">19,4k</td><td class="crd-td">271,6k</td><td class="crd-td">421,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">36,37, 6,61</td><td class="crd-td">1830-1970AD</td><td class="crd-td">13,6k</td><td class="crd-td">190,2k</td><td class="crd-td">295,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">36,9, 7,77</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7k</td><td class="crd-td">98,6k</td><td class="crd-td">153,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">36,19, 5,41</td><td class="crd-td">1830-1970AD</td><td class="crd-td">5,1k</td><td class="crd-td">71,6k</td><td class="crd-td">111,2k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sidi bel Abbès</strong></td><td class="crd-td">35,19, -0,63</td><td class="crd-td">1843-1970AD</td><td class="crd-td">-</td><td class="crd-td">62,4k</td><td class="crd-td">96,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">34,88, -1,31</td><td class="crd-td">1830-1970AD</td><td class="crd-td">4,3k</td><td class="crd-td">60,4k</td><td class="crd-td">93,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Batna</strong></td><td class="crd-td">35,56, 6,17</td><td class="crd-td">1844-1970AD</td><td class="crd-td">-</td><td class="crd-td">56,7k</td><td class="crd-td">88,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">36,47, 2,83</td><td class="crd-td">1830-1970AD</td><td class="crd-td">4k</td><td class="crd-td">55,6k</td><td class="crd-td">86,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Skikda</strong></td><td class="crd-td">36,88, 6,91</td><td class="crd-td">1838-1970AD</td><td class="crd-td">-</td><td class="crd-td">50,5k</td><td class="crd-td">78,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">34,85, 5,73</td><td class="crd-td">1830-1970AD</td><td class="crd-td">3,6k</td><td class="crd-td">50k</td><td class="crd-td">77,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">35,93, 0,09</td><td class="crd-td">1830-1970AD</td><td class="crd-td">3,4k</td><td class="crd-td">47k</td><td class="crd-td">72,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Chlef</strong></td><td class="crd-td">36,17, 1,33</td><td class="crd-td">1843-1970AD</td><td class="crd-td">-</td><td class="crd-td">41,9k</td><td class="crd-td">65k (1970)</td></tr>
<tr><td class="crd-td"><strong>Béjaïa</strong></td><td class="crd-td">36,76, 5,08</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,9k</td><td class="crd-td">40,8k</td><td class="crd-td">63,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Béchar</strong></td><td class="crd-td">31,62, -2,22</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,9k</td><td class="crd-td">40,2k</td><td class="crd-td">62,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tébessa</strong></td><td class="crd-td">35,4, 8,12</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,4k</td><td class="crd-td">33,7k</td><td class="crd-td">52,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Médéa</strong></td><td class="crd-td">36,26, 2,75</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,3k</td><td class="crd-td">31,9k</td><td class="crd-td">49,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Guelma</strong></td><td class="crd-td">36,46, 7,43</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,2k</td><td class="crd-td">31k</td><td class="crd-td">48,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Saïda</strong></td><td class="crd-td">34,83, 0,15</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,2k</td><td class="crd-td">30,8k</td><td class="crd-td">47,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Relizane</strong></td><td class="crd-td">35,74, 0,56</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,2k</td><td class="crd-td">30,6k</td><td class="crd-td">47,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arreridj</strong></td><td class="crd-td">36,07, 4,76</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">30,1k</td><td class="crd-td">46,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">35,37, 1,32</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">29,4k</td><td class="crd-td">45,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Souk Ahras</strong></td><td class="crd-td">36,29, 7,95</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">28,8k</td><td class="crd-td">44,7k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ghardaïa</strong></td><td class="crd-td">32,49, 3,67</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2k</td><td class="crd-td">27,6k</td><td class="crd-td">42,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Mascara</strong></td><td class="crd-td">35,4, 0,14</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,9k</td><td class="crd-td">27,3k</td><td class="crd-td">42,3k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 25 urban centres in French Algeria across Tell Départements and Territoires du Sud (280 total settlements).</figcaption>
</figure>

In Tunisia (139 catalogued entries), metropolitan primacy centred on Tūnis (504,4k in 1970AD), backed by the olive-oil and phosphate port of Ṣafāqis (196k), the naval base of Banzart (79,9k), Qābis (78k) and the Sahel port of Sūsah (70,6k) [@Harras2024State; @Varley2019Defending]. In Libya (131 entries) and Western Sahara (one catalogued settlement, Meharrize, reaching 12k in 1975AD), coastal Tripolitanian and Cyrenaican ports—Ṭarābulus (532,8k), Banghāzī (325,5k), Miṣrātah (96,3k) and Az-Zāwiyah (67,3k)—dwarfed interior Saharan oases [@Jarad2022Role; @Lizak2019Libya; @Martin2018Western].

<figure class="crd-table-figure" id="tab:tunisia-top20">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">36,82, 10,17</td><td class="crd-td">1830-1970AD</td><td class="crd-td">94k</td><td class="crd-td">396,8k</td><td class="crd-td">504,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">34,74, 10,76</td><td class="crd-td">1830-1970AD</td><td class="crd-td">36,5k</td><td class="crd-td">154,2k</td><td class="crd-td">196k (1970)</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">37,27, 9,87</td><td class="crd-td">1830-1970AD</td><td class="crd-td">14,9k</td><td class="crd-td">62,8k</td><td class="crd-td">79,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Qābis</strong></td><td class="crd-td">33,88, 10,1</td><td class="crd-td">1830-1970AD</td><td class="crd-td">14,5k</td><td class="crd-td">61,4k</td><td class="crd-td">78k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">35,83, 10,64</td><td class="crd-td">1830-1970AD</td><td class="crd-td">13,2k</td><td class="crd-td">55,5k</td><td class="crd-td">70,6k (1970)</td></tr>
<tr><td class="crd-td"><strong>Aryānah</strong></td><td class="crd-td">36,86, 10,19</td><td class="crd-td">1830-1970AD</td><td class="crd-td">12,1k</td><td class="crd-td">51,1k</td><td class="crd-td">65k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Qayrawān</strong></td><td class="crd-td">35,68, 10,1</td><td class="crd-td">1830-1970AD</td><td class="crd-td">11,4k</td><td class="crd-td">48k</td><td class="crd-td">61,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">36,88, 10,25</td><td class="crd-td">1830-1970AD</td><td class="crd-td">11k</td><td class="crd-td">46,6k</td><td class="crd-td">59,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Bārdaw</strong></td><td class="crd-td">36,81, 10,13</td><td class="crd-td">1830-1970AD</td><td class="crd-td">10,3k</td><td class="crd-td">43,7k</td><td class="crd-td">55,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Murūj</strong></td><td class="crd-td">36,71, 10,21</td><td class="crd-td">1830-1970AD</td><td class="crd-td">10,2k</td><td class="crd-td">42,9k</td><td class="crd-td">54,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sīdī Ḥusayn</strong></td><td class="crd-td">36,76, 10,12</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,8k</td><td class="crd-td">41,5k</td><td class="crd-td">52,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>At-Taḍāmun</strong></td><td class="crd-td">36,83, 10,11</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,7k</td><td class="crd-td">41k</td><td class="crd-td">52,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Marsā</strong></td><td class="crd-td">36,88, 10,32</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,7k</td><td class="crd-td">40,7k</td><td class="crd-td">51,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Qafṣah</strong></td><td class="crd-td">34,42, 8,78</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,6k</td><td class="crd-td">40,5k</td><td class="crd-td">51,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Dawwār Hayshar</strong></td><td class="crd-td">36,83, 10,08</td><td class="crd-td">1830-1970AD</td><td class="crd-td">9,4k</td><td class="crd-td">39,5k</td><td class="crd-td">50,2k (1970)</td></tr>
<tr><td class="crd-td"><strong>Bin 'Arūs</strong></td><td class="crd-td">36,75, 10,22</td><td class="crd-td">1830-1970AD</td><td class="crd-td">8,2k</td><td class="crd-td">34,6k</td><td class="crd-td">44k (1970)</td></tr>
<tr><td class="crd-td"><strong>Manzil Bū Ruqaybah</strong></td><td class="crd-td">37,15, 9,79</td><td class="crd-td">1830-1970AD</td><td class="crd-td">8,1k</td><td class="crd-td">34,2k</td><td class="crd-td">43,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Jarbah Ḥawmat as-Sūq</strong></td><td class="crd-td">33,88, 10,86</td><td class="crd-td">1830-1970AD</td><td class="crd-td">8k</td><td class="crd-td">34k</td><td class="crd-td">43,2k (1970)</td></tr>
<tr><td class="crd-td"><strong>Jarjīs</strong></td><td class="crd-td">33,5, 11,11</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7,7k</td><td class="crd-td">32,6k</td><td class="crd-td">41,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaṣrayn</strong></td><td class="crd-td">35,17, 8,84</td><td class="crd-td">1830-1970AD</td><td class="crd-td">7,5k</td><td class="crd-td">31,7k</td><td class="crd-td">40,2k (1970)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 20 urban centres in the French Protectorate of Tunisia (139 total catalogued Tunisian settlements).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:libya-esh-top25">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement (ISO3)</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1830AD</th><th class="crd-th">1950AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ṭarābulus (LBY)</strong></td><td class="crd-td">32,89, 13,19</td><td class="crd-td">1830-1970AD</td><td class="crd-td">24,5k</td><td class="crd-td">343,2k</td><td class="crd-td">532,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Banghāzī (LBY)</strong></td><td class="crd-td">32,11, 20,07</td><td class="crd-td">1830-1970AD</td><td class="crd-td">15k</td><td class="crd-td">209,6k</td><td class="crd-td">325,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Miṣrātah (LBY)</strong></td><td class="crd-td">32,38, 15,09</td><td class="crd-td">1830-1970AD</td><td class="crd-td">4,4k</td><td class="crd-td">62k</td><td class="crd-td">96,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Az-Zāwiyah (LBY)</strong></td><td class="crd-td">32,75, 12,73</td><td class="crd-td">1830-1970AD</td><td class="crd-td">3,1k</td><td class="crd-td">43,4k</td><td class="crd-td">67,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Janzūr (LBY)</strong></td><td class="crd-td">32,82, 13,02</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,6k</td><td class="crd-td">36,8k</td><td class="crd-td">57,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Sabhā (LBY)</strong></td><td class="crd-td">27,04, 14,43</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,3k</td><td class="crd-td">32,7k</td><td class="crd-td">50,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Bayḍā' (LBY)</strong></td><td class="crd-td">32,76, 21,76</td><td class="crd-td">1840-1970AD</td><td class="crd-td">-</td><td class="crd-td">31,2k</td><td class="crd-td">48,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ajdābiyā (LBY)</strong></td><td class="crd-td">30,76, 20,23</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,2k</td><td class="crd-td">30,9k</td><td class="crd-td">48k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ṭubruq (LBY)</strong></td><td class="crd-td">32,09, 23,95</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">29,6k</td><td class="crd-td">45,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Darnah (LBY)</strong></td><td class="crd-td">32,77, 22,64</td><td class="crd-td">1830-1970AD</td><td class="crd-td">2,1k</td><td class="crd-td">28,9k</td><td class="crd-td">44,8k (1970)</td></tr>
<tr><td class="crd-td"><strong>Qaṣr Bin Ghashīr (LBY)</strong></td><td class="crd-td">32,68, 13,18</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,7k</td><td class="crd-td">23,8k</td><td class="crd-td">37k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Marj (LBY)</strong></td><td class="crd-td">32,49, 20,83</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,5k</td><td class="crd-td">20,6k</td><td class="crd-td">32k (1970)</td></tr>
<tr><td class="crd-td"><strong>Zlīṭan (LBY)</strong></td><td class="crd-td">32,47, 14,57</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,3k</td><td class="crd-td">18,9k</td><td class="crd-td">29,4k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-Khums (LBY)</strong></td><td class="crd-td">32,65, 14,26</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,3k</td><td class="crd-td">18,1k</td><td class="crd-td">28,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Msalātah (LBY)</strong></td><td class="crd-td">32,58, 14,04</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,3k</td><td class="crd-td">17,6k</td><td class="crd-td">27,3k (1970)</td></tr>
<tr><td class="crd-td"><strong>Surt (LBY)</strong></td><td class="crd-td">30,03, 16,85</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1,2k</td><td class="crd-td">16,7k</td><td class="crd-td">25,9k (1970)</td></tr>
<tr><td class="crd-td"><strong>Ṣabrātah (LBY)</strong></td><td class="crd-td">32,79, 12,49</td><td class="crd-td">1830-1970AD</td><td class="crd-td">1k</td><td class="crd-td">14,3k</td><td class="crd-td">22,2k (1970)</td></tr>
<tr><td class="crd-td"><strong>Al-'Azīziyah (LBY)</strong></td><td class="crd-td">32,53, 13,02</td><td class="crd-td">1830-1970AD</td><td class="crd-td">990</td><td class="crd-td">13,9k</td><td class="crd-td">21,5k (1970)</td></tr>
<tr><td class="crd-td"><strong>As-Sawānī (LBY)</strong></td><td class="crd-td">32,71, 13,07</td><td class="crd-td">1830-1970AD</td><td class="crd-td">970</td><td class="crd-td">13,6k</td><td class="crd-td">21,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Banī Walīd (LBY)</strong></td><td class="crd-td">31,75, 13,98</td><td class="crd-td">1830-1970AD</td><td class="crd-td">968</td><td class="crd-td">13,6k</td><td class="crd-td">21,1k (1970)</td></tr>
<tr><td class="crd-td"><strong>Meharrize (ESH)</strong></td><td class="crd-td">26,15, -11,07</td><td class="crd-td">1830-1975AD</td><td class="crd-td">2,1k</td><td class="crd-td">8,9k</td><td class="crd-td">12k (1975)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 20 urban centres in Italian Libya (131 total) and catalogued settlement in Spanish Sahara.</figcaption>
</figure>

## Ledger Exclusions and Deduplication Audit

Table \ref{tab:excluded-sample-cna} reports all non-suburban exclusions alongside representative merged suburban municipalities from the 67 excluded entries in the source ledger, illustrating how duplicate colonial spellings and contiguous satellites were consolidated [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:excluded-sample-cna">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">Libya</td><td class="crd-td">Outside temporal domain</td><td class="crd-td">Settlement foundation_year (1982) post-dates chapter domain [1830, 1975].</td></tr>
<tr><td class="crd-td"><strong>Asilah</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Souk el Arba</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Morocco settlement.</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>el Abadia</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Ammi Moussa</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>el Bayadh</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Ain Bessem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Sidi Khaled</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Duplicate spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Algeria settlement.</td></tr>
<tr><td class="crd-td"><strong>Khénifra</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Morocco.</td></tr>
<tr><td class="crd-td"><strong>Al-'Ayn</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Dār Sha'bān</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Sāqiyat ad-Dā'ir</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Ḥammām Sūsah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Miliana</strong></td><td class="crd-td">Algeria</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Algeria.</td></tr>
<tr><td class="crd-td"><strong>Al-Qal'at aṣ-Ṣaghīrah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Ad-Dandān</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Jarbah Ajīm</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Al-Murnāqiyah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Zāwiyat Sūsah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Tunisia.</td></tr>
<tr><td class="crd-td"><strong>Medina of Essaouira</strong></td><td class="crd-td">Morocco</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Morocco.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> All duplicate-alias and domain-bound exclusions plus representative merged suburbs from the 67 excluded ledger candidates.</figcaption>
</figure>

# Limitations

Three constraints govern the settlement figures presented here. First, pre-protectorate 1830AD estimates for Moroccan and Libyan inland towns carry broader uncertainty bounds than post-1886AD French Algerian or post-1921AD Tunisian and Moroccan census enumerations [@Aidi2023Moulay; @Harras2024State]. Second, decennial municipal boundaries expanded periodically around Algiers, Casablanca, Tunis and Tripoli as formerly distinct villages were annexed into metropolitan communes; where suburban satellites lay within 2 km of the core, the ledger merges them consistently across time to preserve metropolitan continuity [@Liauzu1986Soci; @Bosworth2007Historic]. Third, colonial Saharan garrisons and nomadic camps in Spanish Sahara and Fezzan exhibited high seasonal mobility prior to 1960AD, leaving Western Sahara represented by a single continuously tracked settlement core at Meharrize [@Besenyo2014Western; @Jarad2022Role].

# Conclusion

Across 755 catalogued settlements spanning 1830AD to 1975AD, the urban network of Colonial North Africa shifted decisively from interior caravan capitals toward Atlantic and Mediterranean port metropolises. Total catalogued urban population multiplied more than eightfold from 2,11M in 1830AD to 17,59M in 1970AD, paced by Casablanca, El Djazaïr, Ṭarābulus, Tūnis, Oran and Rabat alongside colonial port, garrison and mining foundations such as Skikda, Sidi bel Abbès, Batna, Kénitra and Khouribga [@Bosworth2007Historic; @Clark2024Rural; @Palard2020Religieuse]. Disaggregating municipal totals cleanly from rural subadministrative polygons preserves both the sharp coastal urban hierarchy and the sparsely settled desert interior across all five territories.

# Appendix

Table \ref{tab:country-summary-cna} sums catalogued settlement counts and aggregate urban populations across the five North African jurisdictions at five benchmark horizons from 1830AD to 1970AD.

<figure class="crd-table-figure" id="tab:country-summary-cna">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">1830AD</th><th class="crd-th">1880AD</th><th class="crd-th">1930AD</th><th class="crd-th">1970AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">280</td><td class="crd-td">708,8k</td><td class="crd-td">1,25M</td><td class="crd-td">2,36M</td><td class="crd-td">5,71M</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">204</td><td class="crd-td">425k</td><td class="crd-td">1,01M</td><td class="crd-td">2,74M</td><td class="crd-td">6,6M</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">139</td><td class="crd-td">787,7k</td><td class="crd-td">1,28M</td><td class="crd-td">2M</td><td class="crd-td">3,24M</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">131</td><td class="crd-td">189,1k</td><td class="crd-td">383,9k</td><td class="crd-td">846,6k</td><td class="crd-td">2,04M</td></tr>
<tr><td class="crd-td"><strong>Western Sahara</strong></td><td class="crd-td">1</td><td class="crd-td">2,1k</td><td class="crd-td">3,8k</td><td class="crd-td">7k</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">755</td><td class="crd-td">2,11M</td><td class="crd-td">3,93M</td><td class="crd-td">7,95M</td><td class="crd-td">17,59M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Catalogued settlement counts and summed urban populations by territory across Colonial North Africa, 1830AD to 1970AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::
