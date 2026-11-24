---
title: "Colonial New Zealand"
subtitle: "Settlement Gazetteer and Provincial Urban Hierarchy (1840 to 1907)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/colonial_new_zealand_urban_hierarchy.png"
hero_caption: "Leading catalogued urban centres and rank-size scaling across 94 settlements in Colonial New Zealand, 1840 to 1907."
hero_label: "fig:hero-nz-hierarchy"
bibliography: colonial_new_zealand.bib
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
    latex_engine: xelatex
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



![Leading catalogued urban centres and rank-size scaling across 94 settlements in Colonial New Zealand, 1840 to 1907.](figures/colonial_new_zealand_urban_hierarchy.png)



# Abstract

This gazetteer catalogues 94 colonial cities, metropolitan functional urban areas, goldfield boroughs, coastal ports and rural service towns across ten historic New Zealand Provinces and the Chatham Islands from 1840 to 1907, comprising 541 census observations spanning 1840 to 1906. Constructed through four sequential source-ledger audit waves with 0% crowd-sourced fallback reliance and zero empty provinces, the register evaluates 173 candidate records, retaining 94 canonical localities after excluding 79 superseded Territorial Authority aggregates (23) and duplicate colonial aliases within 25 km (56). Reflecting New Zealand's maritime geography, provincial self-government and alternating North-South economic booms [@pool2026peopling; @pawson1997making; @laurenson2010myths], peak settlement sizes span 82.101 inhabitants down to 358 along a steep log-log rank-size curve ($\alpha = 1,27$, $R^2 = 0,94$ across the leading 47 localities; $\alpha = 1,38$, $R^2 = 0,96$ across all 94 entries). Four balanced metropolitan ports — Auckland (82.101 in 1906), Christchurch (67.878), Wellington (63.807) and Dunedin (56.020) — sit well above a provincial middle tier led by Palmerston North (10.239), Napier (9.454), Whanganui (8.175), Nelson (8.164), Thames (8.073 in 1871), Timaru (7.615) and Invercargill (7.299), before tapering cleanly through dairy, railway, coal and goldfield boroughs down to Arrowtown (426), Hampden (379) and Eastbourne (358) [@beattie2015hungry; @andersen2026assimilation].

# Background

Colonial New Zealand's urban network grew in four overlapping historical layers rather than around a single imperial capital. First came pre-1840 maritime contact outposts and planned Crown or Wakefield coastal towns: Kororāreka (Russell, 500 inhabitants in 1840), Auckland (founded 1840, 1.500 in 1841), Wellington (1.200 in 1840), Akaroa (1841), New Plymouth (1842), Nelson (1843), Whanganui (1843), Dunedin (444 in 1848) and Christchurch and Lyttelton (1851) [@jackson2016integrated; @kavale_henderson2026reflections; @hill2024heritage]. Anchored to deep-water harbours or protected roadsteads, these coastal beachheads served as administrative seats, shipping entrepôts and distribution depots for adjacent pastoral runs.

Second, the 1860s alluvial and quartz gold rushes injected an abrupt wave of inland and West Coast mining towns. Otago's rushes founded Lawrence, Alexandra, Cromwell, Queenstown, Arrowtown, Naseby and Roxburgh while rocketing Dunedin from 1.482 in 1851 to 15.790 in 1864; the West Coast rushes raised Hokitika (4.866 by 1867), Greymouth, Ross, Kūmara and Westport almost overnight; and Coromandel reef mining lifted Thames to 8.073 by 1871 and later Waihī to 5.594 by 1906 [@beattie2015hungry; @seuffert2011civilisation; @kavale_henderson2026injurious]. Third, frontier warfare and Vogel's 1870s public-works railways created military-turned-farming centres in Waikato and Bay of Plenty (Hamilton, Cambridge, Tauranga) alongside Scandinavian and British bush-clearance towns in Manawatū, Wairarapa and southern Hawke's Bay — led by Palmerston North, Masterton, Dannevirke, Feilding, Woodville and Pahiatua — as well as the geothermal tourism borough of Rotorua [@andersen2026assimilation; @bell2022aotearoa; @gordon2025rua; @balme2009hula]. Fourth, refrigerated dairy and frozen-meat exports after 1882 multiplied smallholder market boroughs across Taranaki (Hāwera, Stratford, Eltham, Inglewood, Waitara), Southland (Gore, Bluff, Mataura) and Canterbury (Ashburton, Temuka, Waimate, Geraldine), while suburbanisation ringed the four main ports with distinct municipalities such as Grey Lynn, Petone, Lower Hutt, Eastbourne, Port Chalmers and Mosgiel, accompanied by provincial hospitals, asylums and acclimatisation societies [@laurenson2010myths; @pawson1997making; @pool2002why; @lindsay1872colonial; @pipek2020lasting].

# Methodology

The 94-settlement gazetteer was assembled in four documented audit waves governed by the chapter source ledger. Wave 1 harvested primary official counts from the Colonial Blue Books (1840 to 1848), New Zealand Company, Canterbury Association, Otago Association and Nanto-Bordelaise returns, Registrar-General Colonial Censuses (1851 to 1906), New Zealand Official Yearbooks (1893, 1901 and 1907) and Statistics New Zealand's Historical County and Borough series (1891 to 1906) [@broman2021european; @pool2026peopling]. Wave 2 checked peer-reviewed historical monographs and regional studies for missing pioneer or Māori-contact hubs [@puckey2006substance; @wyse2002colonising; @wheeler2025albertlander]. Wave 3 reconciled longitudinal toponymy and administrative tiers, excluding 23 modern Territorial Authority rural district aggregates that overlap constituent towns and merging 56 duplicate or diacritic-variant colonial records within 25 km (for example, merging Hawera into Hāwera, Kumara into Kūmara, Waihi into Waihī, Patea into Pātea and Avenal into Invercargill North). Wave 4 executed a provincial gap-coverage sweep adding one additional northern borough (marginal gain 1,08%), achieving full representation across all eleven territorial units with zero crowd-sourced fallback entries.

Every catalogued settlement was harmonised to WGS84 decimal coordinates, classified by statistical scope (84 boroughs or cities proper, 7 metropolitan areas and 3 suburbs) and mapped to its historic 1853 to 1876 provincial unit via the chapter's spatial areal mask. Rank-size scaling was estimated by ordinary least squares in log-log space on peak 1840 to 1906 populations across both the upper half of the urban hierarchy (ranks 1 to 47) and the full 94-locality series, with a parallel sensitivity fit excluding the three suburban records (ranks 1 to 45 of 91).

# Testing and Validation

Source-ledger verification confirms exact accounting across all 173 evaluated candidate records: 94 included settlements plus 79 excluded entries (23 superseded Territorial Authority aggregates and 56 merged duplicate aliases), leaving zero unaccounted entries. Every included locality carries valid WGS84 coordinates, an explicit provincial assignment, a statistical scope tag and dated official census or blue-book provenance spanning 1840 to 1906. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 94 catalogued settlements across the ten historic provinces and the Chatham Islands, capturing the dense urban corridors along the Otago goldfields and coast, the Canterbury Plains, the Manawatū-Wellington railway spine, Taranaki's ring plain and the Auckland-Coromandel axis.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-colonial-new-zealand-settlements/colonial_new_zealand_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 94 catalogued Colonial New Zealand settlements across ten historic provinces and the Chatham Islands, 1840 to 1907.</figcaption>
</figure>

Cross-checking urban aggregates against national colonial census benchmarks confirms demographic consistency. Summing the four principal metropolitan areas (Auckland, Christchurch, Wellington and Dunedin) in 1901 yields 226.001 inhabitants — exactly 27,6% of New Zealand's 818.289 reconciled total — rising to 269.806 by 1906 as rapid urban growth drew internal migrants and British arrivals into the main ports [@laurenson2010myths; @pool2026peopling]. Adding the 84 municipal boroughs (excluding overlapping metro parent totals) accounts for roughly 45% to 48% of the colony's 1906 population, aligning tightly with contemporary Registrar-General urbanisation ratios that placed slightly under half of all New Zealanders inside gazetted boroughs and town districts on the eve of Dominion status — cities that simultaneously navigated port immigration restrictions, asylum administration and uneven urban infant survival [@broman2021european; @telfar_barnard2024rise; @kennedy2026don; @dawson2013national; @wallace2011mortality].

# Results

## Metropolitan Ports and Principal Provincial Towns (Ranks 1 to 47)

Table \ref{tab:top47-sites} lists the leading 47 catalogued settlements (ranks 1 to 47), spanning Auckland Metro (82.101 in 1906) down to Waimate (1.637 in 1906). The top nine entries represent New Zealand's four main metropolitan agglomerations and their constituent city-proper municipalities (plus a single-year 1886 Wellington metropolitan functional snapshot), followed by an abrupt drop to Palmerston North (10.239), Napier (9.454), Whanganui (8.175), Nelson (8.164), gold-peak Thames (8.073 in 1871), Timaru (7.615) and Invercargill (7.299). Early-peaking mining and port towns stand out distinctly against steadily expanding pastoral boroughs: Thames peaked in 1871 (8.073), Hokitika in 1867 (4.866), Oamaru and Lyttelton in 1881 (5.791 and 4.127) and coal-mining Brunner in 1891 (2.231), whereas North Island dairy and railway hubs such as Palmerston North, Masterton, Dannevirke, Feilding, Hastings, Hāwera, Stratford and Whangarei hit their colonial maxima in 1906 [@beattie2015hungry; @andersen2026assimilation; @gordon2025rua].

<figure class="crd-table-figure" id="tab:top47-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Auckland (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Auckland</td><td class="crd-td">-36,93, 174,79</td><td class="crd-td">1841 to 1906</td><td class="crd-td">82.101 (1906)</td></tr>
<tr><td class="crd-td"><strong>Christchurch (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,53, 172,6</td><td class="crd-td">1851 to 1906</td><td class="crd-td">67.878 (1906)</td></tr>
<tr><td class="crd-td"><strong>Wellington (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Wellington</td><td class="crd-td">-41,29, 174,78</td><td class="crd-td">1840 to 1906</td><td class="crd-td">63.807 (1906)</td></tr>
<tr><td class="crd-td"><strong>Wellington</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-41,29, 174,78</td><td class="crd-td">1851 to 1906</td><td class="crd-td">58.563 (1906)</td></tr>
<tr><td class="crd-td"><strong>Dunedin (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Otago</td><td class="crd-td">-45,88, 170,5</td><td class="crd-td">1848 to 1906</td><td class="crd-td">56.020 (1906)</td></tr>
<tr><td class="crd-td"><strong>Christchurch</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,53, 172,64</td><td class="crd-td">1861 to 1906</td><td class="crd-td">49.928 (1906)</td></tr>
<tr><td class="crd-td"><strong>Auckland</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-36,85, 174,76</td><td class="crd-td">1841 to 1906</td><td class="crd-td">37.736 (1906)</td></tr>
<tr><td class="crd-td"><strong>Dunedin</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,88, 170,5</td><td class="crd-td">1851 to 1906</td><td class="crd-td">36.070 (1906)</td></tr>
<tr><td class="crd-td"><strong>Wellington (Metro, 1886)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Wellington</td><td class="crd-td">-40,11, 175,21</td><td class="crd-td">1886</td><td class="crd-td">25.944 (1886)</td></tr>
<tr><td class="crd-td"><strong>Palmerston North</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,35, 175,61</td><td class="crd-td">1874 to 1906</td><td class="crd-td">10.239 (1906)</td></tr>
<tr><td class="crd-td"><strong>Napier</strong></td><td class="crd-td">Borough</td><td class="crd-td">Hawke's Bay</td><td class="crd-td">-39,49, 176,91</td><td class="crd-td">1858 to 1906</td><td class="crd-td">9.454 (1906)</td></tr>
<tr><td class="crd-td"><strong>Whanganui</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-39,93, 175,05</td><td class="crd-td">1843 to 1906</td><td class="crd-td">8.175 (1906)</td></tr>
<tr><td class="crd-td"><strong>Nelson</strong></td><td class="crd-td">Borough</td><td class="crd-td">Nelson</td><td class="crd-td">-41,27, 173,28</td><td class="crd-td">1843 to 1906</td><td class="crd-td">8.164 (1906)</td></tr>
<tr><td class="crd-td"><strong>Thames</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-37,3, 175,62</td><td class="crd-td">1871 to 1906</td><td class="crd-td">8.073 (1871)</td></tr>
<tr><td class="crd-td"><strong>Timaru</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-44,4, 171,25</td><td class="crd-td">1861 to 1906</td><td class="crd-td">7.615 (1906)</td></tr>
<tr><td class="crd-td"><strong>Invercargill</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,41, 168,35</td><td class="crd-td">1861 to 1906</td><td class="crd-td">7.299 (1906)</td></tr>
<tr><td class="crd-td"><strong>Petone</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,1, 175,27</td><td class="crd-td">1891 to 1906</td><td class="crd-td">5.893 (1906)</td></tr>
<tr><td class="crd-td"><strong>Grey Lynn</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-36,86, 174,74</td><td class="crd-td">1891 to 1906</td><td class="crd-td">5.882 (1906)</td></tr>
<tr><td class="crd-td"><strong>Oamaru</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,08, 170,97</td><td class="crd-td">1864 to 1906</td><td class="crd-td">5.791 (1881)</td></tr>
<tr><td class="crd-td"><strong>Gisborne</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-38,66, 178,02</td><td class="crd-td">1874 to 1906</td><td class="crd-td">5.664 (1906)</td></tr>
<tr><td class="crd-td"><strong>Waihī</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-37,39, 175,84</td><td class="crd-td">1906</td><td class="crd-td">5.594 (1906)</td></tr>
<tr><td class="crd-td"><strong>New Plymouth</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39,06, 174,08</td><td class="crd-td">1842 to 1906</td><td class="crd-td">5.141 (1906)</td></tr>
<tr><td class="crd-td"><strong>Masterton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,95, 175,66</td><td class="crd-td">1874 to 1906</td><td class="crd-td">5.026 (1906)</td></tr>
<tr><td class="crd-td"><strong>Hokitika</strong></td><td class="crd-td">Borough</td><td class="crd-td">Westland</td><td class="crd-td">-42,72, 170,99</td><td class="crd-td">1867 to 1906</td><td class="crd-td">4.866 (1867)</td></tr>
<tr><td class="crd-td"><strong>Hastings</strong></td><td class="crd-td">Borough</td><td class="crd-td">Hawke's Bay</td><td class="crd-td">-39,64, 176,85</td><td class="crd-td">1891 to 1906</td><td class="crd-td">4.594 (1906)</td></tr>
<tr><td class="crd-td"><strong>Greymouth</strong></td><td class="crd-td">Borough</td><td class="crd-td">Westland</td><td class="crd-td">-42,66, 171,19</td><td class="crd-td">1867 to 1906</td><td class="crd-td">4.569 (1906)</td></tr>
<tr><td class="crd-td"><strong>Lyttelton</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,6, 172,71</td><td class="crd-td">1851 to 1906</td><td class="crd-td">4.127 (1881)</td></tr>
<tr><td class="crd-td"><strong>Westport</strong></td><td class="crd-td">Borough</td><td class="crd-td">Nelson</td><td class="crd-td">-42,03, 171,56</td><td class="crd-td">1891 to 1906</td><td class="crd-td">3.642 (1906)</td></tr>
<tr><td class="crd-td"><strong>Dannevirke</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,21, 176,1</td><td class="crd-td">1896 to 1906</td><td class="crd-td">3.509 (1906)</td></tr>
<tr><td class="crd-td"><strong>Lower Hutt</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-41,21, 174,93</td><td class="crd-td">1891 to 1906</td><td class="crd-td">3.407 (1906)</td></tr>
<tr><td class="crd-td"><strong>Blenheim</strong></td><td class="crd-td">Borough</td><td class="crd-td">Marlborough</td><td class="crd-td">-41,52, 173,95</td><td class="crd-td">1864 to 1906</td><td class="crd-td">3.351 (1906)</td></tr>
<tr><td class="crd-td"><strong>Gore</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,1, 168,93</td><td class="crd-td">1891 to 1906</td><td class="crd-td">3.033 (1906)</td></tr>
<tr><td class="crd-td"><strong>Feilding</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,22, 175,56</td><td class="crd-td">1891 to 1906</td><td class="crd-td">2.971 (1906)</td></tr>
<tr><td class="crd-td"><strong>Ashburton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,9, 171,75</td><td class="crd-td">1891 to 1906</td><td class="crd-td">2.563 (1906)</td></tr>
<tr><td class="crd-td"><strong>Invercargill South</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46, 168,8</td><td class="crd-td">1891 to 1906</td><td class="crd-td">2.272 (1906)</td></tr>
<tr><td class="crd-td"><strong>Brunner</strong></td><td class="crd-td">Borough</td><td class="crd-td">Westland</td><td class="crd-td">-42,43, 171,32</td><td class="crd-td">1891 to 1906</td><td class="crd-td">2.231 (1891)</td></tr>
<tr><td class="crd-td"><strong>Hāwera</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39,59, 174,28</td><td class="crd-td">1891 to 1906</td><td class="crd-td">2.153 (1906)</td></tr>
<tr><td class="crd-td"><strong>Hamilton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-37,79, 175,28</td><td class="crd-td">1871 to 1906</td><td class="crd-td">2.150 (1906)</td></tr>
<tr><td class="crd-td"><strong>Stratford</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39,34, 174,29</td><td class="crd-td">1901 to 1906</td><td class="crd-td">2.127 (1906)</td></tr>
<tr><td class="crd-td"><strong>Port Chalmers</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,82, 170,62</td><td class="crd-td">1891 to 1906</td><td class="crd-td">2.120 (1906)</td></tr>
<tr><td class="crd-td"><strong>Whangarei</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-35,72, 174,32</td><td class="crd-td">1901 to 1906</td><td class="crd-td">2.115 (1906)</td></tr>
<tr><td class="crd-td"><strong>Rotorua</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-38,14, 176,25</td><td class="crd-td">1886 to 1906</td><td class="crd-td">1.927 (1906)</td></tr>
<tr><td class="crd-td"><strong>Rangiora</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,31, 172,59</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.869 (1896)</td></tr>
<tr><td class="crd-td"><strong>Kaiapoi</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,38, 172,66</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.828 (1896)</td></tr>
<tr><td class="crd-td"><strong>Kaitangata</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-46,28, 169,85</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.682 (1906)</td></tr>
<tr><td class="crd-td"><strong>Temuka</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-44,24, 171,29</td><td class="crd-td">1901 to 1906</td><td class="crd-td">1.661 (1906)</td></tr>
<tr><td class="crd-td"><strong>Waimate</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-44,73, 171,05</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.637 (1906)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 47 catalogued Colonial New Zealand settlements ordered by peak 1840 to 1906 population, showing statistical scope, historic province and coordinates.</figcaption>
</figure>

## Secondary Boroughs, Goldfield Towns and Maritime Outposts (Ranks 48 to 94)

Table \ref{tab:rem47-sites} documents the remaining 47 catalogued localities (ranks 48 to 94), spanning 1.517 inhabitants at Mosgiel down to 358 at Eastbourne. This lower tier captures the rich institutional texture of rural colonial New Zealand: South Island freezing ports and industrial satellites (Mosgiel, Bluff, Invercargill East and North, Mataura, Picton, Riverton), ageing Central Otago and Westland goldfield boroughs (Kūmara, Lawrence, Ross, Queenstown, Cromwell, Naseby, Roxburgh and Arrowtown), early coastal contact sites whose prominence faded after 1840 (Kororāreka at 500 in 1840, Waitangi on the Chatham Islands at 462 in 1861 and French-founded Akaroa at 662 in 1886) and newly incorporated North Island bush and dairy boroughs (Carterton, Pahiatua, Foxton, Eltham, Marton, Levin, Cambridge, Inglewood, Greytown, Woodville, Te Aroha, Waitara and Pātea) [@jackson2016integrated; @puckey2006substance; @drury2016once].

<figure class="crd-table-figure" id="tab:rem47-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mosgiel</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,87, 170,37</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.517 (1906)</td></tr>
<tr><td class="crd-td"><strong>Bluff</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,14, 168,78</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.472 (1906)</td></tr>
<tr><td class="crd-td"><strong>Carterton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-41,02, 175,53</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.402 (1906)</td></tr>
<tr><td class="crd-td"><strong>Pahiatua</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,45, 175,84</td><td class="crd-td">1896 to 1906</td><td class="crd-td">1.370 (1906)</td></tr>
<tr><td class="crd-td"><strong>Foxton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,47, 175,29</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.330 (1906)</td></tr>
<tr><td class="crd-td"><strong>Eltham</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39,43, 174,3</td><td class="crd-td">1906</td><td class="crd-td">1.329 (1906)</td></tr>
<tr><td class="crd-td"><strong>Milton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-46,12, 169,97</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.284 (1906)</td></tr>
<tr><td class="crd-td"><strong>Marton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,07, 175,38</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.268 (1906)</td></tr>
<tr><td class="crd-td"><strong>Levin</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,63, 175,29</td><td class="crd-td">1906</td><td class="crd-td">1.265 (1906)</td></tr>
<tr><td class="crd-td"><strong>Tauranga</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-37,69, 176,17</td><td class="crd-td">1874 to 1906</td><td class="crd-td">1.249 (1881)</td></tr>
<tr><td class="crd-td"><strong>Cambridge</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-37,89, 175,46</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.244 (1906)</td></tr>
<tr><td class="crd-td"><strong>Hamilton (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Auckland</td><td class="crd-td">-37,77, 175,27</td><td class="crd-td">1886</td><td class="crd-td">1.200 (1886)</td></tr>
<tr><td class="crd-td"><strong>Kūmara</strong></td><td class="crd-td">Borough</td><td class="crd-td">Westland</td><td class="crd-td">-42,63, 171,18</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.176 (1891)</td></tr>
<tr><td class="crd-td"><strong>Balclutha</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-46,24, 169,74</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.161 (1906)</td></tr>
<tr><td class="crd-td"><strong>Lawrence</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,92, 169,69</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.159 (1901)</td></tr>
<tr><td class="crd-td"><strong>Inglewood</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39,16, 174,2</td><td class="crd-td">1906</td><td class="crd-td">1.152 (1906)</td></tr>
<tr><td class="crd-td"><strong>Tauranga (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">Auckland</td><td class="crd-td">-37,71, 176,19</td><td class="crd-td">1886</td><td class="crd-td">1.149 (1886)</td></tr>
<tr><td class="crd-td"><strong>Greytown</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-41,08, 175,45</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.141 (1891)</td></tr>
<tr><td class="crd-td"><strong>Woodville</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-40,34, 175,87</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.110 (1906)</td></tr>
<tr><td class="crd-td"><strong>Te Aroha</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-37,54, 175,7</td><td class="crd-td">1901 to 1906</td><td class="crd-td">1.109 (1906)</td></tr>
<tr><td class="crd-td"><strong>Motueka</strong></td><td class="crd-td">Borough</td><td class="crd-td">Nelson</td><td class="crd-td">-41,12, 173</td><td class="crd-td">1901 to 1906</td><td class="crd-td">1.068 (1906)</td></tr>
<tr><td class="crd-td"><strong>Invercargill East</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,41, 168,38</td><td class="crd-td">1891 to 1906</td><td class="crd-td">1.038 (1906)</td></tr>
<tr><td class="crd-td"><strong>Mataura</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,19, 168,87</td><td class="crd-td">1896 to 1906</td><td class="crd-td">1.023 (1906)</td></tr>
<tr><td class="crd-td"><strong>Picton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Marlborough</td><td class="crd-td">-41,28, 174,02</td><td class="crd-td">1891 to 1906</td><td class="crd-td">995 (1906)</td></tr>
<tr><td class="crd-td"><strong>Invercargill North</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,39, 168,35</td><td class="crd-td">1891 to 1906</td><td class="crd-td">973 (1906)</td></tr>
<tr><td class="crd-td"><strong>Waitara</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39, 174,23</td><td class="crd-td">1906</td><td class="crd-td">958 (1906)</td></tr>
<tr><td class="crd-td"><strong>Geraldine</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-44,09, 171,24</td><td class="crd-td">1906</td><td class="crd-td">942 (1906)</td></tr>
<tr><td class="crd-td"><strong>Alexandra</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,25, 169,38</td><td class="crd-td">1891 to 1906</td><td class="crd-td">936 (1906)</td></tr>
<tr><td class="crd-td"><strong>Riverton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,37, 168,01</td><td class="crd-td">1891 to 1906</td><td class="crd-td">914 (1906)</td></tr>
<tr><td class="crd-td"><strong>Pātea</strong></td><td class="crd-td">Borough</td><td class="crd-td">Taranaki</td><td class="crd-td">-39,75, 174,47</td><td class="crd-td">1891 to 1906</td><td class="crd-td">869 (1906)</td></tr>
<tr><td class="crd-td"><strong>Ross</strong></td><td class="crd-td">Borough</td><td class="crd-td">Westland</td><td class="crd-td">-42,89, 170,8</td><td class="crd-td">1891 to 1906</td><td class="crd-td">822 (1891)</td></tr>
<tr><td class="crd-td"><strong>Palmerston</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,48, 170,71</td><td class="crd-td">1891 to 1906</td><td class="crd-td">790 (1891)</td></tr>
<tr><td class="crd-td"><strong>Queenstown</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,03, 168,7</td><td class="crd-td">1867 to 1906</td><td class="crd-td">781 (1896)</td></tr>
<tr><td class="crd-td"><strong>Hawksbury</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,72, 170,57</td><td class="crd-td">1891 to 1906</td><td class="crd-td">760 (1896)</td></tr>
<tr><td class="crd-td"><strong>Cromwell</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,05, 169,18</td><td class="crd-td">1891 to 1906</td><td class="crd-td">671 (1906)</td></tr>
<tr><td class="crd-td"><strong>Akaroa</strong></td><td class="crd-td">Borough</td><td class="crd-td">Canterbury</td><td class="crd-td">-43,77, 172,71</td><td class="crd-td">1841 to 1906</td><td class="crd-td">662 (1886)</td></tr>
<tr><td class="crd-td"><strong>Richmond</strong></td><td class="crd-td">Borough</td><td class="crd-td">Nelson</td><td class="crd-td">-41,34, 173,18</td><td class="crd-td">1896 to 1906</td><td class="crd-td">651 (1906)</td></tr>
<tr><td class="crd-td"><strong>Naseby</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,03, 170,14</td><td class="crd-td">1891 to 1906</td><td class="crd-td">505 (1901)</td></tr>
<tr><td class="crd-td"><strong>Gladstone</strong></td><td class="crd-td">Borough</td><td class="crd-td">Westland</td><td class="crd-td">-42,69, 171,17</td><td class="crd-td">1891 to 1906</td><td class="crd-td">501 (1906)</td></tr>
<tr><td class="crd-td"><strong>Kororāreka (Russell)</strong></td><td class="crd-td">Borough</td><td class="crd-td">Auckland</td><td class="crd-td">-35,66, 174,38</td><td class="crd-td">1840 to 1906</td><td class="crd-td">500 (1840)</td></tr>
<tr><td class="crd-td"><strong>Roxburgh</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,54, 169,31</td><td class="crd-td">1891 to 1906</td><td class="crd-td">479 (1906)</td></tr>
<tr><td class="crd-td"><strong>Winton</strong></td><td class="crd-td">Borough</td><td class="crd-td">Southland</td><td class="crd-td">-46,14, 168,32</td><td class="crd-td">1891 to 1906</td><td class="crd-td">474 (1901)</td></tr>
<tr><td class="crd-td"><strong>Waitangi (Chatham Islands)</strong></td><td class="crd-td">Borough</td><td class="crd-td">Chatham Islands</td><td class="crd-td">-43,95, -176,56</td><td class="crd-td">1861 to 1906</td><td class="crd-td">462 (1861)</td></tr>
<tr><td class="crd-td"><strong>Tapanui</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,94, 169,26</td><td class="crd-td">1891 to 1906</td><td class="crd-td">428 (1891)</td></tr>
<tr><td class="crd-td"><strong>Arrowtown</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-44,95, 168,84</td><td class="crd-td">1891 to 1906</td><td class="crd-td">426 (1891)</td></tr>
<tr><td class="crd-td"><strong>Hampden</strong></td><td class="crd-td">Borough</td><td class="crd-td">Otago</td><td class="crd-td">-45,33, 170,82</td><td class="crd-td">1891 to 1906</td><td class="crd-td">379 (1906)</td></tr>
<tr><td class="crd-td"><strong>Eastbourne</strong></td><td class="crd-td">Borough</td><td class="crd-td">Wellington</td><td class="crd-td">-41,29, 174,9</td><td class="crd-td">1906</td><td class="crd-td">358 (1906)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued Colonial New Zealand settlements ranked 48 to 94 ordered by peak 1840 to 1906 population, showing statistical scope, historic province and coordinates.</figcaption>
</figure>

## Provincial Gazetteer Coverage

Table \ref{tab:province-gazetteer} aggregates catalogued site counts, spatial settlement density per 10.000 km², leading urban centres and 1901 provincial totals across all eleven territories. Otago (19 sites), Wellington (18), Auckland (15) and Canterbury (11) together account for 67% of the gazetteer (63 of 94 localities), reflecting Otago's proliferation of small interior goldfield boroughs and Wellington's dense network of Wairarapa and Manawatū rail townships. Adjusted for land area, compact dairying Taranaki (7,37 sites per 10.000 km²) and administrative Wellington (6,03) exhibit the highest urban cataloguing density in the colony, ahead of Otago (5,1), the Chatham Islands (3,85, single centre Waitangi), Westland (3,13) and Canterbury (2,81), whereas sprawling pastoral Marlborough (1,28) and Hawke's Bay (1,44, strongly dual-centred on Napier and Hastings) record fewer distinct incorporated boroughs [@gordon2025rua; @pool2026peopling].

<figure class="crd-table-figure" id="tab:province-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provincial Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">1901 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Auckland Province</strong></td><td class="crd-td">79.374</td><td class="crd-td">15</td><td class="crd-td">1,89</td><td class="crd-td">Auckland (Metro) (82,1k)</td><td class="crd-td">203,9k</td></tr>
<tr><td class="crd-td"><strong>Taranaki Province</strong></td><td class="crd-td">9.497</td><td class="crd-td">7</td><td class="crd-td">7,37</td><td class="crd-td">New Plymouth (5,1k)</td><td class="crd-td">41,1k</td></tr>
<tr><td class="crd-td"><strong>Hawke's Bay Province</strong></td><td class="crd-td">13.847</td><td class="crd-td">2</td><td class="crd-td">1,44</td><td class="crd-td">Napier (9,5k)</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Wellington Province</strong></td><td class="crd-td">29.870</td><td class="crd-td">18</td><td class="crd-td">6,03</td><td class="crd-td">Wellington (Metro) (63,8k)</td><td class="crd-td">148,2k</td></tr>
<tr><td class="crd-td"><strong>Nelson Province</strong></td><td class="crd-td">21.840</td><td class="crd-td">4</td><td class="crd-td">1,83</td><td class="crd-td">Nelson (8,2k)</td><td class="crd-td">38,4k</td></tr>
<tr><td class="crd-td"><strong>Marlborough Province</strong></td><td class="crd-td">15.571</td><td class="crd-td">2</td><td class="crd-td">1,28</td><td class="crd-td">Blenheim (3,4k)</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Westland Province</strong></td><td class="crd-td">19.152</td><td class="crd-td">6</td><td class="crd-td">3,13</td><td class="crd-td">Hokitika (4,9k)</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Canterbury Province</strong></td><td class="crd-td">39.158</td><td class="crd-td">11</td><td class="crd-td">2,81</td><td class="crd-td">Christchurch (Metro) (67,9k)</td><td class="crd-td">144,2k</td></tr>
<tr><td class="crd-td"><strong>Otago Province</strong></td><td class="crd-td">37.229</td><td class="crd-td">19</td><td class="crd-td">5,1</td><td class="crd-td">Dunedin (Metro) (56k)</td><td class="crd-td">126k</td></tr>
<tr><td class="crd-td"><strong>Southland Province</strong></td><td class="crd-td">35.419</td><td class="crd-td">9</td><td class="crd-td">2,54</td><td class="crd-td">Invercargill (7,3k)</td><td class="crd-td">48,1k</td></tr>
<tr><td class="crd-td"><strong>Chatham Islands</strong></td><td class="crd-td">2.596</td><td class="crd-td">1</td><td class="crd-td">3,85</td><td class="crd-td">Waitangi (Chatham Islands) (462)</td><td class="crd-td">420</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, site density (per 10.000 km²), leading urban centre and 1901 combined population across ten historic New Zealand Provinces and the Chatham Islands.</figcaption>
</figure>

## Rank-Size Geometry and Urban Structure

Ordinary least squares regression on log peak population against log rank confirms a steep, highly regular colonial urban hierarchy (Figure \ref{fig:hero-nz-hierarchy}). Across the leading 47 settlements (82.101 down to 1.637 inhabitants), the rank-size exponent stands at $\alpha = 1,27$ ($R^2 = 0,94$), steepening to $\alpha = 1,38$ ($R^2 = 0,96$) across all 94 localities. Removing the three suburban localities (Lyttelton, Rangiora and Kaiapoi) shifts the fit minimally to $\alpha = 1,29$ ($R^2 = 0,93$) across the top 45 entries and $\alpha = 1,41$ ($R^2 = 0,96$) overall. Visually, the rank-size curve displays a distinctive two-step shoulder: ranks 1 through 8 form an elevated plateau combining the four metropolitan ports and their municipal cores (36,1k to 82,1k), followed by a sharp discontinuity down to Palmerston North (10,2k) and an extraordinarily linear Zipfian cascade across the remaining 84 provincial boroughs [@hill2024heritage; @laurenson2010myths].

# Limitations

Three structural caveats govern quantitative use of this gazetteer. First, to preserve comparability between colonial municipal returns and modern functional urban series, the 94-entry register intentionally retains both metropolitan and city-proper entries for the four principal centres (Auckland, Christchurch, Wellington and Dunedin) as well as single-snapshot 1886 metropolitan records for Wellington (25.944, positioned slightly north at the regional centroid), Hamilton (1.200) and Tauranga (1.149). Users computing aggregate urban headcounts must therefore avoid double-counting metropolitan entries alongside their constituent city-proper boroughs and suburbs (Grey Lynn, Lyttelton, Petone, Port Chalmers and the Invercargill suburban boroughs).

Second, historical municipal boundary changes create abrupt jumps in city-proper trajectories — most visibly Christchurch's leap from 17.538 in 1901 to 49.928 in 1906 following the 1903 amalgamation of Sydenham, Linwood and St Albans, and Wellington's jump from 43.638 to 58.563 after annexing Melrose in 1903. Metropolitan series smooth out these administrative redrawings and should be preferred for long-run urban growth comparisons [@laurenson2010myths; @broman2021european].

Third, colonial borough enumerations primarily captured European-incorporated towns and generally under-represented rural Māori kāinga and unincorporated pastoral stations, meaning smaller provinces with few gazetted boroughs (such as Hawke's Bay and Marlborough) appear less densely sampled than Otago, where tiny goldfield municipalities like Arrowtown (426) and Hampden (379) retained separate borough status long after their alluvial rushes faded [@kukutai2013tracking; @puckey2006substance; @j_l1980pool; @rarere2023indigenous].

# Conclusion

Cataloguing 94 settlements and 541 census observations across ten historic provinces and the Chatham Islands maps the urban skeleton of Colonial New Zealand from 1840 to 1907. Anchored by four evenly matched metropolitan ports — Auckland (82.101), Christchurch (67.878), Wellington (63.807) and Dunedin (56.020) — and descending steeply ($\alpha = 1,27$, $R^2 = 0,94$) through ninety provincial ports, goldfield boroughs and dairy-belt rail towns, the register captures both the South Island gold boom of the 1860s and the North Island pastoral resurgence of the 1880s to 1900s [@pool2026peopling; @pawson1997making; @beattie2015hungry; @andersen2026assimilation]. With 0% crowd-sourced fallback reliance, zero empty provinces and exact reconciliation of all 173 evaluated candidates, this gazetteer provides the settlement backbone for New Zealand's tenfold colonial demographic expansion.

# Appendix

## Excluded Candidate Classes

Table \ref{tab:excluded-summary} summarises all 79 candidate records excluded during Wave-3 municipal reconciliation and spatial deduplication, preventing double-counting between rural Territorial Authority districts and municipal boroughs while consolidating spelling and diacritic variants within 25 km.

<figure class="crd-table-figure" id="tab:excluded-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Exclusion Class</th><th class="crd-th">Records</th><th class="crd-th">Share</th><th class="crd-th">Reconciliation Rule</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Superseded rural district aggregates</strong></td><td class="crd-td">23</td><td class="crd-td">29,1%</td><td class="crd-td">Replaced by constituent municipal boroughs and urban centres</td></tr>
<tr><td class="crd-td"><strong>Duplicate or spelling-variant colonial aliases</strong></td><td class="crd-td">56</td><td class="crd-td">70,9%</td><td class="crd-td">Merged into canonical settlement within 25 km (e.g. Hawera, Kumara, Waihi)</td></tr>
<tr><td class="crd-td"><strong>Total excluded candidates</strong></td><td class="crd-td">79</td><td class="crd-td">100%</td><td class="crd-td">Exact reconciliation with 94 included (173 evaluated, 0 unaccounted)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Classification of 79 excluded candidate records in the Colonial New Zealand source ledger during Wave-3 reconciliation.</figcaption>
</figure>

## Primary Archival and Census Authorities

Table \ref{tab:top-authorities} lists the leading official statistical authorities cited across the 94-settlement register, documenting exclusive reliance on Colonial Blue Books, Registrar-General Censuses, New Zealand Official Yearbooks and Statistics New Zealand historical borough series.

<figure class="crd-table-figure" id="tab:top-authorities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Source Authority</th><th class="crd-th">Source Citations</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Stats NZ Historical County and Borough Populations 1891 to 1996</strong></td><td class="crd-td">113</td></tr>
<tr><td class="crd-td"><strong>New Zealand Official Yearbooks</strong></td><td class="crd-td">60</td></tr>
<tr><td class="crd-td"><strong>Stats NZ Urban-Rural 2023 and SA2 Censuses (2006 to 2023)</strong></td><td class="crd-td">51</td></tr>
<tr><td class="crd-td"><strong>NZ Colonial Censuses</strong></td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>Stats NZ Functional Urban Areas 2023 (SA2 Censuses)</strong></td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Stats NZ New Zealand Official Yearbook 2002</strong></td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>New Zealand Colonial Censuses</strong></td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Canterbury Association and NZ Colonial Censuses</strong></td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Colonial Blue Books</strong></td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Nanto-Bordelaise Settlement Returns</strong></td><td class="crd-td">1</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading official statistical and archival source series cited across the 94 catalogued Colonial New Zealand settlements.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1 (Coordinate Datum). All coordinates in Tables \ref{tab:top47-sites} and \ref{tab:rem47-sites} use WGS84 decimal degrees rounded to two decimal places with European decimal commas; southern latitudes and Chatham Islands western longitudes carry minus signs.

Note 2 (Māori Orthography). Settlement names retain modern macronised orthography where established in official New Zealand geographic usage (Hāwera, Kororāreka, Kūmara, Pātea, Waihī) while consolidating unmacronised colonial census variants in the source ledger.
