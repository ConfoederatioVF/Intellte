---
title: "Republic of Turkey after 1923"
subtitle: "Settlement Gazetteer, Urban Hierarchy and District Structure, 1923AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: republic_of_turkey_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_republic_of_turkey_spatial.png"
hero_caption: "Spatial distribution of 326 catalogued urban settlements across the 81 Turkish provinces from 1923AD to 2026AD, highlighting the metropolitan nodes of Istanbul, Ankara, Izmir, Bursa, Konya, Adana and Gaziantep."
hero_label: "fig:hero-settlements"
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

This gazetteer documents the demographic trajectories of 326 urban and regional settlements across the Republic of Turkey from 1923AD to 2025AD, anchored to WGS84 coordinates and assigned to all 81 modern provinces across Turkey's seven geographical regions. Compiled from Turkish Statistical Institute (TUIK) general population censuses (1927-2000AD), the Address-Based Population Registration System (ADNKS, 2007-2024AD) and late-Ottoman-to-Republican municipal continuity records, the catalogued urban cohort grew more than tenfold over the century, rising from 6,37M across 323 pre-existing towns in 1923AD to 18,2M in 1970AD and 69,02M across all 326 settlements in 2025AD. Across the full national cohort, rank-size scaling exhibits a Zipf exponent of 1,1 ($R^2 = 0,98$), reflecting both Istanbul's ascent from 1,4M to 15,9M and the emergence of secondary million-city hubs in Ankara (5,41M), Izmir (3,07M), Bursa (2,14M), Adana (1,86M), Gaziantep (1,75M), Konya (1,42M), Antalya (1,38M), Diyarbakir (1,13M), Mersin (1,09M) and Kayseri (1,03M). By maintaining continuous urban agglomeration definitions rather than fluctuating municipal annexations, this gazetteer insulates longitudinal city growth series from Turkey's 2012-2014AD metropolitan boundary reform and complements the 968-district ADM2 subadministrative census layer.

# Background

At the proclamation of the Republic in October 1923, Turkey possessed a sparse urban network scarred by a decade of warfare and the compulsory Greek-Turkish population exchange [@Bakar2017Turkey; @Ustaoglu2021Reconstruc]. Outside Istanbul, Izmir and Adana, most provincial capitals functioned as modest market and garrison towns of 15k to 80k residents serving predominantly agrarian hinterlands [@Hofmeester2020Shifting; @Hartmann2022Meeting]. Even Ankara, designated the new Republican capital in 1923AD, stood near 571k across its wider urban basin before state ministries, railways and defence factories spurred sustained central Anatolian urbanisation.

After 1950AD, Marshall Plan tractorisation, highway construction and declining rural mortality detached millions of smallholders from Anatolia's villages and launched a multi-decade urban migration wave [@Karakoc2026Concentrat; @Balc2022Istanbul]. Industrial corridors formed along the Sea of Marmara from Tekirdag and Istanbul through Gebze, Izmit and Bursa, while Aegean, Mediterranean and southeastern centres expanded on irrigated cash crops, textiles, construction and tourism [@Baysal2022Urbanizati; @Bostan2025Rkiye; @Oguz2021Resilient]. From the 1980s onward, internal Kurdish migration and after 2011AD Syrian refugee inflows added hundreds of thousands of residents to Gaziantep, Sanliurfa, Kilis, Adana, Mersin, Antalya and Istanbul [@Alptekin2024Three; @INCILI2020Kilis; @DEMIR2022Antalya].

# Methodology

Every settlement trajectory in this gazetteer represents a continuous urban agglomeration harmonised across TUIK's fourteen de facto censuses (1927-2000AD) and the de jure ADNKS register (2007-2024AD) [@Bostan2023Comparativ]. Rather than adopting raw municipal limits—which jumped abruptly in 2013-2014AD when Law No. 6360 expanded 30 metropolitan municipalities to provincial boundaries and reclassified rural villages as urban wards [@Canpolat2018Terms; @Bostan2025Rkiye]—consistent core-agglomeration series trace physical urban growth across 18 benchmark years (1923AD to 2025AD). Five minor satellite towns within 2 km of primary urban cores (Karasu, Sapanca, Saray, Kemer and Arakli) were merged into adjacent municipal trajectories during candidate screening, leaving 326 retained entries.

Each settlement coordinate pair is mapped via polygon containment onto the 81-province geoBoundaries administrative geometry [@Runfola2020GeoBoundaries] and grouped into Turkey's seven standard geographical regions: Marmara, Aegean, Mediterranean, Central Anatolia, Black Sea, Eastern Anatolia and Southeastern Anatolia. Four resource and state-industry towns carry explicit historical foundation thresholds: Zonguldak (1849AD coal port), Kirikkale (1925AD munitions works), Karabuk (1937AD steelworks) and Batman (1940AD petroleum field), preventing pre-foundation back-projection prior to industrial establishment.

# Testing and Validation

Figure \ref{fig:settlements-hierarchy} confirms that all 326 catalogued cities follow a tight log-linear Zipf rank-size relation ($\alpha = 1,10$, $R^2 = 0,98$) from Istanbul (15,9M) down to the smallest district towns near 18,8k to 20k (Eskil 18,8k, Sarikaya 19,2k, Gorele 19,5k). Comparing urban totals against the national series shows functional urban share rising smoothly from 48,6% (6,37M of 13,1M) in 1923AD and 56% (11,72M of 20,95M) in 1950AD to 67,8% (39,46M of 67,8M) in 2000AD and 80,6% (69,02M of 85,66M) in 2025AD—avoiding the artificial step-jump present in statutory post-2012AD municipal tables [@Canpolat2018Terms]. Cross-checking regional sums against the 968 matched geoBoundaries ADM2 districts further confirms spatial alignment across metropolitan cores such as Esenyurt (978k in 2023AD), Sahinbey (939,5k) and Cankaya (937,5k) [@Runfola2020GeoBoundaries].

<figure class="crd-figure-block" id="fig:settlements-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-republic-of-turkey-settlements/fig4_republic_of_turkey_settlements.png" alt="fig:settlements-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve for all 326 catalogued Turkish settlements (left) and the twelve largest metropolitan agglomerations at their 2025AD peak (right).</figcaption>
</figure>

# Results

## Marmara Region

Anchoring Turkey's northwestern industrial crescent, Marmara contains 58 catalogued settlements led by Istanbul (15,9M), Bursa (2,14M), Gebze (801,4k), Adapazari (577,1k), Izmit (356,7k), Balikesir (328,5k) and Corlu (321,3k) (Table \ref{tab:reg-marmara}). Rapid manufacturing expansion turned former Thracian and Bithynian market towns such as Gebze (33,9x), Silivri (33,6x), Gursu (35,7x) and Cerkezkoy (28x) into dense industrial satellites [@Bostan2025Rkiye; @UNAL2025Interactio; @KOSE2022Impact].

<figure class="crd-table-figure" id="tab:reg-marmara">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>İstanbul</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,01, 28,95</td><td class="crd-td">1,4M</td><td class="crd-td">3,94M</td><td class="crd-td">15,9M</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,2, 29,06</td><td class="crd-td">156,6k</td><td class="crd-td">440,3k</td><td class="crd-td">2,14M</td></tr>
<tr><td class="crd-td"><strong>Gebze</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,8, 29,43</td><td class="crd-td">23,7k</td><td class="crd-td">66,6k</td><td class="crd-td">801,4k</td></tr>
<tr><td class="crd-td"><strong>Adapazarı</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,78, 30,4</td><td class="crd-td">62,3k</td><td class="crd-td">175,2k</td><td class="crd-td">577k</td></tr>
<tr><td class="crd-td"><strong>İzmit</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,76, 29,93</td><td class="crd-td">43,7k</td><td class="crd-td">122,8k</td><td class="crd-td">356,7k</td></tr>
<tr><td class="crd-td"><strong>Balıkesir</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,65, 27,89</td><td class="crd-td">38,3k</td><td class="crd-td">107,8k</td><td class="crd-td">328,5k</td></tr>
<tr><td class="crd-td"><strong>Çorlu</strong></td><td class="crd-td">Tekirdag</td><td class="crd-td">41,16, 27,8</td><td class="crd-td">15,1k</td><td class="crd-td">42,5k</td><td class="crd-td">321,3k</td></tr>
<tr><td class="crd-td"><strong>Arnavutköy</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,18, 28,74</td><td class="crd-td">25,8k</td><td class="crd-td">72,5k</td><td class="crd-td">270k</td></tr>
<tr><td class="crd-td"><strong>İnegöl</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,08, 29,51</td><td class="crd-td">14k</td><td class="crd-td">39,3k</td><td class="crd-td">250k</td></tr>
<tr><td class="crd-td"><strong>Silivri</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,07, 28,25</td><td class="crd-td">6k</td><td class="crd-td">16,8k</td><td class="crd-td">200,1k</td></tr>
<tr><td class="crd-td"><strong>Tekirdağ</strong></td><td class="crd-td">Tekirdag</td><td class="crd-td">40,98, 27,51</td><td class="crd-td">16,2k</td><td class="crd-td">45,4k</td><td class="crd-td">194,4k</td></tr>
<tr><td class="crd-td"><strong>Edirne</strong></td><td class="crd-td">Edirne</td><td class="crd-td">41,68, 26,56</td><td class="crd-td">22,2k</td><td class="crd-td">62,5k</td><td class="crd-td">187,7k</td></tr>
<tr><td class="crd-td"><strong>Körfez</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,77, 29,78</td><td class="crd-td">12,4k</td><td class="crd-td">34,8k</td><td class="crd-td">181,8k</td></tr>
<tr><td class="crd-td"><strong>Gölcük</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,72, 29,82</td><td class="crd-td">14,3k</td><td class="crd-td">40,3k</td><td class="crd-td">177,2k</td></tr>
<tr><td class="crd-td"><strong>Bandırma</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">40,35, 27,98</td><td class="crd-td">17,9k</td><td class="crd-td">50,4k</td><td class="crd-td">151,7k</td></tr>
<tr><td class="crd-td"><strong>Çanakkale</strong></td><td class="crd-td">Çanakkale</td><td class="crd-td">40,16, 26,41</td><td class="crd-td">12,3k</td><td class="crd-td">34,6k</td><td class="crd-td">149,8k</td></tr>
<tr><td class="crd-td"><strong>Derince</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,76, 29,81</td><td class="crd-td">15,1k</td><td class="crd-td">42,6k</td><td class="crd-td">149,7k</td></tr>
<tr><td class="crd-td"><strong>Çerkezköy</strong></td><td class="crd-td">Tekirdag</td><td class="crd-td">41,29, 28</td><td class="crd-td">5,3k</td><td class="crd-td">14,9k</td><td class="crd-td">147,9k</td></tr>
<tr><td class="crd-td"><strong>Yalova</strong></td><td class="crd-td">Yalova</td><td class="crd-td">40,66, 29,28</td><td class="crd-td">13,8k</td><td class="crd-td">38,7k</td><td class="crd-td">138,8k</td></tr>
<tr><td class="crd-td"><strong>Lüleburgaz</strong></td><td class="crd-td">Kirklareli</td><td class="crd-td">41,4, 27,36</td><td class="crd-td">11,1k</td><td class="crd-td">31,2k</td><td class="crd-td">130,8k</td></tr>
<tr><td class="crd-td"><strong>Edremit</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,6, 27,02</td><td class="crd-td">7,7k</td><td class="crd-td">21,7k</td><td class="crd-td">130,7k</td></tr>
<tr><td class="crd-td"><strong>Başiskele</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,65, 29,9</td><td class="crd-td">9,7k</td><td class="crd-td">27,2k</td><td class="crd-td">117,8k</td></tr>
<tr><td class="crd-td"><strong>Gemlik</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,43, 29,16</td><td class="crd-td">9,4k</td><td class="crd-td">26,4k</td><td class="crd-td">116k</td></tr>
<tr><td class="crd-td"><strong>Gürsu</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,22, 29,19</td><td class="crd-td">2,9k</td><td class="crd-td">8,2k</td><td class="crd-td">104,2k</td></tr>
<tr><td class="crd-td"><strong>Mudanya</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,69, 30,27</td><td class="crd-td">2,8k</td><td class="crd-td">7,8k</td><td class="crd-td">90,7k</td></tr>
<tr><td class="crd-td"><strong>Kırklareli</strong></td><td class="crd-td">Kirklareli</td><td class="crd-td">41,74, 27,23</td><td class="crd-td">10,5k</td><td class="crd-td">29,4k</td><td class="crd-td">89,2k</td></tr>
<tr><td class="crd-td"><strong>Bozüyük</strong></td><td class="crd-td">Bilecik</td><td class="crd-td">39,91, 30,04</td><td class="crd-td">7,6k</td><td class="crd-td">21,4k</td><td class="crd-td">76,7k</td></tr>
<tr><td class="crd-td"><strong>Bilecik</strong></td><td class="crd-td">Bilecik</td><td class="crd-td">40,14, 29,98</td><td class="crd-td">4,7k</td><td class="crd-td">13,3k</td><td class="crd-td">75,3k</td></tr>
<tr><td class="crd-td"><strong>Orhangazi</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,49, 29,31</td><td class="crd-td">5,9k</td><td class="crd-td">16,7k</td><td class="crd-td">69,5k</td></tr>
<tr><td class="crd-td"><strong>Karacabey</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,21, 28,36</td><td class="crd-td">7,3k</td><td class="crd-td">20,4k</td><td class="crd-td">67,6k</td></tr>
<tr><td class="crd-td"><strong>Kestel</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,2, 29,21</td><td class="crd-td">3,5k</td><td class="crd-td">9,8k</td><td class="crd-td">66,9k</td></tr>
<tr><td class="crd-td"><strong>Keşan</strong></td><td class="crd-td">Edirne</td><td class="crd-td">40,86, 26,63</td><td class="crd-td">9,3k</td><td class="crd-td">26,2k</td><td class="crd-td">65,1k</td></tr>
<tr><td class="crd-td"><strong>Hendek</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,8, 30,75</td><td class="crd-td">5,5k</td><td class="crd-td">15,5k</td><td class="crd-td">64,9k</td></tr>
<tr><td class="crd-td"><strong>Mustafakemalpaşa</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,04, 28,41</td><td class="crd-td">8,7k</td><td class="crd-td">24,4k</td><td class="crd-td">64,3k</td></tr>
<tr><td class="crd-td"><strong>Biga</strong></td><td class="crd-td">Çanakkale</td><td class="crd-td">40,23, 27,24</td><td class="crd-td">4,8k</td><td class="crd-td">13,4k</td><td class="crd-td">61k</td></tr>
<tr><td class="crd-td"><strong>Karamürsel</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,69, 29,62</td><td class="crd-td">5,6k</td><td class="crd-td">15,8k</td><td class="crd-td">57,3k</td></tr>
<tr><td class="crd-td"><strong>Aksu</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">41,07, 30,79</td><td class="crd-td">6,8k</td><td class="crd-td">19,1k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Akyazı</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,69, 30,62</td><td class="crd-td">4,4k</td><td class="crd-td">12,4k</td><td class="crd-td">56,3k</td></tr>
<tr><td class="crd-td"><strong>Gönen</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">40,1, 27,65</td><td class="crd-td">6,1k</td><td class="crd-td">17,3k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Burhaniye</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,5, 26,97</td><td class="crd-td">5k</td><td class="crd-td">14k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Dilovası</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,79, 29,54</td><td class="crd-td">6,1k</td><td class="crd-td">17,2k</td><td class="crd-td">49,3k</td></tr>
<tr><td class="crd-td"><strong>Çiftlikköy</strong></td><td class="crd-td">Yalova</td><td class="crd-td">40,66, 29,32</td><td class="crd-td">2,7k</td><td class="crd-td">7,5k</td><td class="crd-td">45,4k</td></tr>
<tr><td class="crd-td"><strong>Ayvalık</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,32, 26,69</td><td class="crd-td">5,9k</td><td class="crd-td">16,5k</td><td class="crd-td">42,4k</td></tr>
<tr><td class="crd-td"><strong>Çatalca</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,14, 28,46</td><td class="crd-td">2,6k</td><td class="crd-td">7,4k</td><td class="crd-td">41,4k</td></tr>
<tr><td class="crd-td"><strong>Uzunköprü</strong></td><td class="crd-td">Edirne</td><td class="crd-td">41,27, 26,69</td><td class="crd-td">8k</td><td class="crd-td">22,4k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Yenişehir</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,26, 29,65</td><td class="crd-td">4,9k</td><td class="crd-td">13,7k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Gelibolu</strong></td><td class="crd-td">Çanakkale</td><td class="crd-td">40,41, 26,67</td><td class="crd-td">4,3k</td><td class="crd-td">12k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Çan</strong></td><td class="crd-td">Çanakkale</td><td class="crd-td">40,03, 27,05</td><td class="crd-td">5,5k</td><td class="crd-td">15,4k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Malkara</strong></td><td class="crd-td">Tekirdag</td><td class="crd-td">40,89, 26,9</td><td class="crd-td">4,6k</td><td class="crd-td">13k</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>Babaeski</strong></td><td class="crd-td">Kirklareli</td><td class="crd-td">41,43, 27,1</td><td class="crd-td">5,2k</td><td class="crd-td">14,7k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>İznik</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,43, 29,72</td><td class="crd-td">3,9k</td><td class="crd-td">11,1k</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Geyve</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,51, 30,29</td><td class="crd-td">3,1k</td><td class="crd-td">8,6k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>Susurluk</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,91, 28,16</td><td class="crd-td">4,3k</td><td class="crd-td">12,2k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Şarköy</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,48, 26,98</td><td class="crd-td">2,6k</td><td class="crd-td">7,4k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Ferizli</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,94, 30,49</td><td class="crd-td">1,2k</td><td class="crd-td">3,3k</td><td class="crd-td">22,5k</td></tr>
<tr><td class="crd-td"><strong>Pamukova</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,51, 30,17</td><td class="crd-td">2,3k</td><td class="crd-td">6,5k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Çınarcık</strong></td><td class="crd-td">Yalova</td><td class="crd-td">40,65, 29,12</td><td class="crd-td">1,7k</td><td class="crd-td">4,9k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Erdek</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">40,4, 27,79</td><td class="crd-td">3k</td><td class="crd-td">8,5k</td><td class="crd-td">20,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlements of the Marmara Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

## Aegean Region

Across western Anatolia, 53 catalogued settlements follow Izmir (3,07M), Denizli (679,1k), Manisa (402k), Usak (250k) and Aydin (235k), pairing port commerce with export agriculture and textile towns (Table \ref{tab:reg-aegean}). Suburban expansion lifted Torbali (42,5x) and Menemen (29,1x) alongside coastal Bodrum (25,7x) [@Oguz2021Resilient].

<figure class="crd-table-figure" id="tab:reg-aegean">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>İzmir</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,41, 27,14</td><td class="crd-td">380,8k</td><td class="crd-td">1,07M</td><td class="crd-td">3,07M</td></tr>
<tr><td class="crd-td"><strong>Denizli</strong></td><td class="crd-td">Denizli</td><td class="crd-td">37,77, 29,09</td><td class="crd-td">43,2k</td><td class="crd-td">121,6k</td><td class="crd-td">679,1k</td></tr>
<tr><td class="crd-td"><strong>Manisa</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,61, 27,43</td><td class="crd-td">32,5k</td><td class="crd-td">91,3k</td><td class="crd-td">402k</td></tr>
<tr><td class="crd-td"><strong>Kütahya</strong></td><td class="crd-td">Kütahya</td><td class="crd-td">39,42, 29,98</td><td class="crd-td">30,4k</td><td class="crd-td">85,4k</td><td class="crd-td">275,2k</td></tr>
<tr><td class="crd-td"><strong>Aydın</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,85, 27,84</td><td class="crd-td">23,1k</td><td class="crd-td">65k</td><td class="crd-td">270,1k</td></tr>
<tr><td class="crd-td"><strong>Afyonkarahisar</strong></td><td class="crd-td">Afyonkarahisar</td><td class="crd-td">38,76, 30,54</td><td class="crd-td">22,2k</td><td class="crd-td">62,6k</td><td class="crd-td">267,9k</td></tr>
<tr><td class="crd-td"><strong>Uşak</strong></td><td class="crd-td">Usak</td><td class="crd-td">38,67, 29,41</td><td class="crd-td">22,6k</td><td class="crd-td">63,5k</td><td class="crd-td">239,3k</td></tr>
<tr><td class="crd-td"><strong>Torbalı</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,18, 27,34</td><td class="crd-td">4,8k</td><td class="crd-td">13,6k</td><td class="crd-td">205,8k</td></tr>
<tr><td class="crd-td"><strong>Menemen</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,61, 27,07</td><td class="crd-td">6,6k</td><td class="crd-td">18,7k</td><td class="crd-td">193,5k</td></tr>
<tr><td class="crd-td"><strong>Turgutlu</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,5, 27,7</td><td class="crd-td">16,8k</td><td class="crd-td">47,3k</td><td class="crd-td">161,1k</td></tr>
<tr><td class="crd-td"><strong>Akhisar</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,92, 27,84</td><td class="crd-td">17,5k</td><td class="crd-td">49,3k</td><td class="crd-td">138k</td></tr>
<tr><td class="crd-td"><strong>Nazilli</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,92, 28,32</td><td class="crd-td">19,8k</td><td class="crd-td">55,8k</td><td class="crd-td">130,2k</td></tr>
<tr><td class="crd-td"><strong>Bodrum</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,04, 27,43</td><td class="crd-td">4,8k</td><td class="crd-td">13,5k</td><td class="crd-td">123,3k</td></tr>
<tr><td class="crd-td"><strong>Salihli</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,48, 28,15</td><td class="crd-td">16,3k</td><td class="crd-td">45,8k</td><td class="crd-td">116,2k</td></tr>
<tr><td class="crd-td"><strong>Fethiye</strong></td><td class="crd-td">Mugla</td><td class="crd-td">36,64, 29,13</td><td class="crd-td">8,6k</td><td class="crd-td">24,1k</td><td class="crd-td">116k</td></tr>
<tr><td class="crd-td"><strong>Kuşadası</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,86, 27,26</td><td class="crd-td">7,3k</td><td class="crd-td">20,6k</td><td class="crd-td">104k</td></tr>
<tr><td class="crd-td"><strong>Soma</strong></td><td class="crd-td">Manisa</td><td class="crd-td">39,19, 27,61</td><td class="crd-td">12,4k</td><td class="crd-td">34,9k</td><td class="crd-td">102,9k</td></tr>
<tr><td class="crd-td"><strong>Kemalpaşa</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,43, 27,42</td><td class="crd-td">3,7k</td><td class="crd-td">10,5k</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Söke</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,75, 27,41</td><td class="crd-td">11,4k</td><td class="crd-td">32k</td><td class="crd-td">92,9k</td></tr>
<tr><td class="crd-td"><strong>Menderes</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,25, 27,13</td><td class="crd-td">2,2k</td><td class="crd-td">6,1k</td><td class="crd-td">92,8k</td></tr>
<tr><td class="crd-td"><strong>Ödemiş</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,23, 27,97</td><td class="crd-td">12,1k</td><td class="crd-td">34,1k</td><td class="crd-td">88,8k</td></tr>
<tr><td class="crd-td"><strong>Muğla</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,22, 28,37</td><td class="crd-td">8k</td><td class="crd-td">22,5k</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Didim</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,38, 27,26</td><td class="crd-td">2,6k</td><td class="crd-td">7,3k</td><td class="crd-td">84,3k</td></tr>
<tr><td class="crd-td"><strong>Aliağa</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,8, 26,97</td><td class="crd-td">5,8k</td><td class="crd-td">16,4k</td><td class="crd-td">83,9k</td></tr>
<tr><td class="crd-td"><strong>Tavşanlı</strong></td><td class="crd-td">Kütahya</td><td class="crd-td">39,54, 29,5</td><td class="crd-td">8,8k</td><td class="crd-td">24,6k</td><td class="crd-td">76,5k</td></tr>
<tr><td class="crd-td"><strong>Bergama</strong></td><td class="crd-td">Izmir</td><td class="crd-td">39,12, 27,18</td><td class="crd-td">9,7k</td><td class="crd-td">27,4k</td><td class="crd-td">76,2k</td></tr>
<tr><td class="crd-td"><strong>Milas</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,32, 27,78</td><td class="crd-td">6,6k</td><td class="crd-td">18,5k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Marmaris</strong></td><td class="crd-td">Mugla</td><td class="crd-td">36,85, 28,27</td><td class="crd-td">8,3k</td><td class="crd-td">23,4k</td><td class="crd-td">74,1k</td></tr>
<tr><td class="crd-td"><strong>Tire</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,09, 27,74</td><td class="crd-td">8,7k</td><td class="crd-td">24,4k</td><td class="crd-td">67,7k</td></tr>
<tr><td class="crd-td"><strong>Urla</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,32, 26,76</td><td class="crd-td">5,9k</td><td class="crd-td">16,5k</td><td class="crd-td">65,7k</td></tr>
<tr><td class="crd-td"><strong>Alaşehir</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,35, 28,52</td><td class="crd-td">8,4k</td><td class="crd-td">23,6k</td><td class="crd-td">59,9k</td></tr>
<tr><td class="crd-td"><strong>Seferihisar</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,2, 26,84</td><td class="crd-td">2,5k</td><td class="crd-td">6,9k</td><td class="crd-td">52,9k</td></tr>
<tr><td class="crd-td"><strong>Dalaman</strong></td><td class="crd-td">Mugla</td><td class="crd-td">36,77, 28,8</td><td class="crd-td">3,4k</td><td class="crd-td">9,7k</td><td class="crd-td">39,1k</td></tr>
<tr><td class="crd-td"><strong>Ortaca</strong></td><td class="crd-td">Mugla</td><td class="crd-td">36,84, 28,76</td><td class="crd-td">2,8k</td><td class="crd-td">7,8k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Sandıklı</strong></td><td class="crd-td">Afyonkarahisar</td><td class="crd-td">38,46, 30,27</td><td class="crd-td">5,1k</td><td class="crd-td">14,4k</td><td class="crd-td">35,9k</td></tr>
<tr><td class="crd-td"><strong>Bolvadin</strong></td><td class="crd-td">Afyonkarahisar</td><td class="crd-td">38,71, 31,05</td><td class="crd-td">4,5k</td><td class="crd-td">12,6k</td><td class="crd-td">35,3k</td></tr>
<tr><td class="crd-td"><strong>Çeşme</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,33, 26,31</td><td class="crd-td">4,7k</td><td class="crd-td">13,3k</td><td class="crd-td">34,7k</td></tr>
<tr><td class="crd-td"><strong>Selçuk</strong></td><td class="crd-td">Izmir</td><td class="crd-td">37,95, 27,37</td><td class="crd-td">4,4k</td><td class="crd-td">12,5k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>İncirliova</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,85, 27,72</td><td class="crd-td">2,9k</td><td class="crd-td">8,2k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Foça</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,67, 26,76</td><td class="crd-td">4,1k</td><td class="crd-td">11,6k</td><td class="crd-td">29,8k</td></tr>
<tr><td class="crd-td"><strong>Simav</strong></td><td class="crd-td">Kütahya</td><td class="crd-td">39,09, 28,98</td><td class="crd-td">3,7k</td><td class="crd-td">10,4k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Dinar</strong></td><td class="crd-td">Afyonkarahisar</td><td class="crd-td">38,06, 30,17</td><td class="crd-td">3,6k</td><td class="crd-td">10,2k</td><td class="crd-td">27,9k</td></tr>
<tr><td class="crd-td"><strong>Gediz</strong></td><td class="crd-td">Kütahya</td><td class="crd-td">38,99, 29,39</td><td class="crd-td">3,3k</td><td class="crd-td">9,3k</td><td class="crd-td">27,8k</td></tr>
<tr><td class="crd-td"><strong>Kula</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,55, 28,65</td><td class="crd-td">3,9k</td><td class="crd-td">11,1k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Dikili</strong></td><td class="crd-td">Izmir</td><td class="crd-td">39,07, 26,89</td><td class="crd-td">2,3k</td><td class="crd-td">6,5k</td><td class="crd-td">27,1k</td></tr>
<tr><td class="crd-td"><strong>Saruhanlı</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,73, 27,57</td><td class="crd-td">3k</td><td class="crd-td">8,4k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>Emirdağ</strong></td><td class="crd-td">Afyonkarahisar</td><td class="crd-td">39,02, 31,15</td><td class="crd-td">4,8k</td><td class="crd-td">13,6k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Bayındır</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,22, 27,65</td><td class="crd-td">3,1k</td><td class="crd-td">8,8k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Kırkağaç</strong></td><td class="crd-td">Manisa</td><td class="crd-td">39,11, 27,67</td><td class="crd-td">4,9k</td><td class="crd-td">13,8k</td><td class="crd-td">22,7k</td></tr>
<tr><td class="crd-td"><strong>Çivril</strong></td><td class="crd-td">Denizli</td><td class="crd-td">38,3, 29,74</td><td class="crd-td">2,6k</td><td class="crd-td">7,4k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Çine</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,61, 28,06</td><td class="crd-td">3,5k</td><td class="crd-td">9,8k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Sarayköy</strong></td><td class="crd-td">Denizli</td><td class="crd-td">37,92, 28,93</td><td class="crd-td">3,5k</td><td class="crd-td">10k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Yatağan</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,34, 28,14</td><td class="crd-td">2,7k</td><td class="crd-td">7,7k</td><td class="crd-td">21,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements of the Aegean Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

## Mediterranean Region

The 46 settlements of the Mediterranean littoral span the Cukurova plain and the Gulf of Antalya, led by Adana (1,86M), Antalya (1,38M), Mersin (1,09M), Kahramanmaras (595,8k), Antakya (384,1k) and Tarsus (Table \ref{tab:reg-mediterranean}). Tourism, greenhouse horticulture and southeastern migration propelled Antalya (20,7x) and Alanya (26,9x) into Turkey's fastest-expanding southern hubs [@DEMIR2022Antalya; @Alptekin2024Three].

<figure class="crd-table-figure" id="tab:reg-mediterranean">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Adana</strong></td><td class="crd-td">Adana</td><td class="crd-td">36,99, 35,33</td><td class="crd-td">198,8k</td><td class="crd-td">559k</td><td class="crd-td">1,86M</td></tr>
<tr><td class="crd-td"><strong>Antalya</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,91, 30,7</td><td class="crd-td">66,8k</td><td class="crd-td">187,7k</td><td class="crd-td">1,38M</td></tr>
<tr><td class="crd-td"><strong>Mersin</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,81, 34,64</td><td class="crd-td">80,4k</td><td class="crd-td">226k</td><td class="crd-td">1,09M</td></tr>
<tr><td class="crd-td"><strong>Kahramanmaraş</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">37,58, 36,93</td><td class="crd-td">53,8k</td><td class="crd-td">151,2k</td><td class="crd-td">595,8k</td></tr>
<tr><td class="crd-td"><strong>Antakya</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,21, 36,16</td><td class="crd-td">27,6k</td><td class="crd-td">77,5k</td><td class="crd-td">384,1k</td></tr>
<tr><td class="crd-td"><strong>Tarsus</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,92, 34,89</td><td class="crd-td">37,5k</td><td class="crd-td">105,3k</td><td class="crd-td">290,4k</td></tr>
<tr><td class="crd-td"><strong>Osmaniye</strong></td><td class="crd-td">Osmaniye</td><td class="crd-td">37,07, 36,25</td><td class="crd-td">26,5k</td><td class="crd-td">74,6k</td><td class="crd-td">263k</td></tr>
<tr><td class="crd-td"><strong>Isparta</strong></td><td class="crd-td">Isparta</td><td class="crd-td">37,76, 30,55</td><td class="crd-td">25,9k</td><td class="crd-td">72,8k</td><td class="crd-td">258,2k</td></tr>
<tr><td class="crd-td"><strong>Alanya</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,54, 32</td><td class="crd-td">7,3k</td><td class="crd-td">20,7k</td><td class="crd-td">197,3k</td></tr>
<tr><td class="crd-td"><strong>İskenderun</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,59, 36,17</td><td class="crd-td">38,9k</td><td class="crd-td">109,3k</td><td class="crd-td">194,7k</td></tr>
<tr><td class="crd-td"><strong>Manavgat</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,79, 31,44</td><td class="crd-td">17k</td><td class="crd-td">47,8k</td><td class="crd-td">173,1k</td></tr>
<tr><td class="crd-td"><strong>Kapaklı</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,23, 29,89</td><td class="crd-td">8,8k</td><td class="crd-td">24,7k</td><td class="crd-td">132,9k</td></tr>
<tr><td class="crd-td"><strong>Ceyhan</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,02, 35,82</td><td class="crd-td">18,6k</td><td class="crd-td">52,2k</td><td class="crd-td">120,9k</td></tr>
<tr><td class="crd-td"><strong>Elbistan</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">38,21, 37,2</td><td class="crd-td">12,5k</td><td class="crd-td">35,1k</td><td class="crd-td">110,7k</td></tr>
<tr><td class="crd-td"><strong>Kadirli</strong></td><td class="crd-td">Osmaniye</td><td class="crd-td">37,37, 36,1</td><td class="crd-td">12,2k</td><td class="crd-td">34,2k</td><td class="crd-td">102,7k</td></tr>
<tr><td class="crd-td"><strong>Burdur</strong></td><td class="crd-td">Burdur</td><td class="crd-td">37,72, 30,29</td><td class="crd-td">13,8k</td><td class="crd-td">38,8k</td><td class="crd-td">100k</td></tr>
<tr><td class="crd-td"><strong>Kozan</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,46, 35,82</td><td class="crd-td">12,8k</td><td class="crd-td">36,1k</td><td class="crd-td">99,2k</td></tr>
<tr><td class="crd-td"><strong>Kırıkhan</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,5, 36,36</td><td class="crd-td">13,5k</td><td class="crd-td">37,9k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Dörtyol</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,84, 36,23</td><td class="crd-td">7,9k</td><td class="crd-td">22,1k</td><td class="crd-td">94,2k</td></tr>
<tr><td class="crd-td"><strong>Serik</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,92, 31,1</td><td class="crd-td">5,3k</td><td class="crd-td">14,9k</td><td class="crd-td">79,3k</td></tr>
<tr><td class="crd-td"><strong>Reyhanlı</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,27, 36,57</td><td class="crd-td">9,7k</td><td class="crd-td">27,3k</td><td class="crd-td">78,6k</td></tr>
<tr><td class="crd-td"><strong>Silifke</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,38, 33,93</td><td class="crd-td">7,2k</td><td class="crd-td">20,2k</td><td class="crd-td">69,5k</td></tr>
<tr><td class="crd-td"><strong>Erdemli</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,6, 34,31</td><td class="crd-td">6,9k</td><td class="crd-td">19,3k</td><td class="crd-td">68,8k</td></tr>
<tr><td class="crd-td"><strong>Döşemealtı</strong></td><td class="crd-td">Antalya</td><td class="crd-td">37,02, 30,6</td><td class="crd-td">4,3k</td><td class="crd-td">12,2k</td><td class="crd-td">64,9k</td></tr>
<tr><td class="crd-td"><strong>Düziçi</strong></td><td class="crd-td">Osmaniye</td><td class="crd-td">37,24, 36,45</td><td class="crd-td">7,3k</td><td class="crd-td">20,5k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>Mahmutlar</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,49, 32,09</td><td class="crd-td">3,5k</td><td class="crd-td">9,8k</td><td class="crd-td">55,3k</td></tr>
<tr><td class="crd-td"><strong>Samandağ</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,08, 35,98</td><td class="crd-td">6,8k</td><td class="crd-td">19,2k</td><td class="crd-td">51,8k</td></tr>
<tr><td class="crd-td"><strong>Afşin</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">38,25, 36,91</td><td class="crd-td">6,9k</td><td class="crd-td">19,3k</td><td class="crd-td">50,3k</td></tr>
<tr><td class="crd-td"><strong>Bucak</strong></td><td class="crd-td">Burdur</td><td class="crd-td">37,46, 30,59</td><td class="crd-td">6,3k</td><td class="crd-td">17,7k</td><td class="crd-td">49,2k</td></tr>
<tr><td class="crd-td"><strong>Anamur</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,08, 32,84</td><td class="crd-td">5,1k</td><td class="crd-td">14,2k</td><td class="crd-td">42,3k</td></tr>
<tr><td class="crd-td"><strong>Payas</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,76, 36,21</td><td class="crd-td">4,8k</td><td class="crd-td">13,6k</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td"><strong>Kepez</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,94, 30,65</td><td class="crd-td">2k</td><td class="crd-td">5,6k</td><td class="crd-td">36,9k</td></tr>
<tr><td class="crd-td"><strong>Karaağaç</strong></td><td class="crd-td">Isparta</td><td class="crd-td">38,08, 31,37</td><td class="crd-td">2,8k</td><td class="crd-td">7,9k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Pazarcık</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">37,49, 37,3</td><td class="crd-td">5,8k</td><td class="crd-td">16,2k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Mut</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,64, 33,44</td><td class="crd-td">4,2k</td><td class="crd-td">11,7k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Erzin</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,95, 36,2</td><td class="crd-td">5,1k</td><td class="crd-td">14,5k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Gazipaşa</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,27, 32,32</td><td class="crd-td">3,1k</td><td class="crd-td">8,8k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Korkuteli</strong></td><td class="crd-td">Antalya</td><td class="crd-td">37,06, 30,2</td><td class="crd-td">3,1k</td><td class="crd-td">8,6k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Belen</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,49, 36,19</td><td class="crd-td">3,6k</td><td class="crd-td">10,1k</td><td class="crd-td">29k</td></tr>
<tr><td class="crd-td"><strong>Harbiye</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,14, 36,13</td><td class="crd-td">3,6k</td><td class="crd-td">10,1k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>Denizciler</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,64, 36,21</td><td class="crd-td">2,5k</td><td class="crd-td">7k</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>Göksun</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">38,02, 36,5</td><td class="crd-td">2,8k</td><td class="crd-td">7,7k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Yalvaç</strong></td><td class="crd-td">Isparta</td><td class="crd-td">38,3, 31,18</td><td class="crd-td">2,9k</td><td class="crd-td">8,2k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Finike</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,3, 30,14</td><td class="crd-td">2,5k</td><td class="crd-td">6,9k</td><td class="crd-td">22,7k</td></tr>
<tr><td class="crd-td"><strong>İmamoğlu</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,27, 35,66</td><td class="crd-td">2,9k</td><td class="crd-td">8,3k</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Sarıkaya</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,76, 34,11</td><td class="crd-td">2,8k</td><td class="crd-td">7,9k</td><td class="crd-td">19,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements of the Mediterranean Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

## Central Anatolia Region

On the central Anatolian plateau, 44 settlements centre on Ankara (5,41M), Konya (1,42M), Kayseri (1,03M), Eskisehir (822,9k) and Sivas (380,9k), alongside Republican industrial creation Kirikkale (1925AD foundation, 195k) and plateau suburbs such as Talas (28,2x) (Table \ref{tab:reg-central}). Metropolitan expansion transformed steppe wetlands around Ankara while smaller plateau market towns grew slowly [@Dolcerocca2024Restoratio; @Karakoc2026Concentrat].

<figure class="crd-table-figure" id="tab:reg-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ankara</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,92, 32,85</td><td class="crd-td">571,4k</td><td class="crd-td">1,61M</td><td class="crd-td">5,41M</td></tr>
<tr><td class="crd-td"><strong>Konya</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,87, 32,48</td><td class="crd-td">112,3k</td><td class="crd-td">315,7k</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>Kayseri</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,73, 35,49</td><td class="crd-td">95,6k</td><td class="crd-td">268,8k</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Eskişehir</strong></td><td class="crd-td">Eskisehir</td><td class="crd-td">39,78, 30,52</td><td class="crd-td">93,8k</td><td class="crd-td">263,7k</td><td class="crd-td">822,9k</td></tr>
<tr><td class="crd-td"><strong>Sivas</strong></td><td class="crd-td">Sivas</td><td class="crd-td">39,75, 37,02</td><td class="crd-td">50,8k</td><td class="crd-td">142,7k</td><td class="crd-td">380,9k</td></tr>
<tr><td class="crd-td"><strong>Aksaray</strong></td><td class="crd-td">Aksaray</td><td class="crd-td">38,37, 34,03</td><td class="crd-td">20,7k</td><td class="crd-td">58,3k</td><td class="crd-td">264k</td></tr>
<tr><td class="crd-td"><strong>Kırıkkale</strong></td><td class="crd-td">Kirikkale</td><td class="crd-td">39,85, 33,51</td><td class="crd-td">-</td><td class="crd-td">149,5k</td><td class="crd-td">195k</td></tr>
<tr><td class="crd-td"><strong>Karaman</strong></td><td class="crd-td">Karaman</td><td class="crd-td">37,18, 33,22</td><td class="crd-td">16,5k</td><td class="crd-td">46,5k</td><td class="crd-td">182,9k</td></tr>
<tr><td class="crd-td"><strong>Talas</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,69, 35,55</td><td class="crd-td">6,1k</td><td class="crd-td">17,1k</td><td class="crd-td">171,4k</td></tr>
<tr><td class="crd-td"><strong>Niğde</strong></td><td class="crd-td">Nigde</td><td class="crd-td">37,97, 34,68</td><td class="crd-td">12,5k</td><td class="crd-td">35,3k</td><td class="crd-td">168,1k</td></tr>
<tr><td class="crd-td"><strong>Kırşehir</strong></td><td class="crd-td">Kirsehir</td><td class="crd-td">39,15, 34,16</td><td class="crd-td">16,6k</td><td class="crd-td">46,6k</td><td class="crd-td">157,2k</td></tr>
<tr><td class="crd-td"><strong>Nevşehir</strong></td><td class="crd-td">Nevsehir</td><td class="crd-td">38,62, 34,71</td><td class="crd-td">12,8k</td><td class="crd-td">36,1k</td><td class="crd-td">129,2k</td></tr>
<tr><td class="crd-td"><strong>Ereğli</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,51, 34,05</td><td class="crd-td">14k</td><td class="crd-td">39,4k</td><td class="crd-td">127,5k</td></tr>
<tr><td class="crd-td"><strong>Polatlı</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,58, 32,14</td><td class="crd-td">13,5k</td><td class="crd-td">37,9k</td><td class="crd-td">114,1k</td></tr>
<tr><td class="crd-td"><strong>Yozgat</strong></td><td class="crd-td">Yozgat</td><td class="crd-td">39,82, 34,8</td><td class="crd-td">11,2k</td><td class="crd-td">31,4k</td><td class="crd-td">96,6k</td></tr>
<tr><td class="crd-td"><strong>Çankırı</strong></td><td class="crd-td">Çankiri</td><td class="crd-td">40,6, 33,62</td><td class="crd-td">10,6k</td><td class="crd-td">29,8k</td><td class="crd-td">95,3k</td></tr>
<tr><td class="crd-td"><strong>Çubuk</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,24, 33,03</td><td class="crd-td">5,3k</td><td class="crd-td">14,8k</td><td class="crd-td">95,1k</td></tr>
<tr><td class="crd-td"><strong>Akşehir</strong></td><td class="crd-td">Konya</td><td class="crd-td">38,36, 31,42</td><td class="crd-td">11,6k</td><td class="crd-td">32,6k</td><td class="crd-td">71,8k</td></tr>
<tr><td class="crd-td"><strong>Kazan</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,23, 32,68</td><td class="crd-td">1,5k</td><td class="crd-td">4,2k</td><td class="crd-td">59,4k</td></tr>
<tr><td class="crd-td"><strong>Sorgun</strong></td><td class="crd-td">Yozgat</td><td class="crd-td">39,81, 35,19</td><td class="crd-td">7,1k</td><td class="crd-td">20,1k</td><td class="crd-td">57,4k</td></tr>
<tr><td class="crd-td"><strong>Beyşehir</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,68, 31,72</td><td class="crd-td">7k</td><td class="crd-td">19,6k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Seydişehir</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,42, 31,85</td><td class="crd-td">9,5k</td><td class="crd-td">26,8k</td><td class="crd-td">49,2k</td></tr>
<tr><td class="crd-td"><strong>Develi</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,39, 35,49</td><td class="crd-td">7,5k</td><td class="crd-td">21,2k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Elmadağ</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,92, 33,23</td><td class="crd-td">4,5k</td><td class="crd-td">12,6k</td><td class="crd-td">45,2k</td></tr>
<tr><td class="crd-td"><strong>Bor</strong></td><td class="crd-td">Nigde</td><td class="crd-td">37,89, 34,56</td><td class="crd-td">5,6k</td><td class="crd-td">15,8k</td><td class="crd-td">43,8k</td></tr>
<tr><td class="crd-td"><strong>Akyurt</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,14, 33,09</td><td class="crd-td">809</td><td class="crd-td">2,3k</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Beypazarı</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,17, 31,92</td><td class="crd-td">6k</td><td class="crd-td">16,9k</td><td class="crd-td">41,4k</td></tr>
<tr><td class="crd-td"><strong>Karapınar</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,72, 33,55</td><td class="crd-td">6,1k</td><td class="crd-td">17,3k</td><td class="crd-td">37,7k</td></tr>
<tr><td class="crd-td"><strong>Çumra</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,57, 32,77</td><td class="crd-td">4,3k</td><td class="crd-td">12,2k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Gölbaşı</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,79, 32,81</td><td class="crd-td">6,8k</td><td class="crd-td">19,1k</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Ilgın</strong></td><td class="crd-td">Konya</td><td class="crd-td">38,28, 31,91</td><td class="crd-td">5,7k</td><td class="crd-td">16,1k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Yahşihan</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,43, 32,39</td><td class="crd-td">1,3k</td><td class="crd-td">3,7k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Kulu</strong></td><td class="crd-td">Konya</td><td class="crd-td">39,1, 33,08</td><td class="crd-td">4k</td><td class="crd-td">11,2k</td><td class="crd-td">28,5k</td></tr>
<tr><td class="crd-td"><strong>Şereflikoçhisar</strong></td><td class="crd-td">Ankara</td><td class="crd-td">38,94, 33,54</td><td class="crd-td">4,2k</td><td class="crd-td">11,8k</td><td class="crd-td">28,3k</td></tr>
<tr><td class="crd-td"><strong>Yerköy</strong></td><td class="crd-td">Yozgat</td><td class="crd-td">39,64, 34,47</td><td class="crd-td">6k</td><td class="crd-td">16,9k</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>Ürgüp</strong></td><td class="crd-td">Nevsehir</td><td class="crd-td">38,63, 34,91</td><td class="crd-td">2,5k</td><td class="crd-td">7,1k</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>İncesu</strong></td><td class="crd-td">Aksaray</td><td class="crd-td">38,16, 33,8</td><td class="crd-td">2,8k</td><td class="crd-td">7,8k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Şarkışla</strong></td><td class="crd-td">Sivas</td><td class="crd-td">39,35, 36,41</td><td class="crd-td">3,9k</td><td class="crd-td">10,8k</td><td class="crd-td">24,7k</td></tr>
<tr><td class="crd-td"><strong>Akdağmadeni</strong></td><td class="crd-td">Yozgat</td><td class="crd-td">39,66, 35,88</td><td class="crd-td">2,8k</td><td class="crd-td">7,9k</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Kaman</strong></td><td class="crd-td">Kirsehir</td><td class="crd-td">39,36, 33,72</td><td class="crd-td">6k</td><td class="crd-td">16,8k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Yahyalı</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,1, 35,36</td><td class="crd-td">4,7k</td><td class="crd-td">13,1k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>Ortaköy</strong></td><td class="crd-td">Aksaray</td><td class="crd-td">38,74, 34,04</td><td class="crd-td">2,7k</td><td class="crd-td">7,5k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Boğazlıyan</strong></td><td class="crd-td">Yozgat</td><td class="crd-td">39,19, 35,25</td><td class="crd-td">2,4k</td><td class="crd-td">6,8k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Eskil</strong></td><td class="crd-td">Aksaray</td><td class="crd-td">38,4, 33,41</td><td class="crd-td">3,8k</td><td class="crd-td">10,6k</td><td class="crd-td">18,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements of the Central Anatolia Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

## Black Sea Region

Along the Pontic littoral and northern valleys, 57 catalogued towns are headed by Samsun (667,4k), Trabzon (306,3k), Corum, Ordu and state-industrial Karabuk (1937AD foundation, 130,8k) (Table \ref{tab:reg-blacksea}). Steep coastal topography constrained broad metropolitan sprawl while coal-port Zonguldak (3,52x, 106,1k) experienced slow late-century brownfield transition [@Ergen2013Methodolog].

<figure class="crd-table-figure" id="tab:reg-blacksea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Samsun</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,28, 36,34</td><td class="crd-td">61,5k</td><td class="crd-td">173k</td><td class="crd-td">667,4k</td></tr>
<tr><td class="crd-td"><strong>Trabzon</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">41,01, 39,73</td><td class="crd-td">36,3k</td><td class="crd-td">102,1k</td><td class="crd-td">306,3k</td></tr>
<tr><td class="crd-td"><strong>Çorum</strong></td><td class="crd-td">Çorum</td><td class="crd-td">40,55, 34,95</td><td class="crd-td">24,7k</td><td class="crd-td">69,5k</td><td class="crd-td">281,2k</td></tr>
<tr><td class="crd-td"><strong>Karaköprü</strong></td><td class="crd-td">Amasya</td><td class="crd-td">40,55, 35,78</td><td class="crd-td">7,5k</td><td class="crd-td">21,2k</td><td class="crd-td">251,9k</td></tr>
<tr><td class="crd-td"><strong>Düzce</strong></td><td class="crd-td">Düzce</td><td class="crd-td">40,84, 31,16</td><td class="crd-td">11,5k</td><td class="crd-td">32,4k</td><td class="crd-td">202,4k</td></tr>
<tr><td class="crd-td"><strong>Ordu</strong></td><td class="crd-td">Ordu</td><td class="crd-td">40,98, 37,89</td><td class="crd-td">20,7k</td><td class="crd-td">58,1k</td><td class="crd-td">198,6k</td></tr>
<tr><td class="crd-td"><strong>Bolu</strong></td><td class="crd-td">Bolu</td><td class="crd-td">40,74, 31,61</td><td class="crd-td">12,9k</td><td class="crd-td">36,2k</td><td class="crd-td">194,1k</td></tr>
<tr><td class="crd-td"><strong>Tokat</strong></td><td class="crd-td">Tokat</td><td class="crd-td">40,31, 36,55</td><td class="crd-td">18,7k</td><td class="crd-td">52,5k</td><td class="crd-td">170,4k</td></tr>
<tr><td class="crd-td"><strong>Kastamonu</strong></td><td class="crd-td">Kastamonu</td><td class="crd-td">41,38, 33,78</td><td class="crd-td">12k</td><td class="crd-td">33,8k</td><td class="crd-td">134,2k</td></tr>
<tr><td class="crd-td"><strong>Kartepe</strong></td><td class="crd-td">Kastamonu</td><td class="crd-td">41,61, 34,32</td><td class="crd-td">12,8k</td><td class="crd-td">35,9k</td><td class="crd-td">134k</td></tr>
<tr><td class="crd-td"><strong>Giresun</strong></td><td class="crd-td">Giresun</td><td class="crd-td">40,92, 38,39</td><td class="crd-td">14,3k</td><td class="crd-td">40,2k</td><td class="crd-td">131,1k</td></tr>
<tr><td class="crd-td"><strong>Karabük</strong></td><td class="crd-td">Karabük</td><td class="crd-td">41,2, 32,63</td><td class="crd-td">-</td><td class="crd-td">68,2k</td><td class="crd-td">130,8k</td></tr>
<tr><td class="crd-td"><strong>Rize</strong></td><td class="crd-td">Rize</td><td class="crd-td">41,02, 40,52</td><td class="crd-td">12,8k</td><td class="crd-td">36,1k</td><td class="crd-td">127,8k</td></tr>
<tr><td class="crd-td"><strong>Amasya</strong></td><td class="crd-td">Amasya</td><td class="crd-td">40,65, 35,83</td><td class="crd-td">13,7k</td><td class="crd-td">38,4k</td><td class="crd-td">121,3k</td></tr>
<tr><td class="crd-td"><strong>Zonguldak</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,45, 31,79</td><td class="crd-td">30,1k</td><td class="crd-td">84,7k</td><td class="crd-td">106,1k</td></tr>
<tr><td class="crd-td"><strong>Ünye</strong></td><td class="crd-td">Ordu</td><td class="crd-td">41,14, 37,29</td><td class="crd-td">9,1k</td><td class="crd-td">25,5k</td><td class="crd-td">101,7k</td></tr>
<tr><td class="crd-td"><strong>Fatsa</strong></td><td class="crd-td">Ordu</td><td class="crd-td">41,03, 37,5</td><td class="crd-td">7,6k</td><td class="crd-td">21,4k</td><td class="crd-td">99,9k</td></tr>
<tr><td class="crd-td"><strong>Bafra</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,57, 35,9</td><td class="crd-td">13,7k</td><td class="crd-td">38,4k</td><td class="crd-td">96,3k</td></tr>
<tr><td class="crd-td"><strong>Bartın</strong></td><td class="crd-td">Bartın</td><td class="crd-td">41,64, 32,34</td><td class="crd-td">6,4k</td><td class="crd-td">18,1k</td><td class="crd-td">87,3k</td></tr>
<tr><td class="crd-td"><strong>Akçaabat</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">41,02, 39,57</td><td class="crd-td">6k</td><td class="crd-td">16,9k</td><td class="crd-td">86,4k</td></tr>
<tr><td class="crd-td"><strong>Erbaa</strong></td><td class="crd-td">Tokat</td><td class="crd-td">40,67, 36,57</td><td class="crd-td">7,7k</td><td class="crd-td">21,6k</td><td class="crd-td">78,4k</td></tr>
<tr><td class="crd-td"><strong>Çarşamba</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,2, 36,72</td><td class="crd-td">8,9k</td><td class="crd-td">25k</td><td class="crd-td">77,9k</td></tr>
<tr><td class="crd-td"><strong>Merzifon</strong></td><td class="crd-td">Amasya</td><td class="crd-td">40,87, 35,46</td><td class="crd-td">9,3k</td><td class="crd-td">26k</td><td class="crd-td">65,2k</td></tr>
<tr><td class="crd-td"><strong>Turhal</strong></td><td class="crd-td">Tokat</td><td class="crd-td">40,39, 36,08</td><td class="crd-td">9,2k</td><td class="crd-td">26k</td><td class="crd-td">64,7k</td></tr>
<tr><td class="crd-td"><strong>Safranbolu</strong></td><td class="crd-td">Karabük</td><td class="crd-td">41,25, 32,69</td><td class="crd-td">5,6k</td><td class="crd-td">15,7k</td><td class="crd-td">55,3k</td></tr>
<tr><td class="crd-td"><strong>Bayburt</strong></td><td class="crd-td">Bayburt</td><td class="crd-td">40,26, 40,22</td><td class="crd-td">7,2k</td><td class="crd-td">20,2k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Bulancak</strong></td><td class="crd-td">Giresun</td><td class="crd-td">40,94, 38,23</td><td class="crd-td">5,5k</td><td class="crd-td">15,6k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Sinop</strong></td><td class="crd-td">Sinop</td><td class="crd-td">42,03, 35,16</td><td class="crd-td">5,9k</td><td class="crd-td">16,6k</td><td class="crd-td">47,6k</td></tr>
<tr><td class="crd-td"><strong>Tekkeköy</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,21, 36,46</td><td class="crd-td">5,4k</td><td class="crd-td">15,1k</td><td class="crd-td">46,6k</td></tr>
<tr><td class="crd-td"><strong>Kumluca</strong></td><td class="crd-td">Bartın</td><td class="crd-td">41,45, 32,47</td><td class="crd-td">3,9k</td><td class="crd-td">11,1k</td><td class="crd-td">44,7k</td></tr>
<tr><td class="crd-td"><strong>Suluova</strong></td><td class="crd-td">Amasya</td><td class="crd-td">40,83, 35,65</td><td class="crd-td">8,3k</td><td class="crd-td">23,3k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td"><strong>İslahiye</strong></td><td class="crd-td">Düzce</td><td class="crd-td">40,84, 31,04</td><td class="crd-td">7,9k</td><td class="crd-td">22,3k</td><td class="crd-td">40,5k</td></tr>
<tr><td class="crd-td"><strong>Gümüşhane</strong></td><td class="crd-td">Gümüshane</td><td class="crd-td">40,46, 39,47</td><td class="crd-td">5,6k</td><td class="crd-td">15,9k</td><td class="crd-td">39,7k</td></tr>
<tr><td class="crd-td"><strong>Niksar</strong></td><td class="crd-td">Tokat</td><td class="crd-td">40,59, 36,95</td><td class="crd-td">8,1k</td><td class="crd-td">22,7k</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>Terme</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,21, 36,97</td><td class="crd-td">4,7k</td><td class="crd-td">13,1k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>Vezirköprü</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,14, 35,45</td><td class="crd-td">4,7k</td><td class="crd-td">13,3k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Zile</strong></td><td class="crd-td">Tokat</td><td class="crd-td">40,3, 35,89</td><td class="crd-td">5,1k</td><td class="crd-td">14,3k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Osmancık</strong></td><td class="crd-td">Çorum</td><td class="crd-td">40,98, 34,8</td><td class="crd-td">4,9k</td><td class="crd-td">13,7k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Ardeşen</strong></td><td class="crd-td">Rize</td><td class="crd-td">41,19, 40,98</td><td class="crd-td">4,1k</td><td class="crd-td">11,6k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Sungurlu</strong></td><td class="crd-td">Çorum</td><td class="crd-td">40,17, 34,37</td><td class="crd-td">7k</td><td class="crd-td">19,7k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Çaycuma</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,43, 32,08</td><td class="crd-td">3,7k</td><td class="crd-td">10,5k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Tosya</strong></td><td class="crd-td">Kastamonu</td><td class="crd-td">41,02, 34,04</td><td class="crd-td">5,2k</td><td class="crd-td">14,7k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Boyabat</strong></td><td class="crd-td">Sinop</td><td class="crd-td">41,47, 34,77</td><td class="crd-td">4,9k</td><td class="crd-td">13,9k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Akçakoca</strong></td><td class="crd-td">Düzce</td><td class="crd-td">41,09, 31,12</td><td class="crd-td">3,1k</td><td class="crd-td">8,7k</td><td class="crd-td">29,1k</td></tr>
<tr><td class="crd-td"><strong>Devrek</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,22, 31,96</td><td class="crd-td">3,8k</td><td class="crd-td">10,6k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Espiye</strong></td><td class="crd-td">Giresun</td><td class="crd-td">40,95, 38,7</td><td class="crd-td">2,3k</td><td class="crd-td">6,6k</td><td class="crd-td">27,8k</td></tr>
<tr><td class="crd-td"><strong>Artvin</strong></td><td class="crd-td">Artvin</td><td class="crd-td">41,18, 41,82</td><td class="crd-td">4,8k</td><td class="crd-td">13,5k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Çayeli</strong></td><td class="crd-td">Rize</td><td class="crd-td">41,09, 40,72</td><td class="crd-td">3,4k</td><td class="crd-td">9,6k</td><td class="crd-td">25,5k</td></tr>
<tr><td class="crd-td"><strong>Gerede</strong></td><td class="crd-td">Bolu</td><td class="crd-td">40,8, 32,2</td><td class="crd-td">4,3k</td><td class="crd-td">12,1k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Hopa</strong></td><td class="crd-td">Artvin</td><td class="crd-td">41,39, 41,42</td><td class="crd-td">2,6k</td><td class="crd-td">7,4k</td><td class="crd-td">24,1k</td></tr>
<tr><td class="crd-td"><strong>Of</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">40,94, 40,26</td><td class="crd-td">2,8k</td><td class="crd-td">7,8k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Kelkit</strong></td><td class="crd-td">Gümüshane</td><td class="crd-td">40,13, 39,43</td><td class="crd-td">2,6k</td><td class="crd-td">7,4k</td><td class="crd-td">22,2k</td></tr>
<tr><td class="crd-td"><strong>Havza</strong></td><td class="crd-td">Samsun</td><td class="crd-td">40,97, 35,66</td><td class="crd-td">4,1k</td><td class="crd-td">11,6k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Alaplı</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,18, 31,39</td><td class="crd-td">2,8k</td><td class="crd-td">7,8k</td><td class="crd-td">21,7k</td></tr>
<tr><td class="crd-td"><strong>Tirebolu</strong></td><td class="crd-td">Giresun</td><td class="crd-td">41,01, 38,81</td><td class="crd-td">3k</td><td class="crd-td">8,5k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>Alaca</strong></td><td class="crd-td">Çorum</td><td class="crd-td">40,17, 34,84</td><td class="crd-td">4,7k</td><td class="crd-td">13,3k</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Görele</strong></td><td class="crd-td">Giresun</td><td class="crd-td">41,03, 39</td><td class="crd-td">2,3k</td><td class="crd-td">6,3k</td><td class="crd-td">19,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements of the Black Sea Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

## Eastern Anatolia Region

Across the rugged eastern highlands, 31 settlements cluster in intermontane basins led by Van (547,5k), Malatya (506,3k), Erzurum (440,8k) and Elazig (403,7k) (Table \ref{tab:reg-eastern}). Persistent out-migration toward Marmara and the Mediterranean held down smaller basin towns such as Erzincan (6,7x) and Erzurum (7x), even as regional capitals absorbed rural highland populations [@Alptekin2024Three; @Deniz2020Assessing].

<figure class="crd-table-figure" id="tab:reg-eastern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Van</strong></td><td class="crd-td">Van</td><td class="crd-td">38,49, 43,38</td><td class="crd-td">28,3k</td><td class="crd-td">79,6k</td><td class="crd-td">547,5k</td></tr>
<tr><td class="crd-td"><strong>Malatya</strong></td><td class="crd-td">Malatya</td><td class="crd-td">38,35, 38,32</td><td class="crd-td">62,2k</td><td class="crd-td">174,8k</td><td class="crd-td">506,3k</td></tr>
<tr><td class="crd-td"><strong>Erzurum</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">39,91, 41,28</td><td class="crd-td">62,9k</td><td class="crd-td">176,9k</td><td class="crd-td">440,8k</td></tr>
<tr><td class="crd-td"><strong>Elâzığ</strong></td><td class="crd-td">Elazig</td><td class="crd-td">38,67, 39,22</td><td class="crd-td">46,6k</td><td class="crd-td">131,1k</td><td class="crd-td">403,7k</td></tr>
<tr><td class="crd-td"><strong>Erzincan</strong></td><td class="crd-td">Erzincan</td><td class="crd-td">39,74, 39,49</td><td class="crd-td">21,1k</td><td class="crd-td">59,4k</td><td class="crd-td">141,5k</td></tr>
<tr><td class="crd-td"><strong>Bingöl</strong></td><td class="crd-td">Bingöl</td><td class="crd-td">38,88, 40,49</td><td class="crd-td">8,7k</td><td class="crd-td">24,5k</td><td class="crd-td">139,1k</td></tr>
<tr><td class="crd-td"><strong>Ağrı</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,71, 43,04</td><td class="crd-td">13,9k</td><td class="crd-td">39,2k</td><td class="crd-td">125,8k</td></tr>
<tr><td class="crd-td"><strong>Muş</strong></td><td class="crd-td">Mus</td><td class="crd-td">38,73, 41,48</td><td class="crd-td">10,8k</td><td class="crd-td">30,3k</td><td class="crd-td">121,7k</td></tr>
<tr><td class="crd-td"><strong>Iğdır</strong></td><td class="crd-td">Iğdir</td><td class="crd-td">39,92, 44,05</td><td class="crd-td">7,5k</td><td class="crd-td">21,2k</td><td class="crd-td">106,1k</td></tr>
<tr><td class="crd-td"><strong>Erciş</strong></td><td class="crd-td">Van</td><td class="crd-td">39,03, 43,36</td><td class="crd-td">9,4k</td><td class="crd-td">26,3k</td><td class="crd-td">96,9k</td></tr>
<tr><td class="crd-td"><strong>Kars</strong></td><td class="crd-td">Kars</td><td class="crd-td">40,6, 43,09</td><td class="crd-td">17,7k</td><td class="crd-td">49,8k</td><td class="crd-td">95,4k</td></tr>
<tr><td class="crd-td"><strong>Tatvan</strong></td><td class="crd-td">Bitlis</td><td class="crd-td">38,49, 42,28</td><td class="crd-td">13,3k</td><td class="crd-td">37,3k</td><td class="crd-td">85,6k</td></tr>
<tr><td class="crd-td"><strong>Doğubayazıt</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,55, 44,08</td><td class="crd-td">8,1k</td><td class="crd-td">22,7k</td><td class="crd-td">83,2k</td></tr>
<tr><td class="crd-td"><strong>Yüksekova</strong></td><td class="crd-td">Hakkari</td><td class="crd-td">37,57, 44,29</td><td class="crd-td">4,2k</td><td class="crd-td">11,7k</td><td class="crd-td">75,9k</td></tr>
<tr><td class="crd-td"><strong>Yeşilyurt</strong></td><td class="crd-td">Malatya</td><td class="crd-td">38,3, 38,25</td><td class="crd-td">3,9k</td><td class="crd-td">11,1k</td><td class="crd-td">65,6k</td></tr>
<tr><td class="crd-td"><strong>Hakkâri</strong></td><td class="crd-td">Hakkari</td><td class="crd-td">37,57, 43,74</td><td class="crd-td">5,3k</td><td class="crd-td">14,9k</td><td class="crd-td">62,7k</td></tr>
<tr><td class="crd-td"><strong>Patnos</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,22, 42,86</td><td class="crd-td">6,4k</td><td class="crd-td">18k</td><td class="crd-td">62,5k</td></tr>
<tr><td class="crd-td"><strong>Bitlis</strong></td><td class="crd-td">Bitlis</td><td class="crd-td">38,4, 42,11</td><td class="crd-td">9,2k</td><td class="crd-td">25,9k</td><td class="crd-td">56,9k</td></tr>
<tr><td class="crd-td"><strong>Tunceli</strong></td><td class="crd-td">Tunceli</td><td class="crd-td">39,1, 39,54</td><td class="crd-td">4,7k</td><td class="crd-td">13,3k</td><td class="crd-td">37,8k</td></tr>
<tr><td class="crd-td"><strong>Ahlat</strong></td><td class="crd-td">Bitlis</td><td class="crd-td">38,75, 42,48</td><td class="crd-td">2,9k</td><td class="crd-td">8,2k</td><td class="crd-td">30,1k</td></tr>
<tr><td class="crd-td"><strong>Bulanık</strong></td><td class="crd-td">Mus</td><td class="crd-td">39,09, 42,27</td><td class="crd-td">3,4k</td><td class="crd-td">9,7k</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Güroymak</strong></td><td class="crd-td">Bitlis</td><td class="crd-td">38,58, 42,02</td><td class="crd-td">3,8k</td><td class="crd-td">10,7k</td><td class="crd-td">27,6k</td></tr>
<tr><td class="crd-td"><strong>Kovancılar</strong></td><td class="crd-td">Elazig</td><td class="crd-td">38,72, 39,86</td><td class="crd-td">2,4k</td><td class="crd-td">6,6k</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Ardahan</strong></td><td class="crd-td">Ardahan</td><td class="crd-td">41,11, 42,7</td><td class="crd-td">4,3k</td><td class="crd-td">12,1k</td><td class="crd-td">24,3k</td></tr>
<tr><td class="crd-td"><strong>Oltu</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">40,54, 41,99</td><td class="crd-td">5k</td><td class="crd-td">14,1k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Kağızman</strong></td><td class="crd-td">Kars</td><td class="crd-td">40,16, 43,13</td><td class="crd-td">3,5k</td><td class="crd-td">9,8k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Genç</strong></td><td class="crd-td">Bingöl</td><td class="crd-td">38,75, 40,55</td><td class="crd-td">2,6k</td><td class="crd-td">7,4k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Solhan</strong></td><td class="crd-td">Bingöl</td><td class="crd-td">38,97, 41,05</td><td class="crd-td">2,8k</td><td class="crd-td">7,9k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Kilimli</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">40,33, 41,99</td><td class="crd-td">3,5k</td><td class="crd-td">9,9k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>Diyadin</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,54, 43,67</td><td class="crd-td">2,2k</td><td class="crd-td">6,2k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Malazgirt</strong></td><td class="crd-td">Mus</td><td class="crd-td">39,15, 42,54</td><td class="crd-td">4,4k</td><td class="crd-td">12,3k</td><td class="crd-td">19,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Catalogued settlements of the Eastern Anatolia Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

## Southeastern Anatolia Region

Upper Mesopotamia hosts 37 catalogued settlements anchored by Gaziantep (1,75M), Diyarbakir (1,13M), Sanliurfa (622,2k), Batman (1940AD oil-boom foundation, 481,1k), Karakopru (33,4x) and border Kilis (Table \ref{tab:reg-southeastern}). High baseline fertility, irrigation development and post-2011AD Syrian refugee inflows generated rapid late-century urban growth across the southern frontier [@INCILI2020Kilis; @Oguz2021Resilient].

<figure class="crd-table-figure" id="tab:reg-southeastern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1923AD</th><th class="crd-th">1970AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gaziantep</strong></td><td class="crd-td">Gaziantep</td><td class="crd-td">37,06, 37,38</td><td class="crd-td">122,4k</td><td class="crd-td">344,1k</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Diyarbakır</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,91, 40,22</td><td class="crd-td">78,2k</td><td class="crd-td">219,9k</td><td class="crd-td">1,13M</td></tr>
<tr><td class="crd-td"><strong>Şanlıurfa</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,17, 38,79</td><td class="crd-td">49,8k</td><td class="crd-td">140,2k</td><td class="crd-td">622,2k</td></tr>
<tr><td class="crd-td"><strong>Batman</strong></td><td class="crd-td">Batman</td><td class="crd-td">37,89, 41,13</td><td class="crd-td">-</td><td class="crd-td">79,1k</td><td class="crd-td">481,1k</td></tr>
<tr><td class="crd-td"><strong>Adıyaman</strong></td><td class="crd-td">Adiyaman</td><td class="crd-td">37,76, 38,28</td><td class="crd-td">18,3k</td><td class="crd-td">51,5k</td><td class="crd-td">285k</td></tr>
<tr><td class="crd-td"><strong>Kızıltepe</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,19, 40,58</td><td class="crd-td">10,4k</td><td class="crd-td">29,4k</td><td class="crd-td">205,1k</td></tr>
<tr><td class="crd-td"><strong>Siirt</strong></td><td class="crd-td">Siirt</td><td class="crd-td">37,93, 41,94</td><td class="crd-td">13,8k</td><td class="crd-td">38,7k</td><td class="crd-td">168,2k</td></tr>
<tr><td class="crd-td"><strong>Siverek</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,76, 39,32</td><td class="crd-td">12,4k</td><td class="crd-td">34,7k</td><td class="crd-td">167k</td></tr>
<tr><td class="crd-td"><strong>Cizre</strong></td><td class="crd-td">Sirnak</td><td class="crd-td">37,33, 42,18</td><td class="crd-td">7,5k</td><td class="crd-td">21,2k</td><td class="crd-td">139,8k</td></tr>
<tr><td class="crd-td"><strong>Mardin</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,31, 40,74</td><td class="crd-td">11,3k</td><td class="crd-td">31,7k</td><td class="crd-td">139,1k</td></tr>
<tr><td class="crd-td"><strong>Viranşehir</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,22, 39,76</td><td class="crd-td">11,6k</td><td class="crd-td">32,6k</td><td class="crd-td">123,8k</td></tr>
<tr><td class="crd-td"><strong>Nizip</strong></td><td class="crd-td">Gaziantep</td><td class="crd-td">37,01, 37,79</td><td class="crd-td">12,8k</td><td class="crd-td">36k</td><td class="crd-td">122,8k</td></tr>
<tr><td class="crd-td"><strong>Kilis</strong></td><td class="crd-td">Kilis</td><td class="crd-td">36,72, 37,12</td><td class="crd-td">15,3k</td><td class="crd-td">43k</td><td class="crd-td">116,4k</td></tr>
<tr><td class="crd-td"><strong>Silopi</strong></td><td class="crd-td">Sirnak</td><td class="crd-td">37,24, 42,46</td><td class="crd-td">5,4k</td><td class="crd-td">15,1k</td><td class="crd-td">111,6k</td></tr>
<tr><td class="crd-td"><strong>Nusaybin</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,07, 41,21</td><td class="crd-td">11,5k</td><td class="crd-td">32,5k</td><td class="crd-td">95,5k</td></tr>
<tr><td class="crd-td"><strong>Ergani</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">38,27, 39,75</td><td class="crd-td">8,6k</td><td class="crd-td">24,1k</td><td class="crd-td">94,1k</td></tr>
<tr><td class="crd-td"><strong>Kâhta</strong></td><td class="crd-td">Adiyaman</td><td class="crd-td">37,79, 38,62</td><td class="crd-td">6,5k</td><td class="crd-td">18,3k</td><td class="crd-td">93k</td></tr>
<tr><td class="crd-td"><strong>Midyat</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,42, 41,34</td><td class="crd-td">5,7k</td><td class="crd-td">15,9k</td><td class="crd-td">89,3k</td></tr>
<tr><td class="crd-td"><strong>Şırnak</strong></td><td class="crd-td">Sirnak</td><td class="crd-td">37,51, 42,45</td><td class="crd-td">3,1k</td><td class="crd-td">8,7k</td><td class="crd-td">72,4k</td></tr>
<tr><td class="crd-td"><strong>Bismil</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,85, 40,66</td><td class="crd-td">6,4k</td><td class="crd-td">17,9k</td><td class="crd-td">71,5k</td></tr>
<tr><td class="crd-td"><strong>Suruç</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,98, 38,43</td><td class="crd-td">6,6k</td><td class="crd-td">18,4k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Ceylanpınar</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,85, 40,05</td><td class="crd-td">7,6k</td><td class="crd-td">21,4k</td><td class="crd-td">57,9k</td></tr>
<tr><td class="crd-td"><strong>Kızılpınar</strong></td><td class="crd-td">Adiyaman</td><td class="crd-td">37,72, 37,79</td><td class="crd-td">2,3k</td><td class="crd-td">6,4k</td><td class="crd-td">56,6k</td></tr>
<tr><td class="crd-td"><strong>Silvan</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">38,14, 41,01</td><td class="crd-td">6,2k</td><td class="crd-td">17,3k</td><td class="crd-td">51,1k</td></tr>
<tr><td class="crd-td"><strong>Birecik</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,03, 37,98</td><td class="crd-td">6,5k</td><td class="crd-td">18,3k</td><td class="crd-td">48,5k</td></tr>
<tr><td class="crd-td"><strong>Kozlu</strong></td><td class="crd-td">Batman</td><td class="crd-td">37,64, 41,37</td><td class="crd-td">5,1k</td><td class="crd-td">14,2k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Akçakale</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,71, 38,95</td><td class="crd-td">3,5k</td><td class="crd-td">9,8k</td><td class="crd-td">41,9k</td></tr>
<tr><td class="crd-td"><strong>Besni</strong></td><td class="crd-td">Adiyaman</td><td class="crd-td">37,69, 37,86</td><td class="crd-td">6k</td><td class="crd-td">16,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Kurtalan</strong></td><td class="crd-td">Siirt</td><td class="crd-td">37,93, 41,68</td><td class="crd-td">4k</td><td class="crd-td">11,1k</td><td class="crd-td">38,2k</td></tr>
<tr><td class="crd-td"><strong>İdil</strong></td><td class="crd-td">Sirnak</td><td class="crd-td">37,33, 41,89</td><td class="crd-td">3k</td><td class="crd-td">8,3k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Kozluk</strong></td><td class="crd-td">Batman</td><td class="crd-td">38,19, 41,48</td><td class="crd-td">5,2k</td><td class="crd-td">14,5k</td><td class="crd-td">29,1k</td></tr>
<tr><td class="crd-td"><strong>Hilvan</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,59, 38,96</td><td class="crd-td">3,2k</td><td class="crd-td">9,1k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Muratlı</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,96, 40,1</td><td class="crd-td">3k</td><td class="crd-td">8,5k</td><td class="crd-td">26,1k</td></tr>
<tr><td class="crd-td"><strong>Nurdağı</strong></td><td class="crd-td">Gaziantep</td><td class="crd-td">37,17, 36,74</td><td class="crd-td">1,6k</td><td class="crd-td">4,5k</td><td class="crd-td">23,9k</td></tr>
<tr><td class="crd-td"><strong>Derik</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,5, 41,57</td><td class="crd-td">3k</td><td class="crd-td">8,5k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Çermik</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">38,14, 39,45</td><td class="crd-td">3,8k</td><td class="crd-td">10,6k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Türkoğlu</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,85, 39,52</td><td class="crd-td">3,3k</td><td class="crd-td">9,4k</td><td class="crd-td">21,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Catalogued settlements of the Southeastern Anatolia Region ordered by 2025AD population, with coordinates and 1923AD, 1970AD and 2025AD benchmarks.</figcaption>
</figure>

# Limitations

Three caveats govern the settlement series. First, continuous urban agglomeration tracking smooths across Turkey's 2012-2014AD metropolitan boundary expansion; figures therefore differ from raw post-2014AD statutory *büyükşehir* totals that absorbed outlying rural districts [@Canpolat2018Terms]. Second, non-citizen Syrian residents under temporary protection—numbering over 3,1M nationwide after 2011AD—appear only partially in standard municipal address series across border cities such as Kilis, Gaziantep and Antakya [@INCILI2020Kilis; @Klc2021Turkish]. Third, the February 2023 Kahramanmaras earthquakes caused temporary out-migration across Antakya, Kahramanmaras, Adiyaman and Malatya whose long-term recovery remains ongoing.

# Conclusion

Across 326 urban centres from 1923AD to 2025AD, Turkey's settlement system shifted from a sparse, predominantly rural network of 6,37M urban residents to an integrated, multi-polar hierarchy housing 69,02M people (80,6% of the national total). Anchored by Istanbul's metropolitan expansion (15,9M) and sustained by rapid industrial and regional growth in Ankara, Izmir, Bursa, Adana, Gaziantep, Konya and Antalya, the urban cohort confirms a Zipf rank-size slope of 1,1 ($R^2 = 0,98$) consistent with modern censuses and district-level ADM2 enumerations.

# Appendix

Five candidate settlements within 2 km of primary urban cores were merged into adjacent metropolitan trajectories during candidate screening: Karasu, Sapanca, Saray, Kemer and Arakli. Three settlements carry Republican-era industrial foundation dates (Kirikkale 1925AD, Karabuk 1937AD and Batman 1940AD), while Zonguldak carries its nineteenth-century coal-port foundation date (1849AD).

# Sources

::: {#refs}
:::
