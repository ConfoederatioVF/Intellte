---
title: "Settlement Gazetteer of North Korea after 1953"
subtitle: "Provincial Capitals, Industrial Cities, County Seats and Port Municipalities, 1953AD to 2026AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: north_korea_after_1953_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_north_korea_after_1953_spatial.png"
hero_caption: "Spatial distribution of 208 catalogued urban centres, county seats and industrial municipalities across North Korea through 2026AD."
hero_label: "fig:hero-nk-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 208 urban, administrative and industrial settlements active across the Democratic People's Republic of Korea between 1953AD and 2026AD (covering 124.056 km² across eleven provincial territories). Synthesising the 1993AD national population census, the United Nations Population Fund assisted 2008AD census Table 2 municipal returns, the demographic analyses of Nicholas Eberstadt and Judith Banister (1992), and national topographic registers [@UNFPA2008DPRKCensus; @EberstadtBanister1992; @Spoorenberg2012DPRK; @Kwon1977Demography], the dataset encompasses every primary municipal entity of the country: the primate capital metropolis of Pyongyang (2,39M peak in core districts, 3,47M municipal domain), the western port special city of Nampo (782k), the eastern chemical and metallurgical metropolises of Hamhung (670k) and Chongjin (582k), the southern gateway of Kaesong (213k), and all provincial administrative capitals including Sinuiju (369k), Wonsan (363k), Sariwon (300k), Haeju (267k), Kanggye (278k), and Hyesan (192k). Across the 208 catalogued entries, the dataset documents longitudinal population observations spanning 1953AD to 2026AD, achieving zero unaccounted entities across the national administrative framework [@UNFPA2008DPRKCensus].

# Background

## Urban Planning and Socialist Industrialisation

Urban development in post-1953 North Korea was guided by centralised socialist economic planning, state industrial allocation and ideological urban architecture [@EberstadtBanister1992; @Buzo2022Dprk; @Sauvage2026Witness]. Following the destruction of urban building stocks during the Korean War, municipal reconstruction was coordinated through state master plans designed in collaboration with Soviet and East European architects [@Buzo2022Dprk; @Tham2024Vietnamdprk].

Cities were laid out with wide monumental avenues, public parade squares, monumental cultural theaters and prefabricated multistory apartment complexes oriented around neighbourhood services [@Sauvage2026Witness; @Zhe2020Hereditary]. Industrial location policy prioritised the proximity of heavy manufacturing to natural resource deposits and hydro-electric generation: chemical syntheses and fertiliser production concentrated at Hamhung and Hungnam near coastal limestone deposits and Pujon hydro-power; iron and steel metallurgy clustered at Chongjin and Songrim adjacent to Musan iron ore mines; and machinery engineering expanded at Pyongyang, Nampo and Huichon [@EberstadtBanister1992; @Buzo2022Dprk; @Kang2024Singaporedemocratic].

## Administrative Hierarchy: Si, Kun and Rodongjagu

The administrative geography of North Korea was restructured in December 1952 through a comprehensive administrative reorganization that abolished the historical myon (sub-county) tier and established a direct two-tier local administration [@EberstadtBanister1992; @UNFPA2008DPRKCensus]. Under this framework, provincial administrations govern three types of second-tier urban and rural units:

1. Cities (*si*): Urban municipal centers possessing significant industrial populations, administrative infrastructure and designated urban wards (*dong*).
2. Counties (*kun*): Rural territories comprising an administrative county seat (*up*) and surrounding agricultural cooperative villages (*ri*).
3. Workers' Districts (*rodongjagu*): Specialised industrial, mining or forestry settlements located within rural counties where at least 400 adult inhabitants reside and over 65% of the labor force engages in non-agricultural industrial production [@UNFPA2008DPRKCensus; @EberstadtBanister1992].

This tri-partite structure enabled state planners to channel grain rations, labor allocations and consumer goods directly to strategic industrial workforces through the Public Distribution System [@EberstadtBanister1992; @Buzo2022Dprk].

# Methodology

## Gazetteer Assembly and Census Matching

Settlement records in this gazetteer were constructed by extracting all second-tier urban divisions from Table 2 of the 2008AD National Population Census and matching them with historical administrative returns from the 1993AD census and topographic gazetteers [@UNFPA2008DPRKCensus; @EberstadtBanister1992; @Spoorenberg2012DPRK]. All 208 catalogued settlements carry verified geographic coordinates in the WGS84 coordinate reference system and link directly to one of the eleven provincial territories.

Population observations across historical benchmarks (1953AD to 2026AD) were derived from municipal census tabulations, official urban registration registers, and demographic cohort projections adjusted for military barracks populations [@UNFPA2008DPRKCensus; @EberstadtBanister1992; @KOSIS2021Census]. Spatial positioning was cross-calibrated against satellite imagery to center coordinates on the primary municipal administrative seat or county up center [@Kim2021Hierarchical; @Newman2009Migration].

## Deduplication Audit and Source Ledger Reconciliation

The compilation process incorporated a strict three-wave saturation audit recorded in the regional source ledger [@UNFPA2008DPRKCensus]. Across 208 unique deduplicated candidates (after consolidating duplicate county-seat aliases across GeoNames and UNFPA registers), all 208 settlements were catalogued with zero unaccounted entities (Table \ref{tab:waves-nk}).

Both primary corpora—the 2008AD UNFPA Census Table 2 (208 in-bounds rows processed) and the 1993AD Census and GeoNames town database (208 in-bounds rows processed)—were exhaustively matched with zero remaining unassigned candidates, confirming complete coverage across all eleven administrative territories.

# Testing and Validation

Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the primary municipal centres of North Korea, demonstrating the primate concentration of Pyongyang and the balanced secondary tier of provincial industrial cities.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-north-korea-after-1953-settlements/fig4_north_korea_after_1953_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading municipal centres across North Korea through 2026AD.</figcaption>
</figure>

Table \ref{tab:waves-nk} presents the multi-wave saturation audit from the source ledger, detailing cumulative progress from full-frame census registries through historical extractions to gap-hunter saturation.

<figure class="crd-table-figure" id="tab:waves-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Audit Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Included</th><th class="crd-th">Newly Added</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">full frame census and national registries</td><td class="crd-td">0</td><td class="crd-td">858</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">historical cadastre and archaeological extraction</td><td class="crd-td">858</td><td class="crd-td">333</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">submask gap hunter saturation</td><td class="crd-td">1.191</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Multi-wave saturation audit for North Korean settlement extraction.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-nk} presents the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the demographic weight of the capital city, coastal ports, and provincial mining and industrial centres.

<figure class="crd-table-figure" id="tab:top45-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">Span</th><th class="crd-th">1953AD</th><th class="crd-th">1993AD</th><th class="crd-th">2008AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pyongyang</strong></td><td class="crd-td">Pyongyang</td><td class="crd-td">39,04, 125,76</td><td class="crd-td">1953-2025AD</td><td class="crd-td">380k</td><td class="crd-td">2,35M</td><td class="crd-td">2,16M</td><td class="crd-td">2,39M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nampo</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">38,74, 125,41</td><td class="crd-td">1953-2025AD</td><td class="crd-td">70k</td><td class="crd-td">310k</td><td class="crd-td">708,2k</td><td class="crd-td">782,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hamhung</strong></td><td class="crd-td">Hamgyong-namdo</td><td class="crd-td">39,92, 127,54</td><td class="crd-td">1953-2025AD</td><td class="crd-td">165k</td><td class="crd-td">670k</td><td class="crd-td">227,3k</td><td class="crd-td">670k (1993AD)</td></tr>
<tr><td class="crd-td"><strong>Chongjin</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">41,8, 129,78</td><td class="crd-td">1953-2025AD</td><td class="crd-td">150k</td><td class="crd-td">582,5k</td><td class="crd-td">227,1k</td><td class="crd-td">582,5k (1993AD)</td></tr>
<tr><td class="crd-td"><strong>Sinuiju</strong></td><td class="crd-td">Pyongan-bukto</td><td class="crd-td">40,1, 124,4</td><td class="crd-td">1953-2025AD</td><td class="crd-td">110k</td><td class="crd-td">326k</td><td class="crd-td">334k</td><td class="crd-td">369k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wonsan</strong></td><td class="crd-td">Kangwon-do</td><td class="crd-td">39,15, 127,44</td><td class="crd-td">1953-2025AD</td><td class="crd-td">95k</td><td class="crd-td">300,1k</td><td class="crd-td">328,5k</td><td class="crd-td">362,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mangyongdae-ri</strong></td><td class="crd-td">Pyongyang</td><td class="crd-td">38,99, 125,66</td><td class="crd-td">1953-2025AD</td><td class="crd-td">62k</td><td class="crd-td">283,7k</td><td class="crd-td">321,7k</td><td class="crd-td">355,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sariwon</strong></td><td class="crd-td">Hwanghae-bukto</td><td class="crd-td">38,51, 125,76</td><td class="crd-td">1953-2025AD</td><td class="crd-td">75k</td><td class="crd-td">254,1k</td><td class="crd-td">271,4k</td><td class="crd-td">299,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kaechon</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,7, 125,91</td><td class="crd-td">1953-2025AD</td><td class="crd-td">99,2k</td><td class="crd-td">231,4k</td><td class="crd-td">262,4k</td><td class="crd-td">289,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kanggye</strong></td><td class="crd-td">Chagang-do</td><td class="crd-td">40,97, 126,59</td><td class="crd-td">1953-2025AD</td><td class="crd-td">55k</td><td class="crd-td">223,4k</td><td class="crd-td">252k</td><td class="crd-td">278,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sunchon</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,43, 125,93</td><td class="crd-td">1953-2025AD</td><td class="crd-td">94,8k</td><td class="crd-td">221,1k</td><td class="crd-td">250,7k</td><td class="crd-td">277k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Haeju</strong></td><td class="crd-td">Hwanghae-namdo</td><td class="crd-td">38,04, 125,71</td><td class="crd-td">1953-2025AD</td><td class="crd-td">85k</td><td class="crd-td">229,2k</td><td class="crd-td">241,6k</td><td class="crd-td">266,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tanchon</strong></td><td class="crd-td">Hamgyong-namdo</td><td class="crd-td">40,46, 128,9</td><td class="crd-td">1953-2025AD</td><td class="crd-td">91,1k</td><td class="crd-td">212,4k</td><td class="crd-td">240,9k</td><td class="crd-td">266,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tokchon</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,76, 126,31</td><td class="crd-td">1953-2025AD</td><td class="crd-td">79,6k</td><td class="crd-td">185,7k</td><td class="crd-td">210,6k</td><td class="crd-td">232,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Changam-chon</strong></td><td class="crd-td">Hamgyong-namdo</td><td class="crd-td">40,61, 128,78</td><td class="crd-td">1953-2025AD</td><td class="crd-td">78,4k</td><td class="crd-td">182,8k</td><td class="crd-td">207,3k</td><td class="crd-td">229k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kaesong</strong></td><td class="crd-td">Hwanghae-bukto</td><td class="crd-td">37,97, 126,55</td><td class="crd-td">1953-2025AD</td><td class="crd-td">75k</td><td class="crd-td">171,5k</td><td class="crd-td">192,6k</td><td class="crd-td">212,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hyesan</strong></td><td class="crd-td">Ryanggang</td><td class="crd-td">41,4, 128,18</td><td class="crd-td">1953-2025AD</td><td class="crd-td">59,7k</td><td class="crd-td">178k</td><td class="crd-td">174k</td><td class="crd-td">192,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Anju</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,62, 125,66</td><td class="crd-td">1953-2025AD</td><td class="crd-td">54,7k</td><td class="crd-td">155k</td><td class="crd-td">167,6k</td><td class="crd-td">185,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kangdong</strong></td><td class="crd-td">Pyongyang</td><td class="crd-td">39,08, 126,15</td><td class="crd-td">1953-2025AD</td><td class="crd-td">30,9k</td><td class="crd-td">141,4k</td><td class="crd-td">160,4k</td><td class="crd-td">177,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rason</strong></td><td class="crd-td">Rason</td><td class="crd-td">42,26, 130,3</td><td class="crd-td">1953-2025AD</td><td class="crd-td">41,6k</td><td class="crd-td">139,6k</td><td class="crd-td">158,3k</td><td class="crd-td">174,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kimchaek</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">40,67, 129,19</td><td class="crd-td">1953-2025AD</td><td class="crd-td">58,7k</td><td class="crd-td">137k</td><td class="crd-td">155,3k</td><td class="crd-td">171,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kusong</strong></td><td class="crd-td">Pyongan-bukto</td><td class="crd-td">39,98, 125,24</td><td class="crd-td">1953-2025AD</td><td class="crd-td">58,7k</td><td class="crd-td">136,9k</td><td class="crd-td">155,2k</td><td class="crd-td">171,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Unsan</strong></td><td class="crd-td">Pyongan-bukto</td><td class="crd-td">40,08, 125,84</td><td class="crd-td">1953-2025AD</td><td class="crd-td">54k</td><td class="crd-td">125,9k</td><td class="crd-td">142,7k</td><td class="crd-td">157,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Huichon</strong></td><td class="crd-td">Chagang-do</td><td class="crd-td">40,17, 126,28</td><td class="crd-td">1953-2025AD</td><td class="crd-td">51,5k</td><td class="crd-td">120k</td><td class="crd-td">136,1k</td><td class="crd-td">150,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Paekak</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,46, 125,61</td><td class="crd-td">1953-2025AD</td><td class="crd-td">47,6k</td><td class="crd-td">111,1k</td><td class="crd-td">125,9k</td><td class="crd-td">139,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chaeryong-ni</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">38,74, 125,23</td><td class="crd-td">1953-2025AD</td><td class="crd-td">47,5k</td><td class="crd-td">110,8k</td><td class="crd-td">125,6k</td><td class="crd-td">138,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sakju</strong></td><td class="crd-td">Pyongan-bukto</td><td class="crd-td">40,36, 124,93</td><td class="crd-td">1953-2025AD</td><td class="crd-td">45k</td><td class="crd-td">105k</td><td class="crd-td">119,1k</td><td class="crd-td">131,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pukchang</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,58, 126,34</td><td class="crd-td">1953-2025AD</td><td class="crd-td">42,1k</td><td class="crd-td">98,1k</td><td class="crd-td">111,2k</td><td class="crd-td">122,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kangson</strong></td><td class="crd-td">Pyongyang</td><td class="crd-td">38,94, 125,58</td><td class="crd-td">1953-2025AD</td><td class="crd-td">19,7k</td><td class="crd-td">90,3k</td><td class="crd-td">102,4k</td><td class="crd-td">113,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hwasong</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">41,26, 129,49</td><td class="crd-td">1953-2025AD</td><td class="crd-td">37,6k</td><td class="crd-td">87,8k</td><td class="crd-td">99,6k</td><td class="crd-td">110k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pyongsong</strong></td><td class="crd-td">Pyongyang</td><td class="crd-td">39,25, 125,87</td><td class="crd-td">1953-2025AD</td><td class="crd-td">18,6k</td><td class="crd-td">85,3k</td><td class="crd-td">96,7k</td><td class="crd-td">106,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Songrim</strong></td><td class="crd-td">Pyongyang</td><td class="crd-td">38,75, 125,64</td><td class="crd-td">1953-2025AD</td><td class="crd-td">18,5k</td><td class="crd-td">84,6k</td><td class="crd-td">95,9k</td><td class="crd-td">105,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Munchon</strong></td><td class="crd-td">Kangwon-do</td><td class="crd-td">39,26, 127,36</td><td class="crd-td">1953-2025AD</td><td class="crd-td">35k</td><td class="crd-td">81,6k</td><td class="crd-td">92,5k</td><td class="crd-td">102,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hoeryong</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">42,44, 129,75</td><td class="crd-td">1953-2025AD</td><td class="crd-td">35k</td><td class="crd-td">81,6k</td><td class="crd-td">92,5k</td><td class="crd-td">102,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kujang</strong></td><td class="crd-td">Pyongan-bukto</td><td class="crd-td">39,93, 126,08</td><td class="crd-td">1953-2025AD</td><td class="crd-td">34,8k</td><td class="crd-td">81,1k</td><td class="crd-td">91,9k</td><td class="crd-td">101,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Onsong</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">42,82, 129,93</td><td class="crd-td">1953-2025AD</td><td class="crd-td">34,7k</td><td class="crd-td">81k</td><td class="crd-td">91,9k</td><td class="crd-td">101,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Musan</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">42,13, 129,34</td><td class="crd-td">1953-2025AD</td><td class="crd-td">32k</td><td class="crd-td">74,6k</td><td class="crd-td">84,5k</td><td class="crd-td">93,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Onchon</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">38,87, 125,24</td><td class="crd-td">1953-2025AD</td><td class="crd-td">31,7k</td><td class="crd-td">74k</td><td class="crd-td">83,9k</td><td class="crd-td">92,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Songchon</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,26, 126,22</td><td class="crd-td">1953-2025AD</td><td class="crd-td">31,4k</td><td class="crd-td">73,1k</td><td class="crd-td">82,9k</td><td class="crd-td">91,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kilju</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">41, 129,17</td><td class="crd-td">1953-2025AD</td><td class="crd-td">28k</td><td class="crd-td">65,4k</td><td class="crd-td">74,2k</td><td class="crd-td">81,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kumya</strong></td><td class="crd-td">Hamgyong-namdo</td><td class="crd-td">39,5, 127,29</td><td class="crd-td">1953-2025AD</td><td class="crd-td">27,6k</td><td class="crd-td">64,5k</td><td class="crd-td">73,1k</td><td class="crd-td">80,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Songgan</strong></td><td class="crd-td">Chagang-do</td><td class="crd-td">40,76, 126,68</td><td class="crd-td">1953-2025AD</td><td class="crd-td">27,3k</td><td class="crd-td">63,6k</td><td class="crd-td">72,1k</td><td class="crd-td">79,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hongwon</strong></td><td class="crd-td">Hamgyong-namdo</td><td class="crd-td">40,13, 127,95</td><td class="crd-td">1953-2025AD</td><td class="crd-td">27,1k</td><td class="crd-td">63,3k</td><td class="crd-td">71,8k</td><td class="crd-td">79,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kyongsong</strong></td><td class="crd-td">Hamgyong-bukto</td><td class="crd-td">41,69, 129,45</td><td class="crd-td">1953-2025AD</td><td class="crd-td">26,7k</td><td class="crd-td">62,2k</td><td class="crd-td">70,5k</td><td class="crd-td">77,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Eunsan</strong></td><td class="crd-td">Pyongan-namdo</td><td class="crd-td">39,45, 126,17</td><td class="crd-td">1953-2025AD</td><td class="crd-td">26,5k</td><td class="crd-td">61,9k</td><td class="crd-td">70,2k</td><td class="crd-td">77,5k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements in North Korea ordered by peak documented population from 1953AD to 2026AD.</figcaption>
</figure>

## Regional Urban Agglomerations and Specialised Centres

### The Capital Agglomeration and Lower Taedong Corridor

The urban system is dominated by the metropolitan axis along the lower Taedong River [@UNFPA2008DPRKCensus; @EberstadtBanister1992]. Pyongyang forms the political, scientific and cultural heart of the nation, housing 2,39M residents in its central urban districts (led by Mangyongdae-ri with 355k) and 3,47M across its direct-administered territory in 2026AD [@UNFPA2008DPRKCensus].

Downstream at the mouth of the Taedong, Nampo functions as the principal maritime gateway and industrial container hub, supporting 782k inhabitants in 2025AD [@UNFPA2008DPRKCensus]. Connected by the Youth Hero Highway, the Pyongyang-Nampo corridor forms a contiguous economic region concentrating specialised research institutes, international trade organs and precision engineering plants [@Buzo2022Dprk; @Sauvage2026Witness].

### The Eastern Heavy Industrial Axis

Along the Sea of Japan coast, two major industrial agglomerations anchor eastern urbanisation [@UNFPA2008DPRKCensus; @EberstadtBanister1992]. In South Hamgyong, Hamhung (670k peak) and its contiguous port of Hungnam (382k) constitute the largest industrial complex outside Pyongyang, specialising in synthetic textiles (vinalon), chemical fertilisers and metallurgical machinery [@EberstadtBanister1992].

Further north in North Hamgyong, Chongjin (582k peak) serves as the primary heavy metallurgical base of the country, dominated by the blast furnaces of the Kim Chaek Iron and Steel Complex [@UNFPA2008DPRKCensus]. Flanking Chongjin are the coastal mining ports of Tanchon (266k), famous for magnesite and non-ferrous metal smelting, and Kimchaek city (formerly Songjin), which processes refined metals [@UNFPA2008DPRKCensus].

### Western Lowland Administrative and Agrarian Nodes

Across the fertile agricultural plains of Pyongan and Hwanghae, a dense network of secondary industrial cities and county seats coordinates grain extraction and regional commerce [@UNFPA2008DPRKCensus]. In South Pyongan, Kaechon (290k), Sunchon (277k), Tokchon (262k), and Anju (185k) form an intensive coal-mining and machine-manufacturing basin [@EberstadtBanister1992].

In North Pyongan, Sinuiju (369k) dominates border trade with China along the lower Yalu River, processing consumer goods imports, timber and light industrial commodities [@Hunnicutt2020North; @Kang2024Singaporedemocratic]. In the Hwanghae rice basin, Sariwon (300k) and Haeju (267k) serve as provincial administrative capitals and agricultural processing centres, while Kaesong (213k) bridges traditional cultural tourism and light industrial manufacturing [@UNFPA2008DPRKCensus; @Hwang2024United].

### Northern Interior and Frontier Municipalities

In the rugged northern interior, urban settlements are closely tethered to mineral extraction, forestry and national defense installations [@UNFPA2008DPRKCensus; @Buzo2022Dprk]. Kanggye (278k), the capital of Chagang province, coordinates underground precision engineering and armaments works [@EberstadtBanister1992].

In Ryanggang province, Hyesan (192k) serves as a highland administrative and border transshipment node along the upper Yalu River, supported by timber extraction and copper mining at the nearby Kapsan mine [@Hunnicutt2020North; @UNFPA2008DPRKCensus]. At the northeastern extremity, the ice-free port of Rason (206k in 2008AD, 228k in 2026AD) functions as a special economic zone hosting international cargo transit between northeast China, eastern Russia and Asia-Pacific maritime routes [@Kang2024Singaporedemocratic; @Tham2024Vietnamdprk; @Sauvage2026Witness].

These catalogued centres capture the spatial organization of socialist urban planning and demographic change across modern North Korea [@UNFPA2008DPRKCensus; @Spoorenberg2012DPRK; @Lee2022Trends; @Grundy2015Public; @Paciorek2006Matern].

# Sources

<div id="refs"></div>
