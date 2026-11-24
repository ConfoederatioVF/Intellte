---
title: "Early Modern Sahel and Sudan (1500-1898)"
subtitle: "Settlement Gazetteer: 398 Cities, Capitals and Towns (1500-1898)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_modern_sahel_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 398 individually assessed settlements across 21 modern countries and ten historical sub-regions from Mauritania to Sudan and Ethiopia between 1500AD and 1898AD."
hero_label: "fig:hero-settlements-sahel"

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

This gazetteer compiles geographic coordinates and dated population series for 398 individually assessed settlements across the Sahel and Sudan between 1500AD and 1898AD, spanning 1.093 historical observations across 21 modern countries. Screened from 448 candidate walled capitals, caravan oases, river ports and colonial communes (50 duplicate orthographies and historical aliases excluded), the retained entries partition deterministically across ten historical sub-regions from Mauritania, Senegambia and the Niger Bend through Hausaland and Lake Chad to Darfur, the Turco-Egyptian Nile and Equatoria. Active interpolated sites rise from 54 settlements in 1500AD to 177 in 1700AD, 235 in 1780AD and 208 in 1860AD before consolidating at 128 in 1890AD, tracing urban trajectories from imperial Gao (68,6k), Birnin Gazargamu (62,4k), Gondar (62k), Niani (60k) and Timbuktu (58,4k) to nineteenth-century Kano (58,4k), Khartoum (60k), Kukawa (60k), Nioro du Sahel (95k) and Mahdist Omdurman (148k).



# Background

Early modern Sahelian and Sudanic urbanism operated across a vast savanna-and-steppe belt uniting trans-Saharan caravan terminals, riverine ports and fortified agrarian capitals [@Caillie1830TravelsThrough; @MacDonald2012WalledSegou; @Crawford1951FungSennar]. Along the western Saharan and Senegambian margin, oasis towns such as Chinguetti and Tichitt exchanged desert salt for gold and millet from Futa Toro, Segou and the Inland Niger Delta [@Chastanet1992SurvivalStrategies; @Houdoy1881SoudanFrancais]. Across the central and eastern Sudan, walled manufacturing capitals in Hausaland, fired-brick elite centres in Kanem-Bornu and caravan seats across Wadai, Darfur and Sennar sustained dense urban populations shaped by nineteenth-century Islamic reform movements, Turco-Egyptian expansion and Mahdist state formation [@Last1967SokotoCaliphate; @Magnavita2025NewLuminescence; @Ofahey1980StateDarFur; @Spaulding1985HeroicAge].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate settlements were gathered from French Senegalese communal censuses, British Gambian and Sierra Leonean colonial returns, nineteenth-century traveller surveys [@Lyon1821NarrativeTravels; @Baikie1862NotesJourney], Arabic chronicles and archaeological wall-circuit mappings [@MacDonald2012WalledSegou; @Suleiman2007BirninZaria]. Out of 448 candidates situated within the 9.350.985 km² domain bounded by geoBoundaries polygons [@Runfola2020GeoBoundaries], 50 duplicate orthographies and historical aliases were merged, leaving 398 city-proper settlements across 21 countries. Each settlement maps cleanly to one of the ten historical sub-regions defined in the companion study.

## Population Interpolation and Table Layout

Every entry records city-proper populations anchored to attested historical dates without synthetic extrapolations or flat caps [@Hamza2004DorayiKano; @Aouatef2026PoliticalStructures]. Tables 1 to 10 present linearly interpolated populations at five benchmark years (1500AD, 1700AD, 1780AD, 1860AD and 1890AD) alongside each site's observed peak population and peak date, marking years outside a settlement's recorded chronological span with a hyphen (-).

# Testing and Validation

Across 397 spatially deduplicated city peaks (merging two co-located historical entries at Freetown), ordinary least-squares rank-size regression across the upper 180 settlements yields a Pareto slope of $q = 0,77$ ($R^2 = 0,98$; Figure \ref{fig:settlements-rank}), matching a multi-polar belt of regional capitals across West, Central and Nilotic Sudan rather than single-metropolis primacy [@Azarya1980TradersAnd; @Smaldone1962WarfareThe]. Cross-checking chronological bounds ensures alignment with documented foundation and abandonment dates, from post-1821AD Khartoum and post-1881AD Omdurman back to sixteenth-century Songhai and Funj capitals [@Crawford1951FungSennar; @Spaulding1985HeroicAge].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-sahel-sudan-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling across 397 spatially deduplicated settlements (top-180 OLS slope q = 0,77, R² = 0,98) and mean sub-regional density in 1890AD.</figcaption>
</figure>

# Results

## Trarza, Brakna and Adrar Emirates

Table \ref{tab:zone1-sites} compiles 39 settlements across Mauritania, northern and central Senegal and western Gambia, led by Saint-Louis (20,2k in 1891AD), Bakel (10,9k in 1863AD), Dakar (8,74k in 1891AD), Tichitt (8,35k in 1750AD), Rufisque (8,09k in 1891AD) and Chinguetti (6,85k in 1650AD) [@Chastanet1992SurvivalStrategies; @Houdoy1881SoudanFrancais].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">SEN: 16,03, -16,49</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">5,3k</td><td class="crd-td">15,2k</td><td class="crd-td">19,9k</td><td class="crd-td">20,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Bakel</strong></td><td class="crd-td">SEN: 14,91, -12,46</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">1,3k</td><td class="crd-td">3,7k</td><td class="crd-td">10,9k (1863AD)</td></tr>
<tr><td class="crd-td"><strong>Dakar</strong></td><td class="crd-td">SEN: 14,77, -17,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">8,7k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Tichitt</strong></td><td class="crd-td">MRT: 18,44, -9,49</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">7,7k</td><td class="crd-td">5,6k</td><td class="crd-td">4,1k</td><td class="crd-td">8,3k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Rufisque</strong></td><td class="crd-td">SEN: 14,72, -17,27</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">8k</td><td class="crd-td">8,1k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Chinguetti</strong></td><td class="crd-td">MRT: 20,46, -12,36</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">5,6k</td><td class="crd-td">3,6k</td><td class="crd-td">3,2k</td><td class="crd-td">6,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Banjul</strong></td><td class="crd-td">GMB: 13,45, -16,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td><td class="crd-td">4,9k</td><td class="crd-td">5,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Kaédi</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,7k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td><td class="crd-td">5,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Diakhao</strong></td><td class="crd-td">SEN: 14,46, -16,29</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td><td class="crd-td">4,6k</td><td class="crd-td">3,7k</td><td class="crd-td">5,7k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaye</strong></td><td class="crd-td">SEN: 14,78, -16,48</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k</td><td class="crd-td">4k</td><td class="crd-td">3,2k</td><td class="crd-td">5,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Ouadane</strong></td><td class="crd-td">MRT: 20,93, -11,62</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">2,6k</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td><td class="crd-td">5,3k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Mboul</strong></td><td class="crd-td">SEN: 15,32, -16,65</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Linguère</strong></td><td class="crd-td">SEN: 15,4, -15,12</td><td class="crd-td">5,1k</td><td class="crd-td">3,5k</td><td class="crd-td">3,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Podor</strong></td><td class="crd-td">SEN: 16,65, -14,96</td><td class="crd-td">4,9k</td><td class="crd-td">4,1k</td><td class="crd-td">3,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tidjikdja</strong></td><td class="crd-td">MRT: 18,56, -11,42</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,6k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Nioro du Rip</strong></td><td class="crd-td">SEN: 13,75, -15,77</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Boghé</strong></td><td class="crd-td">MRT: 16,6, -14,26</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Joal - Fadiouth</strong></td><td class="crd-td">SEN: 14,18, -16,85</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Louga</strong></td><td class="crd-td">SEN: 15,62, -16,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Atar</strong></td><td class="crd-td">MRT: 20,5, -13,05</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Mbour</strong></td><td class="crd-td">SEN: 14,44, -16,97</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,3k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Matam</strong></td><td class="crd-td">SEN: 15,65, -13,26</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Diourbel</strong></td><td class="crd-td">SEN: 14,67, -16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fatick</strong></td><td class="crd-td">SEN: 14,34, -16,42</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Sélibabi</strong></td><td class="crd-td">MRT: 15,16, -12,17</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Boutilimit</strong></td><td class="crd-td">MRT: 17,55, -14,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Thiès</strong></td><td class="crd-td">SEN: 14,78, -16,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rosso</strong></td><td class="crd-td">MRT: 16,52, -15,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Brikama</strong></td><td class="crd-td">GMB: 13,27, -16,65</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kaffrine</strong></td><td class="crd-td">SEN: 14,1, -15,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kiffa</strong></td><td class="crd-td">MRT: 16,62, -11,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Oussouye</strong></td><td class="crd-td">SEN: 12,48, -16,55</td><td class="crd-td">895</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Janjanbureh</strong></td><td class="crd-td">GMB: 13,54, -14,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Kaur</strong></td><td class="crd-td">GMB: 13,7, -15,32</td><td class="crd-td">825</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1.000</td><td class="crd-td">966</td><td class="crd-td">1,1k (1730AD)</td></tr>
<tr><td class="crd-td"><strong>Akjoujt</strong></td><td class="crd-td">MRT: 19,74, -14,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Mederdra</strong></td><td class="crd-td">MRT: 16,92, -15,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">938</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Tamchekett</strong></td><td class="crd-td">MRT: 17,24, -10,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">870 (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Aleg</strong></td><td class="crd-td">MRT: 17,05, -13,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">760 (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Trarza, Brakna and Adrar Emirates from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Futa Toro, Segou Bamana and Toucouleur

Table \ref{tab:zone2-sites} lists 67 settlements across western and central Mali, Guinea, Guinea-Bissau, Sierra Leone, southern Senegal, eastern Gambia, south-eastern Mauritania and northern Ivory Coast, headed by Nioro du Sahel (95k wartime congregation in 1892AD), Niani (60k in 1550AD), Tombouctou (58,4k in 1550AD), Hamdallahi (42,6k in 1855AD), Ségou (40k in 1858AD), Djenné (32,4k in 1550AD) and Freetown (30k in 1891AD) [@MacDonald2012WalledSegou; @Azarya1980TradersAnd; @Ill1999MandeAnd; @Bellagamba2004EntrustmentAnd].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nioro du Sahel</strong></td><td class="crd-td">MLI: 15,23, -9,59</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">11,6k</td><td class="crd-td">8,5k</td><td class="crd-td">95k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Niani</strong></td><td class="crd-td">GIN: 11,38, -8,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Tombouctou</strong></td><td class="crd-td">MLI: 16,77, -3</td><td class="crd-td">-</td><td class="crd-td">23,2k</td><td class="crd-td">16,8k</td><td class="crd-td">12,4k</td><td class="crd-td">9,1k</td><td class="crd-td">58,4k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Hamdallahi</strong></td><td class="crd-td">MLI: 14,32, -4,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,9k</td><td class="crd-td">-</td><td class="crd-td">42,6k (1855AD)</td></tr>
<tr><td class="crd-td"><strong>Ségou</strong></td><td class="crd-td">MLI: 13,42, -6,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,1k</td><td class="crd-td">38,9k</td><td class="crd-td">18,4k</td><td class="crd-td">40k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Djenné</strong></td><td class="crd-td">MLI: 13,9, -4,55</td><td class="crd-td">-</td><td class="crd-td">19k</td><td class="crd-td">14,8k</td><td class="crd-td">8,8k</td><td class="crd-td">8,2k</td><td class="crd-td">32,4k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,35, -13,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">29,2k</td><td class="crd-td">30k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Sansanding</strong></td><td class="crd-td">MLI: 13,72, -6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">17,8k</td><td class="crd-td">10,3k</td><td class="crd-td">18,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala</strong></td><td class="crd-td">GNB: 12,32, -14,17</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">12,1k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">13,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">7,6k</td><td class="crd-td">10,3k</td><td class="crd-td">10,4k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Timbo</strong></td><td class="crd-td">GIN: 10,63, -11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">7,8k</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k (1818AD)</td></tr>
<tr><td class="crd-td"><strong>Falaba</strong></td><td class="crd-td">SLE: 9,86, -11,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">8k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Dinguiraye</strong></td><td class="crd-td">GIN: 11,29, -10,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,6k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Labé</strong></td><td class="crd-td">GIN: 11,33, -12,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">7,4k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Bissandougou</strong></td><td class="crd-td">GIN: 10,17, -9,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,8k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamina</strong></td><td class="crd-td">MLI: 13,32, -6,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Bissau</strong></td><td class="crd-td">GNB: 11,9, -15,59</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">3,2k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Kayes</strong></td><td class="crd-td">MLI: 14,44, -11,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti</strong></td><td class="crd-td">MLI: 14,48, -4,18</td><td class="crd-td">2,1k</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">5,4k</td><td class="crd-td">5,5k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,6k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Port Loko</strong></td><td class="crd-td">SLE: 8,77, -12,78</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bamako</strong></td><td class="crd-td">MLI: 12,64, -8</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k</td><td class="crd-td">4,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kangaba</strong></td><td class="crd-td">MLI: 11,93, -8,42</td><td class="crd-td">4,8k</td><td class="crd-td">3,6k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Beyla</strong></td><td class="crd-td">GIN: 8,69, -8,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Odienné</strong></td><td class="crd-td">CIV: 9,5, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Sofara</strong></td><td class="crd-td">MLI: 14,02, -4,23</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Néma</strong></td><td class="crd-td">MRT: 16,62, -7,27</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kolokani</strong></td><td class="crd-td">MLI: 13,57, -8,03</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kouroussa</strong></td><td class="crd-td">GIN: 10,65, -9,89</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Bumban</strong></td><td class="crd-td">SLE: 9,12, -11,88</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Boké</strong></td><td class="crd-td">GIN: 10,94, -14,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Diré</strong></td><td class="crd-td">MLI: 16,26, -3,4</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Kita</strong></td><td class="crd-td">MLI: 13,05, -9,49</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Ton Masala</strong></td><td class="crd-td">MLI: 13,45, -6,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1760AD)</td></tr>
<tr><td class="crd-td"><strong>Ziguinchor</strong></td><td class="crd-td">SEN: 12,55, -16,27</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Geba</strong></td><td class="crd-td">GNB: 12,2, -14,85</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bignona</strong></td><td class="crd-td">SEN: 12,81, -16,23</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Musaiya</strong></td><td class="crd-td">SLE: 9,75, -11,56</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,6k</td><td class="crd-td">2,2k</td><td class="crd-td">3k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Koutiala</strong></td><td class="crd-td">MLI: 12,38, -5,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Faranah</strong></td><td class="crd-td">GIN: 10,05, -10,73</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Bolama</strong></td><td class="crd-td">GNB: 11,58, -15,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Kambia</strong></td><td class="crd-td">SLE: 9,07, -12,91</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1896AD)</td></tr>
<tr><td class="crd-td"><strong>Cacheu</strong></td><td class="crd-td">GNB: 12,27, -16,17</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1640AD)</td></tr>
<tr><td class="crd-td"><strong>Bougouni</strong></td><td class="crd-td">MLI: 11,43, -7,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Sédhiou</strong></td><td class="crd-td">SEN: 12,7, -15,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Koulikoro</strong></td><td class="crd-td">MLI: 12,88, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bafoulabe</strong></td><td class="crd-td">MLI: 13,81, -10,83</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Kissidougou</strong></td><td class="crd-td">GIN: 9,2, -10,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Farim</strong></td><td class="crd-td">GNB: 12,49, -15,23</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Tambacounda</strong></td><td class="crd-td">SEN: 13,76, -13,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Sonkunda</strong></td><td class="crd-td">GMB: 13,4, -13,9</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td><td class="crd-td">1k</td><td class="crd-td">807</td><td class="crd-td">1,9k (1730AD)</td></tr>
<tr><td class="crd-td"><strong>Macenta</strong></td><td class="crd-td">GIN: 8,53, -9,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Conakry</strong></td><td class="crd-td">GIN: 9,7, -13,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Makeni</strong></td><td class="crd-td">SLE: 8,88, -12,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kindia</strong></td><td class="crd-td">GIN: 10,04, -12,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kolda</strong></td><td class="crd-td">SEN: 12,9, -14,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Yelimane</strong></td><td class="crd-td">MLI: 15,13, -10,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Buba</strong></td><td class="crd-td">GNB: 11,6, -14,98</td><td class="crd-td">945</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Kabala</strong></td><td class="crd-td">SLE: 9,58, -11,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1896AD)</td></tr>
<tr><td class="crd-td"><strong>Kédougou</strong></td><td class="crd-td">SEN: 12,56, -12,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Kéniéba</strong></td><td class="crd-td">MLI: 12,86, -11,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Basse Santa Su</strong></td><td class="crd-td">GMB: 13,31, -14,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Koundara</strong></td><td class="crd-td">GIN: 12,49, -13,3</td><td class="crd-td">785</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Dabola</strong></td><td class="crd-td">GIN: 10,74, -11,11</td><td class="crd-td">865</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,48, -13,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1792AD)</td></tr>
<tr><td class="crd-td"><strong>Tembedra</strong></td><td class="crd-td">MRT: 16,24, -8,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">845</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Catió</strong></td><td class="crd-td">GNB: 11,28, -15,25</td><td class="crd-td">-</td><td class="crd-td">765</td><td class="crd-td">861</td><td class="crd-td">957</td><td class="crd-td">-</td><td class="crd-td">985 (1883AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Futa Toro, Segou Bamana and Toucouleur from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Pashalik of Timbuktu, Massina and Niger Bend

Table \ref{tab:zone3-sites} records 20 settlements across the Niger Bend, Dogon plateau, Adrar des Ifoghas and eastern Mauritania, led by Gao (68,6k in 1585AD), Bandiagara (6,42k in 1893AD), Dia (6,42k in 1650AD), Ténenkou (4,64k in 1850AD), Goundam (4,62k in 1894AD) and Oualata (4,19k in 1600AD) [@Caillie1830TravelsThrough; @Dijk2000DroughtAnd].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gao</strong></td><td class="crd-td">MLI: 16,26, -0,04</td><td class="crd-td">54,6k</td><td class="crd-td">15,5k</td><td class="crd-td">9,7k</td><td class="crd-td">5,3k</td><td class="crd-td">4,8k</td><td class="crd-td">68,6k (1585AD)</td></tr>
<tr><td class="crd-td"><strong>Bandiagara</strong></td><td class="crd-td">MLI: 14,36, -3,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Dia</strong></td><td class="crd-td">MLI: 14,38, -4,9</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Ténenkou</strong></td><td class="crd-td">MLI: 14,46, -4,92</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Goundam</strong></td><td class="crd-td">MLI: 16,41, -3,66</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Kukiya</strong></td><td class="crd-td">MLI: 15,35, 0,75</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Oualata</strong></td><td class="crd-td">MRT: 17,3, -7,02</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">2,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td><td class="crd-td">4,2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Hombori</strong></td><td class="crd-td">MLI: 15,29, -1,7</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Douentza</strong></td><td class="crd-td">MLI: 15,01, -2,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Bamba</strong></td><td class="crd-td">MLI: 17,03, -1,4</td><td class="crd-td">2,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Niafunke</strong></td><td class="crd-td">MLI: 15,93, -3,99</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Bourem</strong></td><td class="crd-td">MLI: 16,95, -0,34</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Ansongo</strong></td><td class="crd-td">MLI: 15,66, 0,5</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Gourma-Rharous</strong></td><td class="crd-td">MLI: 16,88, -1,92</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Tessalit</strong></td><td class="crd-td">MLI: 20,2, 1,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ras el Ma</strong></td><td class="crd-td">MLI: 16,64, -4,4</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Araouane</strong></td><td class="crd-td">MLI: 18,91, -3,53</td><td class="crd-td">-</td><td class="crd-td">927</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1828AD)</td></tr>
<tr><td class="crd-td"><strong>Taghaza</strong></td><td class="crd-td">MLI: 23,62, -4,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">960 (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Kidal</strong></td><td class="crd-td">MLI: 18,44, 1,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">920 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Taoudenni</strong></td><td class="crd-td">MLI: 22,68, -3,98</td><td class="crd-td">-</td><td class="crd-td">841</td><td class="crd-td">778</td><td class="crd-td">786</td><td class="crd-td">-</td><td class="crd-td">920 (1600AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Pashalik of Timbuktu, Massina and Niger Bend from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Mossi Kingdoms, Kong and Wassoulou

Table \ref{tab:zone4-sites} documents 37 settlements across Burkina Faso, northern Ghana, northern Togo, northern Benin, south-eastern Mali and western Niger, topped by Sikasso (16,8k in 1898AD), Ouagadougou (14,8k in 1888AD), Tillabéri (8,64k in 1854AD), Bobo-Dioulasso (8,42k in 1888AD), Yendi (8,42k in 1850AD) and Ouahigouya (8,24k in 1895AD) [@Azarya1980TradersAnd].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sikasso</strong></td><td class="crd-td">MLI: 11,31, -5,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,7k</td><td class="crd-td">16,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Ouagadougou</strong></td><td class="crd-td">BFA: 12,36, -1,5</td><td class="crd-td">7,8k</td><td class="crd-td">11,4k</td><td class="crd-td">13,2k</td><td class="crd-td">14,4k</td><td class="crd-td">14,2k</td><td class="crd-td">14,8k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Tillabéri</strong></td><td class="crd-td">NER: 14,21, 1,46</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Bobo-Dioulasso</strong></td><td class="crd-td">BFA: 11,2, -4,29</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">8,1k</td><td class="crd-td">8,2k</td><td class="crd-td">8,4k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi</strong></td><td class="crd-td">GHA: 9,46, -0,01</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">7,7k</td><td class="crd-td">7,5k</td><td class="crd-td">4,8k</td><td class="crd-td">8,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ouahigouya</strong></td><td class="crd-td">BFA: 13,56, -2,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">8,2k</td><td class="crd-td">8,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Say</strong></td><td class="crd-td">NER: 13,1, 2,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">6,5k</td><td class="crd-td">8k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi Dabari</strong></td><td class="crd-td">GHA: 9,75, -0,83</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Tenkodogo</strong></td><td class="crd-td">BFA: 11,8, -0,38</td><td class="crd-td">4,9k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>San</strong></td><td class="crd-td">MLI: 13,29, -4,9</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6k</td><td class="crd-td">6k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Sansanné-Mango</strong></td><td class="crd-td">TGO: 10,35, 0,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Djougou</strong></td><td class="crd-td">BEN: 9,7, 1,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,3k</td><td class="crd-td">5,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Wa</strong></td><td class="crd-td">GHA: 10,04, -2,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">5,1k</td><td class="crd-td">4,7k</td><td class="crd-td">5,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Yako</strong></td><td class="crd-td">BFA: 12,96, -2,26</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Fada N'Gourma</strong></td><td class="crd-td">BFA: 12,06, 0,37</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,5k</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaga</strong></td><td class="crd-td">GHA: 10,53, -0,44</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Daboya</strong></td><td class="crd-td">GHA: 9,53, -1,39</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kaya</strong></td><td class="crd-td">BFA: 13,08, -1,09</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Gourcy</strong></td><td class="crd-td">BFA: 13,2, -2,35</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">3,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">4,1k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Koudougou</strong></td><td class="crd-td">BFA: 12,24, -2,35</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Parakou</strong></td><td class="crd-td">BEN: 9,36, 2,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Dori</strong></td><td class="crd-td">BFA: 14,03, -0,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">3,8k</td><td class="crd-td">4k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Manga</strong></td><td class="crd-td">BFA: 11,68, -1,08</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Djibo</strong></td><td class="crd-td">BFA: 14,1, -1,63</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Téra</strong></td><td class="crd-td">NER: 14, 0,75</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Boromo</strong></td><td class="crd-td">BFA: 11,76, -2,94</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Koupéla</strong></td><td class="crd-td">BFA: 12,17, -0,36</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Léo</strong></td><td class="crd-td">BFA: 11,1, -2,09</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k (1896AD)</td></tr>
<tr><td class="crd-td"><strong>Bawku</strong></td><td class="crd-td">GHA: 11,05, -0,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Ménaka</strong></td><td class="crd-td">MLI: 15,91, 2,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Navrongo</strong></td><td class="crd-td">GHA: 10,88, -1,09</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Dédougou</strong></td><td class="crd-td">BFA: 12,47, -3,46</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Natitingou</strong></td><td class="crd-td">BEN: 10,28, 1,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Dapaong</strong></td><td class="crd-td">TGO: 10,86, 0,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2k (1896AD)</td></tr>
<tr><td class="crd-td"><strong>Tamale</strong></td><td class="crd-td">GHA: 9,44, -0,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bolgatanga</strong></td><td class="crd-td">GHA: 10,84, -0,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ayorou Haoussa</strong></td><td class="crd-td">NER: 14,73, 0,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1854AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Mossi Kingdoms, Kong and Wassoulou from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Sokoto Caliphate and Adamawa Emirates

Table \ref{tab:zone5-sites} catalogues 56 settlements across northern Nigeria, central Niger, northern Benin and southern Adamawa in Cameroon, led by Kano (58,4k in 1885AD), Katsina (46,2k in 1780AD), Zaria (42k in 1826AD), Sokoto (34,2k in 1824AD), Bauchi (30k in 1866AD), Alkalawa (24,8k in 1795AD) and Yola (20k in 1879AD) [@Last1967SokotoCaliphate; @Smaldone1962WarfareThe; @Hamza2004DorayiKano; @Suleiman2007BirninZaria; @Baikie1862NotesJourney].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">NGA: 11,98, 8,53</td><td class="crd-td">-</td><td class="crd-td">44,7k</td><td class="crd-td">39,6k</td><td class="crd-td">30k</td><td class="crd-td">-</td><td class="crd-td">58,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Katsina</strong></td><td class="crd-td">NGA: 12,98, 7,61</td><td class="crd-td">-</td><td class="crd-td">37,7k</td><td class="crd-td">46,2k</td><td class="crd-td">8,7k</td><td class="crd-td">12,8k</td><td class="crd-td">46,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Zaria</strong></td><td class="crd-td">NGA: 11,11, 7,72</td><td class="crd-td">-</td><td class="crd-td">29,8k</td><td class="crd-td">36,2k</td><td class="crd-td">36,7k</td><td class="crd-td">-</td><td class="crd-td">42k (1826AD)</td></tr>
<tr><td class="crd-td"><strong>Sokoto</strong></td><td class="crd-td">NGA: 13,03, 5,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,8k</td><td class="crd-td">26,4k</td><td class="crd-td">34,2k (1824AD)</td></tr>
<tr><td class="crd-td"><strong>Bauchi</strong></td><td class="crd-td">NGA: 10,31, 9,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,4k</td><td class="crd-td">18,4k</td><td class="crd-td">30k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Alkalawa</strong></td><td class="crd-td">NGA: 13,57, 6,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Yola</strong></td><td class="crd-td">NGA: 9,21, 12,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">18,7k</td><td class="crd-td">20k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Zamfara</strong></td><td class="crd-td">NGA: 12,72, 6,53</td><td class="crd-td">12,8k</td><td class="crd-td">18,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Surame</strong></td><td class="crd-td">NGA: 13,08, 4,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,4k (1620AD)</td></tr>
<tr><td class="crd-td"><strong>Zinder</strong></td><td class="crd-td">NER: 13,81, 8,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">12,3k</td><td class="crd-td">18,1k</td><td class="crd-td">18,4k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Yauri</strong></td><td class="crd-td">NGA: 10,84, 4,75</td><td class="crd-td">5,8k</td><td class="crd-td">11,1k</td><td class="crd-td">14,1k</td><td class="crd-td">12,5k</td><td class="crd-td">-</td><td class="crd-td">16,8k (1830AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Kebbi</strong></td><td class="crd-td">NGA: 12,44, 4,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,4k (1805AD)</td></tr>
<tr><td class="crd-td"><strong>Gwandu</strong></td><td class="crd-td">NGA: 12,5, 4,64</td><td class="crd-td">3,4k</td><td class="crd-td">8,7k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Lalle</strong></td><td class="crd-td">NER: 13,95, 6,65</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k (1730AD)</td></tr>
<tr><td class="crd-td"><strong>Agadez</strong></td><td class="crd-td">NER: 16,97, 7,99</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Jega</strong></td><td class="crd-td">NGA: 12,23, 4,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,7k</td><td class="crd-td">13,4k</td><td class="crd-td">13,4k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Wurno</strong></td><td class="crd-td">NGA: 13,28, 5,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">11,2k</td><td class="crd-td">12,7k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Argungu</strong></td><td class="crd-td">NGA: 12,74, 4,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Hadejia</strong></td><td class="crd-td">NGA: 12,46, 10,04</td><td class="crd-td">6,2k</td><td class="crd-td">8k</td><td class="crd-td">9,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Tessaoua</strong></td><td class="crd-td">NER: 13,75, 7,99</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">8,9k</td><td class="crd-td">11,2k</td><td class="crd-td">8,4k</td><td class="crd-td">12k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Kontagora</strong></td><td class="crd-td">NGA: 10,4, 5,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Daura</strong></td><td class="crd-td">NGA: 13,04, 8,32</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">9,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Maradi</strong></td><td class="crd-td">NER: 13,51, 7,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Gombe</strong></td><td class="crd-td">NGA: 10,29, 11,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Gumel</strong></td><td class="crd-td">NGA: 12,63, 9,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Azare</strong></td><td class="crd-td">NGA: 11,67, 10,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Nikki</strong></td><td class="crd-td">BEN: 9,94, 3,21</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">7,8k</td><td class="crd-td">8,1k</td><td class="crd-td">6,6k</td><td class="crd-td">8,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nguru</strong></td><td class="crd-td">NGA: 12,88, 10,45</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">NGA: 11,86, 9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Banyo</strong></td><td class="crd-td">CMR: 6,75, 11,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,9k</td><td class="crd-td">7,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Karaye</strong></td><td class="crd-td">NGA: 11,78, 8,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Gusau</strong></td><td class="crd-td">NGA: 12,18, 6,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Rano</strong></td><td class="crd-td">NGA: 11,56, 8,58</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Turunku</strong></td><td class="crd-td">NGA: 10,8, 7,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1536AD)</td></tr>
<tr><td class="crd-td"><strong>Kazaure</strong></td><td class="crd-td">NGA: 12,64, 8,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Birni N'Konni</strong></td><td class="crd-td">NER: 13,79, 5,25</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Kafanchan</strong></td><td class="crd-td">NGA: 9,58, 8,29</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Dutse</strong></td><td class="crd-td">NGA: 11,7, 9,35</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Tahoua</strong></td><td class="crd-td">NER: 14,88, 5,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1853AD)</td></tr>
<tr><td class="crd-td"><strong>Ingawa</strong></td><td class="crd-td">NGA: 12,64, 8,05</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Kudu</strong></td><td class="crd-td">NGA: 11,45, 9,48</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Gouré</strong></td><td class="crd-td">NER: 13,98, 10,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Zuru</strong></td><td class="crd-td">NGA: 11,43, 5,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,5k</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Dosso</strong></td><td class="crd-td">NER: 13,04, 3,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">4,6k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Potiskum</strong></td><td class="crd-td">NGA: 11,71, 11,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Biu</strong></td><td class="crd-td">NGA: 10,61, 12,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Assode</strong></td><td class="crd-td">NER: 18,45, 8,6</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Kandi</strong></td><td class="crd-td">BEN: 11,13, 2,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Pankshin</strong></td><td class="crd-td">NGA: 9,34, 9,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Geidam</strong></td><td class="crd-td">NGA: 12,89, 11,93</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Ingall</strong></td><td class="crd-td">NER: 16,79, 6,93</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Timia</strong></td><td class="crd-td">NER: 18,11, 8,78</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Iférouane</strong></td><td class="crd-td">NER: 19,06, 8,42</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Teguidda-n-Tessoumt</strong></td><td class="crd-td">NER: 17,43, 6,65</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Tabelot</strong></td><td class="crd-td">NER: 17,61, 8,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Tanout</strong></td><td class="crd-td">NER: 14,97, 8,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1851AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Sokoto Caliphate and Adamawa Emirates from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Kanem-Bornu Empire and Bagirmi Sultanate

Table \ref{tab:zone6-sites} compiles 33 settlements across north-eastern Nigeria, western Chad, northern Cameroon and eastern Niger, led by Birnin Gazargamu (62,4k in 1700AD), Kukawa (60k in 1870AD), Dikwa (34,2k in 1894AD), Massenya (24,6k in 1852AD), Maroua (16,8k in 1895AD) and Logone-Birni (15k in 1824AD) [@Aouatef2026PoliticalStructures; @Magnavita2025NewLuminescence; @Lyon1821NarrativeTravels].

<figure class="crd-table-figure" id="tab:zone6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Birnin Gazargamu</strong></td><td class="crd-td">NGA: 13,01, 12,32</td><td class="crd-td">34,2k</td><td class="crd-td">62,4k</td><td class="crd-td">51,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">62,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kukawa</strong></td><td class="crd-td">NGA: 12,93, 13,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56k</td><td class="crd-td">32,7k</td><td class="crd-td">60k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Dikwa</strong></td><td class="crd-td">NGA: 12,04, 13,91</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">12,8k</td><td class="crd-td">21,7k</td><td class="crd-td">32,7k</td><td class="crd-td">34,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Massenya</strong></td><td class="crd-td">TCD: 11,4, 16,17</td><td class="crd-td">-</td><td class="crd-td">15,7k</td><td class="crd-td">20,4k</td><td class="crd-td">21,1k</td><td class="crd-td">8,1k</td><td class="crd-td">24,6k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Maroua</strong></td><td class="crd-td">CMR: 10,59, 14,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,5k</td><td class="crd-td">16,6k</td><td class="crd-td">16,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Logone-Birni</strong></td><td class="crd-td">CMR: 11,72, 15,09</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">13,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (1824AD)</td></tr>
<tr><td class="crd-td"><strong>Ngaoundéré</strong></td><td class="crd-td">CMR: 7,36, 13,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">14,1k</td><td class="crd-td">15k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Mora</strong></td><td class="crd-td">CMR: 11,05, 14,14</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1823AD)</td></tr>
<tr><td class="crd-td"><strong>Rey-Bouba</strong></td><td class="crd-td">CMR: 8,67, 14,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">8,8k</td><td class="crd-td">8,8k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Misau</strong></td><td class="crd-td">NGA: 11,31, 10,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">8,3k</td><td class="crd-td">8,3k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Goulfeil</strong></td><td class="crd-td">CMR: 12,39, 14,9</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">7,5k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Garoua</strong></td><td class="crd-td">CMR: 9,34, 13,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ngala</strong></td><td class="crd-td">NGA: 12,35, 14,17</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1823AD)</td></tr>
<tr><td class="crd-td"><strong>Mubi</strong></td><td class="crd-td">NGA: 10,27, 13,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Yao</strong></td><td class="crd-td">TCD: 12,85, 17,56</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Makari</strong></td><td class="crd-td">CMR: 12,58, 14,45</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Mao</strong></td><td class="crd-td">TCD: 14,12, 15,31</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Yau</strong></td><td class="crd-td">NGA: 13,56, 13,25</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Guider</strong></td><td class="crd-td">CMR: 9,92, 13,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Maïné-Soroa</strong></td><td class="crd-td">NER: 13,22, 12,03</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Bousso</strong></td><td class="crd-td">TCD: 10,49, 16,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Kousséri</strong></td><td class="crd-td">CMR: 12,08, 15,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Bol</strong></td><td class="crd-td">TCD: 13,48, 14,7</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Bilma</strong></td><td class="crd-td">NER: 18,69, 12,92</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>N'Guigmi</strong></td><td class="crd-td">NER: 14,25, 13,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Fachi</strong></td><td class="crd-td">NER: 18,11, 11,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Djado</strong></td><td class="crd-td">NER: 21,02, 12,31</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">906</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Zouar</strong></td><td class="crd-td">TCD: 20,46, 16,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Diffa</strong></td><td class="crd-td">NER: 13,32, 12,6</td><td class="crd-td">895</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Moussoro</strong></td><td class="crd-td">TCD: 13,65, 16,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Seguedine</strong></td><td class="crd-td">NER: 20,2, 12,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1823AD)</td></tr>
<tr><td class="crd-td"><strong>Dirkou</strong></td><td class="crd-td">NER: 18,99, 12,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">685 (1823AD)</td></tr>
<tr><td class="crd-td"><strong>Chirfa</strong></td><td class="crd-td">NER: 20,95, 12,35</td><td class="crd-td">-</td><td class="crd-td">562</td><td class="crd-td">516</td><td class="crd-td">471</td><td class="crd-td">-</td><td class="crd-td">590 (1650AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Kanem-Bornu Empire and Bagirmi Sultanate from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Sultanate of Wadai, Tibesti and Dar al-Kuti

Table \ref{tab:zone7-sites} lists 14 settlements across eastern and northern Chad, northern Central African Republic and westernmost Sudan, led by Abéché (28k in 1873AD), Wara (22,4k in 1840AD), Ndélé (16,8k in 1898AD) and Al-Junaynah (5,47k in 1885AD) [@Ofahey1980StateDarFur].

<figure class="crd-table-figure" id="tab:zone7-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Abéché</strong></td><td class="crd-td">TCD: 13,83, 20,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,4k</td><td class="crd-td">28k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Wara</strong></td><td class="crd-td">TCD: 14,19, 20,7</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">18k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,4k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Ndélé</strong></td><td class="crd-td">CAF: 8,41, 20,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ain Farah Settlement</strong></td><td class="crd-td">SDN: 14,35, 24,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Mongo</strong></td><td class="crd-td">TCD: 12,18, 18,69</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Adré</strong></td><td class="crd-td">TCD: 13,46, 22,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Biltine</strong></td><td class="crd-td">TCD: 14,52, 20,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Ati</strong></td><td class="crd-td">TCD: 13,22, 18,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1872AD)</td></tr>
<tr><td class="crd-td"><strong>Faya-Largeau</strong></td><td class="crd-td">TCD: 17,93, 19,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Am Timan</strong></td><td class="crd-td">TCD: 11,03, 20,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Bardaï</strong></td><td class="crd-td">TCD: 21,35, 17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Fada</strong></td><td class="crd-td">TCD: 17,19, 21,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1873AD)</td></tr>
<tr><td class="crd-td"><strong>Birao</strong></td><td class="crd-td">CAF: 10,28, 22,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965 (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Sultanate of Wadai, Tibesti and Dar al-Kuti from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Darfur Sultanate and Kordofan

Table \ref{tab:zone8-sites} records 15 settlements across Darfur and western Kordofan, topped by Al-Fāshir (14,8k in 1874AD), Kobbei (8,42k in 1803AD), An-Nuhūd (7,9k in 1885AD), Nyālā (5,9k in 1898AD) and Shoba (5,28k in 1780AD) [@Ofahey1980StateDarFur; @Totten2006GenocideDarfur].

<figure class="crd-table-figure" id="tab:zone8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">SDN: 13,63, 25,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">13,1k</td><td class="crd-td">14,8k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Kobbei</strong></td><td class="crd-td">SDN: 13,92, 25,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1803AD)</td></tr>
<tr><td class="crd-td"><strong>An-Nuhūd</strong></td><td class="crd-td">SDN: 12,7, 28,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">7,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nyālā</strong></td><td class="crd-td">SDN: 12,06, 24,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5,6k</td><td class="crd-td">5,9k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Shoba</strong></td><td class="crd-td">SDN: 13,85, 24,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Uri Settlement</strong></td><td class="crd-td">SDN: 14,23, 24,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>al-Dalanj</strong></td><td class="crd-td">SDN: 12,04, 29,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Turra</strong></td><td class="crd-td">SDN: 13,28, 24,33</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Kotum</strong></td><td class="crd-td">SDN: 14,21, 24,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Ril</strong></td><td class="crd-td">SDN: 12,72, 25,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1795AD)</td></tr>
<tr><td class="crd-td"><strong>Kalokiting</strong></td><td class="crd-td">SDN: 12,73, 24,22</td><td class="crd-td">2,5k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Madinat Kabkabiyya</strong></td><td class="crd-td">SDN: 13,65, 24,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Mellit</strong></td><td class="crd-td">SDN: 14,14, 25,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Zālingay</strong></td><td class="crd-td">SDN: 12,91, 23,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Sweini</strong></td><td class="crd-td">SDN: 14,48, 25,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1795AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Darfur Sultanate and Kordofan from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Funj, Turco-Egyptian and Mahdist Nile

Table \ref{tab:zone9-sites} documents 86 settlements across the Nile valley, Red Sea coast, Eritrea and the northern Ethiopian highlands, led by Umm Durmān (148k in 1895AD), Gonder (62k in 1700AD), Al-Kharṭūm (60k in 1847AD), Sannār (28,6k in 1701AD), Al-Ubayyiḍ (28,5k in 1882AD), Adis Abeba (20k in 1890AD) and Kassalā (15,2k in 1880AD) [@Crawford1951FungSennar; @Spaulding1985HeroicAge].

<figure class="crd-table-figure" id="tab:zone9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">SDN: 15,64, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">106,5k</td><td class="crd-td">148k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">ETH: 12,57, 37,46</td><td class="crd-td">-</td><td class="crd-td">62k</td><td class="crd-td">39,5k</td><td class="crd-td">8,3k</td><td class="crd-td">6,5k</td><td class="crd-td">62k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,3k</td><td class="crd-td">33k</td><td class="crd-td">60k (1847AD)</td></tr>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">SDN: 13,55, 33,6</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">21k</td><td class="crd-td">10k</td><td class="crd-td">-</td><td class="crd-td">28,6k (1701AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">SDN: 13,18, 30,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k</td><td class="crd-td">21,6k</td><td class="crd-td">28,5k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">20k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Entoto</strong></td><td class="crd-td">ETH: 9,08, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">SDN: 15,45, 36,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">12k</td><td class="crd-td">15,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Debretabor</strong></td><td class="crd-td">ETH: 11,86, 38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">SDN: 14,39, 33,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Barbar</strong></td><td class="crd-td">SDN: 18,03, 33,99</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">11,5k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Magdala</strong></td><td class="crd-td">ETH: 11,38, 39,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">11,5k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Barara</strong></td><td class="crd-td">ETH: 8,98, 38,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">SDN: 19,09, 37,33</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">7,6k</td><td class="crd-td">5,6k</td><td class="crd-td">10,8k</td><td class="crd-td">11,4k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḍārif</strong></td><td class="crd-td">SDN: 14,04, 35,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Arbaji</strong></td><td class="crd-td">SDN: 14,7, 33,37</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Madanī</strong></td><td class="crd-td">SDN: 14,37, 33,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Debere Markos</strong></td><td class="crd-td">ETH: 10,33, 37,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Gorgora</strong></td><td class="crd-td">ETH: 12,24, 37,3</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,4k (1625AD)</td></tr>
<tr><td class="crd-td"><strong>Adwa</strong></td><td class="crd-td">ETH: 14,18, 38,89</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,7k</td><td class="crd-td">5k</td><td class="crd-td">4,6k</td><td class="crd-td">8k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Danqaz</strong></td><td class="crd-td">ETH: 12,4, 37,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1628AD)</td></tr>
<tr><td class="crd-td"><strong>Old Dongola</strong></td><td class="crd-td">SDN: 18,22, 30,74</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Bara</strong></td><td class="crd-td">SDN: 13,69, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Metemma</strong></td><td class="crd-td">SDN: 16,71, 33,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Saka</strong></td><td class="crd-td">ETH: 8,12, 36,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1843AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭawkar</strong></td><td class="crd-td">SDN: 18,42, 37,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dunqulā</strong></td><td class="crd-td">SDN: 19,15, 30,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">SDN: 16,69, 33,44</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">4,4k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Sekota</strong></td><td class="crd-td">ETH: 12,63, 39,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Emfraz</strong></td><td class="crd-td">ETH: 12,27, 37,63</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Azezo</strong></td><td class="crd-td">ETH: 12,5, 37,43</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>El-Mesellemiya</strong></td><td class="crd-td">SDN: 14,57, 33,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1893AD)</td></tr>
<tr><td class="crd-td"><strong>Rufa</strong></td><td class="crd-td">SDN: 14,77, 33,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Qarri</strong></td><td class="crd-td">SDN: 16,22, 32,68</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Soba</strong></td><td class="crd-td">SDN: 15,53, 32,68</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Yifag</strong></td><td class="crd-td">ETH: 12,07, 37,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1835AD)</td></tr>
<tr><td class="crd-td"><strong>Halfaya</strong></td><td class="crd-td">SDN: 15,73, 32,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Tegali</strong></td><td class="crd-td">SDN: 12,17, 31,18</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duwaym</strong></td><td class="crd-td">SDN: 14, 32,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Debarwa</strong></td><td class="crd-td">ERI: 15,09, 38,84</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1570AD)</td></tr>
<tr><td class="crd-td"><strong>El-Kamlin</strong></td><td class="crd-td">SDN: 15,07, 33,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Um Rowaba</strong></td><td class="crd-td">SDN: 12,91, 31,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Aksum</strong></td><td class="crd-td">ETH: 14,12, 38,73</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Keren</strong></td><td class="crd-td">ERI: 15,78, 38,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Adigrat</strong></td><td class="crd-td">ETH: 14,3, 39,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Karkoj</strong></td><td class="crd-td">SDN: 12,92, 34,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mota</strong></td><td class="crd-td">ETH: 11,07, 37,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Fiche</strong></td><td class="crd-td">ETH: 9,77, 38,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Lalibela</strong></td><td class="crd-td">ETH: 12,03, 39,05</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Wadi Halfa</strong></td><td class="crd-td">SDN: 21,8, 31,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Alays</strong></td><td class="crd-td">SDN: 13,45, 32,52</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>al-Qatayna</strong></td><td class="crd-td">SDN: 14,87, 32,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Fazogli</strong></td><td class="crd-td">SDN: 11,28, 34,77</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Ed-Debba</strong></td><td class="crd-td">SDN: 18,05, 30,95</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>al-Damir</strong></td><td class="crd-td">SDN: 17,59, 33,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Sinkāt</strong></td><td class="crd-td">SDN: 18,84, 36,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>El-Khandaq</strong></td><td class="crd-td">SDN: 18,6, 30,57</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Korti</strong></td><td class="crd-td">SDN: 18,1, 31,57</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bichena</strong></td><td class="crd-td">ETH: 10,44, 38,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>al-Roseires</strong></td><td class="crd-td">SDN: 11,86, 34,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Merowe</strong></td><td class="crd-td">SDN: 18,51, 31,85</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Argo</strong></td><td class="crd-td">SDN: 19,52, 30,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Shire Inda Silase</strong></td><td class="crd-td">ETH: 14,1, 38,28</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Sabderat</strong></td><td class="crd-td">SDN: 15,47, 36,6</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Goz Regeb</strong></td><td class="crd-td">SDN: 16,05, 35,58</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Bahir Dar</strong></td><td class="crd-td">ETH: 11,58, 37,38</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Dangila</strong></td><td class="crd-td">ETH: 11,26, 36,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Sai Island Settlement</strong></td><td class="crd-td">SDN: 20,71, 30,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Haraz</strong></td><td class="crd-td">SDN: 13,02, 29,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1838AD)</td></tr>
<tr><td class="crd-td"><strong>Trinkitat</strong></td><td class="crd-td">SDN: 18,68, 37,75</td><td class="crd-td">-</td><td class="crd-td">655</td><td class="crd-td">929</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Haraza Settlement</strong></td><td class="crd-td">SDN: 15,05, 30,43</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Hamad</strong></td><td class="crd-td">SDN: 19,54, 33,32</td><td class="crd-td">-</td><td class="crd-td">846</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Abri</strong></td><td class="crd-td">SDN: 20,78, 30,33</td><td class="crd-td">-</td><td class="crd-td">887</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Dima</strong></td><td class="crd-td">ETH: 10,5, 38,1</td><td class="crd-td">-</td><td class="crd-td">956</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Geili Settlement</strong></td><td class="crd-td">SDN: 13,6, 33,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Kajmar</strong></td><td class="crd-td">SDN: 14,42, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">774</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965 (1838AD)</td></tr>
<tr><td class="crd-td"><strong>El-Kab Settlement</strong></td><td class="crd-td">SDN: 19,25, 32,73</td><td class="crd-td">920</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">920 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Saqadi Settlement</strong></td><td class="crd-td">SDN: 13,57, 33,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">845 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Derudeb</strong></td><td class="crd-td">SDN: 17,53, 36,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">820 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Hambukol</strong></td><td class="crd-td">SDN: 18,28, 30,72</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mohamed Qol</strong></td><td class="crd-td">SDN: 20,9, 37,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">488</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">635 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dungunab</strong></td><td class="crd-td">SDN: 21,11, 37,13</td><td class="crd-td">-</td><td class="crd-td">395</td><td class="crd-td">496</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">585 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Erkowit</strong></td><td class="crd-td">SDN: 18,77, 37,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465 (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kulubnarti</strong></td><td class="crd-td">SDN: 21,05, 30,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">310 (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Meinarti</strong></td><td class="crd-td">SDN: 21,88, 31,32</td><td class="crd-td">240</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">240 (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Funj, Turco-Egyptian and Mahdist Nile from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

## Bahr el Ghazal, Azande and Equatoria

Table \ref{tab:zone10-sites} compiles 31 settlements across South Sudan, southern Ethiopia, eastern Central African Republic and southern Kordofan, led by Jima (12,4k in 1895AD), Deim Zubeir (12,2k in 1879AD), Yambio (8,42k in 1895AD), Bonga (7,88k in 1843AD) and Bangassou (7,84k in 1890AD) [@Lovejoy2012Transformations].

<figure class="crd-table-figure" id="tab:zone10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jima</strong></td><td class="crd-td">ETH: 7,68, 36,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">12,2k</td><td class="crd-td">12,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Deim Zubeir</strong></td><td class="crd-td">SSD: 7,72, 26,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">12,2k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">8,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Bonga</strong></td><td class="crd-td">ETH: 7,28, 36,23</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">7,2k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,9k (1843AD)</td></tr>
<tr><td class="crd-td"><strong>Bangassou</strong></td><td class="crd-td">CAF: 4,75, 22,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Rafai</strong></td><td class="crd-td">CAF: 4,95, 23,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,6k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Kodok</strong></td><td class="crd-td">SSD: 9,89, 32,11</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,4k</td><td class="crd-td">5,4k</td><td class="crd-td">4,3k</td><td class="crd-td">5,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Dalbo</strong></td><td class="crd-td">ETH: 6,88, 37,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td><td class="crd-td">5,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Gondokoro</strong></td><td class="crd-td">SSD: 4,9, 31,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">4,9k (1874AD)</td></tr>
<tr><td class="crd-td"><strong>Anderacha</strong></td><td class="crd-td">ETH: 7,18, 36,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">4,2k</td><td class="crd-td">4,8k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">SSD: 7,7, 27,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Nekemte</strong></td><td class="crd-td">ETH: 9,09, 36,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Kāduqlī</strong></td><td class="crd-td">SDN: 11, 29,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">3,4k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kaka</strong></td><td class="crd-td">SSD: 10,63, 32,18</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Gore</strong></td><td class="crd-td">ETH: 8,15, 35,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rumbek</strong></td><td class="crd-td">SSD: 6,76, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Awasa</strong></td><td class="crd-td">ETH: 6,74, 38,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nasir</strong></td><td class="crd-td">SSD: 8,61, 33,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Tonj</strong></td><td class="crd-td">SSD: 7,28, 28,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Meshra er-Req</strong></td><td class="crd-td">SSD: 8,42, 29,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Fofa</strong></td><td class="crd-td">ETH: 7,87, 37,52</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Raga</strong></td><td class="crd-td">SSD: 8,46, 25,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Dodola</strong></td><td class="crd-td">ETH: 6,98, 39,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Tonga</strong></td><td class="crd-td">SSD: 9,47, 31,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Tarcha</strong></td><td class="crd-td">ETH: 7,18, 37,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">895</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Taludy</strong></td><td class="crd-td">SDN: 10,63, 30,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Bor</strong></td><td class="crd-td">SSD: 6,2, 31,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Rashad</strong></td><td class="crd-td">SDN: 11,86, 31,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Panyikang</strong></td><td class="crd-td">SSD: 9,52, 31,47</td><td class="crd-td">-</td><td class="crd-td">895</td><td class="crd-td">962</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">995 (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Shambe</strong></td><td class="crd-td">SSD: 7,1, 30,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">806</td><td class="crd-td">-</td><td class="crd-td">845 (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Detwok</strong></td><td class="crd-td">SSD: 10,17, 32,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">679</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">765 (1820AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in Bahr el Ghazal, Azande and Equatoria from 1500AD to 1890AD with peak populations.</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, documentary coverage is thickest in Senegambia, Sokoto Hausaland and the Nile corridor, whereas 65 of the 398 entries rest on single-date historical records and display hyphens outside their attested date [@Ofahey1980StateDarFur; @Dijk2000DroughtAnd]. Second, linear interpolation smooths sudden wartime evacuations or refugee peaks between recorded observations, as seen at Nioro du Sahel in 1892AD and Omdurman in 1895AD [@Houdoy1881SoudanFrancais]. Third, combined urban totals in Tables 1 to 10 exclude dispersed agrarian villages and pastoral groups, which are reconstructed in the companion regional study [@Meek1934BlackByzantium].

# Conclusion

Together, the 398 individually assessed settlements document four centuries of Sahelian and Sudanic urban transformation from Songhai Gao and Funj Sennar through Hausa walled manufacturing capitals and nineteenth-century Islamic reform seats to Mahdist Omdurman, providing the urban anchor for NICETHI across 21 modern jurisdictions.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} aggregates the individually assessed settlement counts and combined interpolated urban populations across all ten sub-regions at the six chapter benchmarks from 1500AD to 1890AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1780AD</th><th class="crd-th">1810AD</th><th class="crd-th">1860AD</th><th class="crd-th">1890AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trarza, Brakna and Adrar Emirates (39)</strong></td><td class="crd-td">25,8k</td><td class="crd-td">85,6k</td><td class="crd-td">97,4k</td><td class="crd-td">97,3k</td><td class="crd-td">107,2k</td><td class="crd-td">103,9k</td></tr>
<tr><td class="crd-td"><strong>Futa Toro, Segou Bamana and Toucouleur (67)</strong></td><td class="crd-td">22,5k</td><td class="crd-td">116,9k</td><td class="crd-td">182k</td><td class="crd-td">212,3k</td><td class="crd-td">281,9k</td><td class="crd-td">166,9k</td></tr>
<tr><td class="crd-td"><strong>Pashalik of Timbuktu, Massina and Niger Bend (20)</strong></td><td class="crd-td">57,5k</td><td class="crd-td">54,2k</td><td class="crd-td">49,9k</td><td class="crd-td">47,4k</td><td class="crd-td">19,4k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Mossi Kingdoms, Kong and Wassoulou (37)</strong></td><td class="crd-td">33,9k</td><td class="crd-td">88,2k</td><td class="crd-td">107k</td><td class="crd-td">125,9k</td><td class="crd-td">120,3k</td><td class="crd-td">111,1k</td></tr>
<tr><td class="crd-td"><strong>Sokoto Caliphate and Adamawa Emirates (56)</strong></td><td class="crd-td">31,6k</td><td class="crd-td">254k</td><td class="crd-td">313,2k</td><td class="crd-td">287,3k</td><td class="crd-td">259k</td><td class="crd-td">193,8k</td></tr>
<tr><td class="crd-td"><strong>Kanem-Bornu Empire and Bagirmi Sultanate (33)</strong></td><td class="crd-td">37,1k</td><td class="crd-td">144,8k</td><td class="crd-td">153,4k</td><td class="crd-td">108,2k</td><td class="crd-td">171,2k</td><td class="crd-td">134,5k</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Wadai, Tibesti and Dar al-Kuti (14)</strong></td><td class="crd-td">1,7k</td><td class="crd-td">14,1k</td><td class="crd-td">22,6k</td><td class="crd-td">29,1k</td><td class="crd-td">13k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Darfur Sultanate and Kordofan (15)</strong></td><td class="crd-td">2,5k</td><td class="crd-td">5,2k</td><td class="crd-td">24,6k</td><td class="crd-td">29,8k</td><td class="crd-td">38,8k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Funj, Turco-Egyptian and Mahdist Nile (86)</strong></td><td class="crd-td">9,6k</td><td class="crd-td">180,1k</td><td class="crd-td">182,3k</td><td class="crd-td">186,3k</td><td class="crd-td">238,6k</td><td class="crd-td">214,9k</td></tr>
<tr><td class="crd-td"><strong>Bahr el Ghazal, Azande and Equatoria (31)</strong></td><td class="crd-td">3,9k</td><td class="crd-td">14,2k</td><td class="crd-td">26,1k</td><td class="crd-td">32k</td><td class="crd-td">50,3k</td><td class="crd-td">63k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (398)</strong></td><td class="crd-td">226,1k</td><td class="crd-td">957,3k</td><td class="crd-td">1,16M</td><td class="crd-td">1,16M</td><td class="crd-td">1,3M</td><td class="crd-td">1,05M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlement counts and combined interpolated urban populations across ten historical sub-regions from 1500AD to 1890AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Settlement coordinates follow decimal degrees (latitude, longitude) formatted with European decimal commas. Co-located historical series for Freetown (30.033 at peak vs 1.190 early entry) remain separate in the 398-entry ledger and are deduplicated to 397 distinct urban peaks in rank-size diagnostics.
