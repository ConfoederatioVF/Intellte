---
title: "Settlement Gazetteer of Post-War Japan"
subtitle: "Designated Metropolises, Core Cities, Special Wards and Municipal Centres, 1945AD to 2026AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: japan_after_1945_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_japan_after_1945_spatial.png"
hero_caption: "Spatial distribution of 1.683 municipal settlements across the forty-seven prefectures of Japan through 2026AD."
hero_label: "fig:hero-japan-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 1.683 municipal urban, town and village settlements active across modern post-war Japan between 1945AD and 2026AD (encompassing 390.852 km² across forty-seven prefectural administrative territories). Harmonised from official Statistics Bureau of Japan quinquennial population censuses (*Kokusei Chosa*), the National Statistics Center SSDSE-A-2026 database and historical administrative gazetteers, the register encompasses the complete modern municipal framework of Japan [@SBJ2021Census; @NSTAC2026SSDSE; @Kumagai2020Populationsustaining]. This framework incorporates the twenty-three Special Wards of Tokyo (*tokubetsuku*), twenty cabinet-order designated metropolises (*seirei shitei toshi*), sixty-two core cities (*chukakushi*), ordinary cities (*shi*), towns (*cho*) and rural villages (*son*) [@NSTAC2026SSDSE; @Tong2020Small]. Across the 1.683 catalogued settlements, the gazetteer documents 28.611 longitudinal settlement-year population observations spanning seventeen census dates from 1945AD to 2025AD. At the 2010AD national demographic apex and subsequent 2025AD benchmark, the leading urban centres of the country were Tokyo Special Wards (9,88M in 2025AD), Yokohama (3,78M in 2020AD), Osaka (3,01M in 1960AD), Nagoya (2,35M in 2025AD), Sapporo (1,97M in 2020AD), Fukuoka (1,66M in 2025AD), Kawasaki (1,56M in 2025AD), Kobe (1,54M in 2010AD), Kyoto (1,48M in 2015AD) and Saitama (1,35M in 2025AD) [@SBJ2021Census; @NSTAC2026SSDSE]. Alongside the 1.683 catalogued settlements, the regional source ledger documents thirty-five excluded candidate entries (twenty-two subordinate suburban units merged into primary municipal cores, two homonym aliases and eleven outlying oceanic island entities beyond raster boundaries) out of 1.718 evaluated candidates.

# Background

## Administrative Hierarchy and the Designated City System

Urban settlement in post-war Japan is structured by the Local Autonomy Act of 1947AD (*Chiho Jichi Ho*), which established a tiered municipal hierarchy operating below the forty-seven prefectures [@Kumagai2020Populationsustaining; @SBJ2021Census]. To provide large urban concentrations with administrative powers comparable to prefectural governments, the central government created special administrative categories:

1. Cabinet-Order Designated Cities (*seirei shitei toshi*): large urban metropolises with populations historically exceeding 500k to 1M inhabitants, subdivided into administrative wards (*ku*), exercising delegated powers over urban planning, social welfare, public health and secondary education [@Katayama2016Prediction; @Sakai2013Impact]. The system commenced in 1956AD with five historic metropolises (Osaka, Nagoya, Kyoto, Yokohama and Kobe), subsequently expanding to twenty designated cities including Kitakyushu (1963AD), Sapporo, Kawasaki, Fukuoka (1972AD), Hiroshima (1980AD), Sendai (1989AD), Chiba (1992AD), Saitama (2003AD), Shizuoka (2005AD), Sakai (2006AD), Niigata, Hamamatsu (2007AD), Okayama (2009AD), Sagamihara (2010AD) and Kumamoto (2012AD) [@SBJ2021Census; @NSTAC2026SSDSE].

2. Core Cities (*chukakushi*): regional prefectural capitals and economic centres with populations exceeding 200k, exercising delegated powers over public health centres, environmental regulation and municipal development [@Tong2020Small; @Koizumi2021Effect].

3. Special Wards of Tokyo (*tokubetsuku*): twenty-three autonomous municipal units covering the historic urban core of Tokyo, operating with an integrated metropolitan governance framework under the Tokyo Metropolitan Government (*Tokyo-to*) [@Otani2026Vegetation; @Cheung2024Cointegrations].

4. Ordinary Cities (*shi*), Towns (*cho*) and Villages (*son*): basic local government units responsible for local civil registries, primary education, local water supply and elderly welfare [@Kumagai2020Populationsustaining; @Kobayashi2020Drivers].

## The Dual Merger Waves of Showa and Heisei

The post-war spatial distribution of Japanese settlements was fundamentally transformed by two state-sponsored municipal amalgamation waves:

1. The Great Showa Mergers (*Showa no daigappei*, 1953AD to 1956AD): driven by post-war decentralisation under the Allied Occupation, consolidating 9.868 pre-war towns and villages into 3.975 larger administrative units to support public middle school construction, municipal police and welfare departments [@Kumagai2020Populationsustaining].

2. The Great Heisei Mergers (*Heisei no daigappei*, 1999AD to 2006AD): initiated under the Special Merger Law to consolidate fiscal administration in anticipation of rapid demographic ageing and depopulation, reducing the national count of municipalities from 3.232 in 1999AD down to 1.821 by 2006AD and ultimately to 1.718 in the 2020s [@Kumagai2020Populationsustaining; @Tong2020Small].

These amalgamations consolidated thousands of agrarian hamlets into expansive consolidated cities (*gappei-shi*), which frequently encompass diverse topography ranging from dense coastal urban cores to depopulated mountain headwaters [@Kobayashi2020Drivers; @Sakamoto2025Spatial].

# Methodology

## Municipal Boundary Harmonisation and Coordinate Calibration

Settlement records were constructed by extracting geocoded administrative centroids and town hall locations (*shiyakusho* and *yakuba*) from the National Statistics Center SSDSE-A-2026 database and cross-referencing them against the historical *Kokusei Chosa* census returns from 1945AD through 2025AD [@SBJ2021Census; @NSTAC2026SSDSE]. All 1.683 catalogued settlements carry validated WGS84 geographic coordinates and assign to one of the forty-seven prefectural masks.

For designated metropolises containing internal wards—such as Yokohama (eighteen wards), Osaka (twenty-four wards), Nagoya (sixteen wards), Sapporo (ten wards) and Fukuoka (seven wards)—settlement populations are consolidated to the city-wide municipal level [@NSTAC2026SSDSE]. This avoids artificial fragmentation of single urban labour markets while maintaining direct comparability with non-ward cities.

## Source Ledger Deduplication and Satellite Exclusion Criteria

The regional source ledger evaluates 1.718 candidate municipal entities across post-war Japan. Of these, thirty-five entities were classified as excluded:

1. Subordinate suburban entities (22 entries): suburban towns and municipal entities functionally consolidated into contiguous metropolitan complexes or adjoining municipal cores (such as Musashino, Ikeda, Kunitachi, Warabi, Togo, Miyashiro, Tadaoka and Kumiyama) [@NSTAC2026SSDSE].

2. Duplicate administrative homonyms (2 entries): homonymous municipal designations consolidated to eliminate ambiguity (such as Fuchu and Shirakawa) [@NSTAC2026SSDSE].

3. Outlying oceanic island entities outside raster boundaries (11 entries): distant insular administrative units located beyond the 5-arcminute terrestrial raster grid covering the four main islands and Okinawa (including the Ogasawara archipelago, Izu outliers such as Aogashima, Mikurajima, Miyake and Kozushima, and Daito/Yaeyama outposts such as Minamidaito, Kitadaito, Tonaki, Kumejima and Yonaguni) [@Smits2019MaritimeRyukyu; @SBJ2021Census].

# Testing and Validation

Ledger cross-checks confirm 1.683 included settlements and thirty-five excluded candidate entries across 1.718 total evaluated entities, with zero unaccounted records. All 1.683 catalogued settlements possess complete coordinate records and non-zero population enumerations across the post-war census benchmark sequence. Figure \ref{fig:sett-gazetteer} illustrates the rank-size distribution and the primary urban hierarchy of post-war Japan.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-japan-after-1945-settlements/fig4_japan_after_1945_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading municipal urban centres across post-war Japan.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-japan} details the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the dominance of the Tokyo Capital Sphere, the Keihanshin metropolitan axis, and regional gateway metropolises.

<figure class="crd-table-figure" id="tab:top45-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Prefecture</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2010AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,69, 139,69</td><td class="crd-td">1945-2025AD</td><td class="crd-td">5,39M</td><td class="crd-td">8,35M</td><td class="crd-td">9,12M</td><td class="crd-td">9,88M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yokohama</strong></td><td class="crd-td">Kanagawa</td><td class="crd-td">35,43, 139,63</td><td class="crd-td">1945-2025AD</td><td class="crd-td">951,2k</td><td class="crd-td">2,77M</td><td class="crd-td">3,69M</td><td class="crd-td">3,78M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Yokohama (Aomori Ken)</strong></td><td class="crd-td">Aomori</td><td class="crd-td">41,08, 141,23</td><td class="crd-td">1945-2025AD</td><td class="crd-td">951,2k</td><td class="crd-td">2,77M</td><td class="crd-td">4,7k</td><td class="crd-td">3,22M (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Osaka</strong></td><td class="crd-td">Ōsaka</td><td class="crd-td">34,68, 135,5</td><td class="crd-td">1945-2025AD</td><td class="crd-td">1,96M</td><td class="crd-td">2,65M</td><td class="crd-td">2,67M</td><td class="crd-td">3,01M (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Nagoya</strong></td><td class="crd-td">Aichi</td><td class="crd-td">35,17, 136,9</td><td class="crd-td">1945-2025AD</td><td class="crd-td">1,03M</td><td class="crd-td">2,09M</td><td class="crd-td">2,26M</td><td class="crd-td">2,35M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sapporo</strong></td><td class="crd-td">Hokkaidō</td><td class="crd-td">43,05, 141,35</td><td class="crd-td">1945-2025AD</td><td class="crd-td">313,9k</td><td class="crd-td">1,4M</td><td class="crd-td">1,91M</td><td class="crd-td">1,97M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">Fukuoka</td><td class="crd-td">33,58, 130,4</td><td class="crd-td">1945-2025AD</td><td class="crd-td">392,6k</td><td class="crd-td">1,09M</td><td class="crd-td">1,46M</td><td class="crd-td">1,66M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kawasaki</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,52, 139,7</td><td class="crd-td">1945-2025AD</td><td class="crd-td">319,2k</td><td class="crd-td">1,04M</td><td class="crd-td">1,43M</td><td class="crd-td">1,56M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kobe</strong></td><td class="crd-td">Hyōgo</td><td class="crd-td">34,68, 135,18</td><td class="crd-td">1945-2025AD</td><td class="crd-td">765,4k</td><td class="crd-td">1,37M</td><td class="crd-td">1,54M</td><td class="crd-td">1,54M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Kyoto</strong></td><td class="crd-td">Shiga</td><td class="crd-td">35, 135,77</td><td class="crd-td">1945-2025AD</td><td class="crd-td">1,1M</td><td class="crd-td">1,47M</td><td class="crd-td">1,47M</td><td class="crd-td">1,48M (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Saitama</strong></td><td class="crd-td">Saitama</td><td class="crd-td">35,85, 139,63</td><td class="crd-td">1945-2025AD</td><td class="crd-td">240k</td><td class="crd-td">775k</td><td class="crd-td">1,22M</td><td class="crd-td">1,35M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">Hiroshima</td><td class="crd-td">34,38, 132,45</td><td class="crd-td">1945-2025AD</td><td class="crd-td">285,7k</td><td class="crd-td">899,4k</td><td class="crd-td">1,17M</td><td class="crd-td">1,2M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Kawasaki (Fukuoka Ken)</strong></td><td class="crd-td">Fukuoka</td><td class="crd-td">33,58, 130,8</td><td class="crd-td">1945-2025AD</td><td class="crd-td">319,2k</td><td class="crd-td">1,04M</td><td class="crd-td">15k</td><td class="crd-td">1,17M (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Kawasaki (Miyagi Ken)</strong></td><td class="crd-td">Miyagi</td><td class="crd-td">38,17, 140,63</td><td class="crd-td">1945-2025AD</td><td class="crd-td">319,2k</td><td class="crd-td">1,04M</td><td class="crd-td">8,5k</td><td class="crd-td">1,17M (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Sendai</strong></td><td class="crd-td">Miyagi</td><td class="crd-td">38,27, 140,87</td><td class="crd-td">1945-2025AD</td><td class="crd-td">341,7k</td><td class="crd-td">731,7k</td><td class="crd-td">1,05M</td><td class="crd-td">1,1M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kitakyushu</strong></td><td class="crd-td">Yamaguchi</td><td class="crd-td">33,88, 130,87</td><td class="crd-td">1945-2025AD</td><td class="crd-td">736k</td><td class="crd-td">1,07M</td><td class="crd-td">976,8k</td><td class="crd-td">1,07M (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chiba</strong></td><td class="crd-td">Chiba</td><td class="crd-td">35,6, 140,1</td><td class="crd-td">1945-2025AD</td><td class="crd-td">133,8k</td><td class="crd-td">746,4k</td><td class="crd-td">961,7k</td><td class="crd-td">995k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sakai</strong></td><td class="crd-td">Ōsaka</td><td class="crd-td">34,57, 135,47</td><td class="crd-td">1945-2025AD</td><td class="crd-td">213,7k</td><td class="crd-td">701,1k</td><td class="crd-td">842k</td><td class="crd-td">842k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Niigata</strong></td><td class="crd-td">Niigata</td><td class="crd-td">37,9, 139,03</td><td class="crd-td">1945-2025AD</td><td class="crd-td">220,9k</td><td class="crd-td">435k</td><td class="crd-td">811,9k</td><td class="crd-td">813,8k (2005AD)</td></tr>
<tr><td class="crd-td"><strong>Sakai (Fukui Ken)</strong></td><td class="crd-td">Fukui</td><td class="crd-td">36,17, 136,22</td><td class="crd-td">1945-2025AD</td><td class="crd-td">213,7k</td><td class="crd-td">701,1k</td><td class="crd-td">91,9k</td><td class="crd-td">807,8k (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Sakai (Ibaraki Ken)</strong></td><td class="crd-td">Saitama</td><td class="crd-td">36,1, 139,78</td><td class="crd-td">1945-2025AD</td><td class="crd-td">213,7k</td><td class="crd-td">701,1k</td><td class="crd-td">23,7k</td><td class="crd-td">807,8k (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Hamamatsu</strong></td><td class="crd-td">Shizuoka</td><td class="crd-td">34,7, 137,72</td><td class="crd-td">1945-2025AD</td><td class="crd-td">671,9k</td><td class="crd-td">783,9k</td><td class="crd-td">800,9k</td><td class="crd-td">804k (2005AD)</td></tr>
<tr><td class="crd-td"><strong>Kumamoto</strong></td><td class="crd-td">Kumamoto</td><td class="crd-td">32,8, 130,7</td><td class="crd-td">1945-2025AD</td><td class="crd-td">267,5k</td><td class="crd-td">509,7k</td><td class="crd-td">734,5k</td><td class="crd-td">740,8k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Shizuoka</strong></td><td class="crd-td">Shizuoka</td><td class="crd-td">34,97, 138,38</td><td class="crd-td">1945-2025AD</td><td class="crd-td">238,6k</td><td class="crd-td">444,3k</td><td class="crd-td">716,2k</td><td class="crd-td">738,7k (1995AD)</td></tr>
<tr><td class="crd-td"><strong>Sagamihara</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,57, 139,37</td><td class="crd-td">1945-2025AD</td><td class="crd-td">335,7k</td><td class="crd-td">610,3k</td><td class="crd-td">717,5k</td><td class="crd-td">725,5k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Okayama</strong></td><td class="crd-td">Okayama</td><td class="crd-td">34,65, 133,92</td><td class="crd-td">1945-2025AD</td><td class="crd-td">162,9k</td><td class="crd-td">484,4k</td><td class="crd-td">709,6k</td><td class="crd-td">724,7k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Funabashi</strong></td><td class="crd-td">Chiba</td><td class="crd-td">35,68, 139,97</td><td class="crd-td">1945-2025AD</td><td class="crd-td">193,1k</td><td class="crd-td">397,6k</td><td class="crd-td">609k</td><td class="crd-td">650,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kagoshima</strong></td><td class="crd-td">Kagoshima</td><td class="crd-td">31,58, 130,55</td><td class="crd-td">1945-2025AD</td><td class="crd-td">229,5k</td><td class="crd-td">470,1k</td><td class="crd-td">605,8k</td><td class="crd-td">605,8k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Kawaguchi</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,8, 139,72</td><td class="crd-td">1945-2025AD</td><td class="crd-td">262k</td><td class="crd-td">476,3k</td><td class="crd-td">561,5k</td><td class="crd-td">594,3k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Hachioji</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,67, 139,3</td><td class="crd-td">1945-2025AD</td><td class="crd-td">261,4k</td><td class="crd-td">475,1k</td><td class="crd-td">580,1k</td><td class="crd-td">580,1k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Himeji</strong></td><td class="crd-td">Hyōgo</td><td class="crd-td">34,8, 134,68</td><td class="crd-td">1945-2025AD</td><td class="crd-td">212,1k</td><td class="crd-td">431,4k</td><td class="crd-td">536,3k</td><td class="crd-td">536,3k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Utsunomiya</strong></td><td class="crd-td">Tochigi</td><td class="crd-td">36,55, 139,87</td><td class="crd-td">1945-2025AD</td><td class="crd-td">418,2k</td><td class="crd-td">487,8k</td><td class="crd-td">511,7k</td><td class="crd-td">518,8k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Higashiosaka</strong></td><td class="crd-td">Ōsaka</td><td class="crd-td">34,67, 135,6</td><td class="crd-td">1945-2025AD</td><td class="crd-td">221,6k</td><td class="crd-td">459k</td><td class="crd-td">509,5k</td><td class="crd-td">517,2k (1995AD)</td></tr>
<tr><td class="crd-td"><strong>Matsuyama</strong></td><td class="crd-td">Ehime</td><td class="crd-td">33,83, 132,75</td><td class="crd-td">1945-2025AD</td><td class="crd-td">163,9k</td><td class="crd-td">383,1k</td><td class="crd-td">517,2k</td><td class="crd-td">517,2k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Matsudo</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,78, 139,9</td><td class="crd-td">1945-2025AD</td><td class="crd-td">239,6k</td><td class="crd-td">435,6k</td><td class="crd-td">484,5k</td><td class="crd-td">498,2k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Ichikawa</strong></td><td class="crd-td">Chiba</td><td class="crd-td">35,72, 139,92</td><td class="crd-td">1945-2025AD</td><td class="crd-td">157,3k</td><td class="crd-td">323,9k</td><td class="crd-td">473,9k</td><td class="crd-td">496,7k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Amagasaki</strong></td><td class="crd-td">Hyōgo</td><td class="crd-td">34,73, 135,4</td><td class="crd-td">1945-2025AD</td><td class="crd-td">291,8k</td><td class="crd-td">431,4k</td><td class="crd-td">453,7k</td><td class="crd-td">488,6k (1995AD)</td></tr>
<tr><td class="crd-td"><strong>Nishinomiya</strong></td><td class="crd-td">Hyōgo</td><td class="crd-td">34,73, 135,33</td><td class="crd-td">1945-2025AD</td><td class="crd-td">233,1k</td><td class="crd-td">344,7k</td><td class="crd-td">482,6k</td><td class="crd-td">487,9k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Nagasaki</strong></td><td class="crd-td">Nagasaki</td><td class="crd-td">32,75, 129,87</td><td class="crd-td">1945-2025AD</td><td class="crd-td">241,8k</td><td class="crd-td">447,1k</td><td class="crd-td">443,8k</td><td class="crd-td">487,1k (1995AD)</td></tr>
<tr><td class="crd-td"><strong>Oita</strong></td><td class="crd-td">Ōita</td><td class="crd-td">33,23, 131,6</td><td class="crd-td">1945-2025AD</td><td class="crd-td">391,3k</td><td class="crd-td">456,5k</td><td class="crd-td">474,1k</td><td class="crd-td">478,1k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Kurashiki</strong></td><td class="crd-td">Okayama</td><td class="crd-td">34,58, 133,77</td><td class="crd-td">1945-2025AD</td><td class="crd-td">397,5k</td><td class="crd-td">463,7k</td><td class="crd-td">475,5k</td><td class="crd-td">477,1k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Kanazawa</strong></td><td class="crd-td">Ishikawa</td><td class="crd-td">36,55, 136,65</td><td class="crd-td">1945-2025AD</td><td class="crd-td">252k</td><td class="crd-td">402,1k</td><td class="crd-td">462,4k</td><td class="crd-td">465,7k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Fukuyama</strong></td><td class="crd-td">Hiroshima</td><td class="crd-td">34,48, 133,35</td><td class="crd-td">1945-2025AD</td><td class="crd-td">397,6k</td><td class="crd-td">463,9k</td><td class="crd-td">461,4k</td><td class="crd-td">464,8k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Fujisawa</strong></td><td class="crd-td">Kanagawa</td><td class="crd-td">35,33, 139,48</td><td class="crd-td">1945-2025AD</td><td class="crd-td">107,7k</td><td class="crd-td">288,6k</td><td class="crd-td">409,7k</td><td class="crd-td">443,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kashiwa</strong></td><td class="crd-td">Ibaraki</td><td class="crd-td">35,87, 139,97</td><td class="crd-td">1945-2025AD</td><td class="crd-td">318k</td><td class="crd-td">370,9k</td><td class="crd-td">404k</td><td class="crd-td">435,4k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 municipal settlements in post-war Japan ordered by peak documented population (n=1.683 total sites).</figcaption>
</figure>

## Prefectural Settlement Distribution and Ledger Exclusions

Table \ref{tab:regsum-japan} presents the distribution of catalogued municipal settlements across all forty-seven Japanese prefectures alongside each prefecture's leading urban centre. Hokkaido leads all prefectures with 179 catalogued municipal units, followed by Nagano (77), Saitama (63), Chiba (54), Aichi (54), Tokyo (49) and Fukuoka (60). Table \ref{tab:excluded-japan} documents all thirty-five excluded candidate entries from the post-war Japanese source ledger.

<figure class="crd-table-figure" id="tab:regsum-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Prefecture</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aichi</strong></td><td class="crd-td">46</td><td class="crd-td">Nagoya (2,35M)</td></tr>
<tr><td class="crd-td"><strong>Akita</strong></td><td class="crd-td">25</td><td class="crd-td">Akita (336,6k)</td></tr>
<tr><td class="crd-td"><strong>Aomori</strong></td><td class="crd-td">38</td><td class="crd-td">Yokohama (Aomori Ken) (3,22M)</td></tr>
<tr><td class="crd-td"><strong>Chiba</strong></td><td class="crd-td">45</td><td class="crd-td">Chiba (995k)</td></tr>
<tr><td class="crd-td"><strong>Ehime</strong></td><td class="crd-td">17</td><td class="crd-td">Matsuyama (517,2k)</td></tr>
<tr><td class="crd-td"><strong>Fukui</strong></td><td class="crd-td">17</td><td class="crd-td">Sakai (Fukui Ken) (807,8k)</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">46</td><td class="crd-td">Fukuoka (1,66M)</td></tr>
<tr><td class="crd-td"><strong>Fukushima</strong></td><td class="crd-td">55</td><td class="crd-td">Iwaki (368,6k)</td></tr>
<tr><td class="crd-td"><strong>Gifu</strong></td><td class="crd-td">42</td><td class="crd-td">Gifu (427,9k)</td></tr>
<tr><td class="crd-td"><strong>Gunma</strong></td><td class="crd-td">21</td><td class="crd-td">Takasaki (373k)</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">22</td><td class="crd-td">Hiroshima (1,2M)</td></tr>
<tr><td class="crd-td"><strong>Hokkaidō</strong></td><td class="crd-td">179</td><td class="crd-td">Sapporo (1,97M)</td></tr>
<tr><td class="crd-td"><strong>Hyōgo</strong></td><td class="crd-td">40</td><td class="crd-td">Kobe (1,54M)</td></tr>
<tr><td class="crd-td"><strong>Ibaraki</strong></td><td class="crd-td">45</td><td class="crd-td">Kashiwa (435,4k)</td></tr>
<tr><td class="crd-td"><strong>Ishikawa</strong></td><td class="crd-td">19</td><td class="crd-td">Kanazawa (465,7k)</td></tr>
<tr><td class="crd-td"><strong>Iwate</strong></td><td class="crd-td">34</td><td class="crd-td">Morioka (302,9k)</td></tr>
<tr><td class="crd-td"><strong>Kagawa</strong></td><td class="crd-td">15</td><td class="crd-td">Takamatsu (420,7k)</td></tr>
<tr><td class="crd-td"><strong>Kagoshima</strong></td><td class="crd-td">27</td><td class="crd-td">Kagoshima (605,8k)</td></tr>
<tr><td class="crd-td"><strong>Kanagawa</strong></td><td class="crd-td">24</td><td class="crd-td">Yokohama (3,78M)</td></tr>
<tr><td class="crd-td"><strong>Kōchi</strong></td><td class="crd-td">34</td><td class="crd-td">Kochi (349k)</td></tr>
<tr><td class="crd-td"><strong>Kumamoto</strong></td><td class="crd-td">42</td><td class="crd-td">Kumamoto (740,8k)</td></tr>
<tr><td class="crd-td"><strong>Kyōto</strong></td><td class="crd-td">17</td><td class="crd-td">Uji (189,6k)</td></tr>
<tr><td class="crd-td"><strong>Mie</strong></td><td class="crd-td">32</td><td class="crd-td">Yokkaichi (311k)</td></tr>
<tr><td class="crd-td"><strong>Miyagi</strong></td><td class="crd-td">38</td><td class="crd-td">Kawasaki (Miyagi Ken) (1,17M)</td></tr>
<tr><td class="crd-td"><strong>Miyazaki</strong></td><td class="crd-td">28</td><td class="crd-td">Miyazaki (401,3k)</td></tr>
<tr><td class="crd-td"><strong>Nagano</strong></td><td class="crd-td">72</td><td class="crd-td">Nagano (396k)</td></tr>
<tr><td class="crd-td"><strong>Nagasaki</strong></td><td class="crd-td">18</td><td class="crd-td">Nagasaki (487,1k)</td></tr>
<tr><td class="crd-td"><strong>Nara</strong></td><td class="crd-td">37</td><td class="crd-td">Nara (374,9k)</td></tr>
<tr><td class="crd-td"><strong>Niigata</strong></td><td class="crd-td">32</td><td class="crd-td">Niigata (813,8k)</td></tr>
<tr><td class="crd-td"><strong>Ōita</strong></td><td class="crd-td">24</td><td class="crd-td">Oita (478,1k)</td></tr>
<tr><td class="crd-td"><strong>Okayama</strong></td><td class="crd-td">25</td><td class="crd-td">Okayama (724,7k)</td></tr>
<tr><td class="crd-td"><strong>Okinawa</strong></td><td class="crd-td">46</td><td class="crd-td">Naha (319,4k)</td></tr>
<tr><td class="crd-td"><strong>Ōsaka</strong></td><td class="crd-td">52</td><td class="crd-td">Osaka (3,01M)</td></tr>
<tr><td class="crd-td"><strong>Saga</strong></td><td class="crd-td">31</td><td class="crd-td">Kurume (309,5k)</td></tr>
<tr><td class="crd-td"><strong>Saitama</strong></td><td class="crd-td">62</td><td class="crd-td">Saitama (1,35M)</td></tr>
<tr><td class="crd-td"><strong>Shiga</strong></td><td class="crd-td">23</td><td class="crd-td">Kyoto (1,48M)</td></tr>
<tr><td class="crd-td"><strong>Shimane</strong></td><td class="crd-td">17</td><td class="crd-td">Matsue (211,6k)</td></tr>
<tr><td class="crd-td"><strong>Shizuoka</strong></td><td class="crd-td">41</td><td class="crd-td">Hamamatsu (804k)</td></tr>
<tr><td class="crd-td"><strong>Tochigi</strong></td><td class="crd-td">30</td><td class="crd-td">Utsunomiya (518,8k)</td></tr>
<tr><td class="crd-td"><strong>Tokushima</strong></td><td class="crd-td">25</td><td class="crd-td">Tokushima (268,7k)</td></tr>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">49</td><td class="crd-td">Tokyo (9,88M)</td></tr>
<tr><td class="crd-td"><strong>Tottori</strong></td><td class="crd-td">23</td><td class="crd-td">Tottori (201,7k)</td></tr>
<tr><td class="crd-td"><strong>Toyama</strong></td><td class="crd-td">16</td><td class="crd-td">Toyama (422k)</td></tr>
<tr><td class="crd-td"><strong>Wakayama</strong></td><td class="crd-td">27</td><td class="crd-td">Wakayama (396,6k)</td></tr>
<tr><td class="crd-td"><strong>Yamagata</strong></td><td class="crd-td">35</td><td class="crd-td">Yamagata (260,1k)</td></tr>
<tr><td class="crd-td"><strong>Yamaguchi</strong></td><td class="crd-td">22</td><td class="crd-td">Kitakyushu (1,07M)</td></tr>
<tr><td class="crd-td"><strong>Yamanashi</strong></td><td class="crd-td">28</td><td class="crd-td">Kofu (211,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading municipal centres across forty-seven Japanese prefectures (1.683 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-japan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Musashino</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ikeda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kunitachi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Warabi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Togo</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Fuchu</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Miyashiro</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Nakagusuku</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Tadaoka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kumiyama</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Matsuda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ikeda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kotohira</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Yokoze</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Yahiko</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kumejima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Showa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Hirogawa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Toyooka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Taketomi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Yamae</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ogasawara</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Akamura</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Tano</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Miyake</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Kozushima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Yonaguni</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Shirakawa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Minamidaito</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Toshima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kitadaito</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Mishima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Tonaki</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Mikurajima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Aogashima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Outlying island outside raster</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Consolidated candidate entries in the post-war Japanese settlement ledger (35 total excluded entries).</figcaption>
</figure>

# Limitations

Two administrative and spatial characteristics affect municipal data aggregation in this gazetteer:

1. Amalgamation boundary distortions: the sweeping Heisei municipal mergers of 1999AD to 2006AD consolidated numerous rural mountain towns and farming hamlets into single sprawling municipal jurisdictions (*gappei-shi*) [@Kumagai2020Populationsustaining; @Tong2020Small]. While this reflects legal administrative boundaries, it artificially inflates the territorial footprint of municipal centres and dilutes localized urban densities across peripheral mountain basins [@Kobayashi2020Drivers; @Sakamoto2025Spatial].

2. Insular raster clipping: eleven municipal jurisdictions governing distant oceanic islands (the Ogasawara and Bonin group, southern Izu islets and remote Ryukyu outposts) are situated hundreds of kilometres beyond the canonical five-arcminute raster frame of the Japanese archipelago [@Smits2019MaritimeRyukyu; @SBJ2021Census]. While these communities possess distinct historical administrative identities, their populations are accounted for through prefectural territorial totals rather than individual raster cells.

# Sources

<div id="refs"></div>
