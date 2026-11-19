---
title: "Bolivia after Independence: Altiplano Cores, Lowland Santa Cruz Expansion and National Censuses"
subtitle: "Demographic Trajectories, Mining Transitions and Agrarian Colonisation across Nine Departments, 1825AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: bolivia_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_bolivia_after_independence_spatial.png"
hero_caption: "Spatial distribution of 369 catalogued settlements and nine administrative departments across Bolivia (1,12M km²) from 1825AD to 2026AD, illustrating the structural shift from Altiplano mining centres to eastern lowland agricultural frontiers."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

At its independence in 1825AD, the Republic of Bolivia inherited an intensely concentrated demographic structure forged by colonial Andean silver mining and pre-Columbian agricultural terracing. Over 85% of its estimated 1,18M inhabitants were clustered in the high Altiplano and inter-Andean valleys of La Paz, Cochabamba, Potosí and Chuquisaca, while the vast eastern lowlands of Santa Cruz, El Beni and the northern Amazon remained isolated frontiers held largely by autonomous indigenous groups. Early republican growth remained sluggish across the nineteenth century: the first systematic national census conducted in 1846AD under President José Ballivián and published by José María Dalence documented 1,45M persons, but recurrent typhus, cholera and smallpox epidemics, coupled with the catastrophic loss of the Pacific littoral during the War of the Pacific (1879-1884), depressed the population to 1,47M by 1882AD. The National Census of 1900 recorded only 1,75M inhabitants, confirming that the nineteenth century was characterised by demographic stagnation, high infant mortality and regional fragmentation.

The twentieth century inaugurated two transformative demographic shifts that reshaped the human geography of the republic. The first was the rise of the tin mining economy in Oruro and northern Potosí, which stimulated Andean urbanisation and created an organized industrial proletariat, followed by the political rupture of the 1952 National Revolution. The revolutionary regime dismantled the landed estate system through radical agrarian reform, nationalised the large tin consortiums and launched the state-directed march to the east recommended by the Bohan Plan. Supported by the completion of the paved highway linking Cochabamba to Santa Cruz de la Sierra in 1954, state resettlement schemes and spontaneous highland colonisation funnelled hundreds of thousands of Quechua and Aymara peasant families into the subtropical valleys of the Chapare, the Yungas and the fertile plains of northern Santa Cruz. Concurrently, the collapse of global tin prices in 1985 prompted the relocation of more than 20.000 miners, triggering the rapid growth of El Alto on the Altiplano rim above La Paz.

These structural transformations culminated in a complete geographic rebalancing between the Andean highlands and the eastern lowlands over the intercensal periods from 1950AD to 2024AD. National population expanded from 3,02M in 1950AD to 4,61M in 1976AD, 6,42M in 1992AD, 8,27M in 2001AD, 10,06M in 2012AD, 11,31M in 2024AD and 11,53M by 2026AD. During this trajectory, the Department of Santa Cruz emerged as the principal agricultural, industrial and commercial growth engine of Bolivia: its demographic weight rose from 9,5% in 1950AD (286,1k persons) to 27,5% in 2024AD (3,12M persons), overtaking the Department of La Paz (3,02M in 2024AD) as the most populous administrative region in the nation. Together with Cochabamba (2,01M in 2024AD), the central metropolitan axis now contains more than 72% of the national population, leaving the peripheral Altiplano and southern valley provinces increasingly depopulated.

The Operation Viscount demographic model pairs the official census series across all nine departments with 369 geo-referenced settlement trajectories, drawing upon modern census microdata, historical municipal rolls and non-stationary Matérn kriging. By subtracting active urban settlements from departmental aggregates and distributing residual populations across a high-resolution areal mask of 1.115.871 km², this study reconstructs two centuries of regional demographic evolution. The analysis highlights the transition from an Altiplano mining society to an agro-industrial lowland economy, providing a continuous quantitative accounting of Bolivian territorial development from the foundation of the republic to the present day.

# The Demographic Trajectory of Republican Bolivia

## Historical Baseline and the Post-Independence Census of 1846

When the sovereign Republic of Bolívar was declared in the historic capital of Chuquisaca on 6 August 1825, the new state faced deep economic disorganisation following sixteen years of devastating civil war across Upper Peru [@klein2011history].

The colonial silver mines of the Cerro Rico in Potosí, which had anchored the regional economy for three centuries, lay flooded and starved of mercury, while rural agricultural output in the Cochabamba basin had contracted sharply [@platt1982estado].

Contemporary estimates compiled by early republican authorities indicated a total population of approximately 1,18M persons in 1825AD, including uncontacted tribal populations in the Amazonian and Chaco lowlands. More than four-fifths of this population consisted of indigenous Quechua and Aymara communities inhabiting communal landholdings (*ayllus*) or bound as unfree tenant labourers (*colonos* or *pongos*) to private landed estates (*haciendas*) [@klein1993haciendas].

The administration of Marshal Andrés de Santa Cruz attempted the first nationwide count in 1831AD, enumerating 1.088.768 sedentary inhabitants, though the survey suffered from extensive omissions across remote valleys and nomadic lowland territories [@averanga1974aspectos].

Fiscal survival in the early republic depended heavily upon the indigenous head tax (*contribución indigenal*), which replaced the colonial tribute and provided up to 40% of national treasury receipts until the late nineteenth century [@perescajias2017bolivian].

To formalise this tax base and evaluate national resources, the administration of President José Ballivián commissioned the first comprehensive republican census in 1846AD, directed by the jurist José María Dalence. Published in his monumental *Bosquejo estadístico de Bolivia* in 1851, Dalence recorded a national total of 1.448.343 inhabitants [@dalence1851bosquejo].

The 1846 census revealed an overwhelmingly highland distribution: the Department of La Paz accounted for 412.867 persons (28,5% of the total), followed by Cochabamba with 279.048 (19,3%), Potosí with 243.263 (16,8%) and Chuquisaca with 156.041 (10,8%).

Together with Oruro (95.324), these five Andean departments held 82% of the recorded populace. Lowland departments remained demographically marginal in national calculations: Santa Cruz held 125.000, El Beni held 58.000 and the northern Amazonian colonies contained barely 15.000 residents, while Tarija in the south recorded 63.800 inhabitants.

Dalence documented severe demographic vulnerabilities that constrained long-term natural increase across the republic [@dalence1851bosquejo]. Infant mortality exceeded 250 deaths per 1.000 live births in rural cantons, exacerbated by pulmonary silicosis in mining settlements, periodic typhus outbreaks and complete absence of clinical facilities outside the departmental capitals.

Urban centres remained modest: La Paz, protected within its deep canyon at 3.640 metres above sea level, numbered approximately 42k inhabitants, followed by Sucre (the constitutional capital) with 19k, Cochabamba with 22k and Potosí, shrunken from its colonial zenith, with 16k.

<figure class="crd-table-figure" id="tab:national-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark Year</th><th class="crd-th">Census / Authority</th><th class="crd-th">National Population</th><th class="crd-th">Altiplano Share</th><th class="crd-th">Lowland Share</th><th class="crd-th">Density (per km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1825AD</strong></td><td class="crd-td">Republican Founding Estimate</td><td class="crd-td">1,18M</td><td class="crd-td">51,7%</td><td class="crd-td">15,6%</td><td class="crd-td">1,06</td></tr>
<tr><td class="crd-td"><strong>1846AD</strong></td><td class="crd-td">Dalence National Census</td><td class="crd-td">1,45M</td><td class="crd-td">51,9%</td><td class="crd-td">13,7%</td><td class="crd-td">1,3</td></tr>
<tr><td class="crd-td"><strong>1882AD</strong></td><td class="crd-td">Post-Pacific War Official Estimate</td><td class="crd-td">1,47M</td><td class="crd-td">50,5%</td><td class="crd-td">16%</td><td class="crd-td">1,32</td></tr>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">National Census (ONIEPG)</td><td class="crd-td">1,75M</td><td class="crd-td">48,9%</td><td class="crd-td">14,8%</td><td class="crd-td">1,57</td></tr>
<tr><td class="crd-td"><strong>1950AD</strong></td><td class="crd-td">First Modern National Census</td><td class="crd-td">3,02M</td><td class="crd-td">56,1%</td><td class="crd-td">14,1%</td><td class="crd-td">2,71</td></tr>
<tr><td class="crd-td"><strong>1976AD</strong></td><td class="crd-td">INE National Census (CNPV)</td><td class="crd-td">4,61M</td><td class="crd-td">52,7%</td><td class="crd-td">19,8%</td><td class="crd-td">4,13</td></tr>
<tr><td class="crd-td"><strong>1992AD</strong></td><td class="crd-td">INE National Census (CNPV)</td><td class="crd-td">6,42M</td><td class="crd-td">45%</td><td class="crd-td">26,1%</td><td class="crd-td">5,75</td></tr>
<tr><td class="crd-td"><strong>2001AD</strong></td><td class="crd-td">INE National Census (CNPV)</td><td class="crd-td">8,27M</td><td class="crd-td">41,7%</td><td class="crd-td">29,5%</td><td class="crd-td">7,42</td></tr>
<tr><td class="crd-td"><strong>2012AD</strong></td><td class="crd-td">INE National Census (CNPV)</td><td class="crd-td">10,06M</td><td class="crd-td">40,2%</td><td class="crd-td">31,7%</td><td class="crd-td">9,02</td></tr>
<tr><td class="crd-td"><strong>2024AD</strong></td><td class="crd-td">INE National Census (CNPV)</td><td class="crd-td">11,31M</td><td class="crd-td">39,3%</td><td class="crd-td">32,9%</td><td class="crd-td">10,14</td></tr>
<tr><td class="crd-td"><strong>2026AD</strong></td><td class="crd-td">INE Demographic Projection</td><td class="crd-td">11,53M</td><td class="crd-td">39,1%</td><td class="crd-td">33,2%</td><td class="crd-td">10,34</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Headline demographic benchmarks, institutional authorities, regional population shares and gross density across Bolivia from 1825AD to 2026AD.</figcaption>
</figure>

## Territorial Losses, Stagnation and the War of the Pacific

The second half of the nineteenth century witnessed political instability and deep demographic stagnation across Bolivia [@fifer1972bolivia].

An official statistical survey compiled in 1854AD under President Manuel Isidoro Belzu recorded 1.544.300 persons, but subsequent decades saw this modest growth wiped out by recurrent famines and epidemiological catastrophes [@averanga1974aspectos].

Between 1877AD and 1879AD, an intense El Niño Southern Oscillation event triggered widespread agricultural failure across the Altiplano, causing severe famine that was immediately compounded by epidemics of typhus, dysentery and malaria [@klein2011history].

Before the republic could recover from this humanitarian crisis, the War of the Pacific (1879-1884) erupted against Chile over control of the nitrate and guano deposits in the Atacama Desert.

The war resulted in the military occupation and permanent loss of the Department of the Litoral, encompassing 120.000 km² of Pacific coastline and maritime ports including Antofagasta, Cobija and Tocopilla [@fifer1972bolivia].

Although the permanent population of the coastal department was relatively small (approximately 15k to 20k inhabitants in the 1870s), the geopolitical impact was profound: Bolivia became a landlocked nation, dependent upon foreign transit rights across Chilean and Peruvian ports to export its mineral commodities.

The official national estimate compiled in 1882AD reported only 1.469.000 inhabitants, indicating that total population was barely 20k higher than it had been in 1846AD.

Even accounting for territorial dismemberment, the compound annual growth rate over the thirty-six years between 1846AD and 1882AD stood at an extraordinary 0,04% per annum.

The silver mining revival of the 1880s, driven by modern steam pumps and international capital in Huanchaca and Pulacayo (Potosí), restored commercial liquidity but failed to ignite broader demographic expansion [@perescajias2017bolivian].

The nineteenth century closed with the National Census of 1900, conducted on 1 September 1900 by the National Office of Immigration, Statistics and Geographical Propaganda [@ine1900censo].

The 1900 census enumerated 1.752.568 persons, reflecting a modest acceleration of growth to 0,97% per annum between 1882AD and 1900AD. La Paz reinforced its status as the demographic centre of the republic with 445.616 inhabitants, followed by Cochabamba (328.163), Potosí (325.615) and Chuquisaca (204.434).

Concurrently, the Federal War of 1899 shifted executive and legislative power from Sucre to La Paz, confirming the political dominance of the northern Altiplano over the historic southern elite [@klein2011history].

## The Acre Rubber Dispute and the Chaco War

The early twentieth century challenged Bolivian sovereignty on its eastern and northern frontiers, producing further territorial and demographic convulsions [@fifer1972bolivia].

Between 1899AD and 1903AD, the rubber boom along the Purús and Acre rivers attracted tens of thousands of Brazilian rubber tappers (*seringueiros*) into the isolated northern forests claimed by Bolivia.

The resulting Acre conflict ended with the Treaty of Petrópolis in November 1903, under which Bolivia ceded approximately 191.000 km² of rubber-rich Amazonian territory to Brazil in exchange for financial indemnity and the promise of a railway circumventing the Madeira River rapids (the Madeira-Mamoré railway) [@klein2011history].

A far more devastating demographic calamity unfolded in the southeast between 1932AD and 1935AD during the Chaco War against Paraguay [@dunkerley1984rebellion]. Competing petroleum interests and unresolved boundaries in the semi-arid Gran Chaco plain drew both impoverished nations into intense conventional warfare.

Bolivia mobilised approximately 250.000 soldiers, drawing heavily upon illiterate Quechua and Aymara conscripts from highland ayllus who were thrust into an unfamiliar, waterless thorn-scrub wilderness [@klein2011history].

The war resulted in the loss of approximately 50.000 Bolivian lives to combat, thirst, malaria and dysentery, alongside 20.000 prisoners and thousands of permanent invalids.

This mortality constituted nearly 2% of the entire national population and fell overwhelmingly upon young adult males of working age.

Beyond its catastrophic casualty count, the Chaco War served as a profound crucible of national consciousness: highland peasants and urban workers discovered common grievances against an incompetent oligarchy, creating the political momentum that brought about the 1952 National Revolution [@dunkerley1984rebellion].

# Departmental Divergence across Nine Administrative Regions

<figure class="crd-table-figure" id="tab:departmental-evolution">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Department</th><th class="crd-th">Area km² (Share)</th><th class="crd-th">1825AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1976AD</th><th class="crd-th">2001AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chuquisaca</strong></td><td class="crd-td">59.254 (5,3%)</td><td class="crd-td">118k</td><td class="crd-td">204,4k</td><td class="crd-td">283k</td><td class="crd-td">358,5k</td><td class="crd-td">531,5k</td><td class="crd-td">600,1k</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">61.358 (5,5%)</td><td class="crd-td">225k</td><td class="crd-td">328,2k</td><td class="crd-td">490,5k</td><td class="crd-td">721k</td><td class="crd-td">1,46M</td><td class="crd-td">2,01M</td></tr>
<tr><td class="crd-td"><strong>El Beni</strong></td><td class="crd-td">219.148 (19,6%)</td><td class="crd-td">62k</td><td class="crd-td">32,2k</td><td class="crd-td">119,8k</td><td class="crd-td">168,4k</td><td class="crd-td">362,5k</td><td class="crd-td">477,4k</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">133.525 (12%)</td><td class="crd-td">320k</td><td class="crd-td">445,6k</td><td class="crd-td">948,4k</td><td class="crd-td">1,47M</td><td class="crd-td">2,35M</td><td class="crd-td">3,02M</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">55.111 (4,9%)</td><td class="crd-td">76k</td><td class="crd-td">86,1k</td><td class="crd-td">210,3k</td><td class="crd-td">310,4k</td><td class="crd-td">391,9k</td><td class="crd-td">570,2k</td></tr>
<tr><td class="crd-td"><strong>Pando</strong></td><td class="crd-td">65.135 (5,8%)</td><td class="crd-td">14k</td><td class="crd-td">18k</td><td class="crd-td">19,8k</td><td class="crd-td">34,5k</td><td class="crd-td">52,5k</td><td class="crd-td">130,8k</td></tr>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">117.724 (10,5%)</td><td class="crd-td">215k</td><td class="crd-td">325,6k</td><td class="crd-td">534,4k</td><td class="crd-td">657,7k</td><td class="crd-td">709k</td><td class="crd-td">856,4k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">366.573 (32,9%)</td><td class="crd-td">108k</td><td class="crd-td">209,6k</td><td class="crd-td">286,1k</td><td class="crd-td">710,7k</td><td class="crd-td">2,03M</td><td class="crd-td">3,12M</td></tr>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">38.043 (3,4%)</td><td class="crd-td">44k</td><td class="crd-td">102,9k</td><td class="crd-td">126,8k</td><td class="crd-td">187,2k</td><td class="crd-td">391,2k</td><td class="crd-td">534,3k</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">1.115.871 (100%)</td><td class="crd-td">1,18M</td><td class="crd-td">1,75M</td><td class="crd-td">3,02M</td><td class="crd-td">4,61M</td><td class="crd-td">8,27M</td><td class="crd-td">11,31M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Departmental land area, census populations and historical evolution across Bolivia from 1825AD to 2024AD.</figcaption>
</figure>

## Department of La Paz: Northern Altiplano, Lake Titicaca and Yungas

The Department of La Paz (133.525 km²) maintained demographic primacy throughout nearly the entire republican era. Its population grew from 320k in 1825AD to 412.867 in 1846AD, 445.616 in 1900AD, 948.446 in 1950AD, 1.465.078 in 1976AD, 2.350.466 in 2001AD and 3.022.566 in the 2024AD census.

The department spans profound ecological diversity, extending from glaciated peaks exceeding 6.000 metres through the temperate microclimates of Lake Titicaca and down to the humid coca and citrus terraces of the Yungas [@sandoval2013genetic].

Rural population density concentrated historically along the shores of Lake Titicaca in provinces such as Omasuyos, Ingavi, Los Andes and Manco Kapac, where lacustrine thermal moderation permitted stable potato, barley and quinoa cultivation.

Following the Federal War of 1899, the municipality of La Paz emerged as the administrative and banking metropolis of the republic, drawing rural Aymara migrants into commerce, construction and public administration.

From the 1980s onward, departmental growth concentrated almost exclusively in the metropolitan pairing of La Paz and El Alto, while peripheral rural provinces experienced accelerating demographic stagnation.

## Department of Oruro: Central Altiplano, Poopó Basin and Mining Corridors

The Department of Oruro (55.111 km²) encompasses the arid central Altiplano surrounding Lake Poopó and the Salar de Coipasa. Its population increased from 76k in 1825AD to 86.081 in 1900AD, 210.260 in 1950AD, 310.409 in 1976AD, 391.870 in 2001AD and 570.194 in 2024AD.

Oruro's economic and demographic fortunes have been intimately tied to mineral extraction and railway transport. The opening of the Antofagasta-Oruro railway in 1892 transformed the departmental capital into the premier smelting and shipping node of Bolivia [@perescajias2017bolivian].

Surrounding mining settlements at Huanuni, Poopó, Machacamarca and San José housed thousands of industrial wage earners.

In the arid western provinces of Carangas, Sajama and Sabaya, indigenous communities sustained ancient pastoral economies focused on llama and alpaca herding alongside cross-border commerce with northern Chile.

The gradual desiccation of Lake Poopó and the restructuring of state mining enterprises after 1985 forced substantial out-migration from rural cantons toward Oruro city and the eastern lowlands.

## Department of Potosí: Southern Altiplano, Cerro Rico and Mineral Cycles

The Department of Potosí (117.724 km²) represents the historic mining heartland of Upper Peru, yet it has experienced one of the most volatile demographic trajectories in the republic [@platt1982estado].

Potosí numbered 215k residents in 1825AD, 243.263 in 1846AD, 325.615 in 1900AD and 534.399 in 1950AD. During the first half of the twentieth century, northern Potosí became the centre of global tin production, dominated by the massive underground complexes of Catavi, Siglo XX, Uncía and Llallagua [@dunkerley1984rebellion].

These industrial centres fostered a politically conscious mining proletariat that played a decisive role in national politics.

Following peak production in the 1970s (reaching 657.743 departmental residents in 1976AD), Potosí suffered catastrophic de-industrialisation.

The collapse of the international tin market in October 1985 and the implementation of Supreme Decree 21060 prompted the closure of state mines, leading to the emigration of over 20.000 mining families.

By the 1992 census, Potosí's population had contracted to 645.889, marking the only absolute intercensal decline recorded by any department in modern Bolivian history.

Subsequent recovery was gradual, reaching 709.013 in 2001AD, 828.093 in 2012AD and 856.419 in 2024AD, driven by zinc, lead and silver cooperative mining alongside seasonal agricultural labour migration to Argentina.

## Department of Cochabamba: Central Valley Hearth and Chapare Colonisation

The Department of Cochabamba (61.358 km²) expanded from 225k in 1825AD to 328.163 in 1900AD, 490.475 in 1950AD, 720.952 in 1976AD, 1.455.711 in 2001AD and 2.005.373 in 2024AD.

Cochabamba's fertile alluvial valleys—the Valle Central, Valle Alto and Valle Bajo—constituted the traditional agricultural heartland of Bolivia, producing maize, wheat, dairy products and fruit for the mining settlements of the Altiplano [@klein1993haciendas].

Following the 1952 agrarian reform, smallholder Quechua farmers in Cliza, Punata and Tarata organised powerful peasant unions that transformed rural land tenure.

From the 1960s onward, severe parcel fragmentation (*minifundismo*) in the temperate valleys drove thousands of farming families into state-sponsored and spontaneous colonisation in the tropical Chapare lowlands [@blanes1984campesinos].

The Chapare frontier expanded rapidly through the cultivation of citrus, bananas and coca leaf, establishing towns such as Villa Tunari, Shinahota and Chimoré.

Concurrently, the urban conurbation of Cochabamba, incorporating Quillacollo, Sacaba, Colcapirhua and Tiquipaya, grew into the third metropolitan axis of the nation.

## Department of Chuquisaca: Valley Agriculture and the Eastern Chaco

The Department of Chuquisaca (59.254 km²), holding the historic constitutional capital of Sucre, expanded from 118k in 1825AD to 156.041 in 1846AD, 204.434 in 1900AD, 282.980 in 1950AD, 358.488 in 1976AD and 600.132 in 2024AD.

Chuquisaca's human geography is divided between the temperate northern valleys surrounding Sucre, the viticultural canyons of the Cinti valley (Camargo and Villa Abecia) and the rugged Chaco hills of the east (Monteagudo and Padilla).

Sucre retained its cultural and judicial significance as the seat of the Supreme Court and San Francisco Xavier University, but the transfer of political power to La Paz in 1899 curbed its commercial growth [@klein2011history].

During the late twentieth century, rural Chuquisaca experienced persistent out-migration toward the agricultural fields of Santa Cruz and the hydrocarbon facilities of Tarija.

Between 2012AD and 2024AD, departmental population increased by only 18.785 persons (a compound annual rate of 0,26%), reflecting widespread rural depopulation across its southern and western cantons.

## Department of Santa Cruz: The Agricultural Frontier and Lowland Metropolis

The Department of Santa Cruz (366.573 km²) has undergone the most radical demographic restructuring in Bolivian history [@fifer1972bolivia; @schoop1980verstaedterung].

Holding barely 108k inhabitants in 1825AD and 209.592 in 1900AD, Santa Cruz languished as an isolated tropical outpost throughout the nineteenth century, cut off from the Andean highlands by lack of roads.

The transformation commenced with the Bohan Plan and the completion of the asphalt highway from Cochabamba in 1954 [@fifer1972bolivia].

Departmental population multiplied from 286.145 in 1950AD to 710.724 in 1976AD, 1.364.389 in 1992AD, 2.029.471 in 2001AD, 2.657.762 in 2012AD and 3.115.386 in 2024AD.

Santa Cruz absorbed successive waves of Andean Quechua and Aymara settlers, foreign agricultural colonists (Mennonites, Japanese and Okinawans) and commercial entrepreneurs.

The department became the primary national producer of soy, sorghum, sugarcane, cotton and beef cattle.

The municipal capital, Santa Cruz de la Sierra, evolved from a quiet town of 42k inhabitants in 1950AD into a sprawling commercial metropolis of 2,15M residents in 2024AD, surpassing La Paz as the largest urban agglomeration in the country.

## Department of El Beni: The Moxos Plains and Fluvial Cattle Economies

The Department of El Beni (219.148 km²), established in 1842 by President José Ballivián, encompasses the seasonally inundated savannas of the Llanos de Moxos.

Its population grew from 62k in 1825AD to 58.000 in 1846AD, 32.180 in 1900AD, 119.770 in 1950AD, 168.367 in 1976AD, 362.521 in 2001AD and 477.441 in 2024AD.

The late nineteenth century was dominated by the Amazonian rubber boom, which drew thousands of indigenous Moxos and Movima labourers into debt peonage along the lower Beni and Mamoré rivers [@langer1989economic].

Following the collapse of the rubber trade around 1912, the departmental economy reoriented around extensive beef cattle ranching on the natural savannas.

Air transport played a crucial role after 1945, ferrying refrigerated beef carcasses from airstrips at Trinidad, San Borja and Reyes directly to highland consumers in La Paz.

El Beni remains sparsely settled outside its riverine towns, with an aggregate density of only 2,18 persons per km² in 2024AD.

## Department of Pando: The Acre Rubber Legacy and Amazonian Extraction

The Department of Pando (65.135 km²), created in September 1938 and named after President José Manuel Pando, occupies the dense rainforests of the northern Bolivian Amazon.

Its recorded population expanded from 14k in 1825AD to 18.000 in 1900AD, 19.804 in 1950AD, 34.493 in 1976AD, 52.525 in 2001AD, 110.436 in 2012AD and 130.761 in 2024AD.

Pando's human settlement originated entirely in the rubber estradas established along the Acre, Tahuamanu and Madre de Dios rivers during the late nineteenth century [@klein2011history].

After the collapse of natural rubber prices, the regional economy transitioned to the collection of wild Brazil nuts (*Bertholletia excelsa*), which currently anchors rural livelihoods across the department [@zuidema2002demography].

Since 2000AD, departmental growth has accelerated, driven by alluvial gold extraction along the Madre de Dios River, cross-border commercial trade with the neighbouring Brazilian state of Acre and the expansion of the departmental capital of Cobija.

## Department of Tarija: Guadalquivir Basin and the Chaco Hydrocarbon Belt

The Department of Tarija (38.043 km²) increased from 44k in 1825AD to 63.800 in 1846AD, 102.887 in 1900AD, 126.752 in 1950AD, 187.204 in 1976AD, 391.226 in 2001AD and 534.348 in 2024AD.

Tarija's settlement geography comprises two distinct domains: the temperate central valley of the Guadalquivir River, home to colonial vineyard estates and traditional livestock farms, and the vast Gran Chaco plain to the east [@fifer1972bolivia].

Historically, rural Tarijeños engaged in circular seasonal labour migration to the sugar plantations of northern Argentina (Salta and Jujuy).

From the late 1990s onward, the discovery of world-scale natural gas reservoirs at San Alberto, San Antonio and Margarita transformed the Gran Chaco provinces.

Royalties and investment funneled into Yacuiba, Villa Montes and Caraparí, turning the Chaco into an active migration destination that drew thousands of workers from Chuquisaca and Potosí.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_preta/1.0-bolivia-after-independence/fig2_bolivia_after_independence_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate national population trajectory (1825AD to 2026AD) and comparative growth trajectories of leading departmental urban centres.</figcaption>
</figure>

# Structural Drivers of Demographic Transformation

## Mining Economies and Urbanization Cycles

Throughout both the colonial and republican eras, mining acted as the primary spatial determinant of Andean settlement [@perescajias2017bolivian].

During the late nineteenth century, the industrialisation of silver mining at Huanchaca, Pulacayo and Colquechaca attracted tens of thousands of rural indigenous labourers into wage employment, prompting the construction of the first domestic railway line linking Antofagasta to Uyuni and Oruro between 1889 and 1892 [@klein2011history].

When silver prices collapsed in the 1890s, the global emergence of the electrical, automobile and canning industries created an insatiable demand for tin [@dunkerley1984rebellion].

Bolivian tin production soared from 9k metric tonnes in 1900 to over 43k tonnes in 1929, accounting for more than 70% of total national export earnings.

Three domestic mining magnates—Simón I. Patiño, Carlos Víctor Aramayo and Mauricio Hochschild—consolidated immense industrial complexes in the cordilleran highlands.

The tin economy exerted three distinct demographic impacts:
1. **Concentration of Industrial Labour**: Thousands of Quechua and Aymara peasants were transformed into permanent subterranean wage miners at Catavi, Siglo XX, Huanuni, San José and Colquiri, establishing compact mining encampments that reached combined populations exceeding 80k inhabitants by 1950AD.
2. **Infrastructure Orientation**: Railway lines were constructed exclusively to connect high-altitude mineral deposits directly to Pacific ports in Antofagasta, Arica and Mollendo, bypassing agricultural regions and reinforcing the landlocked nation's export orientation.
3. **Urban Consolidation of Oruro and La Paz**: Oruro became the primary smelting and logistics capital of the mining industry, while corporate management, banking and legal services clustered in La Paz, stimulating commercial building and bureaucratic employment.

## Agrarian Reform, the March to the East and Lowland Colonisation

The political watershed of the 1952 National Revolution dismantled the structural barriers that had confined the majority of the population to the Altiplano for four centuries [@klein2011history].

The revolutionary government of the Movimiento Nacionalista Revolucionario (MNR) enacted the Agrarian Reform Decree of 2 August 1953 at Ucureña in the Cochabamba valley.

The decree declared all land to belong to the state, expropriated private haciendas without financial compensation, dissolved traditional servitude obligations (*pongueaje*) and distributed individual land titles to indigenous peasant communities [@klein1993haciendas; @pacino2023confrontin].

While agrarian reform liberated the highland peasantry, it also subdivided parcel holdings across successive generations into unviable minifundia (*surcofundio*), particularly in northern Potosí and the Lake Titicaca basin.

To relieve highland demographic pressure, the state enacted the recommendations of the 1942 Bohan Plan, formulating an active policy known as the march to the east (*marcha hacia el oriente*) [@fifer1972bolivia].

The state established the National Colonisation Institute (INC), which demarcated agricultural settlements across northern Santa Cruz, the Chapare (Cochabamba) and the Alto Beni (La Paz).

Between 1955AD and 1980AD, more than 150k families participated in organised or spontaneous colonisation schemes [@schoop1980verstaedterung; @blanes1984campesinos].

Migrants cleared dense semideciduous forests to establish smallholder cash-crop farms producing rice, maize, bananas and citrus, subsequently transitioning into capital-intensive commercial soy and cattle farming.

The demographic consequence was dramatic: while the national population doubled between 1950AD and 1976AD, the population of the Department of Santa Cruz surged by 148%, fundamentally altering the political and economic balance of the republic.

## De-agrarianisation, Mining Relocalisation and the Rise of El Alto

In October 1985, the international tin market collapsed on the London Metal Exchange, dropping the price of tin from eight dollars per pound to under three dollars within forty-eight hours [@dunkerley1984rebellion].

Concurrently, the domestic economy was paralyzed by hyperinflation exceeding 20.000 per cent per annum.

In August 1985, the administration of President Víctor Paz Estenssoro promulgated Supreme Decree 21060, enacting a drastic orthodox structural adjustment programme that dismantled state capitalism, closed unprofitable state mines operated by the Corporación Minera de Bolivia (COMIBOL) and dismissed over 23.000 unionised miners under the euphemism of relocation (*relocalización*) [@perescajias2017bolivian].

This economic shock unleashed two massive migratory streams:
1. **The Chapare Coca Frontier**: Approximately 30k to 40k displaced miners migrated eastward into the tropical lowlands of Cochabamba (the Chapare and Carrasco provinces), joining existing peasant communities in clearing agricultural plots for coca leaf cultivation [@blanes1984campesinos]. The Chapare emerged as a major economic haven and the political cradle of the contemporary cocalero union movement.
2. **The Urban Explosion of El Alto**: Tens of thousands of mining families relocated to the barren, wind-swept Altiplano rim overlooking the city of La Paz at 4.050 metres elevation [@arbona2008urban]. Formerly an informal satellite suburb of La Paz with fewer than 100k residents in 1976AD, El Alto grew at annual rates exceeding 9% between 1985AD and 1992AD. In March 1988, El Alto was formally elevated to the status of an independent city. By the 2001 census, El Alto counted 647.350 residents; by the 2012 census, it reached 848.840; and by 2024AD, its municipal population stood at 885.035, functioning as an energetic self-governing metropolis of indigenous Aymara commerce, transport and manufacturing.

## Demographic Transition: Fertility, Mortality and Health Inequalities

Across the late twentieth century, Bolivia underwent a delayed but decisive demographic transition [@delventhal2021demographi; @luy2019express; @bloom2001economic].

In 1950AD, crude death rates exceeded 22 per 1.000 population and infant mortality remained among the highest in South America at approximately 160 per 1.000 live births, while total fertility rates averaged 6,8 children per woman [@celade1985bolivia; @pacino2023confrontin]. Life expectancy at birth in 1950AD stood at barely 40 years.

Sustained improvements in rural sanitation, childhood vaccination campaigns against polio, measles and pertussis, alongside maternal health interventions, progressively lowered infant mortality to 82 per 1.000 by 1992AD and below 35 per 1.000 by the 2020s [@singh2022comparison; @perez_cueto2004changes].

Fertility rates declined synchronously: from 5 children per woman in 1992AD to 3,8 in 2001AD, 2,9 in 2012AD and approximately 2,4 by 2024AD.

This decline was accompanied by substantial rural-to-urban convergence, though stark regional inequalities persist between urban departmental capitals and isolated rural indigenous cantons in northern Potosí and western Oruro [@galway2012where; @faguet2008decentrali].

The demographic transition shifted the national age pyramid from an expansive young base to an intermediate transitional structure [@willekens2014demographi; @wilson2016democracy].

The dependency ratio dropped from over 85 dependents per 100 working-age persons in the 1970s to below 56 by 2024AD, creating a temporary demographic dividend that has bolstered labour supply in manufacturing, commercial transport and agro-industrial export processing.

# Cartographic Synthesis and Spatial Modeling

## Spatial Disaggregation and Settlement Subtraction

The Operation Viscount methodology bridges aggregate macro-regional population censuses and fine-scale spatial demography through explicit settlement subtraction.

In the Bolivia after Independence module, the national territory of 1.115.871 km² is mapped across 13.562 active 5-arcminute raster cells and partitioned among the nine historical departments (Table \ref{tab:settlement-scale}).

To prevent ecological double counting, the model compiles longitudinal population trajectories for 369 catalogued settlements, derived from the national censuses of 1900, 1950, 1976, 1992, 2001, 2012 and 2024, supplemented by official municipal records, parish registers and historical gazetteers [@copa2026censosbo; @ine2024censo].

Each settlement is pinned to precise geographic coordinates (WGS84).

At each benchmark date between 1825AD and 2026AD, active settlement populations within each department are summed and subtracted from the departmental aggregate total.

The residual rural population is then allocated across non-settled terrestrial cells according to a calibrated spatial weighting surface.

<figure class="crd-table-figure" id="tab:settlement-scale">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Department</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Urban Centre (2024AD)</th><th class="crd-th">Urban Sum 2024AD</th><th class="crd-th">Total Pop 2024AD</th><th class="crd-th">Urban Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chuquisaca</strong></td><td class="crd-td">34</td><td class="crd-td">Sucre (296,7k)</td><td class="crd-td">631,7k</td><td class="crd-td">600,1k</td><td class="crd-td">105,3%</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">49</td><td class="crd-td">Cochabamba (957,1k)</td><td class="crd-td">2,3M</td><td class="crd-td">2,01M</td><td class="crd-td">114,5%</td></tr>
<tr><td class="crd-td"><strong>El Beni</strong></td><td class="crd-td">23</td><td class="crd-td">Trinidad (128,6k)</td><td class="crd-td">517,4k</td><td class="crd-td">477,4k</td><td class="crd-td">108,4%</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">93</td><td class="crd-td">La Paz (2,23M)</td><td class="crd-td">3,54M</td><td class="crd-td">3,02M</td><td class="crd-td">117,2%</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">35</td><td class="crd-td">Oruro (298,4k)</td><td class="crd-td">559,2k</td><td class="crd-td">570,2k</td><td class="crd-td">98,1%</td></tr>
<tr><td class="crd-td"><strong>Pando</strong></td><td class="crd-td">15</td><td class="crd-td">Cobija (55,1k)</td><td class="crd-td">160,2k</td><td class="crd-td">130,8k</td><td class="crd-td">122,5%</td></tr>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">42</td><td class="crd-td">Potosí (218,7k)</td><td class="crd-td">763,1k</td><td class="crd-td">856,4k</td><td class="crd-td">89,1%</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">69</td><td class="crd-td">Santa Cruz de la Sierra (2,15M)</td><td class="crd-td">3,61M</td><td class="crd-td">3,12M</td><td class="crd-td">115,9%</td></tr>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">9</td><td class="crd-td">Tarija (238,7k)</td><td class="crd-td">475k</td><td class="crd-td">534,3k</td><td class="crd-td">88,9%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Departmental distribution of 369 catalogued settlements, leading urban centres, aggregate settlement populations and 2024AD urbanisation ratios across Bolivia.</figcaption>
</figure>

## Non-Stationary Kriging and Covariate Balancing

The allocation of residual rural populations across non-settled cells incorporates environmental and economic covariates within a non-stationary Matérn ($\nu = 3/2$) spatial covariance framework [@delventhal2021demographi; @luy2019express]. Covariates include:
- **Elevation and Frost Risk**: High-altitude Altiplano plains above 4.000 metres exhibit severe nocturnal frost hazards that restrict sedentary agriculture to hardy tubers and camelid pastoralism, whereas intermediate valleys between 2.200 and 3.200 metres support intensive multi-cropping [@sandoval2013genetic].
- **Fluvial Proximity and Alluvial Soils**: In the Amazonian and Chaco lowlands, pre-industrial and early republican settlements clustered strictly along navigable river corridors (the Mamoré, Beni, Guaporé, Ichilo and Piray rivers), where annual flooding deposited fertile alluvial silt [@zuidema2002demography; @stieglitz2012modernizat].
- **Transport Corridors**: The twentieth-century emergence of paved road networks—most notably Route 4 linking Cochabamba to Santa Cruz and Route 1 traversing the Altiplano—created linear ribbon settlement corridors that accelerated rural densification [@schoop1980verstaedterung].

A two-dimensional Gaussian smoothing operator applied along departmental boundaries eliminates artificial step cliffs between administrative divisions while strictly preserving total departmental population constraints.

This ensures that the reconstructed population density grids remain continuous across departmental and national frontiers.

# Limitations

Historical demographic analysis of post-independence Bolivia is subject to several methodological caveats:
1. **Nineteenth-Century Census Coverage**: Early republican counts, including the 1846 Dalence census and the 1882 survey, experienced under-enumeration in remote rural cantons, particularly in the Chaco and Amazonian frontiers, where autonomous indigenous populations resisted administrative registration [@dalence1851bosquejo; @averanga1974aspectos].
2. **Boundary Fluctuations**: Departmental borders underwent periodic modifications following the War of the Pacific (1879-1884), the Acre dispute (1903) and the Chaco War (1932-1935), alongside internal canton redistricting that complicates direct longitudinal comparisons across small spatial units [@fifer1972bolivia].
3. **Internal Migration Statistics**: While intercensal growth rates clearly document the macroscopic relocation of population from the Altiplano to Santa Cruz and El Alto, detailed municipal-level gross migration flows remain unavailable prior to the 1976 National Census [@ine1976censo; @copa2026censosbo].

# Sources

<div id="refs"></div>
