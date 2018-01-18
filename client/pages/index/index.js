//index.js
var qcloud      = require('../../vendor/wafer2-client-sdk/index')
var config      = require('../../config')
var util        = require('../../utils/util.js')
var WxSearch    = require('../../wxSearch/wxSearch.js')
var app = getApp();

Page( {
    data: {
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=",
        banner: {
            itemImgs: [ {
                    id: 111,
                    src: "../../imgs/banners/0.jpg"
                }, {
                    id: 222,
                    src: "../../imgs/banners/1.jpg"
                }, {
                    id: 333,
                    src: "../../imgs/banners/2.jpg"
                }
            ],
            indicatorDots: true,
            indicatorColor: "rgba(255, 255, 255, .5)",
            indicatorActiveColor: "#FFFFFF",
            autoplay: false,
            interval: 5000,
            duration: 500,
            circular: true
        },
        category: [ {
                id: 0,
                title: '会员资格',
                icon: ''
            }, {
                id: 1,
                title: '1月会免',
                icon: ''
            }, {
                id: 2,
                title: 'X1X强化',
                icon: ''
            }, {
                id: 3,
                title: '中文游戏',
                icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAAEH5aXCAAAAAXNSR0IArs4c6QAAJExJREFUeAHtfQuwZVV55trnnPvs7tsPmm66iUCjjk6lo4IPIhqIMKNEBSmZOBoTTUWMGLWoUhNBxSgJARW0pojKiKTMU6MjWjiFMQlizJjRmJGJQRNFEfHR0DT0+77vOfm///+/f++99jn33NvdQKqS1X3OWut/fP9jPfbj7HNukaQ8LqWx09P4dEpFC/2UeqmQfz1pFdqz1o9T95Yvp7kXFVB4ZrFmtqciKpEKkYQYiwE4RarOOa2109YFphRWotnriUWvS4YojRetFhmTG3tpeq/gwpTYgpOK02rVADqTrbayX/mXh9L205dU6OrjN4i4hOdWVV2BhCD/WxMSOxQ/ed4GVfjca9ZoH/QJESR/omhre1xoxXvGjxcgiUqRVM+y4FaUkvHDkiEDHZZb6YJP7dN2acl46Bc3rdkuSfJ0Ap1NaZsBy6JadL5kD9mS7HiuoKPZDG3063zLnkBiADU1BdTRQvakJaA6XhV++4ntsdNP7Yw9YUSERlpF6ghzVGIaEeERaesL/Qof8OmL63f0bEDRQzFb1kZsNjPQv33f3W1Vem4au2Njaj0lhLRBl5mb3sIn0uxo8cvFJCCVWgteSJ4oZcMw+K1JyYiOQVtGWnxm//f3Tku/Hf1J5xeXdtarBfpq+QK6emvocMBj6QAd5bI9e7W+7e0T6Wv/czwElIg31zcF6TxwZzsdv3Mp3fnhSXFRBHy9Mmm0YBMzYMoGBNZs66bp+9olEThwiS8GjP6zrpBt4f6R4IEGvkzIbQDDbJCCNw87aAi45HsMlbWuTkNAERQg5pbQRMF9BN8MSMPs1FLr/A4GSwU8z9rBGw04gVlqb2x3Wk/ujJ89IgHpTBWzqDsiWKcZX3H+e5roERDDrm3EgGhZ2AdTyCFn3XAo6C7/7bR0ZfGiYuKOTZzdhl5RkyyLVpDRcoJWAKJFaZWCNGX6nRNbnaeYgktFxwHUAhFgsZUuvG4mffqN4zHkCqly8tZHv3hTZ4PIQMyKLj/pXrFnX7r/m6304bPXkaGOxoQSsCv27E+H9xTpfU+corpOFdpBDWwbdaeq79Jef2pXlbb+dFdmrlAxY1VcmnBWub107fEblTDh+xr1k2xh2jZC6mDKx6iLMkBe9Xd70we3blaoNz+wJ31A2pBHgQED6KVnvnU6PfmSmXTDSSYLPp0IeXGgeP/4FvHdVFVAeuqHIpWghpzSGb97MO140Wz62M8A2D0epn/D5AmM3lwkGtySgkyiwIFqAd2WqgugUhn3zoUhp2td+Q5istKxsFwRAEJTiwaCFKOF92H6MvCyP9Bd1TEQhdAmIKTACPsyjuVUFd4Q/Y4csBY6RQ/HLyC5cjmb9IgodMV3W2ZW3qmDWNiGwcpshL6y/loOhIKuRpgV1CD5ziqCQpD/uoFJA3SuKZE0YUipjIhW9NHUsjONXvX41Hr9aCqmzBzN0hCjcWeoKDVnJ0gAPJzSj+9IC6/4cVr8AmnppbJBokPwcAdElHBP2iIUctZVYIgFnfJC+3iaKfSIDh+ZFkoqTfNr3gGgWjwbSlpOfy6lfTLwnjFNorSxRShNs25cFZE3N6pVmXSzPUB/JKUNLT3YiABOl3jQYc0DUvDk6Hb1Dw5XDlR2UOoM0S9e21onp1hwpvQU7ZOevpju/RrPAyBQiVCapuPB9dE3eQuyZSd7dY8QwSV/MW3RSZvRjghYeXhtpVEJeZA+5DQDot9CaviqKsAHTRfSKIKjFSXQ161P6Z33HwxdYFT1YYD6xWUjG2UcfeeV+rIH9gG/VuxqQnNii1GMoJxy9kK6529GRKvUt0lTU0/F28UIEgw1HvXevPuhkLp2yybjCUVlwMH0QoExm2o1/ZqcyMjsKsfD8mj6B39k50mY4kiX1tLWFKAvM+20X56LMVIZTSnSb3LUK64a2+xueaBt6S7Bl5Qmtiyl6d1t9RJ9CJqXlp7fuN+OmuChMALThrxp9L/OMp3ynehC4RleyVSipa5GLDsdzArdmsU8d1i6FNjInHdGN/XSnA6ZjyMYkiYbHp8AHhL1dUxGRcLyKHM72vW8kn7ex/bpOKgOxkYMDNMv9BhPkwzBI61OIidpZROKI1BGWY6KSVO/g9kCGyx6IJIOd1Zh24yVWmHdIdDtwsWGdzn9DuaOKUTaBc2RyZCTtdIS54zB6iiowcH6HeTTfISQuCn/VUdybYsTfYnWgXAlzBkGeSPb+yB9mV2uDccEuDyemKf6Tkd8dTdoFB2gL2PCi3kYQ8JtpZe2/aQBBDGm3tOo+lfhD9D3dQJpeemgcv4bCXRNl3c1QRqREKADJRodoN/BHlSWqqeiDn0AOZbWFAYwBFag72OiLuiQ9GSE1TEhlYMtgOILdwQ9RRUhDrtwxLToqUxd/8/m9l8DH/vc5aC7rA0EPc4scgbRQBfw7lm8K0KFC9PET0ZT2maekeopky5Moahn1tR3nbraMg75w+UNRIdEmpSvtiCR84n/lbRwzg/S4u0mI+8XpcmfjBUIwAvGs1p0jIRAMpEoRz51cvqwPvVYU5594g+w/9k0c3zndDnNXtsqNAjq2/UT/DZNZoSrNJejvZDnpHbDMUfdIfpDvbDnjOiv0P6L05oHil8p1uyXHdKuwksPaeOoagxce6SXFhckFS3zstflcAKaITntKOzLNXwxxQxw9jOzjKLkk1Kv9XAgpFxO/ZIgrn3woO4gB+4r0i2XjaV/ukXPKqChQKWe9Y/EfvH6jly4xZCag0yM9Zrv7/jhgXTlY8pbKSHBZK8Ub7XyYajZsGssApKf90mX+hf/4HAanUzpZLmp/5M7mNmKAJq5ftZnot4p95d2faOVbjx3rWy5FaFKM0Me2NUDSWwKnLIufv7102l0bU9Ox3sy1+VYIn7vOHtRua/+q8Pp+3/TSd0FOWfWV5F+9JVO+tqNY3oQg1DgOl74F42UvnbDeHrSixfTt24eDT0XH6xPAa+RmOKtel1CSibh3ae9djadc+VMf6ZQP/z0qbTvHl5XCoGOMjGMiHOYdCLm8qSzzvnsk49Afhtn51FMIhaN00E98YyF9JLPHgxJNt7nF2DsoyYgt23i0X7Jr2qhPdg+uLletd/ixZdewAlOR15xoSbAvIhjEH/4jI3p+q3HpS+9TRaKlNf+8167yJCs4xwUL1wf6zUy8RwHNvTl/dd8c2+alL3mOLk1Ncx+3U+/sHQ88Iqr5UKR219so+pi+XbSufPp3tvk5CWmiPN81bblztLijICRz9Xc6FPP6l/6+4fS1MnddMMJxythkH3XGmgfI1NcKx/65VMgFKNhQ87BpTzZnDrsk086Ahw/rptm99hpMOmD5Ekv6+H29WqhoRAZJYdAWT/kqufpkOHsNford92vil9927r0L38gU5JsjhhhZcppCVwyhtsvPjCxtTK1TJH4HGouwpzOqUS79JB0ugGck14wm35464T7yUhozxwlTm5nJfb1mpqCdoFI81LjCqNfoSXy9EYlOpR3R0OuSLtunZSNwEvQGZBnPHAoRzwqkp6NkOj5AdEzkg9t6GWKGW6ZScoRzwTDb9drjjTlXZ+Aq7CfXYdmHjIw+pclMA7FHLlMjgGEX+TTDAXYb9SuQL1l7NfPtUKQmhlyTh7kCGeE4/E0iuJhZmCickPuR04moLBtarlcbIsVgWooOQ4dogz5pBOGfcrF8cgZpR4JpISGNnJqFdcWe0hEQxUpSIfKbbNu4KjpYTYaq7bf2d/r/nhz0T6xGjIDoLuEjyniDMpFoDkdN/ekcHEPwnG12DyJS/ogPcrBfvGM8bXnXDV2/G1qMFJLiCOr8yN7ieIucfV7d7B8qTmspVDPG9/wnMvGN32BmaNSZDpCD443jBF+5X4SIASob3WQXe5I7IvJ7s/v+7497UP47evWbb6xddxd64qWPaJFxr/B+o/m9l7zkZm9l9M1zyG7ct0hD8SdktqXymNMT51MvS0y7HJ9aIXCzX6dUsr1p5fWrBW7Jbfjhr0eLkQPHU69u+9LvVun0/yV301propDm+nk1HnOGamjH/tSoJy7RglhF8gdIL/uPtFwJkYO8UyjpJYtSCxnfz6lXZ9OM9uJrkinpdF3PSG130Ei4ehYue+TQ0mvB60FF6dW4Lnaiuk5fsU8PgpHt5BnaDafX0w+oDyuPgoGgBPoCeXIp3xOH9anHmvKs0/8PGLKCX+ul3Z9Kk1v75yXJu/ih4U8ThAnZoIHkA815SI+Gg4GOUbg6T39CjFfG0diX57I2/a4XhqTRyiLDQzQHhUp5zINcw2GXOYw5748/mq+uaekE4fbK8Mr6aZ2pPan0ug7On5L1lPGHGVnfYzErxcYEB2KNUQ5DqUHRvkWz5LJbw6NO7A6+48p2s/HQ8R6OQRVZMRedok0qN8WHbxUV/XresEXvM0nyc09kbn4T2YrdhyfGGr7yO1Ppfap8oGoTCUB7FfKobfUNfqu1Eis42EqdWW3v+6hQ+mQPHqHgKx47UN1tPblQde1OiJY7HjZqHA0yrrMsNHYhzt4sc8aMxAv9HecYY8ArpXHEy7+5LTQ5RM7f3FEj9p+S8IoH69BruqZYjfonNsQrRXXC369j8S/7CMz6eOvtpsPVPUBKZcYDQaDknU8Usta9tPXt6diZKlfCjRbz37dXPrKR0bT4hzBRYZNn2OcQVW8zqjcxJt3wRXINy0vQxG8Foafi5pTI59ipKN+3jvn0guv9oULAHnF1PA+9amHfleCiL4E/LO/Nl/2JRPwIfgiTwzUpLMOXsW+ftoXDAegAusqHzvo0165YOAwrk742ok+k+N0SQCwqmtnaksvvfA9M+mS2w7WnIYt2mVdtV/jhz25ZgcjL+XuZBzxQcuOn5dzUC81PRdwsbgijMnvc6zwK8YLbzicdl5kWO8+eUoDIS7qQfbLqepzmEpI0m+NyIG9SU9T27vpXPlMBB/u4APNlnzQs/2pi2ncP3HbLU87H7q/FR/y9OTzn5svXqPQDJywDJB2YW/bkxfTE89fSBvlweabf830yB+mTzn6Dfl4yg1MnkvhJAVlrTwh/Pp/2q/t5d56ssNesxXfq6m7zAwxw1UMJGdJPihFiVOZ0B+UgipC2Ya+bMCVxSo8m482x6cl4+/ZsjHB0UFlz7+00nu3brS1IljAMwzBlRWIl9IqdPB7EgTpsVkIvWqffOJFP7cjCWjhXCsOTDJGWGChCAF5ve+ETemQfLScl6/L54UfPWtDLM6Bux9s4EVHYQMv0r3fXNxmv6Rbv59eB0I8EMQQK41Um2iYZnnZdtqSjERZKMEpluOVfNdxO7SUyzN11EMiUHjgIx802bWkGxRvuCaBVQbSWdn2tEUdsdCnRcrR0eqqBM/lxjfJhz8PiXsrtU/3HI8Jg74fECvDLnY4BTikO19u1/l7vtnWzw+vl28zdO1TapkistDEMbwoH3M56LJW5ABEOfIv/NjBtG6r6GOxVuyyXeL5VHQZYCkeAsALdhAk5zbrAJBQQXv2uw6nL12+Jn3iHF/UYvhDJx6Xdn21k85402wZQDhTn9v2aJedzgMbp9xvuO/BtPW0xXTC6QtiA/98/kud28f0tRcPwAy+tKNrJLZJUehXPv6sTWnmAdt9lC8ZQPnMBRvSYy+Y04WrhMYUcsGYYiqVevJU7oF7W+nBb3bSzK62BGEFSe1bqE+mw3qlB9DyyVwI5QpUHFYHYl0wEtQHtzMuJ5Gz8vG3fLlvQb6GoKWPXB1xQE/s65OmjYv+kGeOzNNYXM7nZiCzQQv5pMuXWI0h6m09+3VFqboSBI4f3WmZHjgJ61tWbl+eD8CjiabAhEQmCR4MI9As5rWWur0YWcy0nZdMp6kdi+nv3rJO1wHkS3FDOhb2ZY1whoqFfI5XTJrD7kJDTrniIUNkgL20+UkL6dQXz6VtZy6kW5+/Mc0fFHtMTOC7fgO3DHmYfT37DfEw4MBRmcQguaBnjiFHP3WO3NyUcstZ9gU03DZnuIQP/aOw77uWQepeLE1OLU4C4pOO0wsUJpCuka5M8OUc7ZP/eUs6+QLboqlPx3kySZyjsd/3eqT8fD3LXRZA7hADiNrlf3jLhI5V475WCGaNmO4rt++nKJlC4NLVIFgjyNQjwfsxhK5HdgbDES/XVi4wQDHIpX2ZWpgiwakhNf0xuZgi2QhxERONZghKPJxLWDGJY2FfRyTi4GR1M9wW6UjUEYA50lgbLsg5Tz0mgGsq1khEXg99NfbxnFnkhxklHPFJr6xu840pZh2JoKZnPAIj3Qi0w/GhHdJDuoHvgKRLrbuWkzHHKGE1kYLshFwuAIxP/JgygeNAFAg9b+S4oed86uVywtZ7v+WiM02eYnDDpz7lGBcPG5wCvTggmmFOOU4p/CwECvHpJ3HLEXELjbjpn+FX7XfUWHjmAqUECfW6jKw/ve6H3RgQSQY08NQm0DzEMtLgaKOP/frnIxQPQUaYIcbQukLIEyBLJeXj+OBypFONdeCt3L4f2TPDBPSRycKIa2aKkR9m3RH2OWUoX05Z0+RINeRWYb+2/XKuc3uMuUsPwmO66I64ZzFlXH7gWuA25TDc/o/GvqwRsUqkcMAcbIxwBOQRRTzeJ38YPfg0WNfnd55WY9/WSODQwbolApIaI+YMqpPfkOdaoCA3k2F0Ti26xUSVc1MpS3KRWTuO0BHOVdolvZwRxiGf+JSLI7Y7Gn0XDD1G7HTqr9b+3t7Sbtt+6QlrR+Qc5/Eg2HSQmaVn4YlL0tHIvAvmfQKzXqX973UX/p9ds3OoCETH6CjprOkg+16Xmc8i4rabBcDFzYQF3Crtf657+H+05YH+8Sd1xp8NXQDjH0YAL/5jn/eeTNb2NLSDLh3ESH7QJVEqJztLFZdyZX1k9q8+vPtXgZG+sH4HfnOLS4BTNNa0egHBaFjGswTHqRpHpiSocryVemo+jvgUiAHnwJpYX/vvntt7zudn992uD0d/af/3R56zfseCRBDBKGgA0ARrZwTfLYYHJlf6EYLGyLohl+lH3mg2agP4XwsHrkQQINcgL57YePUrxjZeFvL/RhsHet19v9598PE/OXhwD12sBUIiajz+dEoafdNjU/uSMflRjSqPbWQSAMyotaoUtmkm16jz670mWk7BisJGgRolR1di5a2Jb7rlZlOXqPcqQN5s2sspdYT51N33vdS74Z40f518NyoGoYoMjWppycN0vy0P071doOvLpSrl7dx8LlJ3BwmrJ2B4QusWhsnn9nJ/6mjlZMqTkOsN6ud4uVzuTzV+4XW/k7q/e0eaf5foxWeb4ctj5dHMZ6SRv8a+xZPqHFB3ZeycvrdADhttyHubm+8wvm7OwPLdOA/waO3nCcrtDY1HAOiTYtFX1OAdg/glV92v9ub/y/eqX2Z/chq9emfqXBb7j9mzRNEJeMC2OwRSrdB71CiNjBp54PswfU4GH8Dcn9xcDtcYkNzBBoAgMGaNRwToQ78gcoM5Xj8dp93ZW7zmH9P85QWeuj6nGNUH/JeRV1a+ZeTx5DNmtXjVJd1PN7d/rOX72azScvvHOv7benPndp5QtC/lZTYnAxdAnuAmP5tA8BCTSj3ts0CyGQN8nAijRoEfSDL9qSYDbfJQowyTVyH3RdsagLQ8QE52Nx+Lwdl9tqT6Amnow9ZRxC/H7ks7m3vtp7bjPjPQmDU4juM6aH58Vw+k7REgLbitiBpF44U4IFBUwGslENsFKMhaFdxmP334QR+UD2OlP3SgM27frrfHgGjTVaXr7sdkwKSwQufhuJRHOH75rvJTO+uKQr4cwsIWa/WKTIkXMxgJN762pe/um1w/1Rqt7KBFDCjzBBa1FoqyBjGSZ35A/6UfnNOfPvji9SPp2b++kJ5y0WK6fPtaokAJmlGxa7QauJJKwapSae/hil883lK8pr1OdgxL6bA90r2NCno6SJxywbFGjjd0z8eAOyYQ2KZ/GXzYhg+/+Psz6Wkv8yd8RPDuL7fSbdeOprvk9yhY6GskNPM/91cHrjpjCOT1UP8EgDFDhW1uuRmcxlO8VgYkZxxxn84TEZOPNDSljQnO8WMbdb8yVF7wNu3ophf8zlzae2+RDj9YpOe+bT5994vtdNNF9gsO/XAfNhpjRY1yBPEXr5MBGTRjGoiZgUaGcw98NDbJPaZfeNdc+tNXIEn0Gh6zzQhAW640HBBh0qAnP/2+vpt+9tUL6fZr5f5Co9TtDVsxJTZsSKEp7640fouzL0AFFHwx8QZ5st+aq3/PZ3g+o4n4qs8eTqecuZT++GUT6Tt/KY8/exmq30iAKJJGkEo9PMEU5sCwf2T1UP+HwPbT18fByucG7aFKnOf0e0EO9FKezwaDbryyNrnTXjKvgwHfLnw/HqipYld1qm2XkbypH6jlpfa9rvrSz1f6yboqf/57ZtMLr5kxPPFru/w29wZ5BJiyK8cbHj8xq/ZL/GrM1i7eWPulck4/1CgS/XJTUmUGv+GR9zffdSCNrS1l/va6sXT7Nf5lnkFLqhQ/5q1T5Ydqz37LXHrMM+zPY8DAR89fk+79vzj4H9v4G873WxKkubCskPIJXI4mR7A6qtU2+c26PuLnXTVbGwzY/Lk3zaWNP9UdMOOXn3H6yYxgaO2rNWhCr/po7Sbeg9/ppB/9ffXRd3yVx75PdKzjt/wwJ7bKlTZwxct53lvwzRdkSkpjfgijOoDVPXr76Yvpoj86lNbKM+DHunzj4yPpc2+clJ9Pw2mw+QAbsEQf0c9PUxunlZkCY5k6sZt+6VOH0o1nrTMbABN0wzMbSnHbTFA1fuNnp/10DrUKyBtp6LPt/Ib/Yqi4HD/VNqhkAI2MiB4eRD7vuum086X29OggqGH02X1F+ox8lekH8rvX6jgUsoQ2CbmDw6yskp/DN/yp4+UTopHwGHRLec5H3MXb/De9Ad2wjxGTaRUXZpxiqFE4fX0KnXzWQrrgpsNpHH9AY4XlrltH0q2vW5vmDwtmhteAGGI/DyAPuHEhl+Edbfyr97cSM5SR7yvkNwA9vY18ZP427OX503GSm1u/8Z19adz+3E9Dp0r48rsn0levm9CFoPR+gKSJQDNhQvOYoM+2+qGA9bd8gh81ngDSZj/7+QTg5EaNkvuDAdDTXrDxwikp62qbfByQ0LaDlcjjsQXoSY0XeD/31tkVDYaIpjN/cyZNbOjqdy30e7HiKGscrNlGjZf65rW25Y21nk5DRwiDDvr0G3WnI7NRarRRE4f1kcbPPBiO+6x+ea6kTT80PrHN+NRv7YQCAoKCvUzBkqFtyIEHGZXz4D2wKTnAP/3S+s+Czu2Xn8F9+br0wVM2pW/Lb5NWC26mPueqacECjjnG2mw7zfGHnkXJlFPfUeMFH1lXfAf28+W7waddLNdF0gYu42YNHPPBam1XMPrFb/L1BFPP5Jk3qTWP7m8lfv1rCjxGNJaULCHSNJHiUOxrIHA7QS3lvJsOpsedbwf3b39yNN3+5rX6lSllyhv39O1nLKbzbjyQJv0M7RPPXZ92/3+5Dsjx80UNM+JC7HHD5ENYEiAr4swrDqeTz11IY1PdsA3fcJv+i7+5Jn3rT2T79JiVvsr4K+ag3iiM39YN0tfMb/F7+NXShmp/Qp6PqtT2Zy6k/3rDwfT5V61L9/1DeXukKsNc0l4hY3DmOw+lrXIKffML5C9VYWCZZFHM7eX6q+XTl+d95EB6rE+cfXe30seeuYmsZevc3rLCfZi5/xErYkbBAL17TP7kIqcck+EC+QhytfCglCfQUMv3PIBhDq3aXuZv7k/Tvtx83LqUzvvogfQXv7I+zciPsvynl8yltScupa+/X258Znir9qcMXVtN++UkU4F+9t6Lv4E5oDSWmAwcaX1VhnkwhE/sWNK5vSH6fX06CuJQf3LsYf4N4cOePgLvC6bcn8sVpAdG7CQoOBChiRolvxBysuEIXwOS0+BIsLf5dZIGXxDNhhmkFfqnKxSDxBXsbX7gg9/TeN6f70uf+2/yXJ9sxNkEzBeQusscaUAwVCEgbhyMH8n47Xs7DBB7mDpgCcEZjzml7mqKqx6DZ/LGp24kTATwDUMsfRS241uHCiCnWs7n0KFGyfLjBKEaW9SKdNxOuRj9q72pK/cKMSD7v9uWsyPBVBl1UJDMvoJW37IRy7eoRyN+WSGV4gOjUwtkTZhE5glrZCiXhw5p1XY/Wl8+EodMMoFsa3b7+FOkWfnrrdO75A+xyq/OoEydupSe/5mH0o8+P5bu+d/j6fAP8QeQXT+mP/FVpXyjn6wfhfj7fyOBLtIxr3UFCI8rgGKs8xlG+qA6S7cmzmhMIDTLNr7Mrzb0clZ+LeeUhTQhPzL26advTi25xLng/+xJ3/rQmvTtm+zjW2jixUmHnxpBnz85Ik0Eo1XfN/Ieyfg/JH8lFEGi9NtySFsJ38LnLM97MCCvkm3JlWAH2Q9Zn9D5MYu+xQQRudGN3TS/14cgs4cYqkUHdxn7q+XnATbMZ4R++PInSG1vN0elw2eRQGBbaxDq/MaeLwaxr3NiYZy5DyucIZRzfih+GSL0eYBFHSVrL+7DD5uQD3+ZBfhmXZ9/zWNaFt+jEX/t22AWPkJlQPW2zUgEZXyJT+NFHaWfaj+aKAAmH0CjORqT6faUWsGiLNmW8PKsKHxioy9eBTDi7kezuGkDkA9H/NlXWGnFItDTUjFrO6/RwmcVNR5PO12irBCXeu0ktjmCUmvo3s/PwmxJl2dpJbC1cv/yLc3RRdgS3JhQkl2juQOZvzm+WjUobTbtmV/xnuFFLpaJ386yOMWAVDFowA1C2NMprjomAzv0QcnyhvsyRGAbdfClQb4Ryx6nAmqVl8pmqHY1Pt3GrGtbmrTLLcsZ1aoWq9uq0arCaJf+5JyHI/76gDBa1FrgDNMszawb2aE8AiMG9NleKR861cJcsIYDOOhFkth2fxv2XdTZZSyD5IVODPUDhiHrDmTdVcdHbNQoeX6EpFfqahMCquA1+uqLKLv/IFWLLnchxDFF46ns4UPwmlvI8vlo+uOBecJsi0H6jI47AkrTQRRH8yWqcVXiG+JvNXa0H4749Uv3EYBEbEZ8BOrxRnCUzx3ME8BkUH61fMWnD5EA8xG8fA+HKHMOPobGitV97SNml1M8GRTUWurqj0j8dpbl9vMVkq8oDTjct4VjNPM/v9dVj0p6OM1VULtOwEGbB3LI9tc3FLzDTcqgzzbqslTbJVVbw1ZAxn804vdfc6gEUWlGnKTlHmbx2oxE2kLB2xzxukJjyefSuT1NmGChRlktn26wzvGASderbdJye5CpFQgCPBS8TYM14eaWJ+zarZNhcPgeuy1rn+HS021JnaAxOoM+26xBKtto1dyXDnMEbet4rYR6u68/7qOK0xZrYlTrCq/hD8zJi+nsa08kYotT3DI+0waxQlvOnhjSH6WomHTzDkBvKng1cG7Yfh6rg1VxkINV26OX4etNJ0Tvdz40E2h7Rpr49QEtfas5LACDCoAZJGTYdv2sayjOQ+dhiF9uWPe6ct7uKaAx1uKwjqhnxDxa5p16XqOi09Bi2wewsQL6bQlV0/BFc+j4bFNG7YkdZw+bECFIhUYtwI9g/F0pnfmiOLQm2V+UzmegOaxRI535/JH8+pblp5V9EyABcUnzDA41iuUTfC+eyMhLZlHzLW8U62vffSJkKQ17tlZRoyie1+g/2vHPyu/Sd3YvLd59anvkKXAoP2uxoSgTlgew2rMm4NGG2sNgyarglbUtENDAZcK44dkAVnYwTy/kPMGKJ30f8Pygb/EYjlkwG2zTN561PdLx715curvz9aWZWx/fGdUBsSkr7nlC6GjUjRERDoNXIUtMhJnL99uSAhyNTD93CLaIAfF+GQ4MwDkea+rGiK8ED4a8AI42g+Y2tM+217l8bp8YXmMsiselNPbe9Sfdtza1NvTdciRAbjmWsKpHbKMeXhr44qBuY4MSFNGvDL/pQT0j9R5y61uu2kF0FitXXM5/OOM/KD9M81sH7j1BhxJ/EPADxaZvrC9a23SCMf4sguYA5wOSKWQZanAzQhO/DpCJN4arsYDEPdIMqe4vJ0O5xYkUjUCBbdRSmv7V8RoKphbvGVyIy9/93PW63kNPws806TdXDs7PT//53P7rptqd1k+3x86Gg+qk2NP9HYEJLNuo8SINNXr4MIq1taFjuiqrcjiOOM0x1J5qmg3DK3WBgRcKa8UTfaO5P+4vzjHAURmvKc+66b/IV/0B9iMQ/80LB69846Fd52MMEAv8axT8TdA3jK7/06lWe1uD+R+Eo87Age7Sruvn97+cv75WBew7IFUBHGO2jK991s7WyLmntEZ3bkmdkza228dPFu11471iQq7d5flkXsdUNf/9teWMsdtNxdJs0ZuZ7i0d3Lu09MDutHjvPd35O+/sLty2e/bQl/M/XZpn6V8BRYXoUIARZo0AAAAASUVORK5CYII='
            }, {
                id: 4,
                title: '折扣游戏',
                icon: ''
            }, {
                id: 5,
                title: '折扣DLC',
                icon: ''
            }, {
                id: 6,
                title: '免费游戏',
                icon: ''
            }, {
                id: 7,
                title: '免费DLC',
                icon: ''
            }, 

        ]
    },

    // 页面初始化
    onLoad: function () {
        var that = this

        // 搜索栏初始化，初始化的时候渲染wxSearchdata
        WxSearch.init(that, 34, [
                '战争机器4',
                '光环5：守护者',
                '舞力全开2018',
                'ARCADE GAME SERIES: PAC-MAN',
                '光之子',
                '蜡烛人',
                '使命召唤：二战',
                '我的世界 故事模式 第二季',
                '我的世界 故事模式 第一章',
                '光环：士官长合集'
            ]
        );

        // 搜索栏初始化，设置联想词汇
        WxSearch.initMindKeys( [
                '战争机器4',
                '光环5：守护者',
                '舞力全开2018',
                'ARCADE GAME SERIES: PAC-MAN',
                '光之子',
                '蜡烛人',
                '使命召唤：二战',
                '我的世界 故事模式 第二季',
                '我的世界 故事模式 第一章',
                '光环：士官长合集'
            ]
        );

        // 记录日志，函数运行成功
        console.log("page/index/index:",
            util.formatTime(new Date),
            "Function * onLoad * Success.");
    },

    wxSearchFn: function (e) {
        var that = this
        WxSearch.wxSearchAddHisKey(that);
    },

    wxSearchInput: function (e) {
        var that = this
        WxSearch.wxSearchInput(e, that);
        console.log(that.data.wxSearchData);
    },

    wxSerchFocus: function (e) {
        var that = this
        WxSearch.wxSearchFocus(e, that);
    },

    wxSearchBlur: function (e) {
        var that = this
        WxSearch.wxSearchBlur(e, that);
    },

    wxSearchKeyTap: function (e) {
        var that = this
        WxSearch.wxSearchKeyTap(e, that);
    },

    wxSearchDeleteKey: function (e) {
        var that = this
        WxSearch.wxSearchDeleteKey(e, that);
    },

    wxSearchDeleteAll: function (e) {
        var that = this;
        WxSearch.wxSearchDeleteAll(that);
    },

    wxSearchTap: function (e) {
        var that = this
        WxSearch.wxSearchHiddenPancel(that);
    },

    swiperTap: function (e) {
        console.log(e);
    },
    
    // 当swiper轮播图改变时
    swiperCurrentChange: function (e) {
        var thar = this
        console.log(e);
        // 记录日志，记录swiper轮播图当前页的id
        //console.log("page/index/index:",
        //    util.formatTime(new Date),
        //    "Function * onLoad * Success.");
    }

} )
