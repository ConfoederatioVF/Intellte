---
title: "Settlement Gazetteer of Korea under Japanese Occupation"
subtitle: "Provincial Capitals, County Seats, Industrial Centres and Railway Ports, 1905AD to 1945AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: korea_under_japanese_occupation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_korea_under_japanese_occupation_spatial.png"
hero_caption: "Spatial distribution of 618 catalogued urban and administrative centres across thirteen Korean provinces through 1945AD."
hero_label: "fig:hero-korea-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 618 urban, administrative, industrial and port settlements active across Korea between 1905AD and 1945AD (covering 226.901 km² across thirteen provincial territories). Synthesising colonial census gazetteers (*Chōsen Sōtokufu Tōkei Nenpō*), the quinquennial census series (1925AD, 1930AD, 1935AD, 1940AD, 1944AD), historical cadastres, and post-liberation municipal registers [@KOSIS2021Census; @SBJ2021Census; @Kwon1977Demography; @NSTAC2026SSDSE], the gazetteer encompasses every primary administrative and economic node: the capital metropolis of Keijo (Seoul, 935k), provincial capitals, 12 designated colonial municipalities (*bu*), 218 unified county seats (*gun*), open treaty ports (*kaehangjang*), railway junctions, and northern heavy chemical and metallurgical hubs. Across the 618 catalogued entries, the dataset documents 4.941 settlement-year population observations spanning 1905AD to 1945AD (averaging 8 observations per centre). At peak colonial urbanisation, the leading urban centres were Seoul (935k), Pyongyang (310k), Busan (281k), Incheon (215k), Daegu (205k), Chongjin (198k), Hamhung (118k), Sinuiju (117k), Wonsan (111k), Gwangju (85k), Haeju (82k), Kaesong (81k), Nampo (81k), Jeonju (77k) and Daejeon (75k). Alongside the 618 catalogued settlements, the regional source ledger records 3 excluded candidate entries (Gwangju duplicate alias, Goseong duplicate alias and Ulleung outside study bounds) out of 621 total evaluated candidates.

# Background

Urbanisation in colonial Korea was structured by the intersection of traditional administrative hierarchies and modern Japanese transport and industrial infrastructure [@Kwon1977Demography; @KOSIS2021Census; @Kong1997Conclusion]. Prior to annexation, Korean urban centres functioned primarily as walled county administrative seats (*eupchi*) and market towns where local magistrates collected grain taxes and supervised rural markets [@KwonShin1977Joseon; @Cha2009LivingStandards].

Under the Government-General of Chosen, the peninsular urban network was restructured into three functional tiers [@KOSIS2021Census; @NSTAC2026SSDSE]. First, twelve designated municipal prefectures (*bu*) concentrated colonial administrative departments, commercial banks, Japanese trading firms, and manufacturing operations, led by Seoul, Busan, Pyongyang, Incheon and Daegu [@KOSIS2021Census]. Second, the expansion of the trunk railway grid created thriving junction towns such as Daejeon, Iri (Iksan) and Suncheon, which eclipsed older neighbouring county seats in trade volume and population [@Xia2024Impact; @Dyrting2024Estimating]. Third, northern industrialisation from the late 1920s transformed fishing villages and mining stations into sprawling heavy industrial cities, notably the chemical complexes at Hamhung and Hungnam, the metallurgical port of Chongjin, and the border timber and chemical centre at Sinuiju [@EberstadtBanister1992; @Spoorenberg2012DPRK].

# Methodology

Settlement records were constructed by harmonising the administrative time-series of the Government-General of Chosen with the 1925AD to 1944AD quinquennial censuses, municipal cadastral surveys, and post-colonial municipal registries [@KOSIS2021Census; @SBJ2021Census; @NSTAC2026SSDSE]. All 618 catalogued settlements carry verified historical coordinates and assign to one of the thirteen provincial masks.

In the regional source ledger, 3 candidate records were excluded during deduplication and bounds verification [@KOSIS2021Census]. These exclusions comprised:
1. Gwangju (South Korea), excluded as a duplicate alias of canonical Gwangju in South Jeolla to avoid confounding with Gwangju county in Gyeonggi.
2. Goseong (South Korea), excluded as a duplicate alias of canonical Goseong in South Gyeongsang to prevent overlap with Goseong county in Gangwon.
3. Ulleung (South Korea), situated in the Sea of Japan beyond the contiguous peninsular masking boundaries.

# Testing and Validation

Ledger reconciliation confirms 618 included settlements and 3 excluded candidate entries (621 total evaluated entities, with zero unaccounted records). All 618 settlements carry geographic coordinates and population time-series for the colonial benchmarks. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the leading urban centres of the peninsula.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-korea-under-japanese-occupation-settlements/fig4_korea_under_japanese_occupation_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading urban centres across Korea.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-korea} presents the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the dominance of the capital metropolis, the primary railway and ferry terminus at Busan, and the industrial centers of the north.

<figure class="crd-table-figure" id="tab:top45-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1905AD</th><th class="crd-th">1925AD</th><th class="crd-th">1940AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Seoul</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,57, 126,98</td><td class="crd-td">1905-1945AD</td><td class="crd-td">225k</td><td class="crd-td">342,6k</td><td class="crd-td">935,5k</td><td class="crd-td">935,5k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Pyongyang</strong></td><td class="crd-td">South Pyongan</td><td class="crd-td">39,04, 125,76</td><td class="crd-td">1905-1945AD</td><td class="crd-td">55k</td><td class="crd-td">89,4k</td><td class="crd-td">286k</td><td class="crd-td">310k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Busan</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,18, 129,08</td><td class="crd-td">1905-1945AD</td><td class="crd-td">38k</td><td class="crd-td">106,6k</td><td class="crd-td">249,7k</td><td class="crd-td">281,2k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Incheon</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,46, 126,71</td><td class="crd-td">1905-1945AD</td><td class="crd-td">25k</td><td class="crd-td">52,3k</td><td class="crd-td">171,2k</td><td class="crd-td">215k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Daegu</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">35,87, 128,6</td><td class="crd-td">1905-1945AD</td><td class="crd-td">32,4k</td><td class="crd-td">69k</td><td class="crd-td">178,9k</td><td class="crd-td">205k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Chongjin</strong></td><td class="crd-td">North Hamgyong</td><td class="crd-td">41,8, 129,78</td><td class="crd-td">1910-1945AD</td><td class="crd-td">-</td><td class="crd-td">25k</td><td class="crd-td">197,9k</td><td class="crd-td">197,9k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Hamhung</strong></td><td class="crd-td">South Hamgyong</td><td class="crd-td">39,92, 127,54</td><td class="crd-td">1905-1945AD</td><td class="crd-td">21k</td><td class="crd-td">32,9k</td><td class="crd-td">75,3k</td><td class="crd-td">118,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sinuiju</strong></td><td class="crd-td">North Pyongan</td><td class="crd-td">40,1, 124,4</td><td class="crd-td">1910-1945AD</td><td class="crd-td">-</td><td class="crd-td">32k</td><td class="crd-td">61,1k</td><td class="crd-td">117,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Wonsan</strong></td><td class="crd-td">Gangwon</td><td class="crd-td">39,15, 127,44</td><td class="crd-td">1905-1945AD</td><td class="crd-td">18k</td><td class="crd-td">35,4k</td><td class="crd-td">79,3k</td><td class="crd-td">111k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">35,16, 126,85</td><td class="crd-td">1905-1945AD</td><td class="crd-td">14,4k</td><td class="crd-td">24,8k</td><td class="crd-td">64,5k</td><td class="crd-td">85k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Haeju</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">38,04, 125,71</td><td class="crd-td">1905-1945AD</td><td class="crd-td">18,3k</td><td class="crd-td">23,2k</td><td class="crd-td">62,7k</td><td class="crd-td">82,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Kaesong</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">37,97, 126,55</td><td class="crd-td">1905-1945AD</td><td class="crd-td">43,9k</td><td class="crd-td">46,8k</td><td class="crd-td">72,1k</td><td class="crd-td">81,3k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Nampo</strong></td><td class="crd-td">South Pyongan</td><td class="crd-td">38,74, 125,41</td><td class="crd-td">1905-1945AD</td><td class="crd-td">11,2k</td><td class="crd-td">30,1k</td><td class="crd-td">68,7k</td><td class="crd-td">80,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Jeonju</strong></td><td class="crd-td">North Jeolla</td><td class="crd-td">35,82, 127,15</td><td class="crd-td">1905-1945AD</td><td class="crd-td">20,2k</td><td class="crd-td">30,3k</td><td class="crd-td">47,2k</td><td class="crd-td">76,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Daejeon</strong></td><td class="crd-td">South Chungcheong</td><td class="crd-td">36,35, 127,38</td><td class="crd-td">1905-1945AD</td><td class="crd-td">3,5k</td><td class="crd-td">16,4k</td><td class="crd-td">45,5k</td><td class="crd-td">75k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Changwon</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,23, 128,68</td><td class="crd-td">1905-1945AD</td><td class="crd-td">43,3k</td><td class="crd-td">47,5k</td><td class="crd-td">56,4k</td><td class="crd-td">58,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sariwon</strong></td><td class="crd-td">Hwanghae</td><td class="crd-td">38,51, 125,76</td><td class="crd-td">1910-1945AD</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">43k</td><td class="crd-td">55,3k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Ulsan</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,54, 129,31</td><td class="crd-td">1905-1945AD</td><td class="crd-td">37k</td><td class="crd-td">40,6k</td><td class="crd-td">48,2k</td><td class="crd-td">50,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Suwon</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,28, 127,03</td><td class="crd-td">1905-1945AD</td><td class="crd-td">16,2k</td><td class="crd-td">18,8k</td><td class="crd-td">37,2k</td><td class="crd-td">45,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Pohang</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,08, 129,37</td><td class="crd-td">1905-1945AD</td><td class="crd-td">34,4k</td><td class="crd-td">37,6k</td><td class="crd-td">43,3k</td><td class="crd-td">44,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Anju</strong></td><td class="crd-td">North Pyongan</td><td class="crd-td">39,62, 125,66</td><td class="crd-td">1905-1945AD</td><td class="crd-td">16,2k</td><td class="crd-td">19,8k</td><td class="crd-td">35,7k</td><td class="crd-td">43k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Kanggye</strong></td><td class="crd-td">North Pyongan</td><td class="crd-td">40,97, 126,59</td><td class="crd-td">1905-1945AD</td><td class="crd-td">14,1k</td><td class="crd-td">18,5k</td><td class="crd-td">35,2k</td><td class="crd-td">42,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Yeosu</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">34,76, 127,66</td><td class="crd-td">1905-1945AD</td><td class="crd-td">27,2k</td><td class="crd-td">30,6k</td><td class="crd-td">37,3k</td><td class="crd-td">39,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Anyang</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,39, 126,93</td><td class="crd-td">1905-1945AD</td><td class="crd-td">22,5k</td><td class="crd-td">24,9k</td><td class="crd-td">34,7k</td><td class="crd-td">39k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Jeju</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">33,51, 126,52</td><td class="crd-td">1905-1945AD</td><td class="crd-td">26,2k</td><td class="crd-td">29,5k</td><td class="crd-td">36k</td><td class="crd-td">38k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Gyeongju</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">35,84, 129,21</td><td class="crd-td">1905-1945AD</td><td class="crd-td">22,3k</td><td class="crd-td">26,5k</td><td class="crd-td">34,7k</td><td class="crd-td">38k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Hyesan</strong></td><td class="crd-td">South Hamgyong</td><td class="crd-td">41,4, 128,18</td><td class="crd-td">1905-1945AD</td><td class="crd-td">9,7k</td><td class="crd-td">13k</td><td class="crd-td">22k</td><td class="crd-td">36,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Jinju</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,19, 128,08</td><td class="crd-td">1905-1945AD</td><td class="crd-td">25,3k</td><td class="crd-td">27,8k</td><td class="crd-td">33k</td><td class="crd-td">34,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Suncheon</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">34,97, 127,46</td><td class="crd-td">1905-1945AD</td><td class="crd-td">23,1k</td><td class="crd-td">25,9k</td><td class="crd-td">31,6k</td><td class="crd-td">33,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Mokpo</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">34,81, 126,39</td><td class="crd-td">1905-1945AD</td><td class="crd-td">22k</td><td class="crd-td">24,7k</td><td class="crd-td">30,2k</td><td class="crd-td">31,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Andong</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,57, 128,73</td><td class="crd-td">1905-1945AD</td><td class="crd-td">24,7k</td><td class="crd-td">27k</td><td class="crd-td">31k</td><td class="crd-td">31,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Paju</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,76, 126,78</td><td class="crd-td">1905-1945AD</td><td class="crd-td">17k</td><td class="crd-td">18,8k</td><td class="crd-td">26,2k</td><td class="crd-td">29,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Goheung</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">34,58, 127,33</td><td class="crd-td">1905-1945AD</td><td class="crd-td">20k</td><td class="crd-td">22,5k</td><td class="crd-td">27,5k</td><td class="crd-td">29k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Hwaseong</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,21, 126,82</td><td class="crd-td">1905-1945AD</td><td class="crd-td">16,7k</td><td class="crd-td">18,5k</td><td class="crd-td">25,7k</td><td class="crd-td">28,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Hungnam</strong></td><td class="crd-td">South Hamgyong</td><td class="crd-td">39,84, 127,63</td><td class="crd-td">1905-1945AD</td><td class="crd-td">18,4k</td><td class="crd-td">22k</td><td class="crd-td">27,3k</td><td class="crd-td">28,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Naju</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">35,03, 126,72</td><td class="crd-td">1905-1945AD</td><td class="crd-td">19,6k</td><td class="crd-td">22,1k</td><td class="crd-td">26,9k</td><td class="crd-td">28,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Goyang</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,66, 126,83</td><td class="crd-td">1905-1945AD</td><td class="crd-td">16,4k</td><td class="crd-td">18,1k</td><td class="crd-td">25,2k</td><td class="crd-td">28,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sangju</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,42, 128,17</td><td class="crd-td">1905-1945AD</td><td class="crd-td">21,5k</td><td class="crd-td">23,5k</td><td class="crd-td">27k</td><td class="crd-td">27,7k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Seogwipo</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">33,33, 126,58</td><td class="crd-td">1905-1945AD</td><td class="crd-td">18,7k</td><td class="crd-td">21k</td><td class="crd-td">25,7k</td><td class="crd-td">27,2k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Gimhae</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,23, 128,88</td><td class="crd-td">1905-1945AD</td><td class="crd-td">18,6k</td><td class="crd-td">19,5k</td><td class="crd-td">24k</td><td class="crd-td">26,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Haenam</strong></td><td class="crd-td">South Jeolla and Jeju</td><td class="crd-td">34,54, 126,52</td><td class="crd-td">1905-1945AD</td><td class="crd-td">18,4k</td><td class="crd-td">20,7k</td><td class="crd-td">25,3k</td><td class="crd-td">26,7k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Gimcheon</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,12, 128,12</td><td class="crd-td">1905-1945AD</td><td class="crd-td">20,4k</td><td class="crd-td">22,4k</td><td class="crd-td">25,7k</td><td class="crd-td">26,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Gumi</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,11, 128,34</td><td class="crd-td">1905-1945AD</td><td class="crd-td">20,4k</td><td class="crd-td">22,3k</td><td class="crd-td">25,7k</td><td class="crd-td">26,3k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Yongin</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,24, 127,18</td><td class="crd-td">1905-1945AD</td><td class="crd-td">15k</td><td class="crd-td">16,6k</td><td class="crd-td">23,1k</td><td class="crd-td">26k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Mangyongdae-ri</strong></td><td class="crd-td">South Pyongan</td><td class="crd-td">38,99, 125,66</td><td class="crd-td">1905-1945AD</td><td class="crd-td">15,8k</td><td class="crd-td">17,8k</td><td class="crd-td">23,7k</td><td class="crd-td">26k (1945AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Korea ordered by peak documented population (618 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-korea} summarises the distribution of settlements across all thirteen provincial territories alongside their leading urban centres. Gyeonggi leads all territories with 82 catalogued settlements, followed by Gangwon (66), North Gyeongsang (60), North Pyongan (60), Hwanghae (51), South Gyeongsang (50), and South Chungcheong (43). Table \ref{tab:excluded-korea} details the 3 excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gyeonggi-do (Keiki)</strong></td><td class="crd-td">82</td><td class="crd-td">Seoul (935,5k)</td></tr>
<tr><td class="crd-td"><strong>North Chungcheong (Chusei-hoku)</strong></td><td class="crd-td">23</td><td class="crd-td">Cheongju (17,6k)</td></tr>
<tr><td class="crd-td"><strong>South Chungcheong (Chusei-nan)</strong></td><td class="crd-td">43</td><td class="crd-td">Daejeon (75k)</td></tr>
<tr><td class="crd-td"><strong>North Jeolla (Zenra-hoku)</strong></td><td class="crd-td">29</td><td class="crd-td">Jeonju (76,9k)</td></tr>
<tr><td class="crd-td"><strong>South Jeolla and Jeju (Zenra-nan)</strong></td><td class="crd-td">40</td><td class="crd-td">Gwangju (85k)</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang (Keisho-hoku)</strong></td><td class="crd-td">60</td><td class="crd-td">Daegu (205k)</td></tr>
<tr><td class="crd-td"><strong>South Gyeongsang (Keisho-nan)</strong></td><td class="crd-td">50</td><td class="crd-td">Busan (281,2k)</td></tr>
<tr><td class="crd-td"><strong>Gangwon-do (Kogen)</strong></td><td class="crd-td">66</td><td class="crd-td">Wonsan (111k)</td></tr>
<tr><td class="crd-td"><strong>Hwanghae-do (Kokai)</strong></td><td class="crd-td">51</td><td class="crd-td">Haeju (82,5k)</td></tr>
<tr><td class="crd-td"><strong>South Pyongan (Heian-nan)</strong></td><td class="crd-td">37</td><td class="crd-td">Pyongyang (310k)</td></tr>
<tr><td class="crd-td"><strong>North Pyongan (Heian-hoku)</strong></td><td class="crd-td">60</td><td class="crd-td">Sinuiju (117,5k)</td></tr>
<tr><td class="crd-td"><strong>South Hamgyong (Kankyo-nan)</strong></td><td class="crd-td">39</td><td class="crd-td">Hamhung (118,1k)</td></tr>
<tr><td class="crd-td"><strong>North Hamgyong (Kankyo-hoku)</strong></td><td class="crd-td">38</td><td class="crd-td">Chongjin (197,9k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across the thirteen Korean provincial territories (618 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-korea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">South Korea</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Goseong</strong></td><td class="crd-td">South Korea</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ulleung</strong></td><td class="crd-td">South Korea</td><td class="crd-td">outside_study_bounds</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate entries in the regional source ledger, consolidated into canonical settlements.</figcaption>
</figure>

# Limitations

Two spatial factors affect urban population aggregation in this gazetteer. First, municipal boundary revisions expanded the legal administrative territory (*bu-yeok*) of major cities during the late colonial period. Most notably, Keijo (Seoul) underwent substantial territorial annexations in April 1936 and October 1940, incorporating suburban industrial districts in Yeongdeungpo, Mapo, Yongsan and Dongdaemun from surrounding Gyeonggi-do county districts. These administrative enlargements are tracked through unified municipal totals to capture contiguous metropolitan agglomerations rather than artificial administrative ruptures [@Kwon1977Demography; @KOSIS2021Census]. Second, in rapidly expanding northern mining and chemical districts such as Hungnam, Musan and Kaechon, large numbers of unmarried male construction and factory labourers lived in factory dormitories and temporary worker barracks that were partially under-enumerated during regular de jure municipal surveys [@EberstadtBanister1992; @Spoorenberg2012DPRK].

# Sources

<div id="refs"></div>
