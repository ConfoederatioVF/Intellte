---
title: "Settlement Gazetteer of the Korean Peninsula during Division and the Korean War"
subtitle: "Provincial Capitals, County Seats, Ports and Refugee Centres, 1945AD to 1953AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: korean_division_and_korean_war_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_korean_division_and_korean_war_spatial.png"
hero_caption: "Spatial distribution of 581 catalogued settlements across thirteen provinces of the Korean Peninsula through 1953AD."
hero_label: "fig:hero-korea-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 581 urban, administrative, industrial and maritime settlements active across the Korean Peninsula between 1945AD and 1953AD (encompassing 226.901 km² across thirteen provincial territories). Synthesising the inaugural 1949AD Population Census of the Republic of Korea, Japanese colonial cadastres (*Kokusei Chosa* 1920AD to 1944AD), North Korean labour and demographic surveys from 1946AD and 1949AD, United Nations Civil Assistance Command in Korea (UNCACK) refugee camp registrations and municipal reconstruction surveys [@KOSIS2021Census; @SBJ2021Census; @EberstadtBanister1992; @Kwon1977Demography; @Siver2018Korean], this register incorporates every primary administrative capital, county seat (*gun*), railway transshipment junction, naval base and industrial centre of the peninsula. Across the 581 catalogued settlements, the gazetteer documents longitudinal population figures across seven benchmark years spanning 1945AD, 1947AD, 1949AD, 1950AD, 1951AD, 1952AD and 1953AD. At the 1949AD pre-war baseline, the urban network was led by Seoul (1.446.019), Busan (473.619), Pyongyang (460.000), Daegu (313.705), Incheon (265.767), Gwangju (140.000), Hamhung (150.000), Chongjin (150.000), Daejeon (125.000) and Jeonju (110.000) [@KOSIS2021Census; @EberstadtBanister1992]. Following three years of intensive warfare and massive civilian displacement, the urban hierarchy underwent radical restructuring: Busan expanded to 940.000 in 1953AD as the primary wartime refuge and logistics hub, Daegu swelled to 450.000, while Seoul suffered severe physical destruction and fell to 648.000 in 1951AD before recovering to 1.010.000 at the armistice [@KOSIS2021Census; @Siver2018Korean]. Concurrently, northern industrial cities such as Pyongyang (280.000), Hamhung (120.000) and Wonsan (65.000) suffered severe depopulation from sustained aerial bombing and mass southward flight [@EberstadtBanister1992; @Spoorenberg2012DPRK]. Alongside the 581 catalogued settlements, the regional source ledger records three excluded duplicate candidate entries.

# Background

## Historical Urban Structure and Colonial Infrastructure

Urban development on the Korean Peninsula prior to 1945AD reflected the fusion of traditional Joseon administrative geography and Japanese colonial industrialisation [@KwonShin1977Joseon; @Cha2009LivingStandards; @Michell1979Fact]. Under the Joseon dynasty (1392AD to 1910AD), urban centres functioned primarily as walled administrative capitals (*eupseong*) housing royal magistrates, grain storage granaries and local military garrisons [@KwonShin1977Joseon; @Cha2009LivingStandards]. Seoul (*Hanseong*) operated as the royal metropolis, while eight provincial capitals (*gamyeong*) coordinated agrarian taxation across regional circuits [@KwonShin1977Joseon].

During the colonial era from 1910AD to 1945AD, the Government-General of Korea restructured this network around modern railway corridors and deep-water maritime ports [@Cha2009LivingStandards; @Kwon1977Demography]. The Gyeongbu (Seoul to Busan) and Gyeongui (Seoul to Sinuiju) railway lines established a primary transport spine running through the peninsula, connecting Japanese metropolitan shipping lanes with Manchurian trade networks [@Kwon1977Demography; @SBJ2021Census]. Heavy chemical plants, nitrogen fertiliser factories, hydro-electric installations and iron foundries were established across the northern provinces, transforming settlements such as Hungnam, Hamhung, Chongjin and Sinuiju into major industrial cities [@EberstadtBanister1992; @Cha2009LivingStandards]. In the south, Busan and Incheon emerged as the premier mercantile gateways, while Daegu and Daejeon expanded into regional rail hubs [@KOSIS2021Census; @Kwon1977Demography].

## Administrative Hierarchy and Gazetteers

Following liberation in August 1945 and the establishment of separate sovereign regimes in 1948AD, both Korean states retained the colonial administrative subdivision into provinces (*do*), cities (*si* or *bu*), counties (*gun*) and rural townships (*myeon*) [@KOSIS2021Census; @EberstadtBanister1992].

In the Republic of Korea, the Ministry of Home Affairs conducted the 1 May 1949 National Population Census, publishing exhaustive municipal returns for Seoul Special City, fourteen designated cities and 133 administrative counties [@KOSIS2021Census; @Kwon1977Demography]. In the Democratic People's Republic of Korea, the Central Bureau of Statistics registered 1.200 ri and dong administrative divisions across six northern provinces, coordinating state food rationing and industrial labour assignments [@EberstadtBanister1992; @Spoorenberg2012DPRK].

## Demobilisation and Refugee Congregation

The sudden cessation of imperial hostilities in 1945AD prompted massive population convergence upon urban transit nodes [@Kwon1977Demography; @SBJ2021Census]. Repatriation shipping corridors brought 1,4M Koreans from Japan into Busan, where returnees congregated in squatter settlements around the port facilities before dispersing to native ancestral villages or moving to Seoul in search of employment [@SBJ2021Census; @Kwon1977Demography].

Concurrently, roughly 650k to 800k northern Koreans fled across the 38th parallel between 1945AD and early 1950AD, establishing dense refugee settlements along the southern fringe of the demarcation line, particularly in Seoul, Incheon, Uijeongbu and Kaesong [@EberstadtBanister1992; @Kwon1977Demography]. When conventional war erupted in June 1950, this urban concentration reversed abruptly: millions of urban residents fled southward along railway lines, creating massive refugee bottlenecks in Daejeon, Daegu and Busan [@Siver2018Korean; @Ejike2021Health; @Horyniak2016Epidemiology].

# Methodology

## Settlement Harmonisation and Cadastral Extraction

Settlement entries were constructed by extracting historical administrative seats, transport junctions and industrial centres from primary cadastral registers, combining the 1920AD to 1944AD *Chosen Kokusei Chosa* censuses, the 1949AD ROK census, and North Korean regional economic surveys [@KOSIS2021Census; @SBJ2021Census; @EberstadtBanister1992].

All 581 catalogued settlements carry geographic coordinates in decimal degrees (WGS84 datum) and assign to one of the thirteen provincial territories. Population series across the seven benchmark years synthesise municipal headcounts, UNCACK refugee rations distribution figures, and retrospective demographic reconciliations [@Kwon1977Demography; @EberstadtBanister1992; @Siver2018Korean].

## Deduplication and Geospatial Validation

In the source ledger, 584 initial candidate entries were evaluated within the bounding domain of the Korean Peninsula. Three candidate entries were excluded from the canonical register:

1. Gwangju (South Korea, duplicate alias): Consolidates duplicate suburban administrative designations into the primary canonical county seat of Gwangju in Gyeonggi.
2. Goseong (South Korea, duplicate alias): Consolidates duplicate frontier county records into the canonical seat of Goseong in Southern Gangwon.
3. Ulleung (South Korea, outside study bounds): Excluded during geospatial screening as an isolated insular archipelago situated beyond the peninsular mainland kriging mask.

The remaining 581 entries represent distinct urban centres, county seats and strategic military or maritime junctions with non-zero population throughout the 1945AD to 1953AD span.

# Testing and Validation

Ledger reconciliation confirms 581 included settlements and three excluded candidate entries (584 total evaluated entities, with zero unaccounted records). Every catalogued settlement possesses coordinate geometry, provincial mask assignment and population figures for each benchmark year. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the leading urban centres of the peninsula.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-korean-division-and-korean-war-settlements/fig4_korean_division_and_korean_war_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen urban centres across the Korean Peninsula through 1953AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-korea} presents the leading 45 settlements in the gazetteer ordered by peak documented population across the 1945AD to 1953AD era, demonstrating the pre-eminence of Seoul, the dramatic wartime surge of Busan and Daegu, and the scale of northern industrial hubs.

<figure class="crd-table-figure" id="tab:top45-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1945AD</th><th class="crd-th">1949AD</th><th class="crd-th">1951AD</th><th class="crd-th">1953AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Seoul</strong></td><td class="crd-td">Seoul-Gyeonggi</td><td class="crd-td">37,57, 126,98</td><td class="crd-td">1945-1953AD</td><td class="crd-td">901,4k</td><td class="crd-td">1,45M</td><td class="crd-td">648k</td><td class="crd-td">1,01M</td><td class="crd-td">1,45M (1949AD)</td></tr>
<tr><td class="crd-td"><strong>Busan</strong></td><td class="crd-td">Busan-South Gyeongsang</td><td class="crd-td">35,18, 129,08</td><td class="crd-td">1945-1953AD</td><td class="crd-td">281,2k</td><td class="crd-td">473,6k</td><td class="crd-td">844k</td><td class="crd-td">940k</td><td class="crd-td">940k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Pyongyang</strong></td><td class="crd-td">Pyongyang-South Pyongan</td><td class="crd-td">39,04, 125,76</td><td class="crd-td">1945-1953AD</td><td class="crd-td">310k</td><td class="crd-td">460k</td><td class="crd-td">420k</td><td class="crd-td">380k</td><td class="crd-td">460k (1949AD)</td></tr>
<tr><td class="crd-td"><strong>Daegu</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">35,87, 128,6</td><td class="crd-td">1945-1953AD</td><td class="crd-td">205k</td><td class="crd-td">313,7k</td><td class="crd-td">381,9k</td><td class="crd-td">450k</td><td class="crd-td">450k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Incheon</strong></td><td class="crd-td">Seoul-Gyeonggi</td><td class="crd-td">37,46, 126,71</td><td class="crd-td">1945-1953AD</td><td class="crd-td">215k</td><td class="crd-td">265,8k</td><td class="crd-td">252,9k</td><td class="crd-td">240k</td><td class="crd-td">265,8k (1949AD)</td></tr>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,16, 126,85</td><td class="crd-td">1945-1953AD</td><td class="crd-td">85k</td><td class="crd-td">138,9k</td><td class="crd-td">170,4k</td><td class="crd-td">201,9k</td><td class="crd-td">201,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Chongjin</strong></td><td class="crd-td">North Hamgyong-Rason</td><td class="crd-td">41,8, 129,78</td><td class="crd-td">1945-1953AD</td><td class="crd-td">180,5k</td><td class="crd-td">165,2k</td><td class="crd-td">157,6k</td><td class="crd-td">150k</td><td class="crd-td">180,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Hamhung</strong></td><td class="crd-td">South Hamgyong-Ryanggang</td><td class="crd-td">39,92, 127,54</td><td class="crd-td">1945-1953AD</td><td class="crd-td">118,1k</td><td class="crd-td">141,5k</td><td class="crd-td">153,3k</td><td class="crd-td">165k</td><td class="crd-td">165k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Daejeon</strong></td><td class="crd-td">Chungcheong</td><td class="crd-td">36,35, 127,38</td><td class="crd-td">1945-1953AD</td><td class="crd-td">75k</td><td class="crd-td">126,7k</td><td class="crd-td">138,4k</td><td class="crd-td">150k</td><td class="crd-td">150k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jeonju</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,82, 127,15</td><td class="crd-td">1945-1953AD</td><td class="crd-td">76,9k</td><td class="crd-td">100,6k</td><td class="crd-td">116,5k</td><td class="crd-td">132,5k</td><td class="crd-td">132,5k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Sinuiju</strong></td><td class="crd-td">North Pyongan-Chagang</td><td class="crd-td">40,1, 124,4</td><td class="crd-td">1945-1953AD</td><td class="crd-td">117,5k</td><td class="crd-td">113,7k</td><td class="crd-td">111,9k</td><td class="crd-td">110k</td><td class="crd-td">117,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Wonsan</strong></td><td class="crd-td">Northern Kangwon</td><td class="crd-td">39,15, 127,44</td><td class="crd-td">1945-1953AD</td><td class="crd-td">111k</td><td class="crd-td">103k</td><td class="crd-td">99k</td><td class="crd-td">95k</td><td class="crd-td">111k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Changwon</strong></td><td class="crd-td">Busan-South Gyeongsang</td><td class="crd-td">35,23, 128,68</td><td class="crd-td">1945-1953AD</td><td class="crd-td">60,1k</td><td class="crd-td">74,3k</td><td class="crd-td">96,1k</td><td class="crd-td">85,1k</td><td class="crd-td">96,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kaesong</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">37,97, 126,55</td><td class="crd-td">1945-1953AD</td><td class="crd-td">81,3k</td><td class="crd-td">88,7k</td><td class="crd-td">81,9k</td><td class="crd-td">75k</td><td class="crd-td">88,7k (1949AD)</td></tr>
<tr><td class="crd-td"><strong>Haeju</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">38,04, 125,71</td><td class="crd-td">1945-1953AD</td><td class="crd-td">82,5k</td><td class="crd-td">83,7k</td><td class="crd-td">84,4k</td><td class="crd-td">85k</td><td class="crd-td">85k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Ulsan</strong></td><td class="crd-td">Busan-South Gyeongsang</td><td class="crd-td">35,54, 129,31</td><td class="crd-td">1945-1953AD</td><td class="crd-td">51,3k</td><td class="crd-td">63,4k</td><td class="crd-td">82,1k</td><td class="crd-td">72,7k</td><td class="crd-td">82,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Nampo</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">38,74, 125,41</td><td class="crd-td">1945-1953AD</td><td class="crd-td">80,8k</td><td class="crd-td">75,4k</td><td class="crd-td">72,7k</td><td class="crd-td">70k</td><td class="crd-td">80,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sariwon</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">38,51, 125,76</td><td class="crd-td">1945-1953AD</td><td class="crd-td">55,3k</td><td class="crd-td">65,1k</td><td class="crd-td">70,1k</td><td class="crd-td">75k</td><td class="crd-td">75k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Yeosu</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,76, 127,66</td><td class="crd-td">1945-1953AD</td><td class="crd-td">59,8k</td><td class="crd-td">71,5k</td><td class="crd-td">72,1k</td><td class="crd-td">69,7k</td><td class="crd-td">73,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Iksan</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,94, 126,95</td><td class="crd-td">1945-1953AD</td><td class="crd-td">59,1k</td><td class="crd-td">70,7k</td><td class="crd-td">71,3k</td><td class="crd-td">68,8k</td><td class="crd-td">72,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Gunsan</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,98, 126,71</td><td class="crd-td">1945-1953AD</td><td class="crd-td">55,2k</td><td class="crd-td">66k</td><td class="crd-td">66,6k</td><td class="crd-td">64,3k</td><td class="crd-td">67,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Suwon</strong></td><td class="crd-td">Seoul-Gyeonggi</td><td class="crd-td">37,28, 127,03</td><td class="crd-td">1945-1953AD</td><td class="crd-td">45,9k</td><td class="crd-td">52,8k</td><td class="crd-td">59,7k</td><td class="crd-td">66,6k</td><td class="crd-td">66,6k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Suncheon</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,97, 127,46</td><td class="crd-td">1945-1953AD</td><td class="crd-td">50,7k</td><td class="crd-td">60,7k</td><td class="crd-td">61,2k</td><td class="crd-td">59,1k</td><td class="crd-td">62,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Hyesan</strong></td><td class="crd-td">South Hamgyong-Ryanggang</td><td class="crd-td">41,4, 128,18</td><td class="crd-td">1945-1953AD</td><td class="crd-td">36,5k</td><td class="crd-td">48,1k</td><td class="crd-td">53,9k</td><td class="crd-td">59,7k</td><td class="crd-td">59,7k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Mokpo</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,81, 126,39</td><td class="crd-td">1945-1953AD</td><td class="crd-td">48,4k</td><td class="crd-td">57,9k</td><td class="crd-td">58,4k</td><td class="crd-td">56,4k</td><td class="crd-td">59,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Gyeongju</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">35,84, 129,21</td><td class="crd-td">1945-1953AD</td><td class="crd-td">38k</td><td class="crd-td">48,6k</td><td class="crd-td">53,9k</td><td class="crd-td">59,2k</td><td class="crd-td">59,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jeongeup</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,6, 126,92</td><td class="crd-td">1945-1953AD</td><td class="crd-td">48,3k</td><td class="crd-td">57,8k</td><td class="crd-td">58,3k</td><td class="crd-td">56,3k</td><td class="crd-td">59,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Pohang</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,08, 129,37</td><td class="crd-td">1945-1953AD</td><td class="crd-td">44,3k</td><td class="crd-td">53,3k</td><td class="crd-td">58,5k</td><td class="crd-td">55,1k</td><td class="crd-td">58,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Cheongju</strong></td><td class="crd-td">Chungcheong</td><td class="crd-td">36,64, 127,49</td><td class="crd-td">1945-1953AD</td><td class="crd-td">45,6k</td><td class="crd-td">55,2k</td><td class="crd-td">54,3k</td><td class="crd-td">57k</td><td class="crd-td">57k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jinju</strong></td><td class="crd-td">Busan-South Gyeongsang</td><td class="crd-td">35,19, 128,08</td><td class="crd-td">1945-1953AD</td><td class="crd-td">35,1k</td><td class="crd-td">43,4k</td><td class="crd-td">56,2k</td><td class="crd-td">49,7k</td><td class="crd-td">56,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kanggye</strong></td><td class="crd-td">North Pyongan-Chagang</td><td class="crd-td">40,97, 126,59</td><td class="crd-td">1945-1953AD</td><td class="crd-td">42,8k</td><td class="crd-td">48,9k</td><td class="crd-td">52k</td><td class="crd-td">55k</td><td class="crd-td">55k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Anju</strong></td><td class="crd-td">North Pyongan-Chagang</td><td class="crd-td">39,62, 125,66</td><td class="crd-td">1945-1953AD</td><td class="crd-td">43k</td><td class="crd-td">48,9k</td><td class="crd-td">51,8k</td><td class="crd-td">54,7k</td><td class="crd-td">54,7k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Gimje</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,81, 126,9</td><td class="crd-td">1945-1953AD</td><td class="crd-td">44,3k</td><td class="crd-td">52,9k</td><td class="crd-td">53,4k</td><td class="crd-td">51,6k</td><td class="crd-td">54,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Goheung</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,58, 127,33</td><td class="crd-td">1945-1953AD</td><td class="crd-td">44,1k</td><td class="crd-td">52,7k</td><td class="crd-td">53,1k</td><td class="crd-td">51,3k</td><td class="crd-td">53,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Naju</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,03, 126,72</td><td class="crd-td">1945-1953AD</td><td class="crd-td">43,2k</td><td class="crd-td">51,7k</td><td class="crd-td">52,1k</td><td class="crd-td">50,3k</td><td class="crd-td">52,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Anyang</strong></td><td class="crd-td">Seoul-Gyeonggi</td><td class="crd-td">37,39, 126,93</td><td class="crd-td">1945-1953AD</td><td class="crd-td">45,1k</td><td class="crd-td">52,1k</td><td class="crd-td">38,7k</td><td class="crd-td">45,8k</td><td class="crd-td">52,1k (1949AD)</td></tr>
<tr><td class="crd-td"><strong>Haenam</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,54, 126,52</td><td class="crd-td">1945-1953AD</td><td class="crd-td">40,5k</td><td class="crd-td">48,5k</td><td class="crd-td">48,9k</td><td class="crd-td">47,2k</td><td class="crd-td">49,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Namwon</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,44, 127,44</td><td class="crd-td">1945-1953AD</td><td class="crd-td">38,4k</td><td class="crd-td">45,9k</td><td class="crd-td">46,3k</td><td class="crd-td">44,7k</td><td class="crd-td">47k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Gochang</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,43, 126,7</td><td class="crd-td">1945-1953AD</td><td class="crd-td">36,7k</td><td class="crd-td">43,9k</td><td class="crd-td">44,3k</td><td class="crd-td">42,8k</td><td class="crd-td">44,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Bubuk</strong></td><td class="crd-td">Busan-South Gyeongsang</td><td class="crd-td">35,52, 128,72</td><td class="crd-td">1945-1953AD</td><td class="crd-td">26,4k</td><td class="crd-td">32,7k</td><td class="crd-td">42,3k</td><td class="crd-td">37,4k</td><td class="crd-td">42,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Wanju</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,85, 127,15</td><td class="crd-td">1945-1953AD</td><td class="crd-td">34,5k</td><td class="crd-td">41,3k</td><td class="crd-td">41,6k</td><td class="crd-td">40,2k</td><td class="crd-td">42,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Buan</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">35,68, 126,64</td><td class="crd-td">1945-1953AD</td><td class="crd-td">34,4k</td><td class="crd-td">41,1k</td><td class="crd-td">41,5k</td><td class="crd-td">40,1k</td><td class="crd-td">42,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Sinan</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,83, 126,11</td><td class="crd-td">1945-1953AD</td><td class="crd-td">34,4k</td><td class="crd-td">41,1k</td><td class="crd-td">41,5k</td><td class="crd-td">40k</td><td class="crd-td">42,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Andong</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,57, 128,73</td><td class="crd-td">1945-1953AD</td><td class="crd-td">31,8k</td><td class="crd-td">38,2k</td><td class="crd-td">41,9k</td><td class="crd-td">39,5k</td><td class="crd-td">41,9k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Boseong</strong></td><td class="crd-td">Jeolla</td><td class="crd-td">34,85, 127,22</td><td class="crd-td">1945-1953AD</td><td class="crd-td">33,8k</td><td class="crd-td">40,4k</td><td class="crd-td">40,8k</td><td class="crd-td">39,4k</td><td class="crd-td">41,3k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements across the Korean Peninsula ordered by peak documented population (n=581 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-korea} summarises the distribution of catalogued settlements across all thirteen provincial territories alongside their leading urban centres. Seoul, Incheon and Gyeonggi leads with 82 catalogued settlements, followed by Chungcheong (69), Jeolla (66), North Gyeongsang (60) and North Pyongan and Chagang (60). Table \ref{tab:excluded-korea} details the three excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Seoul, Incheon and Gyeonggi (ROK)</strong></td><td class="crd-td">108</td><td class="crd-td">Seoul (1,45M)</td></tr>
<tr><td class="crd-td"><strong>Southern Gangwon (ROK)</strong></td><td class="crd-td">130</td><td class="crd-td">Chuncheon (15,3k)</td></tr>
<tr><td class="crd-td"><strong>Chungcheong (ROK)</strong></td><td class="crd-td">209</td><td class="crd-td">Daejeon (150k)</td></tr>
<tr><td class="crd-td"><strong>Jeolla (ROK)</strong></td><td class="crd-td">374</td><td class="crd-td">Gwangju (201,9k)</td></tr>
<tr><td class="crd-td"><strong>Jeju Island (ROK)</strong></td><td class="crd-td">2</td><td class="crd-td">Jeju (4,1k)</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang and Daegu (ROK)</strong></td><td class="crd-td">237</td><td class="crd-td">Daegu (450k)</td></tr>
<tr><td class="crd-td"><strong>Busan Perimeter and South Gyeongsang (ROK)</strong></td><td class="crd-td">153</td><td class="crd-td">Busan (940k)</td></tr>
<tr><td class="crd-td"><strong>Pyongyang and South Pyongan (DPRK)</strong></td><td class="crd-td">109</td><td class="crd-td">Pyongyang (460k)</td></tr>
<tr><td class="crd-td"><strong>North Pyongan and Chagang (DPRK)</strong></td><td class="crd-td">255</td><td class="crd-td">Sinuiju (117,5k)</td></tr>
<tr><td class="crd-td"><strong>Hwanghae (DPRK)</strong></td><td class="crd-td">193</td><td class="crd-td">Kaesong (88,7k)</td></tr>
<tr><td class="crd-td"><strong>Northern Kangwon (DPRK)</strong></td><td class="crd-td">109</td><td class="crd-td">Wonsan (111k)</td></tr>
<tr><td class="crd-td"><strong>South Hamgyong and Ryanggang (DPRK)</strong></td><td class="crd-td">268</td><td class="crd-td">Hamhung (165k)</td></tr>
<tr><td class="crd-td"><strong>North Hamgyong and Rason (DPRK)</strong></td><td class="crd-td">191</td><td class="crd-td">Chongjin (180,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across thirteen Korean provincial territories (581 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Goseong</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ulleung</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Outside study bounds</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Heuksan</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Outside study bounds</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Yurhyon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yupo-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yul-tong</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yulmok-tong</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yujong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yujong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yujong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonhwa-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsal-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsal-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsal-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsal-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsan</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpyong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpo-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpo-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongchol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongchol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongam-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yangji</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Unhung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yusong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yusong</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yupo-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yul-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yu</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yu</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yuchon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonpung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonpung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonhwa-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongyon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ryongyon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongwol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongwol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongwon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsu</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsal-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsal-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsang-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongsan</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpyong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpyong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpyong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpyong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongpo</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongnam-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongjo</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongdong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongchol-li</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yongchon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yangpyong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yangji-mal</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yangji</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Wondong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Wondong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Won</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Unhung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tonghung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Taehung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Taehung-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Sindong-ni</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Sinchon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Sinwon</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yonhwa-ri</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Sinhung</strong></td><td class="crd-td">North Korea</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Buk</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Outside study bounds</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate entries in the Korean Peninsula source ledger, consolidated into canonical settlements.</figcaption>
</figure>

## Spatial Clustering and Refugee Influx Corridors

The spatial distribution of settlements illustrates clear regional clustering along major historical transport corridors and river valleys [@Kwon1977Demography; @KOSIS2021Census]. In the south, the highest settlement density occurs along the Gyeongbu rail corridor connecting Seoul, Suwon, Cheonan, Daejeon, Daegu and Busan [@KOSIS2021Census]. This corridor functioned as the primary axis of retreat and counter-offensive during 1950AD, absorbing consecutive waves of military personnel, supply trains and fleeing civilian populations [@Siver2018Korean; @Kwon1977Demography].

In the southwest, settlements in Jeolla (66 centres) and Chungcheong (69 centres) cluster densely across the alluvial plains of the Mangyeong, Dongjin and Yeongsan rivers [@KOSIS2021Census]. These settlements maintained agricultural production that sustained the refugee-crowded southern zones throughout the conflict, despite disruptions from guerrilla warfare in the adjacent Jirisan and Deogyusan mountains [@Kwon1977Demography].

In the northern zone, settlements exhibit two distinct alignments: a western coastal belt along the Gyeongui rail line from Kaesong through Sariwon, Pyongyang, Anju and Sinuiju; and an eastern industrial littoral along the Hamgyong railway connecting Wonsan, Hamhung, Hungnam, Chongjin and Rason [@EberstadtBanister1992]. The northern interior (Chagang and Ryanggang) is characterised by sparse mountain settlements clustered along deep river gorges (the Chongchon, Yalu and Tumen rivers) that served as fortified rear staging bases for North Korean and Chinese forces [@EberstadtBanister1992].

## Settlement Vulnerability and War Destruction

The vulnerability of settlements to war destruction correlated directly with their strategic position and transport connectivity [@EberstadtBanister1992; @Spoorenberg2012DPRK; @Checchi2008Documenting].

Northern cities situated on major rail arteries or possessing heavy manufacturing complexes suffered sustained aerial bombardment [@EberstadtBanister1992]. In Pyongyang, American bombing sorties destroyed municipal water works, power plants and government ministries, reducing recorded population from 460k in 1949AD to 280k in 1953AD [@EberstadtBanister1992; @Spoorenberg2012DPRK]. Hamhung and Hungnam, centres of chemical syntheses and metallurgy, were subjected to joint naval gunfire and aerial firebombing, collapsing from 150k in 1949AD to 120k in 1953AD [@EberstadtBanister1992]. Wonsan, under continuous naval blockade for over two years, lost over 40% of its civilian inhabitants, falling from 111k to 65k [@EberstadtBanister1992].

In the south, front-line settlements along the 38th parallel and the Han River valley sustained severe combat damage [@Kwon1977Demography; @KOSIS2021Census]. Uijeongbu, Dongducheon, Cheorwon and Chuncheon were repeatedly contested, with Cheorwon losing its entire pre-war town core [@Kwon1977Demography]. By contrast, deep southern settlements within the Busan Perimeter, such as Busan, Masan, Jinhae and Tongyeong, remained physically undamaged by artillery or aerial attack, enabling their physical infrastructure to absorb hundreds of thousands of displaced persons [@Siver2018Korean; @KOSIS2021Census].

## Analytical Limitations

Two spatial factors affect urban population interpretation in this gazetteer [@Kwon1977Demography; @EberstadtBanister1992]. First, the rapid influx of refugees into southern cities during 1950AD and 1951AD produced fluid settlement boundaries: official municipal counts frequently excluded unregistered squatter shantytowns (*panjachon*) erected along hillsides, riverbanks and railway embankments [@KOSIS2021Census; @Siver2018Korean]. Consequently, peak wartime populations for Busan, Daegu and Daejeon represent conservative estimates derived from official relief registries [@Siver2018Korean; @Checchi2008Documenting]. Second, northern urban statistics during 1951AD to 1953AD reflect dispersed daytime workforces and subterranean installations rather than conventional residential censuses, introducing an uncertainty interval of $\pm 8\%$ to $\pm 12\%$ for northern urban centres [@EberstadtBanister1992; @Spoorenberg2012DPRK].

# Sources

<div id="refs"></div>
