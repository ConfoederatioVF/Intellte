---
title: "Colonial Caribbean Plantation Era"
subtitle: "Imperial Sugar Economies and the Haitian Revolution, 1650-1898"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/colonial_caribbean_plantation_regional_map.png"
hero_caption: "Nine imperial sub-regions and 143 catalogued ports and towns across the Caribbean archipelago and Bermuda from 1650 to 1898."
hero_label: "fig:hero-caribbean-plantation-map"
bibliography: colonial_caribbean_plantation_literature_review.bib
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



![Nine imperial sub-regions and 143 catalogued ports and towns across the Caribbean archipelago and Bermuda from 1650 to 1898.](figures/colonial_caribbean_plantation_regional_map.png)



# Abstract

Between the onset of the Barbados Sugar Revolution in 1650 and the collapse of Spanish rule in Cuba and Puerto Rico in 1898, the Caribbean archipelago and Bermuda experienced one of the most drastic demographic transformations in early modern and modern history. Following the near-annihilation of the pre-Columbian Taíno and Kalinago societies during the sixteenth century, imperial rivalry among Britain, France, Spain, the Dutch Republic and Denmark turned the Antilles into a high-mortality sugar, coffee and maritime-entrepôt complex sustained by more than 4M enslaved Africans delivered across the Middle Passage [@EltisRichardson2010; @EngermanHigman1997; @LiviBacci2003]. Across nine imperial sub-regions spanning 221.996 km² of terrestrial land area (321.569,9 km² inside the gridded coastal mask), census-calibrated regional population multiplied more than thirty-onefold from 198,2k inhabitants in 1650 (0,89 inhabitants per km²) to 6,28M (6.277.040, or 28,28 inhabitants per km²) in 1898 [@Higman1984; @USWarDeptCuba1900; @USWarDeptPR1900]. Demographic primacy shifted repeatedly across imperial frontiers: from seventeenth-century Barbados (45k across the Windward cluster in 1650) to eighteenth-century British Jamaica (318k by 1800) and French Saint-Domingue, whose three provinces reached 519,5k inhabitants on the eve of 1789 before the Haitian Revolution (1791 to 1804) claimed more than 150k lives, reduced independent Haiti to 380k in 1805 and redirected European capital and slave imports into nineteenth-century Cuba (1.631.687 in 1887), Puerto Rico (798.565 in 1887) and Trinidad (218.381 in 1891) [@MoreauStMery1797; @Geggus1997; @Geggus2020Impact; @Nicholls1979]. Staggered emancipations from British abolition (1834 to 1838) through French and Danish abolition (1848), Dutch emancipation (1863), Puerto Rico (1873) and Cuba (1886) converted chronic plantation natural decrease into positive post-emancipation natural growth reinforced by Asian indentured and European immigration [@Roberts1957; @Metzlar2024Unravelling; @DanishWestIndies1912]. Combining colonial census series across 24 sub-administrative benchmarks, coarse-grid HYDE 3.5 and KK10 substratum diagnostics and a gazetteer of 143 ports and towns led by La Habana (235.981 in 1898), Port-au-Prince (61k) and Kingston (46.542), this study traces how sugar monoculture, revolution and abolition reshaped the human geography of the colonial Caribbean.

# Background

## From Early Spanish Ranches to the Barbados Sugar Revolution

At the mid-point of the seventeenth century, the Caribbean islands presented a stark demographic contrast between sparsely inhabited Spanish pastoral colonies and crowded northern European pioneer settlements. Spain still held the four Greater Antilles, yet a century and a half of epidemic collapse, mining exhaustion and metropolitan neglect had left Cuba (35k inhabitants in 1650), Santo Domingo (22k), Puerto Rico (14k) and Spanish Jamaica (4,2k) thinly peopled by cattle ranchers, garrison soldiers, free people of colour and small contingents of enslaved Africans [@LiviBacci2003; @Burchardt2021Post]. Spanish towns such as La Habana (14,2k), Santo Domingo (6,9k) and San Juan (5,2k) functioned primarily as fortified convoy ports guarding silver shipments from Veracruz and Portobelo rather than centres of agricultural export production [@USWarDeptCuba1900; @USWarDeptPR1900].

In the Lesser Antilles, however, English, French and Dutch settlers had occupied smaller islands left unfortified by Madrid. During the 1620s and 1630s, St Christopher (St Kitts), Barbados, Nevis, Antigua, Montserrat, Martinique and Guadeloupe grew tobacco, indigo and cotton on smallholdings worked largely by European indentured servants. That yeoman frontier ended abruptly in the 1640s and 1650s when Dutch merchants expelled from northeastern Brazil introduced sugar-cane milling technology, boiling-house expertise, credit and captive African labour to Barbados [@EngermanHigman1997; @EltisRichardson2010; @Surowitzisrael2025Caribbean]. Within two decades, consolidated sugar estates displaced small white farmers across Barbados, driving land prices sharply upward and pushing white migrants outward toward Jamaica, the Leewards, Carolina and Suriname while raising enslaved Africans to an overwhelming demographic majority.

By 1650, the British Barbados and Windward Islands sub-region already held 45k inhabitants (almost all concentrated on Barbados itself, with Bridgetown at 9.850 inhabitants), making that single coral island more populous than Cuba and Puerto Rico combined. Yet the sugar revolution also established the defining demographic pathology of the colonial Caribbean: extreme mortality among enslaved field workers driven by dysentery, yellow fever, malaria, tetanus, brutal gang labour and severe malnutrition, paired with low fertility and skewed adult male sex ratios among newly landed African captives [@Higman1984; @Radburn2019Gold]. Unlike mainland North America, where enslaved populations achieved early natural increase, Caribbean sugar colonies operated as demographic sinks requiring continuous transatlantic human replenishment merely to maintain their labour force [@EltisRichardson2010; @EngermanHigman1997].

## British Expansion in Jamaica, the Leewards, the Bahamas and Bermuda

English seizure of Jamaica from Spain in 1655 opened a mountainous island twenty-five times larger than Barbados to sugar and livestock estates. During its first four decades under English rule, Jamaica's urban life centred on Port Royal, a buccaneering and contraband port on the Palisadoes sandspit whose population climbed from 1.850 in 1662 to 6.500 by 1692 before the catastrophic earthquake and tsunami of 7 June 1692 sank two-thirds of the town into Kingston Harbour. Commercial activity shifted rapidly across the bay to newly laid-out Kingston, which expanded from 4.800 inhabitants in 1700 to 16,8k in 1774, 26.478 in 1800 and 46.542 in 1891, overtaking the old inland capital of Spanish Town (6,2k in 1788, easing to 5.019 in 1891) [@Roberts1957; @Higman1984].

Across rural Jamaica, plantation expansion drove total island population from 4,2k in 1650 to 83k in 1730 and 318k by 1800, making Jamaica Britain's premier sugar colony. Beneath those totals lay severe labour exhaustion and social conflict. Planters relied heavily on hired jobbing gangs composed of enslaved workers rented out for the heaviest cane-holing and clearing tasks, a practice documented by Radburn and Roberts as imposing mortality rates substantially higher than resident estate labour [@Radburn2019Gold]. Interdisciplinary historical and genetic studies confirm that Jamaica's demographic core derived overwhelmingly from West and West-Central African lineages, especially the Gold Coast, Bight of Biafra and Bight of Benin, whose survivors forged resilient cultural networks while confronting pervasive planter coercion, Obeah and poisoning trials and Maroon warfare in the interior Cockpit Country and Blue Mountains [@Deason2012Interdisciplinary; @Bryson2013Power; @EltisRichardson2010].

Further east, the British Leeward Islands (St Kitts, Nevis, Antigua and Montserrat) followed Barbados into dense sugar monoculture by 1700, with Basseterre (5,6k in 1650 to 9.097 in 1891) and St. John's in Antigua (1.450 in 1650 to 9.738 in 1891) serving as garrisoned export harbours. After the Seven Years' War (1763), Britain acquired the Ceded Islands of Grenada, St Vincent, Dominica and Tobago, opening steep volcanic slopes to fresh coffee and sugar clearances despite fierce Kalinago and Garifuna resistance on St Vincent and Dominica [@Higman1984; @Nelson2006Landscape].

At the northern maritime margins of the British Atlantic, the Bahamas and Bermuda diverged sharply from the sugar-island template. Bermuda had already shifted away from tobacco toward shipbuilding, cedar timber, carrying trade and Turks Islands salt raking; its population stood at roughly 5,9k in 1699 and grew steadily through natural increase rather than mass slave imports, moving its capital from St. George's (3.120 in 1650 to 2.150 in 1891) to Hamilton (480 in 1795 to 2.126 in 1891) as the colony reached 15.013 in 1891 [@BSOBermuda2018]. The Bahamas remained sparsely inhabited by wreckers and fishermen until 1783, when several thousand American Loyalists and their enslaved households arrived from East Florida and the Carolinas, quadrupling Nassau from 1.150 in 1731 to 4.450 in 1788 and briefly planting Sea Island cotton on the Out Islands before soil exhaustion returned the archipelago to sponging, wrecking and coastal trade; the colony reached 47.565 inhabitants by 1891 [@EngermanHigman1997; @Higman1984].

## French Saint-Domingue and the Haitian Revolution

Nowhere did the plantation machine attain the sheer scale and speed of eighteenth-century French Saint-Domingue. Beginning from French buccaneer bases on Tortuga and the western littoral of Hispaniola, formally ceded by Spain at the Treaty of Ryswick in 1697, Saint-Domingue expanded from roughly 12k inhabitants in 1650 to 185k in 1750 and exploded during the post-1763 coffee and irrigated-sugar boom [@MoreauStMery1797; @Geggus1997]. By 1789, Médéric Louis Élie Moreau de Saint-Méry's detailed colonial enumeration recorded 519,5k inhabitants distributed across the colony's three administrative provinces: 195k in the densely irrigated Plaine du Nord around Le Cap-Français (Cap-Haïtien, 18.850 inhabitants), 194k in the Province de l'Ouest around Port-au-Prince (9.400) and the Artibonite valley and 130,5k in the expanding coffee and indigo frontier of the Province du Sud around Les Cayes and Jacmel (matching our 523,8k register benchmark when transient maritime and frontier garrisons are included) [@MoreauStMery1797; @Geggus1997]. Roughly 465k of those residents were enslaved Africans, two-thirds of them African-born (*bossales*) disembarked in the final two decades before 1791 at rates approaching 30k to 40k captives annually [@EltisRichardson2010; @Geggus2020Impact].

That extraordinary concentration of recent captives, deep mountain interiors flanking narrow alluvial plains and metropolitan political rupture in Paris produced the only permanently victorious slave revolution in world history [@Khan2015French; @Romine2018Geography; @Wattwalter2025Saint]. Even before August 1791, enslaved women and men in Saint-Domingue had constrained plantation reproduction through marronage, work slowdowns, gynaecological resistance and acts of defiance documented across colonial plantation logs and legal records [@Demers2022Contemplating; @Blaikie2026Suicides]. Once insurrection erupted on the Plaine du Nord in August 1791, thirteen years of civil war, Spanish and British interventions, Toussaint Louverture's military consolidation and the brutal French expedition under General Leclerc (1802 to 1803) devastated both people and infrastructure [@Mocombe2023Toussaint; @Bandau2013Narrations].

Demographically, the Haitian Revolution inflicted catastrophic loss. Contemporary narratives and modern historical reconstructions concur that more than 150k residents perished in combat, massacres, famine and epidemic yellow fever, while tens of thousands of white colonists, free people of colour and enslaved retainers fled to eastern Cuba, Jamaica, Louisiana, Trinidad and New Orleans [@Geggus1997; @Geggus2020Impact; @Bandau2013Narrations]. When Jean-Jacques Dessalines conducted an early enumeration of independent Haiti in 1805, total population had fallen to approximately 380k—a contraction of roughly 27% from 1789—and Cap-Haïtien had dropped by more than half from 18.850 in 1789 to 8.200 in 1804 [@Nicholls1979; @Geggus1997]. Yet freedom reversed Haiti's underlying vital regime: once plantation gang labour dissolved into independent peasant smallholdings (*lakou*) across the nineteenth century, natural increase resumed rapidly without renewed transatlantic arrivals, lifting Haiti to 1,25M inhabitants by 1898 while Port-au-Prince expanded to 61k [@Nicholls1979; @Geggus2020Impact].

Meanwhile, the neighbouring French Lesser Antilles of Martinique and Guadeloupe traced a distinct trajectory. Both islands reached dense plantation maturity in the eighteenth century (125k combined by 1750), experienced temporary French republican abolition in 1794 (implemented in Guadeloupe under Victor Hugues while Martinique lay under British occupation) and suffered Napoleonic re-enslavement in 1802 before permanent abolition arrived in April 1848 [@Pluskota2020Freedom]. Throughout the late slave era and post-emancipation decades, enslaved and newly freed Antilleans contested planter pass laws to access urban markets in Saint-Pierre (25.382 in 1894, prior to Mount Pelée's 1902 eruption), Fort-de-France (17.274) and Pointe-à-Pitre (17.242), while colonial credit banks established in Martinique after 1848 financed centralised steam *usines* alongside Indian indentured labour imports [@Pluskota2020Freedom; @Festre2018Colonial]. Tiny Saint-Barthélemy, ceded to Sweden from 1784 to 1878, briefly flourished as a neutral wartime free port, lifting Gustavia to 4.200 inhabitants in 1815 before shrinking back to 980 by 1894.

## Dutch, Danish and Trinidadian Entrepôts and Frontier Plantations

Beyond the British and French sugar giants, smaller Dutch, Danish and late-colonial Spanish territories played outsized commercial and demographic roles. The Dutch West India Company transformed arid Curaçao and volcanic Sint Eustatius into premier Caribbean transit entrepôts linking European manufactures, enslaved captives and Venezuelan cacao and hides. Willemstad grew from 1.680 inhabitants in 1650 to 11.543 in 1789 and 14.800 in 1890, anchored by a prominent Sephardic Jewish merchant community whose kinship and commercial ties spanned Amsterdam, Barbados, Jamaica, St Thomas and Suriname [@Surowitzisrael2025Caribbean]. Further north, Oranjestad on Sint Eustatius—"the Golden Rock"—swelled from 1.650 in 1740 to 7.850 in 1780 while supplying munitions to the American rebels, before Admiral Rodney's 1781 sack shattered its mercantile primacy and reduced it to 1.480 by 1890. Across Curaçao itself, individual slave registers from 1839 to 1863 show that because arid soils prevented intensive sugar gang monoculture, enslaved mortality was markedly lower than on sugar islands, allowing positive natural reproduction before Dutch emancipation in 1863 when Curaçao and its dependencies numbered 32.756 residents [@Metzlar2024Unravelling].

Denmark built a dual-model colony in the Virgin Islands: St Thomas (occupied 1672) developed around the deep-water free port of Charlotte Amalie (rising from 640 in 1688 to 11.764 in 1880 before dipping to 9.455 in 1890 as steamships bypassed coaling stations), while fertile St Croix (purchased from France in 1733) became an intensive sugar estate island centred on Christiansted (5.806 in 1835) and Frederiksted (3.683 in 1890), alongside small St John [@DanishWestIndies1912]. Danish West Indies censuses record how emancipated plantation labourers withdrew from St Croix cane estates after Governor Peter von Scholten's 1848 proclamation and the 1878 *Fireburn* labour uprising, leaving St Croix at 19.783, St Thomas at 12.019 and St John at 984 in 1890 [@DanishWestIndies1912].

At the southeastern corner of the Caribbean, Trinidad underwent one of the sharpest late-colonial demographic turnarounds in the hemisphere. Long a neglected Spanish outpost with barely 1.480 inhabitants in Port of Spain in 1777, Trinidad was opened by Spain's 1783 *Cédula de Población*, which granted generous land allotments to Catholic French planters and free people of colour migrating from Grenada, Martinique, Guadeloupe and Saint-Domingue with their enslaved households [@EngermanHigman1997; @Geggus2020Impact]. Captured by Britain in 1797 (and administratively united with Tobago in 1889), Trinidad expanded into a fast-growing nineteenth-century sugar and cacao frontier; after British emancipation in 1838, more than 140k South Asian indentured workers arrived between 1845 and 1917, propelling Port of Spain to 33.782 and Trinidad and Tobago to 218.381 by 1891 [@Higman1984; @EngermanHigman1997].

## The Second-Slavery Boom in Cuba and Puerto Rico and Emancipation

The destruction of Saint-Domingue's sugar and coffee exports after 1791 created a massive vacuum in Atlantic commodity markets that Spain's remaining Antillean colonies rushed to fill [@Geggus2020Impact; @Burchardt2021Post]. Cuba, already stimulated by the brief British occupation of Havana (1762 to 1763) and Bourbon trade liberalisation, launched a massive "second-slavery" plantation boom powered by steam mills, early railways (from 1837), massive clandestine African slave imports after 1820, Chinese contract labourers (*culíes*) and sustained Spanish and Canary Islander immigration [@EltisRichardson2010; @USWarDeptCuba1900]. Official Spanish censuses document Cuba's extraordinary ascent: from 171.620 inhabitants in 1774 to 572.383 in 1817, 1.396.530 in 1861 and 1.631.687 in 1887, before the devastating War of Independence (1895 to 1898) and General Weyler's *reconcentración* policy cut the island back to 1.572.797 in 1898 [@USWarDeptCuba1900; @Burchardt2021Post].

Puerto Rico underwent an equally rapid, though less slave-dominated, nineteenth-century expansion following the 1815 *Real Cédula de Gracias*, which attracted European and Venezuelan loyalist settlers alongside expanded sugar and highland coffee production. Censuses trace Puerto Rico from 44.883 in 1765 to 220.892 in 1815, 583.308 in 1860, 798.565 in 1887 and 953.243 in 1898—a staggering 68-fold expansion since 1650 that raised density to 111,05 inhabitants per km², even as anthropometric records of military recruits reveal persistent nutritional stress among the rural *jíbaro* peasantry during sugar-price downturns [@USWarDeptPR1900; @Lazaro2026Height]. Eastern Hispaniola (Spanish Santo Domingo, independent as the Dominican Republic from 1844) followed a far slower pastoral and timber trajectory, dropping to 63k residents in 1819 during post-revolutionary upheavals before recovering to 180k by 1850 and 480k by 1898 as eastern sugar estates grew around San Pedro de Macorís [@LiviBacci2003; @Geggus2020Impact].

Across the entire Caribbean, legal emancipation unfolded in staggered imperial waves over more than half a century: Britain abolished slavery in 1834 (ending apprenticeship in 1838), France and Denmark in 1848, the Netherlands in 1863, Spain in Puerto Rico in 1873 and finally in Cuba in 1886 [@Higman1984; @Pluskota2020Freedom; @Metzlar2024Unravelling; @DanishWestIndies1912; @Burchardt2021Post]. Everywhere except war-torn late-1890s Cuba, the end of chattel gang labour allowed birth rates to overtake death rates cleanly, anchoring the transition toward the dense, post-emancipation Caribbean societies entering the twentieth century.

# Methodology

## Imperial Sub-Regional Architecture and Area Reconciliation

To preserve historical sovereignty boundaries while capturing the stark ecological and institutional contrasts across the Caribbean, JAGUAR partitions the insular plantation domain into nine imperial sub-regions spanning 1650 to 1898. Because historical colonial jurisdictions grouped tiny volcanic islands, coral cays and oceanic archipelagos under shared imperial administrations, the nine zones pair major Greater Antillean colonies with coherent Lesser Antillean and Atlantic clusters: Spanish Cuba (106.195 km²), Spanish Puerto Rico (8.584 km²), French Saint-Domingue and independent Haiti within the 1697 to 1795 Treaty of Ryswick/Aranjuez frontier (24.394 km²), Spanish Santo Domingo (50.492 km²), British Jamaica and the Cayman Islands (10.749 km²), British Barbados and the Windward Islands (2.371 km²), British Leewards, Bahamas, Turks-Caicos and Bermuda (10.468 km²), French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin (2.626 km²) and the Dutch and Danish Antilles with Trinidad and Tobago (6.117 km²).

Together these nine sub-regions encompass exactly 221.996 km² of terrestrial land area. A critical methodological distinction must be made immediately between this true terrestrial polygon area (221.996 km²) and the coarse-grid coastal raster mask area (321.569,9 km² across 3.995 pixels at 5-arcminute resolution) stored in the global substratum summary cache. Because a 5-arcminute equirectangular raster pixel covers roughly 80 to 85 km² at Caribbean latitudes, every slender coral island, volcanic cone and Bahamian cay forces full coastal raster pixels to register as land, inflating apparent gridded area by 44,85% overall—and by more than threefold in small-island clusters such as British Barbados and the Windwards (6.591,8 km² gridded vs 2.371 km² terrestrial) or British Leewards, Bahamas and Bermuda (41.092,2 km² gridded vs 10.468 km² terrestrial). All demographic densities reported in our historical benchmark tables therefore divide census-calibrated population strictly by terrestrial land area, while gridded substratum densities are clearly distinguished during cross-validation.

## Dual-Layer Demographic Calibration and Vital Accounting

Regional population trajectories $P_r(t)$ across 1650 to 1898 are reconstructed through a two-tier protocol that anchors every sub-region to primary colonial censuses and slave-registration archives while evaluating global gridded models (HYDE 3.5 and KK10) as spatial disaggregation priors rather than authoritative island totals [@Higman1984; @EngermanHigman1997; @USWarDeptCuba1900; @USWarDeptPR1900].

For each colony or imperial cluster $r$, total population change between census benchmarks $t_1$ and $t_2$ obeys the plantation vital-balance identity:

$$P_r(t_2) = P_r(t_1) + \int_{t_1}^{t_2} \bigl(B_r(\tau) - D_r(\tau)\bigr)\,d\tau + M_r^{\text{slave}}(t_1, t_2) + M_r^{\text{free/indent}}(t_1, t_2)$$

where $B_r(\tau) - D_r(\tau)$ represents net natural change (chronically negative at $-1\%$ to $-3,5\%$ per annum on intensive eighteenth-century sugar estates in Jamaica, Saint-Domingue and the Ceded Islands, yet slightly positive on Barbados after 1810, in Bermuda and in non-sugar Curaçao), $M_r^{\text{slave}}$ captures net disembarkations from the Transatlantic Slave Trade Database minus inter-island re-exports and $M_r^{\text{free/indent}}$ captures European settlers, Loyalists, Saint-Domingue refugees and post-1838 Asian and Madeiran indentured immigrants [@EltisRichardson2010; @Higman1984; @Metzlar2024Unravelling; @Roberts1957].

For inter-benchmark growth comparison across uneven colonial census dates, compound annual growth rates follow standard geometric compounding:

$$g_r(t_1, t_2) = \left(\frac{P_r(t_2)}{P_r(t_1)}\right)^{\frac{1}{t_2 - t_1}} - 1$$

Because the coarse HYDE 3.5 and KK10 spatial rasters severely attenuate sub-pixel Caribbean islands (summing to only 475,4k in 1700 and 1,24M in 1890 across the entire chapter mask—less than one-fifth of the actual 6,28M census-documented population in 1898), JAGUAR employs 24 sub-administrative colonial census anchor records harvested across Saint-Domingue (1789), Haiti (1805), Santo Domingo (1819), Martinique (1853), Dutch Antilles (1863), Guadeloupe (1876), Cuba (1887), Puerto Rico (1887), the three Danish Virgin Islands (1890) and twelve British West Indian and Bermudian colonies (1891) to enforce strict island-level demographic fidelity [@MoreauStMery1797; @USWarDeptCuba1900; @USWarDeptPR1900; @DanishWestIndies1912; @BSOBermuda2018].

## Settlement Gazetteer Assembly and Urban Rank-Size Calibration

Parallel to the territorial series, JAGUAR assembles an evidence-only urban gazetteer of 143 ports, garrison capitals and inland market towns distributed across 29 Caribbean and Atlantic jurisdictions and all nine imperial sub-regions. Four sequential ingestion waves tracked in the chapter source ledger achieved full thematic saturation with a final marginal gain of 0,7% and strictly 0% crowd-sourced fallback: Wave 1 compiled 131 towns directly from official colonial censuses, Spanish HGIS de las Indias records, British Colonial Blue Books, French colonial tables, Danish censuses and Moreau de Saint-Méry (1797); Wave 2 added 9 towns from peer-reviewed Caribbean demographic monographs; Wave 3 backfilled 2 longitudinal census records; and Wave 4 closed sub-regional gaps with 1 final verification addition. Spatial deduplication across 149 candidate entries consolidated 6 duplicate aliases within a 25 km radius (redundant variants of La Habana, Bayamo, Guanabacoa, Santa Clara, Matanzas and Concepción de la Vega), leaving 143 canonical city-proper records.

Urban hierarchy structure is assessed through standard log-linear Zipf rank-size regression fitted across the upper half of the urban distribution (71 of 143 towns at their peak plantation-era scale):

$$\log_{10} P_{(k)} = c - \alpha \log_{10} k$$

where $P_{(k)}$ is the peak population of the $k$-th ranked settlement and $\alpha$ is the Pareto exponent measuring urban primacy versus multi-polar imperial fragmentation [@Pluskota2020Freedom; @Burchardt2021Post].

# Testing and Validation

## Reconciling Colonial Censuses Against Coarse-Grid Substratum Models

A central methodological finding of this chapter emerges when the census-calibrated island series is tested directly against the coarse-grid HYDE 3.5 and KK10 raster substratum plotted in the spatial pipeline. Table \ref{tab:raster-vs-census} quantifies that divergence across all nine sub-regions near the closing horizon (1890 gridded substratum vs 1887 to 1898 census-calibrated totals).

<figure class="crd-table-figure" id="tab:raster-vs-census">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Land km²</th><th class="crd-th">Grid km²</th><th class="crd-th">Grid 1890</th><th class="crd-th">Census 1898</th><th class="crd-th">Grid Dens.</th><th class="crd-th">Census Dens.</th><th class="crd-th">Census/Grid</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Spanish Cuba (Capitanía General de Cuba)</strong></td><td class="crd-td">106.195</td><td class="crd-td">138.072</td><td class="crd-td">610,2k</td><td class="crd-td">1,57M</td><td class="crd-td">4,42</td><td class="crd-td">14,81</td><td class="crd-td">2,58x</td></tr>
<tr><td class="crd-td"><strong>Spanish Puerto Rico (Capitanía General)</strong></td><td class="crd-td">8.584</td><td class="crd-td">12.726</td><td class="crd-td">14,8k</td><td class="crd-td">953,2k</td><td class="crd-td">1,16</td><td class="crd-td">111,05</td><td class="crd-td">64,41x</td></tr>
<tr><td class="crd-td"><strong>French Saint-Domingue and Haiti (1697-1795 Frontier)</strong></td><td class="crd-td">24.394</td><td class="crd-td">30.953</td><td class="crd-td">173,5k</td><td class="crd-td">1,25M</td><td class="crd-td">5,61</td><td class="crd-td">51,24</td><td class="crd-td">7,2x</td></tr>
<tr><td class="crd-td"><strong>Spanish Santo Domingo</strong></td><td class="crd-td">50.492</td><td class="crd-td">57.853</td><td class="crd-td">152,8k</td><td class="crd-td">480k</td><td class="crd-td">2,64</td><td class="crd-td">9,51</td><td class="crd-td">3,14x</td></tr>
<tr><td class="crd-td"><strong>British Jamaica and Cayman Islands</strong></td><td class="crd-td">10.749</td><td class="crd-td">15.658</td><td class="crd-td">69,5k</td><td class="crd-td">715k</td><td class="crd-td">4,44</td><td class="crd-td">66,52</td><td class="crd-td">10,29x</td></tr>
<tr><td class="crd-td"><strong>British Barbados and Windward Islands</strong></td><td class="crd-td">2.371</td><td class="crd-td">6.592</td><td class="crd-td">24,5k</td><td class="crd-td">385k</td><td class="crd-td">3,72</td><td class="crd-td">162,38</td><td class="crd-td">15,7x</td></tr>
<tr><td class="crd-td"><strong>British Leewards, Bahamas, Turks-Caicos and Bermuda</strong></td><td class="crd-td">10.468</td><td class="crd-td">41.092</td><td class="crd-td">68,9k</td><td class="crd-td">198k</td><td class="crd-td">1,68</td><td class="crd-td">18,91</td><td class="crd-td">2,87x</td></tr>
<tr><td class="crd-td"><strong>French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</strong></td><td class="crd-td">2.626</td><td class="crd-td">6.029</td><td class="crd-td">21,3k</td><td class="crd-td">368k</td><td class="crd-td">3,53</td><td class="crd-td">140,14</td><td class="crd-td">17,28x</td></tr>
<tr><td class="crd-td"><strong>Dutch and Danish Antilles and Trinidad-Tobago</strong></td><td class="crd-td">6.117</td><td class="crd-td">12.594</td><td class="crd-td">106,9k</td><td class="crd-td">355k</td><td class="crd-td">8,49</td><td class="crd-td">58,03</td><td class="crd-td">3,32x</td></tr>
<tr><td class="crd-td"><strong>Archipelago Total (9 Sub-Regions)</strong></td><td class="crd-td">221.996</td><td class="crd-td">321.570</td><td class="crd-td">1,24M</td><td class="crd-td">6,28M</td><td class="crd-td">3,86</td><td class="crd-td">28,28</td><td class="crd-td">5,05x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Cross-check of coarse-grid raster substratum (1890) against census-calibrated sub-regional totals (1898), showing coastal pixel area inflation and small-island undercounting across nine Caribbean sub-regions.</figcaption>
</figure>

The diagnostic contrast is unmistakable and systematic. Across the entire Caribbean, the coarse-grid raster substratum captures only 1,24M inhabitants in 1890 compared with 6,28M in the colonial census series (a 5,05x shortfall). The distortion is mildest on Cuba (2,58x) and Santo Domingo (3,14x), where broad continuous land interiors fill multiple interior grid cells, yet becomes extreme on compact, densely populated islands: 15,7x in British Barbados and the Windwards (24,5k gridded vs 385k census-calibrated), 17,28x in French Guadeloupe and Martinique (21,3k vs 368k) and 64,41x in Spanish Puerto Rico (14,8k vs 953,2k, where raster coastline clipping dropped most of the coastal municipalities). Conversely, the coarse grid misses the Haitian Revolution shock inside Saint-Domingue while introducing an artificial 1810 dip in Spanish Santo Domingo (30,7k in 1810 jumping to 113,5k in 1820). This audit proves why global gridded historical population databases cannot be used raw for island archipelagos and why sub-administrative colonial census anchoring is mandatory [@Higman1984; @USWarDeptCuba1900; @USWarDeptPR1900].

## Sub-Administrative Colonial Census Ledger (1789 to 1891)

To anchor every island jurisdiction directly to surviving archival enumerations, Table \ref{tab:hgis-subadmin} reproduces all 24 colonial sub-administrative census benchmarks compiled in the JAGUAR Caribbean registry, spanning Moreau de Saint-Méry's three provinces of Saint-Domingue in 1789 through the 1887 Spanish Antillean censuses, the 1890 Danish West Indies enumeration and the synchronised 1891 British imperial census across twelve colonies.

<figure class="crd-table-figure" id="tab:hgis-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Colonial Unit</th><th class="crd-th">Territory</th><th class="crd-th">Year</th><th class="crd-th">Population</th><th class="crd-th">Archival Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Domingue  -  Province du Nord</strong></td><td class="crd-td">Haiti</td><td class="crd-td">1789</td><td class="crd-td">195.000</td><td class="crd-td">Moreau de Saint-Méry (1797); Geggus (1997)</td></tr>
<tr><td class="crd-td"><strong>Saint-Domingue  -  Province de l'Ouest</strong></td><td class="crd-td">Haiti</td><td class="crd-td">1789</td><td class="crd-td">194.000</td><td class="crd-td">Moreau de Saint-Méry (1797); Geggus (1997)</td></tr>
<tr><td class="crd-td"><strong>Saint-Domingue  -  Province du Sud</strong></td><td class="crd-td">Haiti</td><td class="crd-td">1789</td><td class="crd-td">130.500</td><td class="crd-td">Moreau de Saint-Méry (1797); Geggus (1997)</td></tr>
<tr><td class="crd-td"><strong>Empire of Haiti (Dessalines 1805 Census)</strong></td><td class="crd-td">Haiti</td><td class="crd-td">1805</td><td class="crd-td">380.000</td><td class="crd-td">Geggus (1997); Nicholls (1979)</td></tr>
<tr><td class="crd-td"><strong>Captaincy General of Santo Domingo</strong></td><td class="crd-td">Dominican Republic</td><td class="crd-td">1819</td><td class="crd-td">63.000</td><td class="crd-td">Moya Pons (1987)</td></tr>
<tr><td class="crd-td"><strong>Colony of Martinique</strong></td><td class="crd-td">Martinique</td><td class="crd-td">1853</td><td class="crd-td">129.681</td><td class="crd-td">INSEE; Engerman and Higman (1997)</td></tr>
<tr><td class="crd-td"><strong>Dutch West Indies (Curaçao and Dependencies)</strong></td><td class="crd-td">Curaçao</td><td class="crd-td">1863</td><td class="crd-td">32.756</td><td class="crd-td">CBS Curaçao and Antilles</td></tr>
<tr><td class="crd-td"><strong>Colony of Guadeloupe (incl. dependencies)</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">1876</td><td class="crd-td">170.800</td><td class="crd-td">INSEE; Engerman and Higman (1997)</td></tr>
<tr><td class="crd-td"><strong>Captaincy General of Cuba</strong></td><td class="crd-td">Cuba</td><td class="crd-td">1887</td><td class="crd-td">1.631.687</td><td class="crd-td">US War Dept (1900); ONEI Cuba</td></tr>
<tr><td class="crd-td"><strong>Captaincy General of Puerto Rico</strong></td><td class="crd-td">Puerto Rico</td><td class="crd-td">1887</td><td class="crd-td">798.565</td><td class="crd-td">US War Dept (1900)</td></tr>
<tr><td class="crd-td"><strong>Saint Croix (Danish West Indies)</strong></td><td class="crd-td">United States Virgin Islands</td><td class="crd-td">1890</td><td class="crd-td">19.783</td><td class="crd-td">Statistics Denmark (1912); US Census</td></tr>
<tr><td class="crd-td"><strong>Saint Thomas (Danish West Indies)</strong></td><td class="crd-td">United States Virgin Islands</td><td class="crd-td">1890</td><td class="crd-td">12.019</td><td class="crd-td">Statistics Denmark (1912); US Census</td></tr>
<tr><td class="crd-td"><strong>Saint John (Danish West Indies)</strong></td><td class="crd-td">United States Virgin Islands</td><td class="crd-td">1890</td><td class="crd-td">984</td><td class="crd-td">Statistics Denmark (1912); US Census</td></tr>
<tr><td class="crd-td"><strong>Colony of Jamaica</strong></td><td class="crd-td">Jamaica</td><td class="crd-td">1891</td><td class="crd-td">639.491</td><td class="crd-td">Roberts (1957); Higman (1984)</td></tr>
<tr><td class="crd-td"><strong>Colony of Trinidad (and Tobago from 1889)</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">1891</td><td class="crd-td">218.381</td><td class="crd-td">CSO Trinidad; Higman (1984)</td></tr>
<tr><td class="crd-td"><strong>Colony of Barbados</strong></td><td class="crd-td">Barbados</td><td class="crd-td">1891</td><td class="crd-td">182.306</td><td class="crd-td">Barbados Stat. Service; Higman (1984)</td></tr>
<tr><td class="crd-td"><strong>Colony of Grenada (and Carriacou)</strong></td><td class="crd-td">Grenada</td><td class="crd-td">1891</td><td class="crd-td">53.209</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
<tr><td class="crd-td"><strong>Colony of the Bahama Islands</strong></td><td class="crd-td">The Bahamas</td><td class="crd-td">1891</td><td class="crd-td">47.565</td><td class="crd-td">Bahamas NSI; Higman (1984)</td></tr>
<tr><td class="crd-td"><strong>Presidency of Saint Kitts and Nevis</strong></td><td class="crd-td">Saint Kitts and Nevis</td><td class="crd-td">1891</td><td class="crd-td">43.981</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
<tr><td class="crd-td"><strong>Colony of Saint Lucia</strong></td><td class="crd-td">Saint Lucia</td><td class="crd-td">1891</td><td class="crd-td">42.220</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
<tr><td class="crd-td"><strong>Colony of Saint Vincent (and Grenadines)</strong></td><td class="crd-td">Saint Vincent and the Grenadines</td><td class="crd-td">1891</td><td class="crd-td">41.054</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
<tr><td class="crd-td"><strong>Presidency of Antigua (and Barbuda)</strong></td><td class="crd-td">Antigua and Barbuda</td><td class="crd-td">1891</td><td class="crd-td">36.819</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
<tr><td class="crd-td"><strong>Presidency of Dominica</strong></td><td class="crd-td">Dominica</td><td class="crd-td">1891</td><td class="crd-td">26.841</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
<tr><td class="crd-td"><strong>Colony of Bermuda</strong></td><td class="crd-td">Bermuda</td><td class="crd-td">1891</td><td class="crd-td">15.013</td><td class="crd-td">Bermuda Dept of Statistics; Kuczynski</td></tr>
<tr><td class="crd-td"><strong>Presidency of Montserrat</strong></td><td class="crd-td">Montserrat</td><td class="crd-td">1891</td><td class="crd-td">11.762</td><td class="crd-td">Kuczynski; Colonial Blue Books</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Colonial sub-administrative and island census benchmarks across the Caribbean and Bermuda, 1789 to 1891 (24 archival enumerations).</figcaption>
</figure>

Cross-checking Table \ref{tab:hgis-subadmin} against independent scholarly reconstructions confirms high internal consistency across every imperial tradition. In French Saint-Domingue, the three provincial totals for 1789 sum to 519.500 (Nord 195k, Ouest 194k, Sud 130,5k), within 0,8% of our 523.803 colony-wide benchmark including garrisons and maritime transients, while Dessalines's 1805 enumeration (380k) confirms a wartime loss exceeding 140k to 150k persons even after accounting for post-1789 slave arrivals [@MoreauStMery1797; @Geggus1997; @Nicholls1979]. In the British West Indies, the 1891 census cluster across Barbados (182.306), Grenada (53.209), Saint Lucia (42.220) and Saint Vincent (41.054) totals 318.789—and adding Dominica (26.841) yields 345.630, scaling smoothly to our 385k 1898 Windward benchmark at 1,55% annual late-nineteenth-century growth [@Higman1984; @EngermanHigman1997]. Likewise, Jamaica's 1891 census (639.491) projects smoothly to 715k in 1898, Trinidad and Tobago (218.381 in 1891) plus the Dutch Antilles (32.756 in 1863) and Danish Virgin Islands (32.786 in 1890) align with our 355k 1898 southeastern cluster, and Cuba's 1887 census (1.631.687) frames the 58,9k wartime drop to 1.572.797 recorded in the 1899 American census [@Roberts1957; @USWarDeptCuba1900; @DanishWestIndies1912].

# Results

## Aggregate Caribbean Demographic Expansion (1650 to 1898)

Over the 248 years from 1650 to 1898, the census-calibrated population of the Caribbean archipelago and Bermuda multiplied 31,67-fold, climbing from 198,2k inhabitants (0,89 inhabitants per km²) to 6,28M (6.277.040, or 28,28 inhabitants per km²) at a compound annual rate of 1,4% per annum. Table \ref{tab:subregion-trajectories} sets out the full nine-region historical benchmark matrix, pairing terrestrial land area, starting headcount in 1650, mid-era and late-slavery benchmarks, closing headcount in 1898, final terrestrial density, long-run expansion multiples and catalogued town counts.

<figure class="crd-table-figure" id="tab:subregion-trajectories">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">1650</th><th class="crd-th">Phase I</th><th class="crd-th">Phase II</th><th class="crd-th">Phase III</th><th class="crd-th">1898</th><th class="crd-th">1898 Dens.</th><th class="crd-th">Growth</th><th class="crd-th">Towns</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Spanish Cuba (Capitanía General de Cuba)</strong></td><td class="crd-td">106.195</td><td class="crd-td">35k</td><td class="crd-td">171,6k (1774)</td><td class="crd-td">572,4k (1817)</td><td class="crd-td">1,4M (1861)</td><td class="crd-td">1,57M</td><td class="crd-td">14,8</td><td class="crd-td">44,9x</td><td class="crd-td">31</td></tr>
<tr><td class="crd-td"><strong>Spanish Puerto Rico (Capitanía General)</strong></td><td class="crd-td">8.584</td><td class="crd-td">14k</td><td class="crd-td">44,9k (1765)</td><td class="crd-td">220,9k (1815)</td><td class="crd-td">583,3k (1860)</td><td class="crd-td">953,2k</td><td class="crd-td">111</td><td class="crd-td">68,1x</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>French Saint-Domingue and Haiti (1697-1795 Frontier)</strong></td><td class="crd-td">24.394</td><td class="crd-td">12k</td><td class="crd-td">185k (1750)</td><td class="crd-td">523,8k (1789)</td><td class="crd-td">380k (1805)</td><td class="crd-td">1,25M</td><td class="crd-td">51,2</td><td class="crd-td">104,2x</td><td class="crd-td">11</td></tr>
<tr><td class="crd-td"><strong>Spanish Santo Domingo</strong></td><td class="crd-td">50.492</td><td class="crd-td">22k</td><td class="crd-td">70k (1750)</td><td class="crd-td">125k (1789)</td><td class="crd-td">180k (1850)</td><td class="crd-td">480k</td><td class="crd-td">9,5</td><td class="crd-td">21,8x</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>British Jamaica and Cayman Islands</strong></td><td class="crd-td">10.749</td><td class="crd-td">4,2k</td><td class="crd-td">83k (1730)</td><td class="crd-td">318k (1800)</td><td class="crd-td">377,4k (1844)</td><td class="crd-td">715k</td><td class="crd-td">66,5</td><td class="crd-td">170,2x</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>British Barbados and Windward Islands</strong></td><td class="crd-td">2.371</td><td class="crd-td">45k</td><td class="crd-td">115k (1750)</td><td class="crd-td">215k (1834)</td><td class="crd-td">310k (1871)</td><td class="crd-td">385k</td><td class="crd-td">162,4</td><td class="crd-td">8,6x</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>British Leewards, Bahamas, Turks-Caicos and Bermuda</strong></td><td class="crd-td">10.468</td><td class="crd-td">26k</td><td class="crd-td">82k (1750)</td><td class="crd-td">128k (1834)</td><td class="crd-td">168k (1871)</td><td class="crd-td">198k</td><td class="crd-td">18,9</td><td class="crd-td">7,6x</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</strong></td><td class="crd-td">2.626</td><td class="crd-td">22k</td><td class="crd-td">125k (1750)</td><td class="crd-td">228k (1830)</td><td class="crd-td">315k (1870)</td><td class="crd-td">368k</td><td class="crd-td">140,1</td><td class="crd-td">16,7x</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Dutch and Danish Antilles and Trinidad-Tobago</strong></td><td class="crd-td">6.117</td><td class="crd-td">18k</td><td class="crd-td">48k (1750)</td><td class="crd-td">118k (1834)</td><td class="crd-td">212k (1871)</td><td class="crd-td">355k</td><td class="crd-td">58</td><td class="crd-td">19,7x</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Domain Total (9 Sub-Regions)</strong></td><td class="crd-td">221.996</td><td class="crd-td">198,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,28M</td><td class="crd-td">28,3</td><td class="crd-td">31,7x</td><td class="crd-td">143</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Census-calibrated population trajectories, 1898 terrestrial densities (inhabitants per km²), expansion multiples and catalogued town counts across nine Caribbean sub-regions, 1650 to 1898.</figcaption>
</figure>

Figure \ref{fig:caribbean-trajectory} displays the complementary coarse-grid spatial substratum trajectory from 1700 to 1890 alongside sub-regional gridded densities in 1890. Even within the heavily attenuated raster signal (rising from 475,4k in 1700 to 1,24M in 1890), two major macro-structural shifts remain legible: Cuba's sustained nineteenth-century climb to nearly half of the gridded total (610,2k in 1890) and the accelerated rise of the Trinidad and Dutch-Danish cluster (rising tenfold in the raster from 10,6k in 1700 to 106,9k in 1890, achieving the highest gridded density at 8,49 inhabitants per km²).

<figure class="crd-figure-block" id="fig:caribbean-trajectory">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-colonial-caribbean-plantation/colonial_caribbean_plantation_population_trajectory.png" alt="fig:caribbean-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Coarse-grid HYDE 3.5 and KK10 substratum population trajectory from 1700 to 1890 for the chapter total and four largest raster sub-regions (Panel A) and gridded 1890 sub-regional densities (Panel B).</figcaption>
</figure>

Measured by true census-calibrated headcounts, the regional balance of power shifted decisively from the Lesser Antilles in the seventeenth century back to the Greater Antilles by the nineteenth century. In 1650, the four Lesser Antillean and Atlantic clusters (Barbados-Windwards, Leewards-Bahamas-Bermuda, Guadeloupe-Martinique and Dutch-Danish-Trinidad) held 111k of the domain's 198,2k inhabitants—56% of the entire Caribbean—whereas the four Greater Antilles (Cuba, Hispaniola, Jamaica and Puerto Rico) held only 87,2k (44%). By 1898, that balance had reversed completely: the Greater Antilles held 4,97M inhabitants (79,2% of the archipelago), led by Cuba (1,57M, 25,1%), Haiti (1,25M, 19,9%), Puerto Rico (953,2k, 15,2%), Jamaica (715k, 11,4%) and the Dominican Republic (480k, 7,6%), while the smaller island chains held 1,31M (20,8%) at far higher terrestrial densities.

## British Sugar Islands, the Bahamas and Bermuda

Within the British Caribbean, growth followed an unmistakable west-to-east-to-south frontier sequence as planters chased unexhausted cane soils [@Higman1984; @EngermanHigman1997]. Barbados and the Windwards opened at 45k in 1650, climbed to 115k by 1750, reached 215k at emancipation in 1834 and stood at 385k in 1898—yielding the highest terrestrial density in the entire Caribbean at 162,38 inhabitants per km². On Barbados alone (431 km²), 182.306 inhabitants in 1891 packed the coral limestone terraces at 423 inhabitants per km², forcing steady out-migration of Barbadian artisans and labourers to Trinidad, British Guiana and Panama. Across the neighbouring Windwards, St Lucia (42.220 in 1891), Grenada (53.209), St Vincent (41.054) and Dominica (26.841) developed diversified post-emancipation peasantries cultivating nutmeg, cacao, arrowroot and limes alongside coastal export towns such as Castries (6.688), St. George's (4.919), Kingstown (4.547) and Roseau (5.186) [@Nelson2006Landscape].

British Jamaica recorded the single steepest proportional surge of the entire study domain, multiplying 170,2-fold from 4,2k in 1650 to 83k in 1730, 318k in 1800, 377.433 at the first post-emancipation census of 1844, 639.491 in 1891 and 715k in 1898 (66,52 inhabitants per km²). Following the 1807 British abolition of the transatlantic slave trade, Jamaica's enslaved population briefly declined through residual natural decrease before emancipation in 1838 enabled freed families to establish hill-country free villages beyond the coastal sugar estates, turning mortality deficits into vigorous post-1850 growth despite devastating cholera epidemics in 1850 to 1851 [@Roberts1957; @Deason2012Interdisciplinary; @Radburn2019Gold]. Kingston emerged as the British Caribbean's dominant commercial metropolis (46.542 in 1891), flanked by secondary north-coast sugar and banana ports such as Montego Bay.

By contrast, the British Leewards, Bahamas, Turks-Caicos and Bermuda sub-region grew more modestly (7,6-fold, from 26k in 1650 to 198k in 1898, or 18,91 inhabitants per km² across 10.468 km²). Old Leeward sugar cores such as St Kitts and Nevis (43.981 in 1891), Antigua and Barbuda (36.819) and Montserrat (11.762) hit ecological soil limits early in the nineteenth century, whereas maritime Bermuda (15.013 in 1891) and the post-Loyalist Bahamas (47.565 in 1891, anchored by Nassau at 11k) expanded steadily through shipping, salt, sponges and naval dockyard employment [@Higman1984; @BSOBermuda2018].

## French Saint-Domingue, Independent Haiti and the French Antilles

French Saint-Domingue represents the dramatic pivot of Caribbean plantation demography. Growing 43,7-fold between 1650 (12k) and 1789 (523,8k), the colony surpassed British Jamaica by more than 200k inhabitants and produced roughly two-fifths of the Atlantic world's sugar and half of its coffee [@MoreauStMery1797; @Geggus1997]. Yet its demographic structure was uniquely brittle: because planters calculated that buying fresh African captives was cheaper than raising enslaved children, deaths outpaced births by thousands every year even in peacetime, while marronage and everyday resistance eroded estate control [@Demers2022Contemplating; @Blaikie2026Suicides].

The revolutionary decade from 1791 to 1804 shattered that edifice. Driven by rugged mountain geography that shielded insurgent armies and exposed European expeditionary forces to epidemic yellow fever, the Haitian Revolution severed the transatlantic slave pipeline permanently while costing more than 150k lives across combat, reprisals and flight [@Romine2018Geography; @Wattwalter2025Saint; @Mocombe2023Toussaint; @Bandau2013Narrations]. From its 1805 trough of 380k under Dessalines, however, independent Haiti achieved sustained nineteenth-century natural increase—tripling to 1,25M inhabitants by 1898 (51,24 inhabitants per km²) without external labour imports [@Nicholls1979]. Urban primacy simultaneously shifted southward: Cap-Haïtien recovered only slowly from its wartime devastation (18.850 in 1789 to 8.200 in 1804 and 29k in 1890), allowing Port-au-Prince (9.400 in 1789 to 61k in 1890) to become the unchallenged national capital alongside regional coffee ports at Gonaïves, Les Cayes, Saint-Marc, Jacmel and Jérémie.

In the French Lesser Antilles, Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin expanded 16,7-fold from 22k in 1650 to 125k in 1750, 228k in 1830, 315k in 1870 and 368k in 1898—reaching 140,14 inhabitants per km², the second-highest regional density in the Caribbean after Barbados and the Windwards. Following 1848 emancipation, colonial credit banks in Martinique and Guadeloupe sustained sugar processing through centralised steam factories while rural freedpeople moved vigorously into coastal towns and smallholdings, elevating Saint-Pierre (25.382 in 1894), Fort-de-France (17.274), Pointe-à-Pitre (17.242), Le Lamentin, Le Moule and Basse-Terre (9.480) into tightly knit administrative and commercial hubs [@Pluskota2020Freedom; @Festre2018Colonial].

## Dutch, Danish and Trinidadian Commercial Frontiers

The Dutch and Danish Antilles combined with Trinidad and Tobago expanded 19,7-fold from 18k in 1650 to 48k in 1750, 118k in 1834, 212k in 1871 and 355k in 1898 (58,03 inhabitants per km²). Within this heterogeneous cluster, two divergent trajectories played out. First, the mercantile Dutch islands (Curaçao, Aruba, Bonaire, Sint Eustatius, Saba and Sint Maarten) and the Danish Virgin Islands (St Thomas, St Croix and St John) peaked commercially in the late eighteenth and mid-nineteenth centuries as free-port entrepôts and maritime slave markets before steam navigation and continental independence diminished transshipment profits [@Metzlar2024Unravelling; @DanishWestIndies1912; @Surowitzisrael2025Caribbean]. Willemstad reached 14,8k by 1890 and Charlotte Amalie peaked at 11.764 in 1880 before sliding to 9.455 in 1890, while rural St Croix contracted modestly after 1848 emancipation. Second, Trinidad surged explosively after the 1783 *Cédula de Población* and British annexation in 1797, propelled by French-Creole migration, late slave transfers and post-1845 Indian indentured arrivals; Port of Spain multiplied nearly twenty-threefold from 1.480 in 1777 to 33.782 in 1891, accompanied by the southern sugar port of San Fernando as Trinidad and Tobago crossed 218.381 inhabitants [@EngermanHigman1997; @Higman1984].

## Spanish Greater Antilles: Second Slavery and Late-Colonial Surge

In demographic volume, the nineteenth century belonged unmistakably to the Spanish Caribbean. Spanish Cuba multiplied 44,9-fold from 35k in 1650 to 171.620 in 1774, 572.383 in 1817, 1.396.530 in 1861 and a colonial zenith of 1.631.687 in 1887 before the 1895 to 1898 independence war reduced the island to 1.572.797 (14,81 inhabitants per km² across 106.195 km²) [@USWarDeptCuba1900; @Burchardt2021Post]. Crucially, Cuba's nineteenth-century expansion combined massive African slave imports (over 700k arrivals after 1790, predominantly into the western Matanzas-Cárdenas-Cienfuegos sugar plain) with substantial free Spanish immigration, keeping people of European descent near a majority while creating dense urban corridors anchored by La Habana (235.981 in 1898), Santiago de Cuba (43.090), Matanzas (36.374), Puerto Príncipe/Camagüey (30.685 in 1861), Cienfuegos (30.038 in 1898, founded only in 1819 by French-Louisiana colonists), Cárdenas (23.680 in 1887), Sancti Spíritus (17.500), Guanabacoa (16.402) and Trinidad (15.655) [@USWarDeptCuba1900; @EltisRichardson2010].

Puerto Rico recorded the second-fastest proportional growth in the entire Caribbean after Jamaica, multiplying 68,1-fold from 14k in 1650 to 44.883 in 1765, 220.892 in 1815, 583.308 in 1860, 798.565 in 1887 and 953.243 in 1898 (111,05 inhabitants per km², surpassing every Greater Antillean neighbour) [@USWarDeptPR1900]. Unlike Cuba, enslaved people never exceeded roughly 11% to 12% of Puerto Rico's population; growth was driven overwhelmingly by high natural fertility among a free Creole peasant population supplemented by Spanish, Corsican and Venezuelan migrants settling the coffee-growing central cordillera and coastal sugar valleys around San Juan (32.048 in 1898), Ponce (27.952), Mayagüez, Arecibo and Aguadilla [@Lazaro2026Height; @Burchardt2021Post]. Spanish Santo Domingo remained far less densely peopled (9,51 inhabitants per km² in 1898), climbing from 22k in 1650 to 125k in 1789, slumping during the revolutionary wars and Haitian unification era (1822 to 1844) and rebounding to 480k by 1898 around Santo Domingo (18.626 in 1893), Santiago de los Caballeros and emerging eastern sugar towns [@LiviBacci2003; @Geggus2020Impact].

## Urban Hierarchy and Port Primacy Across the Archipelago

Unlike continental empires organised around a single inland capital, the colonial Caribbean functioned as a fragmented maritime archipelago of competing imperial export harbours. Figure \ref{fig:caribbean-hierarchy} and Table \ref{tab:top20-ports} reveal how that imperial fragmentation shaped the regional urban system across all 143 catalogued towns.

<figure class="crd-figure-block" id="fig:caribbean-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-colonial-caribbean-plantation/colonial_caribbean_plantation_urban_hierarchy.png" alt="fig:caribbean-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Twelve largest plantation-era Caribbean settlements at peak recorded population (Panel A) and rank-size power-law fit across 143 catalogued settlements ($\alpha = 0,75$, $R^2 = 0,98$, Panel B), 1650 to 1898.</figcaption>
</figure>

Across the upper half of the urban system (71 fitted towns out of 143 catalogued), the rank-size distribution fits a remarkably tight power law ($\alpha = 0,7494 \approx 0,75$, $R^2 = 0,977 \approx 0,98$). That sub-unitary Zipf exponent ($\alpha = 0,75$ rather than $\alpha \ge 1$) is the mathematical signature of a multi-imperial archipelago: while La Habana towered over every rival at 235.981 inhabitants in 1898—nearly four times the size of second-ranked Port-au-Prince (61k) and five times third-ranked Kingston (46.542)—ranks 2 through 15 form a tightly packed plateau of competing national and colonial port capitals between 18,6k and 61k spanning Haiti, Jamaica, Cuba, Trinidad, Puerto Rico, Martinique, Barbados and the Dominican Republic [@USWarDeptCuba1900; @USWarDeptPR1900; @Pluskota2020Freedom].

<figure class="crd-table-figure" id="tab:top20-ports">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Port or Town</th><th class="crd-th">Territory</th><th class="crd-th">Imperial Cluster</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">La Habana</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1898</td><td class="crd-td">235.981</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Port-au-Prince</td><td class="crd-td">Haiti</td><td class="crd-td">French Saint-Domingue and Haiti</td><td class="crd-td">1890</td><td class="crd-td">61.000</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Kingston</td><td class="crd-td">Jamaica</td><td class="crd-td">British Jamaica and Cayman Islands</td><td class="crd-td">1891</td><td class="crd-td">46.542</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Santiago de Cuba</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1898</td><td class="crd-td">43.090</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Matanzas</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1898</td><td class="crd-td">36.374</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Port of Spain</td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">Dutch and Danish Antilles and Trinidad-Tobago</td><td class="crd-td">1891</td><td class="crd-td">33.782</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">San Juan Puerto Rico</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Spanish Puerto Rico</td><td class="crd-td">1898</td><td class="crd-td">32.048</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Puerto Príncipe Camagüey</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1861</td><td class="crd-td">30.685</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Cienfuegos</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1898</td><td class="crd-td">30.038</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Cap-Haïtien</td><td class="crd-td">Haiti</td><td class="crd-td">French Saint-Domingue and Haiti</td><td class="crd-td">1890</td><td class="crd-td">29.000</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Ponce</td><td class="crd-td">Puerto Rico</td><td class="crd-td">Spanish Puerto Rico</td><td class="crd-td">1898</td><td class="crd-td">27.952</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Saint-Pierre Martinique</td><td class="crd-td">Martinique</td><td class="crd-td">French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</td><td class="crd-td">1894</td><td class="crd-td">25.382</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Cárdenas</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1887</td><td class="crd-td">23.680</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Bridgetown</td><td class="crd-td">Barbados</td><td class="crd-td">British Barbados and Windward Islands</td><td class="crd-td">1871</td><td class="crd-td">21.384</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Santo Domingo</td><td class="crd-td">Dominican Republic</td><td class="crd-td">Spanish Santo Domingo</td><td class="crd-td">1893</td><td class="crd-td">18.626</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Sancti Spíritus</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1887</td><td class="crd-td">17.500</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Fort-de-France</td><td class="crd-td">Martinique</td><td class="crd-td">French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</td><td class="crd-td">1894</td><td class="crd-td">17.274</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Pointe-à-Pitre</td><td class="crd-td">Guadeloupe</td><td class="crd-td">French Guadeloupe, Martinique, Saint-Barthélemy and Saint-Martin</td><td class="crd-td">1894</td><td class="crd-td">17.242</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Guanabacoa</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1861</td><td class="crd-td">16.402</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Trinidad Cuba</td><td class="crd-td">Cuba</td><td class="crd-td">Spanish Cuba</td><td class="crd-td">1861</td><td class="crd-td">15.655</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twenty largest colonial Caribbean ports and towns by peak recorded population, 1650 to 1898 (across 143 catalogued settlements).</figcaption>
</figure>

Cuba alone accounts for nine of the top twenty Caribbean towns (La Habana, Santiago de Cuba, Matanzas, Puerto Príncipe/Camagüey, Cienfuegos, Cárdenas, Sancti Spíritus, Guanabacoa and Trinidad), reflecting the sheer scale of its nineteenth-century railway-and-sugar urban network. Yet every major imperial sphere contributed at least one premier maritime entrepôt: Port-au-Prince (61k) and Cap-Haïtien (29k) in Haiti, Kingston (46.542) and Bridgetown (21.384) in the British West Indies, Port of Spain (33.782) in Trinidad, San Juan (32.048) and Ponce (27.952) in Puerto Rico, Saint-Pierre (25.382), Fort-de-France (17.274) and Pointe-à-Pitre (17.242) in the French Antilles, Santo Domingo (18.626) in the Dominican Republic, Willemstad (14.800) in the Dutch Antilles and Charlotte Amalie (11.764) in the Danish Virgin Islands [@Higman1984; @MoreauStMery1797; @DanishWestIndies1912].

# Limitations

Five evidentiary and structural caveats govern the quantitative reconstruction of colonial Caribbean demography between 1650 and 1898.

First, seventeenth-century and early eighteenth-century enumerations prior to the 1765 Puerto Rico, 1774 Cuba and 1789 Saint-Domingue censuses relied on militia musters, poll-tax rolls and parish hearth lists rather than universal house-to-house counts [@MoreauStMery1797; @USWarDeptCuba1900; @USWarDeptPR1900]. Planters routinely under-reported enslaved persons to evade capitation taxes, while free squatters (*jíbaros*, *monteros*), coastal fishermen and self-liberated Maroons in the interiors of Jamaica, Hispaniola and Dominica escaped colonial registers altogether. Pre-1750 island figures therefore carry uncertainty bounds of roughly $\pm 15\%$ to $\pm 25\%$.

Second, revolutionary warfare and archival destruction created severe statistical gaps in Hispaniola between 1791 and 1850. While Moreau de Saint-Méry's 1789 provincial totals and Dessalines's 1805 count bracket the Haitian Revolution cleanly, Haiti conducted no reliable national census during the nineteenth century, forcing mid- and late-century totals (including our 1898 figure of 1,25M) to rely on ecclesiastical parish estimates, fiscal projections and retrospective demographic models [@Geggus1997; @Nicholls1979; @Geggus2020Impact]. Comparable wartime under-enumeration affects eastern Cuba during the Ten Years' War (1868 to 1878) and the 1895 to 1898 War of Independence [@USWarDeptCuba1900].

Third, as demonstrated quantitatively in Table \ref{tab:raster-vs-census}, global 5-arcminute historical population rasters (HYDE 3.5 and KK10) exhibit severe geometric bias across small islands: coastal pixel rasterisation inflates apparent land area by 44,85% while undercounting small-island populations by factors of 15x to 64x. Gridded maps and trajectories should therefore be read strictly as coarse continental-scale priors, with all analytical inference anchored to the terrestrial census-calibrated tables and colonial sub-administrative benchmarks.

Fourth, urban boundary definitions varied across empires. Spanish *ayuntamientos* and French *communes* frequently bundled rural cane parishes around a compact port core, whereas British West Indian censuses distinguished town wards tightly from surrounding rural parishes [@Pluskota2020Freedom; @Higman1984]. Although every effort was made to harmonise the 143 gazetteer entries to city-proper urban cores (with 0 suburban agglomerations included), modest definitional variance persists between Spanish *municipios* and British town parishes.

Fifth, seasonal and transient populations—garrison troops, naval crews, European merchant mariners, newly disembarked African captives awaiting auction and nineteenth-century inter-island migrant labourers moving between Barbados, Jamaica, Trinidad and Panama—created sharp short-term swings in port populations that decennial censuses capture only as static snapshots [@EltisRichardson2010; @Nelson2006Landscape].

# Conclusion

Between 1650 and 1898, imperial sugar capitalism, transatlantic slavery, revolutionary emancipation and post-slavery migration remade the Caribbean more thoroughly than almost any other macro-region on earth. Across 221.996 km² of island territory, total population surged 31,67-fold from 198,2k in 1650 to 6,28M in 1898, lifting mean terrestrial density from 0,89 to 28,28 inhabitants per km² and pushing mature Lesser Antillean sugar islands past 140 to 162 inhabitants per km² [@EngermanHigman1997; @Higman1984].

That expansion unfolded in three interlocking historical acts. First, the seventeenth-century Barbados Sugar Revolution and its spread to Jamaica, the Leewards, Martinique and Guadeloupe replaced small European yeoman frontiers with African-majority plantation societies trapped in chronic natural decrease. Second, French Saint-Domingue pushed that extractive demographic engine to its outer limit at 519,5k to 523,8k inhabitants in 1789 before the Haitian Revolution shattered slavery on western Hispaniola, cost more than 150k lives and launched independent Haiti onto a peasant trajectory of natural increase while driving displaced planters, capital and slave ships into Cuba, Puerto Rico and Trinidad [@MoreauStMery1797; @Geggus2020Impact; @Nicholls1979]. Third, staggered abolitions from Britain in 1834 to 1838 through Cuba in 1886 dismantled chattel gang labour across the archipelago, unlocking sustained natural population growth supplemented by Asian indentured and European immigration and producing a multi-polar maritime urban hierarchy ($\alpha = 0,75$, $R^2 = 0,98$) led by La Habana, Port-au-Prince, Kingston, Santiago de Cuba, Matanzas, Port of Spain and San Juan [@USWarDeptCuba1900; @USWarDeptPR1900; @Roberts1957]. By 1898, the demographic foundations of the modern Caribbean were fully set.

# Appendix

## Territorial Breakdown of the 143 Catalogued Settlements

Table \ref{tab:territory-counts} summarises the distribution of all 143 catalogued colonial Caribbean ports and towns across 29 modern Caribbean and North Atlantic jurisdictions, illustrating balanced archival coverage from Cuba (31 towns) and Puerto Rico (19) down to single-port coral and volcanic islands such as Anguilla, Aruba, Curaçao, Montserrat and the British Virgin Islands.

<figure class="crd-table-figure" id="tab:territory-counts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory or Jurisdiction</th><th class="crd-th">Catalogued Towns</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cuba</strong></td><td class="crd-td">31</td><td class="crd-td">21,7%</td></tr>
<tr><td class="crd-td"><strong>Puerto Rico</strong></td><td class="crd-td">19</td><td class="crd-td">13,3%</td></tr>
<tr><td class="crd-td"><strong>Jamaica</strong></td><td class="crd-td">13</td><td class="crd-td">9,1%</td></tr>
<tr><td class="crd-td"><strong>Dominican Republic</strong></td><td class="crd-td">12</td><td class="crd-td">8,4%</td></tr>
<tr><td class="crd-td"><strong>Haiti</strong></td><td class="crd-td">11</td><td class="crd-td">7,7%</td></tr>
<tr><td class="crd-td"><strong>Guadeloupe</strong></td><td class="crd-td">6</td><td class="crd-td">4,2%</td></tr>
<tr><td class="crd-td"><strong>Trinidad and Tobago</strong></td><td class="crd-td">5</td><td class="crd-td">3,5%</td></tr>
<tr><td class="crd-td"><strong>Martinique</strong></td><td class="crd-td">5</td><td class="crd-td">3,5%</td></tr>
<tr><td class="crd-td"><strong>Barbados</strong></td><td class="crd-td">4</td><td class="crd-td">2,8%</td></tr>
<tr><td class="crd-td"><strong>The Bahamas</strong></td><td class="crd-td">4</td><td class="crd-td">2,8%</td></tr>
<tr><td class="crd-td"><strong>United States Virgin Islands</strong></td><td class="crd-td">3</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Netherlands</strong></td><td class="crd-td">3</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Saint Lucia</strong></td><td class="crd-td">3</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Grenada</strong></td><td class="crd-td">3</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Antigua and Barbuda</strong></td><td class="crd-td">2</td><td class="crd-td">1,4%</td></tr>
<tr><td class="crd-td"><strong>Saint Kitts and Nevis</strong></td><td class="crd-td">2</td><td class="crd-td">1,4%</td></tr>
<tr><td class="crd-td"><strong>Remaining 13 island territories</strong></td><td class="crd-td">17</td><td class="crd-td">11,9%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of 143 catalogued plantation-era Caribbean ports and towns across 29 modern island jurisdictions, 1650 to 1898.</figcaption>
</figure>

## Source Saturation Audit Across Four Ingestion Waves

Table \ref{tab:saturation-waves} reports the four sequential ingestion waves logged in the chapter source ledger, confirming monotonic convergence to a 0,7% marginal gain and 0% crowd-sourced fallback across all 143 included settlements and 6 deduplicated aliases.

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Added</th><th class="crd-th">Cumulative</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Official colonial censuses and archival registers</td><td class="crd-td">131</td><td class="crd-td">131</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Peer-reviewed demographic papers and monographs</td><td class="crd-td">9</td><td class="crd-td">140</td><td class="crd-td">6,87%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal census and historical survey backfill</td><td class="crd-td">2</td><td class="crd-td">142</td><td class="crd-td">1,43%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional gap audit and continuity sweep</td><td class="crd-td">1</td><td class="crd-td">143</td><td class="crd-td">0,7%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Sequential ingestion waves and marginal saturation gain across 143 catalogued settlements (149 candidates evaluated; 6 duplicate aliases consolidated).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. Terrestrial land area (221.996 km²) sums the nine vector sub-regional polygons in the chapter configuration, whereas the coarse 5-arcminute coastal raster mask spans 321.569,9 km² (3.995 pixels) due to partial-land coastal pixels across narrow Lesser Antillean volcanic arcs and Bahamian coral cays. All historical population densities in the narrative and in Table \ref{tab:subregion-trajectories} use terrestrial land area.
2. Saint-Domingue's 1789 provincial breakdown (Province du Nord 195k, Province de l'Ouest 194k, Province du Sud 130,5k; sum 519,5k) follows Moreau de Saint-Méry (1797) and Geggus (1997); the slightly higher colony benchmark of 523.803 incorporates military garrisons, maritime transients and border parishes enumerated in late-1789 colonial returns.
3. Bermuda's 1699 baseline of 5,9k inhabitants reflects Governor Samuel Day's colonial return prior to the eighteenth-century maritime shift from St. George's to Hamilton; nineteenth-century Bermudian totals anchor to the 1843 to 1891 colonial census series (15.013 in 1891).
4. Six duplicate candidate records within 25 km buffers—variant entries for La Habana, Bayamo, Guanabacoa, Santa Clara, Matanzas and Concepción de la Vega—were consolidated into their canonical town records during spatial deduplication, leaving 143 city-proper settlements with 0% crowd-sourced fallback.
