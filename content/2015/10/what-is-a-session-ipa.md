Title: What Is A Session IPA?
Date: 2015-10-22 13:00
Slug: 2015/10/what-is-a-session-ipa
Author: Jason Hancock
Tags: ipa

What is a "Session IPA?" There isn't a defined BJCP style for it.

> Any beer is a session beer if you try hard enough.
> - Unknown

In general, a session IPA seems to be defined as a scaled down IPA, usually coming in under 4.5% ABV, with around 50-60 IBU and enough mouthfeel to not feel thin or watery.

That's a pretty broad definition. I wanted to see how people were interpreting the style by examining some recipes. Luckily there exist websites with recipe databases that happen to export the recipes in a standardized format called [BeerXML](http://beerxml.com/). I set about writing a web scraper to download as many recipes from the recipe website as I could and ended up downloading about 300k recipes, of which 577 contained the words "session" and "ipa" in the title.

After examining some the downloaded BeerXML documents, I noticed that while they contained the ingredients, they lacked the important statistics like OG, FG, IBU, etc. This meant I needed to write code to calculate these values. Out came my copy of [Designing Great Beers](http://amzn.to/1MGtx70) and [How to Brew](http://amzn.to/1LpS4Q0) and I got to work.

The stats I'm interested in examining are ABV, OG, FG, IBU, IBU:SG, SRM, dry hopping rate, and yeast choice. I also wanted to examine mash temperature, but the files I downloaded lacked this information.

## tl; dr

If you want to make a middle of the road Session IPA, I'd shoot for an ABV between 4.5 and 5%, an OG of around 1.045, an IBU of about 40, a color around 4-5 SRM, use one of US-05, WLP001, or Wyeast 1056 American Ale Yeast, fermented on the cool side, and dry hopped with .4-.5 oz/gallon of hops.

## ABV

Expectation: I expect to see a lot of beers in the 4.0-4.5% ABV range.

```
min:                1.98
max:                10.23
mean:               4.61544194107452
median:             4.60
standard deviation: 0.944591064062817
sample size:        577
```

Looking at the distribution:

```
 2.0:  ▇   2
 2.2:  ▇   2
 2.4:  ▇   2
 2.5:  ▇▇   3
 2.6:  ▇   2
 2.8:  ▇▇▇   4
 2.9:  ▇▇▇▇▇   6
 3.0:  ▇▇▇▇   5
 3.1:  |   1
 3.2:  ▇▇   3
 3.3:  ▇▇▇▇▇▇▇▇▇  11
 3.4:  ▇▇▇▇▇▇▇▇▇  11
 3.5:  ▇▇▇▇▇▇▇▇  10
 3.6:  ▇▇▇▇▇▇▇▇▇  11
 3.7:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇  17
 3.8:  ▇▇▇▇▇▇▇▇▇▇▇▇▇  15
 3.9:  ▇▇▇▇▇   6
 4.0:  ▇▇▇▇▇▇▇▇▇  11
 4.1:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  27
 4.2:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  49
 4.3:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇  17
 4.4:  ▇▇▇▇▇▇   7
 4.5:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  57
 4.6:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  37
 4.7:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  36
 4.8:  ▇▇▇▇▇▇▇▇  10
 4.9:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  26
 5.0:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  50
 5.1:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  21
 5.2:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  20
 5.3:  ▇▇▇   4
 5.4:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇  16
 5.5:  ▇▇▇▇▇▇▇▇  10
 5.6:  ▇▇▇▇▇▇   7
 5.7:  ▇▇▇▇▇▇   7
 5.8:  ▇▇▇▇▇▇▇▇▇▇▇▇  14
 5.9:  ▇▇▇▇▇▇▇   8
 6.0:  ▇▇   3
 6.2:  ▇▇▇   4
 6.3:  ▇▇▇   4
 6.4:  |   1
 6.5:  |   1
 6.6:  ▇   2
 6.7:  ▇▇▇▇   5
 6.8:  |   1
 7.0:  |   1
 7.1:  |   1
 7.2:  ▇   2
 7.8:  |   1
 7.9:  |   1
 8.3:  |   1
 8.4:  |   1
 8.5:  |   1
 8.9:  |   1
10.2:  |   1
```

Conclusion: It surprised me to see that the curve is shifted up towards the 4.5-5.5% ABV range. That while we might think of session beers as being those beers less than 4.5%, in the case of a Session IPA, it's okay to encroach on Pale Ale territory and come in up to around 5.5%.

## OG

Expectation: I expect to see values in the 1.040 range.

```
min:                1.018
max:                1.091
mean:               1.04572963604853
median:             1.045
standard deviation: 0.00906360847820521
sample size:        577
```

Let's look at the distribution of values:

```
1.018:  ▇   1
1.020:  ▇   1
1.021:  ▇▇   2
1.022:  ▇   1
1.024:  ▇   1
1.026:  ▇▇   2
1.027:  ▇▇▇   3
1.028:  ▇▇▇▇▇   5
1.029:  ▇▇▇▇▇▇   6
1.030:  ▇▇▇▇   4
1.031:  ▇▇   2
1.032:  ▇▇▇▇▇▇▇▇▇▇▇▇  11
1.033:  ▇▇▇▇▇▇   6
1.034:  ▇▇▇▇▇▇▇   7
1.035:  ▇▇▇▇▇▇▇▇▇   8
1.036:  ▇▇▇▇▇▇▇▇▇▇   9
1.037:  ▇▇▇▇▇▇▇▇▇▇   9
1.038:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  19
1.039:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  20
1.040:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  17
1.041:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  21
1.042:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  32
1.043:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  27
1.044:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  35
1.045:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  44
1.046:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  34
1.047:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  30
1.048:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  37
1.049:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  27
1.050:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  27
1.051:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  18
1.052:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  21
1.053:  ▇▇▇▇▇▇▇▇▇▇▇▇▇  12
1.054:  ▇▇▇▇   4
1.055:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  16
1.056:  ▇▇▇▇▇▇▇▇▇   8
1.057:  ▇▇▇▇▇▇▇   7
1.058:  ▇▇▇▇▇▇▇▇▇   8
1.059:  ▇▇▇▇   4
1.060:  ▇▇   2
1.061:  ▇▇▇▇▇   5
1.062:  ▇▇   2
1.063:  ▇▇▇   3
1.064:  ▇▇▇   3
1.065:  ▇   1
1.066:  ▇   1
1.067:  ▇   1
1.068:  ▇▇   2
1.069:  ▇   1
1.070:  ▇   1
1.072:  ▇▇   2
1.074:  ▇   1
1.079:  ▇▇   2
1.082:  ▇   1
1.084:  ▇   1
1.090:  ▇   1
1.091:  ▇   1
```

Conclusion: I'm honestly a bit surprised to see such a high median and mean value for the OG. A slightly higher OG than expected is okay, just keep it reasonable so as not to blow your ABV out of the water.

## FG

Expectation: I expected to see final gravities in the low teens, not quite as dry as an American IPA, to help balance mouthfeel.

```
min:                1.002
max:                1.025
mean:               1.0106273830156
median:             1.011
standard deviation: 0.00321424977917582
sample size:        577
```

The distribution of values:

```
1.002:  |   1
1.003:  |   1
1.004:  ▇▇▇▇   9
1.005:  ▇▇▇▇▇▇  13
1.006:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  46
1.007:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  49
1.008:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  30
1.009:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  47
1.010:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  64
1.011:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  76
1.012:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  95
1.013:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  58
1.014:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  31
1.015:  ▇▇▇▇▇▇▇▇▇▇  20
1.016:  ▇▇▇▇▇▇▇▇  16
1.017:  ▇▇▇▇▇  11
1.018:  ▇   3
1.019:  ▇▇   4
1.021:  ▇   2
1.025:  |   1
```

Conclusion: While there are quite a few recipes with a really dry finish, the values mostly meet my expectation. More on this later when we examine yeast selection.

## IBU

Expectation: Somewhere around 50-60 IBU.

Note: I filtered out any recipes that were not all grain recipes. There are too many variables affecting hop utilization in extract or partial-mash beers (full volume boils vs. smaller boil + top up, etc.) that I felt I couldn't accurately quantify them.

```
min:                0.0
max:                188.4
mean:               46.1848351648352
median:             44.0
standard deviation: 23.0065191566705
sample size:        455
```

And the distribution of values:

```
  0:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  15
  4:  ▇▇   1
  6:  ▇▇▇▇▇   2
  7:  ▇▇   1
  8:  ▇▇▇▇▇▇▇▇▇▇   4
  9:  ▇▇   1
 12:  ▇▇▇▇▇   2
 15:  ▇▇▇▇▇▇▇▇▇▇   4
 16:  ▇▇▇▇▇▇▇▇▇▇   4
 17:  ▇▇   1
 18:  ▇▇▇▇▇▇▇   3
 20:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   6
 21:  ▇▇▇▇▇▇▇   3
 22:  ▇▇▇▇▇   2
 23:  ▇▇▇▇▇   2
 24:  ▇▇▇▇▇   2
 25:  ▇▇▇▇▇▇▇   3
 26:  ▇▇▇▇▇   2
 27:  ▇▇▇▇▇▇▇▇▇▇   4
 28:  ▇▇▇▇▇▇▇▇▇▇▇▇▇   5
 29:  ▇▇▇▇▇▇▇▇▇▇▇▇▇   5
 30:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   7
 31:  ▇▇▇▇▇▇▇▇▇▇▇▇▇   5
 32:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  12
 33:  ▇▇▇▇▇▇▇▇▇▇▇▇▇   5
 34:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  12
 35:  ▇▇▇▇▇▇▇   3
 36:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  11
 37:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   8
 38:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  15
 39:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  10
 40:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  17
 41:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  14
 42:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  19
 43:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   6
 44:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  19
 45:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  13
 46:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   7
 47:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  13
 48:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  12
 49:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  10
 50:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   9
 51:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   7
 52:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  15
 53:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  10
 54:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   7
 55:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  10
 56:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  10
 57:  ▇▇▇▇▇▇▇▇▇▇   4
 58:  ▇▇▇▇▇▇▇   3
 59:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   6
 60:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   6
 61:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   6
 62:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇   7
 63:  ▇▇▇▇▇▇▇▇▇▇   4
 64:  ▇▇▇▇▇▇▇▇▇▇   4
 65:  ▇▇▇▇▇▇▇   3
 66:  ▇▇▇▇▇▇▇▇▇▇   4
 67:  ▇▇▇▇▇   2
 68:  ▇▇▇▇▇▇▇▇▇▇   4
 69:  ▇▇   1
 70:  ▇▇▇▇▇▇▇   3
 72:  ▇▇▇▇▇▇▇   3
 75:  ▇▇   1
 76:  ▇▇   1
 77:  ▇▇▇▇▇▇▇   3
 78:  ▇▇▇▇▇   2
 79:  ▇▇▇▇▇▇▇   3
 81:  ▇▇   1
 82:  ▇▇▇▇▇   2
 83:  ▇▇   1
 86:  ▇▇   1
 87:  ▇▇   1
 89:  ▇▇▇▇▇   2
 92:  ▇▇   1
 93:  ▇▇   1
 95:  ▇▇   1
101:  ▇▇▇▇▇   2
104:  ▇▇   1
106:  ▇▇   1
107:  ▇▇   1
108:  ▇▇▇▇▇   2
112:  ▇▇▇▇▇   2
117:  ▇▇   1
124:  ▇▇   1
130:  ▇▇   1
138:  ▇▇   1
139:  ▇▇   1
162:  ▇▇   1
188:  ▇▇   1
```

Conclusion: I expected to see slightly higher average and median IBU numbers to help differentiate this style from pale ales. I think I'd still shoot for around 50 IBU if brewing a Session IPA.

## IBU:SG

IBU numbers alone are almost meaningless unless you take them in context with the original gravity of the beer and discuss the IBU:SG ratio. If we had a beer with 40 IBUs and an OG of 1.040, the IBU:SG ratio would be 1.

Expectation: This number to not deviate too far from the 1:1 IBU:SG ratio.

```
min:                0.00
max:                7.85
mean:               1.014
median:             0.95
standard deviation: 0.634118973258722
sample size:        455
```

And the distribution:

```
0.0:  ▇▇▇▇▇▇▇▇▇▇▇  15
0.1:  ▇▇▇▇▇   7
0.2:  ▇▇▇   4
0.3:  ▇▇▇▇▇   7
0.4:  ▇▇▇▇▇▇▇▇▇  12
0.5:  ▇▇▇▇▇▇▇   9
0.6:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  22
0.7:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  41
0.8:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  63
0.9:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  56
1.0:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  51
1.1:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  46
1.2:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  34
1.3:  ▇▇▇▇▇▇▇▇▇▇▇▇  16
1.4:  ▇▇▇▇▇▇▇▇▇▇▇▇▇  17
1.5:  ▇▇▇▇▇▇▇▇▇▇  13
1.6:  ▇▇▇▇▇   7
1.7:  ▇▇▇▇   6
1.8:  ▇▇▇   5
1.9:  ▇▇▇   5
2.0:  |   1
2.1:  ▇   2
2.2:  |   1
2.3:  ▇   2
2.4:  ▇▇   3
2.5:  |   1
2.8:  ▇   2
3.1:  |   1
3.7:  ▇   2
4.0:  ▇   2
4.2:  |   1
7.8:  |   1
```

Conclusion: The outliers in the distribution greatly influenced the mean value. Based on the values presented, I would target around .9 IBU:SG

## SRM

Expectation: Pale to golden.

```
min:                2.0
max:                74.6
mean:               6.3107452339688
median:             5.3
standard deviation: 5.02967813257203
sample size:        577
```

The distribution:

```
 2:  ▇▇   6
 3:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  52
 4:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 146
 5:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 105
 6:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 106
 7:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  58
 8:  ▇▇▇▇▇▇▇▇▇▇▇▇  37
 9:  ▇▇▇▇▇▇  20
10:  ▇▇▇▇▇▇  18
11:  ▇   4
12:  |   1
13:  |   1
15:  |   2
16:  |   2
17:  |   1
18:  |   1
20:  |   2
21:  |   1
22:  |   1
25:  |   1
26:  ▇   3
28:  |   1
29:  |   2
30:  ▇   3
33:  |   1
34:  |   1
75:  |   1
```

Conclusion: The data matches my expectation. I would target around 4-5 SRM, however I wouldn't be too critical of color unless it was noticably dark (> 10 SRM).

## Dry Hopping Rate

I wanted to analyze how heavily people were dry-hopping their session IPAs. I only looked at beers that had dry hops added to them (387 beers out of 577 total). Values below are expressed in Oz. of dry hops per gallon of finished beer.

Expectation: Dry hopped with around .5 oz/gallon, about the same as a normal IPA.

```
min:                0.010271278097918
max:                1.7142861670072
mean:               0.404116401832642
median:             0.363636459668194
standard deviation: 0.21358586600742
sample size:        387
```

The distribution:

```
0.0:  |   1
0.1:  ▇▇▇▇  11
0.2:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  77
0.3:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  55
0.4:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 129
0.5:  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  49
0.6:  ▇▇▇▇▇▇▇▇  22
0.7:  ▇▇▇▇▇▇▇▇▇  24
0.8:  ▇▇   7
0.9:  |   2
1.0:  ▇   4
1.2:  ▇   4
1.5:  |   1
```

Conclusion: The data pretty much matches my expectation.

## Yeast Selection

Expectation: Picking a yeast for a Session IPA is an important decision. I would use a yeast with a lower attenuation, something in the range of 65-70%.

The data: I sorted yeasts by how many times they were used. The top 10 results:

| Manufacturer | Name                    | Number of Times Used | Attenuation |
|--------------|-------------------------|----------------------|-------------|
| Fermentis    | Safale US-05            | 170                  | 81%         |
| White Labs   | California Ale Yeast    | 75                   | 73-80%      |
| Wyeast       | American Ale            | 65                   | 73-77%      |
| Wyeast       | American Ale II         | 38                   | 72-76%      |
| White Labs   | Nottingham Ale Yeast    | 23                   | 73-82%      |
| Fermentis    | Safale S-04             | 22                   | 75%         |
| White Labs   | Dry English Ale Yeast   | 17                   | 70-80%      |
| Wyeast       | London ESB Ale          | 13                   | 67-71%      |
| White Labs   | California V Ale Yeast  | 9                    | 70-75%      |
| Wyeast       | Denny's Favorite 50     | 7                    | 74-76%      |

Conclusion: I was honestly a bit surprised to see US-05, White Labs California Ale Yeast, and Wyeast American Ale yeast in the top position since these yeasts are really good attenuators. I probably attribute that to brewers being creatures of habit as there are times where I almost exclusively using California Ale Yeast for months on end. I expected to see the British ale yeasts in higher positions, and expected WLP002 (White Labs English Ale Yeast) to make it into the top 10, but I'm shocked to see WLP007 (White Labs Dry English Ale Yeast) in the top 10.

## Summary

If you want to make a middle of the road Session IPA, I'd shoot for an ABV between 4.5 and 5%, an OG of around 1.045, an IBU of about 40, a color around 4-5 SRM, use one of US-05, WLP001, or Wyeast 1056 American Ale Yeast, fermented on the cool side, and dry hopped with .4-.5 oz/gallon of hops.
