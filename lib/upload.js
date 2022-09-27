// MIT License

// Copyright (c) 2022 Hemanta Gayen

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function animation() {
    const A13b7c4 = [
        ' %c',
        'load',
        'length',
        '0UmL_tbUTOyG2LIzMx5ltg'
    ];
    animation = function () {
        return A13b7c4;
    };
    return animation();
}

function A3b08(A111ca5, A505ac6) {
    const A3b084c = animation();
    return A3b08 = function (Adfb8be, A4b322a) {
        Adfb8be = Adfb8be - 326;
        let A2dd971 = A3b084c[Adfb8be];
        return A2dd971;
    }, A3b08(A111ca5, A505ac6);
}!(function () {
    var A18da19 = {
            484: function (A2e5f65) {
                A2e5f65['exports'] = (function () {
                    'use strict';
                    var A91e8c8 = 60000,
                        A21d8c6 = 3600000,
                        A4aa0d8 = 'millisecond',
                        A1d950d = 'second',
                        A1a3da0 = 'minute',
                        A1777b2 = 'hour',
                        A8b8b12 = 'day',
                        A1f90c5 = 'week',
                        A89aee4 = 'month',
                        A4ed83b = 'quarter',
                        Aee49ae = 'year',
                        A5b1106 = 'date',
                        A54208f = 'Invalid Date',
                        A5de2c0 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        A5de12e = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        A52edc3 = {
                            'name': 'en',
                            'weekdays': 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday' ['split']('_'),
                            'months': 'January_February_March_April_May_June_July_August_September_October_November_December' ['split']('_')
                        },
                        A183fb8 = function (A497801, Ab0800d, A3dd31b) {
                            var A3dd6e9 = String(A497801);
                            return !A3dd6e9 || A3dd6e9['length'] >= Ab0800d ? A497801 : '' + Array(Ab0800d + 1 - A3dd6e9['length'])['join'](A3dd31b) + A497801;
                        },
                        A6f3e57 = {
                            's': A183fb8,
                            'z': function (A390df6) {
                                var A12f4f6 = -A390df6['utcOffset'](),
                                    A960a20 = Math['abs'](A12f4f6),
                                    A50d22b = Math['floor'](A960a20 / 60),
                                    A20670d = A960a20 % 60;
                                return (A12f4f6 <= 0 ? '+' : '-') + A183fb8(A50d22b, 2, '0') + ':' + A183fb8(A20670d, 2, '0');
                            },
                            'm': function A280b32(A26f46e, A39c95d) {
                                if (A26f46e['date']() < A39c95d['date']())
                                    return -A280b32(A39c95d, A26f46e);
                                var A1a803f = 12 * (A39c95d['year']() - A26f46e['year']()) + (A39c95d['month']() - A26f46e['month']()),
                                    A4b8f8b = A26f46e['clone']()['add'](A1a803f, A89aee4),
                                    A2208db = A39c95d - A4b8f8b < 0,
                                    A202fed = A26f46e['clone']()['add'](A1a803f + (A2208db ? -1 : 1), A89aee4);
                                return +(-(A1a803f + (A39c95d - A4b8f8b) / (A2208db ? A4b8f8b - A202fed : A202fed - A4b8f8b)) || 0);
                            },
                            'a': function (A457c58) {
                                return A457c58 < 0 ? Math['ceil'](A457c58) || 0 : Math['floor'](A457c58);
                            },
                            'p': function (A157984) {
                                return {
                                    'M': A89aee4,
                                    'y': Aee49ae,
                                    'w': A1f90c5,
                                    'd': A8b8b12,
                                    'D': A5b1106,
                                    'h': A1777b2,
                                    'm': A1a3da0,
                                    's': A1d950d,
                                    'ms': A4aa0d8,
                                    'Q': A4ed83b
                                } [A157984] || String(A157984 || '')['toLowerCase']()['replace'](/s$/, '');
                            },
                            'u': function (A564c67) {
                                return void 0 === A564c67;
                            }
                        },
                        A4a09e3 = 'en',
                        A4b9369 = {};
                    A4b9369[A4a09e3] = A52edc3;
                    var A514f9a = function (A1c90c3) {
                            return A1c90c3 instanceof A2c76cf;
                        },
                        Ae17649 = function A305300(A47818f, A1a5b9b, A43da80) {
                            var A1184db;
                            if (!A47818f)
                                return A4a09e3;
                            if ('string' == typeof A47818f) {
                                var A28a982 = A47818f['toLowerCase']();
                                A4b9369[A28a982] && (A1184db = A28a982), A1a5b9b && (A4b9369[A28a982] = A1a5b9b, A1184db = A28a982);
                                var A5571ae = A47818f['split']('-');
                                if (!A1184db && A5571ae['length'] > 1)
                                    return A305300(A5571ae[0]);
                            } else {
                                var A303a1a = A47818f['name'];
                                A4b9369[A303a1a] = A47818f, A1184db = A303a1a;
                            }
                            return !A43da80 && A1184db && (A4a09e3 = A1184db), A1184db || !A43da80 && A4a09e3;
                        },
                        A7f7dcd = function (A2d388f, A26848e) {
                            if (A514f9a(A2d388f))
                                return A2d388f['clone']();
                            var A17b72b = 'object' == typeof A26848e ? A26848e : {};
                            return A17b72b['date'] = A2d388f, A17b72b['args'] = arguments, new A2c76cf(A17b72b);
                        },
                        Aac096d = A6f3e57;
                    Aac096d['l'] = Ae17649, Aac096d['i'] = A514f9a, Aac096d['w'] = function (Ab6e3ba, A51de03) {
                        return A7f7dcd(Ab6e3ba, {
                            'locale': A51de03['$L'],
                            'utc': A51de03['$u'],
                            'x': A51de03['$x'],
                            '$offset': A51de03['$offset']
                        });
                    };
                    var A2c76cf = (function () {
                            function A1b109d(A20303a) {
                                this['$L'] = Ae17649(A20303a['locale'], null, !0), this['parse'](A20303a);
                            }
                            var A28f12e = A1b109d['prototype'];
                            return A28f12e['parse'] = function (A299039) {
                                this['$d'] = function (A5860a5) {
                                    var A462937 = A5860a5['date'],
                                        A31a13c = A5860a5['utc'];
                                    if (null === A462937)
                                        return new Date(NaN);
                                    if (Aac096d['u'](A462937))
                                        return new Date();
                                    if (A462937 instanceof Date)
                                        return new Date(A462937);
                                    if ('string' == typeof A462937 && !/Z$/i ['test'](A462937)) {
                                        var A482fa3 = A462937['match'](A5de2c0);
                                        if (A482fa3) {
                                            var A51c613 = A482fa3[2] - 1 || 0,
                                                A5e8f63 = (A482fa3[7] || '0')['substring'](0, 3);
                                            return A31a13c ? new Date(Date['UTC'](A482fa3[1], A51c613, A482fa3[3] || 1, A482fa3[4] || 0, A482fa3[5] || 0, A482fa3[6] || 0, A5e8f63)) : new Date(A482fa3[1], A51c613, A482fa3[3] || 1, A482fa3[4] || 0, A482fa3[5] || 0, A482fa3[6] || 0, A5e8f63);
                                        }
                                    }
                                    return new Date(A462937);
                                }(A299039), this['$x'] = A299039['x'] || {}, this['init']();
                            }, A28f12e['init'] = function () {
                                var A2c8038 = this['$d'];
                                this['$y'] = A2c8038['getFullYear'](), this['$M'] = A2c8038['getMonth'](), this['$D'] = A2c8038['getDate'](), this['$W'] = A2c8038['getDay'](), this['$H'] = A2c8038['getHours'](), this['$m'] = A2c8038['getMinutes'](), this['$s'] = A2c8038['getSeconds'](), this['$ms'] = A2c8038['getMilliseconds']();
                            }, A28f12e['$utils'] = function () {
                                return Aac096d;
                            }, A28f12e['isValid'] = function () {
                                return !(this['$d']['toString']() === A54208f);
                            }, A28f12e['isSame'] = function (A145873, A502dba) {
                                var A8c495c = A7f7dcd(A145873);
                                return this['startOf'](A502dba) <= A8c495c && A8c495c <= this['endOf'](A502dba);
                            }, A28f12e['isAfter'] = function (A37c6fb, A5f2bec) {
                                return A7f7dcd(A37c6fb) < this['startOf'](A5f2bec);
                            }, A28f12e['isBefore'] = function (A249a8d, A3251d2) {
                                return this['endOf'](A3251d2) < A7f7dcd(A249a8d);
                            }, A28f12e['$g'] = function (A15f203, A45136f, A266ae3) {
                                return Aac096d['u'](A15f203) ? this[A45136f] : this['set'](A266ae3, A15f203);
                            }, A28f12e['unix'] = function () {
                                return Math['floor'](this['valueOf']() / 1000);
                            }, A28f12e['valueOf'] = function () {
                                return this['$d']['getTime']();
                            }, A28f12e['startOf'] = function (A32c67e, A3f942a) {
                                var A8ca14 = this,
                                    A7e8625 = !!Aac096d['u'](A3f942a) || A3f942a,
                                    A140ae6 = Aac096d['p'](A32c67e),
                                    A567ab4 = function (A5e2010, Acd4d08) {
                                        var Afcae4b = Aac096d['w'](A8ca14['$u'] ? Date['UTC'](A8ca14['$y'], Acd4d08, A5e2010) : new Date(A8ca14['$y'], Acd4d08, A5e2010), A8ca14);
                                        return A7e8625 ? Afcae4b : Afcae4b['endOf'](A8b8b12);
                                    },
                                    A57984e = function (A2ff1b1, A21f16c) {
                                        return Aac096d['w'](A8ca14['toDate']()[A2ff1b1]['apply'](A8ca14['toDate']('s'), (A7e8625 ? [
                                            0,
                                            0,
                                            0,
                                            0
                                        ] : [
                                            23,
                                            59,
                                            59,
                                            999
                                        ])['slice'](A21f16c)), A8ca14);
                                    },
                                    A200e6c = this['$W'],
                                    A1da8f0 = this['$M'],
                                    A59358d = this['$D'],
                                    A4d0af1 = 'set' + (this['$u'] ? 'UTC' : '');
                                switch (A140ae6) {
                                case Aee49ae:
                                    return A7e8625 ? A567ab4(1, 0) : A567ab4(31, 11);
                                case A89aee4:
                                    return A7e8625 ? A567ab4(1, A1da8f0) : A567ab4(0, A1da8f0 + 1);
                                case A1f90c5:
                                    var A705bbc = this['$locale']()['weekStart'] || 0,
                                        A5300bf = (A200e6c < A705bbc ? A200e6c + 7 : A200e6c) - A705bbc;
                                    return A567ab4(A7e8625 ? A59358d - A5300bf : A59358d + (6 - A5300bf), A1da8f0);
                                case A8b8b12:
                                case A5b1106:
                                    return A57984e(A4d0af1 + 'Hours', 0);
                                case A1777b2:
                                    return A57984e(A4d0af1 + 'Minutes', 1);
                                case A1a3da0:
                                    return A57984e(A4d0af1 + 'Seconds', 2);
                                case A1d950d:
                                    return A57984e(A4d0af1 + 'Milliseconds', 3);
                                default:
                                    return this['clone']();
                                }
                            }, A28f12e['endOf'] = function (A39d95) {
                                return this['startOf'](A39d95, !1);
                            }, A28f12e['$set'] = function (A43ad60, A584a00) {
                                var A1bbe88, A1bc392 = Aac096d['p'](A43ad60),
                                    A398eaf = 'set' + (this['$u'] ? 'UTC' : ''),
                                    Ad9e4f8 = (A1bbe88 = {}, A1bbe88[A8b8b12] = A398eaf + 'Date', A1bbe88[A5b1106] = A398eaf + 'Date', A1bbe88[A89aee4] = A398eaf + 'Month', A1bbe88[Aee49ae] = A398eaf + 'FullYear', A1bbe88[A1777b2] = A398eaf + 'Hours', A1bbe88[A1a3da0] = A398eaf + 'Minutes', A1bbe88[A1d950d] = A398eaf + 'Seconds', A1bbe88[A4aa0d8] = A398eaf + 'Milliseconds', A1bbe88)[A1bc392],
                                    A1e6353 = A1bc392 === A8b8b12 ? this['$D'] + (A584a00 - this['$W']) : A584a00;
                                if (A1bc392 === A89aee4 || A1bc392 === Aee49ae) {
                                    var A106b44 = this['clone']()['set'](A5b1106, 1);
                                    A106b44['$d'][Ad9e4f8](A1e6353), A106b44['init'](), this['$d'] = A106b44['set'](A5b1106, Math['min'](this['$D'], A106b44['daysInMonth']()))['$d'];
                                } else
                                    Ad9e4f8 && this['$d'][Ad9e4f8](A1e6353);
                                return this['init'](), this;
                            }, A28f12e['set'] = function (A3f2bba, Aec4caf) {
                                return this['clone']()['$set'](A3f2bba, Aec4caf);
                            }, A28f12e['get'] = function (A549174) {
                                return this[Aac096d['p'](A549174)]();
                            }, A28f12e['add'] = function (A464e2c, A31b4f3) {
                                var A5b8a66, A1616d6 = this;
                                A464e2c = Number(A464e2c);
                                var A5937fb = Aac096d['p'](A31b4f3),
                                    A32e8ad = function (A4ec9c8) {
                                        var A55981c = A7f7dcd(A1616d6);
                                        return Aac096d['w'](A55981c['date'](A55981c['date']() + Math['round'](A4ec9c8 * A464e2c)), A1616d6);
                                    };
                                if (A5937fb === A89aee4)
                                    return this['set'](A89aee4, this['$M'] + A464e2c);
                                if (A5937fb === Aee49ae)
                                    return this['set'](Aee49ae, this['$y'] + A464e2c);
                                if (A5937fb === A8b8b12)
                                    return A32e8ad(1);
                                if (A5937fb === A1f90c5)
                                    return A32e8ad(7);
                                var A37b6cb = (A5b8a66 = {}, A5b8a66[A1a3da0] = A91e8c8, A5b8a66[A1777b2] = A21d8c6, A5b8a66[A1d950d] = 1000, A5b8a66)[A5937fb] || 1,
                                    A41103f = this['$d']['getTime']() + A464e2c * A37b6cb;
                                return Aac096d['w'](A41103f, this);
                            }, A28f12e['subtract'] = function (A21c3d1, A58b924) {
                                return this['add'](-1 * A21c3d1, A58b924);
                            }, A28f12e['format'] = function (A5e806c) {
                                var A49ecb1 = this,
                                    A6dcef1 = this['$locale']();
                                if (!this['isValid']())
                                    return A6dcef1['invalidDate'] || A54208f;
                                var A78a1df = A5e806c || 'YYYY-MM-DDTHH:mm:ssZ',
                                    A53f30b = Aac096d['z'](this),
                                    A3e7db0 = this['$H'],
                                    A5485d1 = this['$m'],
                                    A4be2e5 = this['$M'],
                                    Ab6efe0 = A6dcef1['weekdays'],
                                    A4aac29 = A6dcef1['months'],
                                    A4a09d3 = function (A5146a5, A25d3d8, A202c1f, A2561fa) {
                                        return A5146a5 && (A5146a5[A25d3d8] || A5146a5(A49ecb1, A78a1df)) || A202c1f[A25d3d8]['slice'](0, A2561fa);
                                    },
                                    A384a32 = function (A41a7a3) {
                                        return Aac096d['s'](A3e7db0 % 12 || 12, A41a7a3, '0');
                                    },
                                    A594175 = A6dcef1['meridiem'] || function (A5e3af8, A4257d9, A12d5ba) {
                                        var A2a0d43 = A5e3af8 < 12 ? 'AM' : 'PM';
                                        return A12d5ba ? A2a0d43['toLowerCase']() : A2a0d43;
                                    },
                                    A49dda0 = {
                                        'YY': String(this['$y'])['slice'](-2),
                                        'YYYY': this['$y'],
                                        'M': A4be2e5 + 1,
                                        'MM': Aac096d['s'](A4be2e5 + 1, 2, '0'),
                                        'MMM': A4a09d3(A6dcef1['monthsShort'], A4be2e5, A4aac29, 3),
                                        'MMMM': A4a09d3(A4aac29, A4be2e5),
                                        'D': this['$D'],
                                        'DD': Aac096d['s'](this['$D'], 2, '0'),
                                        'd': String(this['$W']),
                                        'dd': A4a09d3(A6dcef1['weekdaysMin'], this['$W'], Ab6efe0, 2),
                                        'ddd': A4a09d3(A6dcef1['weekdaysShort'], this['$W'], Ab6efe0, 3),
                                        'dddd': Ab6efe0[this['$W']],
                                        'H': String(A3e7db0),
                                        'HH': Aac096d['s'](A3e7db0, 2, '0'),
                                        'h': A384a32(1),
                                        'hh': A384a32(2),
                                        'a': A594175(A3e7db0, A5485d1, !0),
                                        'A': A594175(A3e7db0, A5485d1, !1),
                                        'm': String(A5485d1),
                                        'mm': Aac096d['s'](A5485d1, 2, '0'),
                                        's': String(this['$s']),
                                        'ss': Aac096d['s'](this['$s'], 2, '0'),
                                        'SSS': Aac096d['s'](this['$ms'], 3, '0'),
                                        'Z': A53f30b
                                    };
                                return A78a1df['replace'](A5de12e, function (A31060d, A1804fd) {
                                    return A1804fd || A49dda0[A31060d] || A53f30b['replace'](':', '');
                                });
                            }, A28f12e['utcOffset'] = function () {
                                return 15 * -Math['round'](this['$d']['getTimezoneOffset']() / 15);
                            }, A28f12e['diff'] = function (A46a0bd, A24a570, A300ddb) {
                                var A3225d5, A424a89 = Aac096d['p'](A24a570),
                                    A506173 = A7f7dcd(A46a0bd),
                                    A24dd73 = (A506173['utcOffset']() - this['utcOffset']()) * A91e8c8,
                                    A183f7b = this - A506173,
                                    A631201 = Aac096d['m'](this, A506173);
                                return A631201 = (A3225d5 = {}, A3225d5[Aee49ae] = A631201 / 12, A3225d5[A89aee4] = A631201, A3225d5[A4ed83b] = A631201 / 3, A3225d5[A1f90c5] = (A183f7b - A24dd73) / 604800000, A3225d5[A8b8b12] = (A183f7b - A24dd73) / 86400000, A3225d5[A1777b2] = A183f7b / A21d8c6, A3225d5[A1a3da0] = A183f7b / A91e8c8, A3225d5[A1d950d] = A183f7b / 1000, A3225d5)[A424a89] || A183f7b, A300ddb ? A631201 : Aac096d['a'](A631201);
                            }, A28f12e['daysInMonth'] = function () {
                                return this['endOf'](A89aee4)['$D'];
                            }, A28f12e['$locale'] = function () {
                                return A4b9369[this['$L']];
                            }, A28f12e['locale'] = function (A5d29a1, Adc6296) {
                                if (!A5d29a1)
                                    return this['$L'];
                                var A4356e8 = this['clone'](),
                                    A2c393d = Ae17649(A5d29a1, Adc6296, !0);
                                return A2c393d && (A4356e8['$L'] = A2c393d), A4356e8;
                            }, A28f12e['clone'] = function () {
                                return Aac096d['w'](this['$d'], this);
                            }, A28f12e['toDate'] = function () {
                                return new Date(this['valueOf']());
                            }, A28f12e['toJSON'] = function () {
                                return this['isValid']() ? this['toISOString']() : null;
                            }, A28f12e['toISOString'] = function () {
                                return this['$d']['toISOString']();
                            }, A28f12e['toString'] = function () {
                                return this['$d']['toUTCString']();
                            }, A1b109d;
                        }()),
                        A1fb11e = A2c76cf['prototype'];
                    return A7f7dcd['prototype'] = A1fb11e, [
                        [
                            '$ms',
                            A4aa0d8
                        ],
                        [
                            '$s',
                            A1d950d
                        ],
                        [
                            '$m',
                            A1a3da0
                        ],
                        [
                            '$H',
                            A1777b2
                        ],
                        [
                            '$W',
                            A8b8b12
                        ],
                        [
                            '$M',
                            A89aee4
                        ],
                        [
                            '$y',
                            Aee49ae
                        ],
                        [
                            '$D',
                            A5b1106
                        ]
                    ]['forEach'](function (A4c143a) {
                        A1fb11e[A4c143a[1]] = function (A1fce4f) {
                            return this['$g'](A1fce4f, A4c143a[0], A4c143a[1]);
                        };
                    }), A7f7dcd['extend'] = function (A448108, A1470d3) {
                        return A448108['$i'] || (A448108(A1470d3, A2c76cf, A7f7dcd), A448108['$i'] = !0), A7f7dcd;
                    }, A7f7dcd['locale'] = Ae17649, A7f7dcd['isDayjs'] = A514f9a, A7f7dcd['unix'] = function (A58a059) {
                        return A7f7dcd(1000 * A58a059);
                    }, A7f7dcd['en'] = A4b9369[A4a09e3], A7f7dcd['Ls'] = A4b9369, A7f7dcd['p'] = {}, A7f7dcd;
                }());
            },
            227: function (A2f2579, A535b2, A4a5b6a) {
                const A5e717f = A3b08;
                A535b2['formatArgs'] = function (A29fa10) {
                    const A4f5f77 = A3b08;
                    if (A29fa10[0] = (this['useColors'] ? '%c' : '') + this['namespace'] + (this['useColors'] ? A4f5f77(326) : ' ') + A29fa10[0] + (this['useColors'] ? '%c ' : ' ') + '+' + A2f2579['exports']['humanize'](this['diff']), !this['useColors'])
                        return;
                    const A5cb2eb = 'color: ' + this['color'];
                    A29fa10['splice'](1, 0, A5cb2eb, 'color: inherit');
                    let A2a2041 = 0,
                        A4bbe8f = 0;
                    A29fa10[0]['replace'](/%[a-zA-Z%]/g, A1904bc => {
                        '%%' !== A1904bc && (A2a2041++, '%c' === A1904bc && (A4bbe8f = A2a2041));
                    }), A29fa10['splice'](A4bbe8f, 0, A5cb2eb);
                }, A535b2['save'] = function (A384f1e) {
                    try {
                        A384f1e ? A535b2['storage']['setItem']('debug', A384f1e) : A535b2['storage']['removeItem']('debug');
                    } catch (A509340) {}
                }, A535b2[A5e717f(327)] = function () {
                    let A368fd1;
                    try {
                        A368fd1 = A535b2['storage']['getItem']('debug');
                    } catch (A3d6f0a) {}
                    return !A368fd1 && 'undefined' != typeof process && 'env' in process && (A368fd1 = process['env']['DEBUG']), A368fd1;
                }, A535b2['useColors'] = function () {
                    return !('undefined' == typeof window || !window['process'] || 'renderer' !== window['process']['type'] && !window['process']['__nwjs']) || ('undefined' == typeof navigator || !navigator['userAgent'] || !navigator['userAgent']['toLowerCase']()['match'](/(edge|trident)\/(\d+)/)) && ('undefined' != typeof document && document['documentElement'] && document['documentElement']['style'] && document['documentElement']['style']['WebkitAppearance'] || 'undefined' != typeof window && window['console'] && (window['console']['firebug'] || window['console']['exception'] && window['console']['table']) || 'undefined' != typeof navigator && navigator['userAgent'] && navigator['userAgent']['toLowerCase']()['match'](/firefox\/(\d+)/) && parseInt(RegExp['$1'], 10) >= 31 || 'undefined' != typeof navigator && navigator['userAgent'] && navigator['userAgent']['toLowerCase']()['match'](/applewebkit\/(\d+)/));
                }, A535b2['storage'] = (function () {
                    try {
                        return localStorage;
                    } catch (A24c6f5) {}
                }()), A535b2['destroy'] = ((() => {
                    let A17ed31 = !1;
                    return () => {
                        A17ed31 || (A17ed31 = !0, console['warn']('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'));
                    };
                })()), A535b2['colors'] = [
                    '#0000CC',
                    '#0000FF',
                    '#0033CC',
                    '#0033FF',
                    '#0066CC',
                    '#0066FF',
                    '#0099CC',
                    '#0099FF',
                    '#00CC00',
                    '#00CC33',
                    '#00CC66',
                    '#00CC99',
                    '#00CCCC',
                    '#00CCFF',
                    '#3300CC',
                    '#3300FF',
                    '#3333CC',
                    '#3333FF',
                    '#3366CC',
                    '#3366FF',
                    '#3399CC',
                    '#3399FF',
                    '#33CC00',
                    '#33CC33',
                    '#33CC66',
                    '#33CC99',
                    '#33CCCC',
                    '#33CCFF',
                    '#6600CC',
                    '#6600FF',
                    '#6633CC',
                    '#6633FF',
                    '#66CC00',
                    '#66CC33',
                    '#9900CC',
                    '#9900FF',
                    '#9933CC',
                    '#9933FF',
                    '#99CC00',
                    '#99CC33',
                    '#CC0000',
                    '#CC0033',
                    '#CC0066',
                    '#CC0099',
                    '#CC00CC',
                    '#CC00FF',
                    '#CC3300',
                    '#CC3333',
                    '#CC3366',
                    '#CC3399',
                    '#CC33CC',
                    '#CC33FF',
                    '#CC6600',
                    '#CC6633',
                    '#CC9900',
                    '#CC9933',
                    '#CCCC00',
                    '#CCCC33',
                    '#FF0000',
                    '#FF0033',
                    '#FF0066',
                    '#FF0099',
                    '#FF00CC',
                    '#FF00FF',
                    '#FF3300',
                    '#FF3333',
                    '#FF3366',
                    '#FF3399',
                    '#FF33CC',
                    '#FF33FF',
                    '#FF6600',
                    '#FF6633',
                    '#FF9900',
                    '#FF9933',
                    '#FFCC00',
                    '#FFCC33'
                ], A535b2['log'] = console['debug'] || console['log'] || (() => {}), A2f2579['exports'] = A4a5b6a(447)(A535b2);
                const {
                    formatters: A3042d2
                } = A2f2579['exports'];
                A3042d2['j'] = function (A4d07df) {
                    try {
                        return JSON['stringify'](A4d07df);
                    } catch (A876a8c) {
                        return '[UnexpectedJSONParseError]: ' + A876a8c['message'];
                    }
                };
            },
            447: function (A338d36, A335d42, A156087) {
                A338d36['exports'] = function (A52bdf3) {
                    const A475d72 = A3b08;

                    function A1dcd99(Afccd6e) {
                        let A5da7c2, A98257f, A488951, A2d3436 = null;

                        function A16a754(...A4e8e2a) {
                            if (!A16a754['enabled'])
                                return;
                            const A42054a = A16a754,
                                A69579f = Number(new Date()),
                                A5f5dbf = A69579f - (A5da7c2 || A69579f);
                            A42054a['diff'] = A5f5dbf, A42054a['prev'] = A5da7c2, A42054a['curr'] = A69579f, A5da7c2 = A69579f, A4e8e2a[0] = A1dcd99['coerce'](A4e8e2a[0]), 'string' != typeof A4e8e2a[0] && A4e8e2a['unshift']('%O');
                            let A2a5445 = 0;
                            A4e8e2a[0] = A4e8e2a[0]['replace'](/%([a-zA-Z%])/g, (A3181c2, A1e7668) => {
                                if ('%%' === A3181c2)
                                    return '%';
                                A2a5445++;
                                const A17eaba = A1dcd99['formatters'][A1e7668];
                                if ('function' == typeof A17eaba) {
                                    const Af034d5 = A4e8e2a[A2a5445];
                                    A3181c2 = A17eaba['call'](A42054a, Af034d5), A4e8e2a['splice'](A2a5445, 1), A2a5445--;
                                }
                                return A3181c2;
                            }), A1dcd99['formatArgs']['call'](A42054a, A4e8e2a), (A42054a['log'] || A1dcd99['log'])['apply'](A42054a, A4e8e2a);
                        }
                        return A16a754['namespace'] = Afccd6e, A16a754['useColors'] = A1dcd99['useColors'](), A16a754['color'] = A1dcd99['selectColor'](Afccd6e), A16a754['extend'] = A2d559f, A16a754['destroy'] = A1dcd99['destroy'], Object['defineProperty'](A16a754, 'enabled', {
                            'enumerable': !0,
                            'configurable': !1,
                            'get': () => null !== A2d3436 ? A2d3436 : (A98257f !== A1dcd99['namespaces'] && (A98257f = A1dcd99['namespaces'], A488951 = A1dcd99['enabled'](Afccd6e)), A488951),
                            'set': A37b1d7 => {
                                A2d3436 = A37b1d7;
                            }
                        }), 'function' == typeof A1dcd99['init'] && A1dcd99['init'](A16a754), A16a754;
                    }

                    function A2d559f(A1feefa, A1c17b6) {
                        const A40ae2e = A1dcd99(this['namespace'] + (void 0 === A1c17b6 ? ':' : A1c17b6) + A1feefa);
                        return A40ae2e['log'] = this['log'], A40ae2e;
                    }

                    function A503a32(A3c9ffd) {
                        return A3c9ffd['toString']()['substring'](2, A3c9ffd['toString']()['length'] - 2)['replace'](/\.\*\?$/, '*');
                    }
                    return A1dcd99['debug'] = A1dcd99, A1dcd99['default'] = A1dcd99, A1dcd99['coerce'] = function (A504a12) {
                        return A504a12 instanceof Error ? A504a12['stack'] || A504a12['message'] : A504a12;
                    }, A1dcd99['disable'] = function () {
                        const A251986 = [
                            ...A1dcd99['names']['map'](A503a32),
                            ...A1dcd99['skips']['map'](A503a32)['map'](A50a62f => '-' + A50a62f)
                        ]['join'](',');
                        return A1dcd99['enable'](''), A251986;
                    }, A1dcd99['enable'] = function (A136192) {
                        let A34278f;
                        A1dcd99['save'](A136192), A1dcd99['namespaces'] = A136192, A1dcd99['names'] = [], A1dcd99['skips'] = [];
                        const A2f3b2f = ('string' == typeof A136192 ? A136192 : '')['split'](/[\s,]+/),
                            A513f43 = A2f3b2f['length'];
                        for (A34278f = 0; A34278f < A513f43; A34278f++)
                            A2f3b2f[A34278f] && ('-' === (A136192 = A2f3b2f[A34278f]['replace'](/\*/g, '.*?'))[0] ? A1dcd99['skips']['push'](new RegExp('^' + A136192['slice'](1) + '$')) : A1dcd99['names']['push'](new RegExp('^' + A136192 + '$')));
                    }, A1dcd99['enabled'] = function (A4c7309) {
                        if ('*' === A4c7309[A4c7309['length'] - 1])
                            return !0;
                        let Aec1506, A10fd39;
                        for (Aec1506 = 0, A10fd39 = A1dcd99['skips']['length']; Aec1506 < A10fd39; Aec1506++)
                            if (A1dcd99['skips'][Aec1506]['test'](A4c7309))
                                return !1;
                        for (Aec1506 = 0, A10fd39 = A1dcd99['names']['length']; Aec1506 < A10fd39; Aec1506++)
                            if (A1dcd99['names'][Aec1506]['test'](A4c7309))
                                return !0;
                        return !1;
                    }, A1dcd99['humanize'] = A156087(824), A1dcd99['destroy'] = function () {
                        console['warn']('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
                    }, Object['keys'](A52bdf3)['forEach'](A2ff44b => {
                        A1dcd99[A2ff44b] = A52bdf3[A2ff44b];
                    }), A1dcd99['names'] = [], A1dcd99['skips'] = [], A1dcd99['formatters'] = {}, A1dcd99['selectColor'] = function (A2ac0e3) {
                        let A959a66 = 0;
                        for (let A44f355 = 0; A44f355 < A2ac0e3['length']; A44f355++)
                            A959a66 = (A959a66 << 5) - A959a66 + A2ac0e3['charCodeAt'](A44f355), A959a66 |= 0;
                        return A1dcd99['colors'][Math['abs'](A959a66) % A1dcd99['colors']['length']];
                    }, A1dcd99['enable'](A1dcd99[A475d72(327)]()), A1dcd99;
                };
            },
            20: function (A50892b) {
                'use strict';
                var A353605 = '%[a-f0-9]{2}',
                    A3584c6 = new RegExp(A353605, 'gi'),
                    A35e4be = new RegExp('(' + A353605 + ')+', 'gi');

                function A61aa63(A2d80b7, Ac4102b) {
                    try {
                        return decodeURIComponent(A2d80b7['join'](''));
                    } catch (A192717) {}
                    if (1 === A2d80b7['length'])
                        return A2d80b7;
                    Ac4102b = Ac4102b || 1;
                    var A1e5252 = A2d80b7['slice'](0, Ac4102b),
                        A154901 = A2d80b7['slice'](Ac4102b);
                    return Array['prototype']['concat']['call']([], A61aa63(A1e5252), A61aa63(A154901));
                }

                function A221311(A2c61ec) {
                    try {
                        return decodeURIComponent(A2c61ec);
                    } catch (A515947) {
                        for (var A4b34eb = A2c61ec['match'](A3584c6), A20235c = 1; A20235c < A4b34eb['length']; A20235c++)
                            A4b34eb = (A2c61ec = A61aa63(A4b34eb, A20235c)['join'](''))['match'](A3584c6);
                        return A2c61ec;
                    }
                }
                A50892b['exports'] = function (A1fb54d) {
                    if ('string' != typeof A1fb54d)
                        throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof A1fb54d + '`');
                    try {
                        return A1fb54d = A1fb54d['replace'](/\+/g, ' '), decodeURIComponent(A1fb54d);
                    } catch (A4eaeb7) {
                        return function (A2ce6bc) {
                            for (var A3258d2 = {
                                    '%FE%FF': '��',
                                    '%FF%FE': '��'
                                }, A10fcf1 = A35e4be['exec'](A2ce6bc); A10fcf1;) {
                                try {
                                    A3258d2[A10fcf1[0]] = decodeURIComponent(A10fcf1[0]);
                                } catch (A22f6f2) {
                                    var A358630 = A221311(A10fcf1[0]);
                                    A358630 !== A10fcf1[0] && (A3258d2[A10fcf1[0]] = A358630);
                                }
                                A10fcf1 = A35e4be['exec'](A2ce6bc);
                            }
                            A3258d2['%C2'] = '�';
                            for (var A180b2c = Object['keys'](A3258d2), A3090c6 = 0; A3090c6 < A180b2c['length']; A3090c6++) {
                                var A2bad6d = A180b2c[A3090c6];
                                A2ce6bc = A2ce6bc['replace'](new RegExp(A2bad6d, 'g'), A3258d2[A2bad6d]);
                            }
                            return A2ce6bc;
                        }(A1fb54d);
                    }
                };
            },
            806: function (A357fd4) {
                'use strict';
                A357fd4['exports'] = function (A3a8dba, A399521) {
                    for (var A2f9e12 = {}, A56ee8d = Object['keys'](A3a8dba), A436889 = Array['isArray'](A399521), A943188 = 0; A943188 < A56ee8d['length']; A943188++) {
                        var A51c15d = A56ee8d[A943188],
                            A286b0f = A3a8dba[A51c15d];
                        (A436889 ? -1 !== A399521['indexOf'](A51c15d) : A399521(A51c15d, A286b0f, A3a8dba)) && (A2f9e12[A51c15d] = A286b0f);
                    }
                    return A2f9e12;
                };
            },
            824: function (A46a13f) {
                var A5c7fc9 = 1000,
                    A437767 = 60 * A5c7fc9,
                    A55650d = 60 * A437767,
                    A31fb11 = 24 * A55650d;

                function A17fc39(A137a10, A128d89, A45007a, A8d830b) {
                    var A383455 = A128d89 >= 1.5 * A45007a;
                    return Math['round'](A137a10 / A45007a) + ' ' + A8d830b + (A383455 ? 's' : '');
                }
                A46a13f['exports'] = function (A3f6674, A2a684d) {
                    A2a684d = A2a684d || {};
                    var A2992f0, A49166d, A5f4656 = typeof A3f6674;
                    if ('string' === A5f4656 && A3f6674['length'] > 0)
                        return function (Aff9653) {
                            if (!((Aff9653 = String(Aff9653))['length'] > 100)) {
                                var A557eae = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i ['exec'](Aff9653);
                                if (A557eae) {
                                    var A3fa877 = parseFloat(A557eae[1]);
                                    switch ((A557eae[2] || 'ms')['toLowerCase']()) {
                                    case 'years':
                                    case 'year':
                                    case 'yrs':
                                    case 'yr':
                                    case 'y':
                                        return 31557600000 * A3fa877;
                                    case 'weeks':
                                    case 'week':
                                    case 'w':
                                        return 604800000 * A3fa877;
                                    case 'days':
                                    case 'day':
                                    case 'd':
                                        return A3fa877 * A31fb11;
                                    case 'hours':
                                    case 'hour':
                                    case 'hrs':
                                    case 'hr':
                                    case 'h':
                                        return A3fa877 * A55650d;
                                    case 'minutes':
                                    case 'minute':
                                    case 'mins':
                                    case 'min':
                                    case 'm':
                                        return A3fa877 * A437767;
                                    case 'seconds':
                                    case 'second':
                                    case 'secs':
                                    case 'sec':
                                    case 's':
                                        return A3fa877 * A5c7fc9;
                                    case 'milliseconds':
                                    case 'millisecond':
                                    case 'msecs':
                                    case 'msec':
                                    case 'ms':
                                        return A3fa877;
                                    default:
                                        return;
                                    }
                                }
                            }
                        }(A3f6674);
                    if ('number' === A5f4656 && isFinite(A3f6674))
                        return A2a684d['long'] ? (A2992f0 = A3f6674, (A49166d = Math['abs'](A2992f0)) >= A31fb11 ? A17fc39(A2992f0, A49166d, A31fb11, 'day') : A49166d >= A55650d ? A17fc39(A2992f0, A49166d, A55650d, 'hour') : A49166d >= A437767 ? A17fc39(A2992f0, A49166d, A437767, 'minute') : A49166d >= A5c7fc9 ? A17fc39(A2992f0, A49166d, A5c7fc9, 'second') : A2992f0 + ' ms') : function (Ac1ab98) {
                            var A1c96ba = Math['abs'](Ac1ab98);
                            return A1c96ba >= A31fb11 ? Math['round'](Ac1ab98 / A31fb11) + 'd' : A1c96ba >= A55650d ? Math['round'](Ac1ab98 / A55650d) + 'h' : A1c96ba >= A437767 ? Math['round'](Ac1ab98 / A437767) + 'm' : A1c96ba >= A5c7fc9 ? Math['round'](Ac1ab98 / A5c7fc9) + 's' : Ac1ab98 + 'ms';
                        }(A3f6674);
                    throw new Error('val is not a non-empty string or a valid number. val=' + JSON['stringify'](A3f6674));
                };
            },
            563: function (A3af989, A4c649d, A176954) {
                'use strict';
                const A40dbde = A176954(610),
                    A438e5a = A176954(20),
                    A465bf8 = A176954(500),
                    A4387b5 = A176954(806),
                    A556bb5 = Symbol('encodeFragmentIdentifier');

                function A35bf9f(A4635d9) {
                    if ('string' != typeof A4635d9 || 1 !== A4635d9['length'])
                        throw new TypeError('arrayFormatSeparator must be single character string');
                }

                function A3a6baa(A1814fb, A4e6e0e) {
                    return A4e6e0e['encode'] ? A4e6e0e['strict'] ? A40dbde(A1814fb) : encodeURIComponent(A1814fb) : A1814fb;
                }

                function A4a83cf(A4e9483, A29bbbb) {
                    return A29bbbb['decode'] ? A438e5a(A4e9483) : A4e9483;
                }

                function A259f9b(A542037) {
                    return Array['isArray'](A542037) ? A542037['sort']() : 'object' == typeof A542037 ? A259f9b(Object['keys'](A542037))['sort']((A48ab1f, A5069ba) => Number(A48ab1f) - Number(A5069ba))['map'](A23276c => A542037[A23276c]) : A542037;
                }

                function A357044(A5d9533) {
                    const A26ea9a = A5d9533['indexOf']('#');
                    return -1 !== A26ea9a && (A5d9533 = A5d9533['slice'](0, A26ea9a)), A5d9533;
                }

                function A303d2b(Ad58bb9) {
                    const A150888 = (Ad58bb9 = A357044(Ad58bb9))['indexOf']('?');
                    return -1 === A150888 ? '' : Ad58bb9['slice'](A150888 + 1);
                }

                function A36da25(A40699d, A310fd6) {
                    return A310fd6['parseNumbers'] && !Number['isNaN'](Number(A40699d)) && 'string' == typeof A40699d && '' !== A40699d['trim']() ? A40699d = Number(A40699d) : !A310fd6['parseBooleans'] || null === A40699d || 'true' !== A40699d['toLowerCase']() && 'false' !== A40699d['toLowerCase']() || (A40699d = 'true' === A40699d['toLowerCase']()), A40699d;
                }

                function A3ef43b(A274654, A3de31e) {
                    A35bf9f((A3de31e = Object['assign']({
                        'decode': !0,
                        'sort': !0,
                        'arrayFormat': 'none',
                        'arrayFormatSeparator': ',',
                        'parseNumbers': !1,
                        'parseBooleans': !1
                    }, A3de31e))['arrayFormatSeparator']);
                    const A1a52c6 = function (A7393f) {
                            let A43114c;
                            switch (A7393f['arrayFormat']) {
                            case 'index':
                                return (A10b0b3, A411bcb, A5a8e91) => {
                                    A43114c = /\[(\d*)\]$/ ['exec'](A10b0b3), A10b0b3 = A10b0b3['replace'](/\[\d*\]$/, ''), A43114c ? (void 0 === A5a8e91[A10b0b3] && (A5a8e91[A10b0b3] = {}), A5a8e91[A10b0b3][A43114c[1]] = A411bcb) : A5a8e91[A10b0b3] = A411bcb;
                                };
                            case 'bracket':
                                return (A18cd67, A1d6fdc, Adb4baa) => {
                                    A43114c = /(\[\])$/ ['exec'](A18cd67), A18cd67 = A18cd67['replace'](/\[\]$/, ''), A43114c ? void 0 !== Adb4baa[A18cd67] ? Adb4baa[A18cd67] = []['concat'](Adb4baa[A18cd67], A1d6fdc) : Adb4baa[A18cd67] = [A1d6fdc] : Adb4baa[A18cd67] = A1d6fdc;
                                };
                            case 'colon-list-separator':
                                return (A6db7a3, A71324, A19c2a7) => {
                                    A43114c = /(:list)$/ ['exec'](A6db7a3), A6db7a3 = A6db7a3['replace'](/:list$/, ''), A43114c ? void 0 !== A19c2a7[A6db7a3] ? A19c2a7[A6db7a3] = []['concat'](A19c2a7[A6db7a3], A71324) : A19c2a7[A6db7a3] = [A71324] : A19c2a7[A6db7a3] = A71324;
                                };
                            case 'comma':
                            case 'separator':
                                return (A31d5c7, A417f64, A4b665b) => {
                                    const A10030b = 'string' == typeof A417f64 && A417f64['includes'](A7393f['arrayFormatSeparator']),
                                        A28254b = 'string' == typeof A417f64 && !A10030b && A4a83cf(A417f64, A7393f)['includes'](A7393f['arrayFormatSeparator']);
                                    A417f64 = A28254b ? A4a83cf(A417f64, A7393f) : A417f64;
                                    const A5dd1ec = A10030b || A28254b ? A417f64['split'](A7393f['arrayFormatSeparator'])['map'](A471017 => A4a83cf(A471017, A7393f)) : null === A417f64 ? A417f64 : A4a83cf(A417f64, A7393f);
                                    A4b665b[A31d5c7] = A5dd1ec;
                                };
                            case 'bracket-separator':
                                return (A5d5465, A345fb5, A2d945b) => {
                                    const A5766f3 = /(\[\])$/ ['test'](A5d5465);
                                    if (A5d5465 = A5d5465['replace'](/\[\]$/, ''), !A5766f3)
                                        return void(A2d945b[A5d5465] = A345fb5 ? A4a83cf(A345fb5, A7393f) : A345fb5);
                                    const Ac2f19 = null === A345fb5 ? [] : A345fb5['split'](A7393f['arrayFormatSeparator'])['map'](A13d924 => A4a83cf(A13d924, A7393f));
                                    void 0 !== A2d945b[A5d5465] ? A2d945b[A5d5465] = []['concat'](A2d945b[A5d5465], Ac2f19) : A2d945b[A5d5465] = Ac2f19;
                                };
                            default:
                                return (A4af1b6, A9b29fd, A5438db) => {
                                    void 0 !== A5438db[A4af1b6] ? A5438db[A4af1b6] = []['concat'](A5438db[A4af1b6], A9b29fd) : A5438db[A4af1b6] = A9b29fd;
                                };
                            }
                        }(A3de31e),
                        A1f944d = Object['create'](null);
                    if ('string' != typeof A274654)
                        return A1f944d;
                    if (!(A274654 = A274654['trim']()['replace'](/^[?#&]/, '')))
                        return A1f944d;
                    for (const A2c16d3 of A274654['split']('&')) {
                        if ('' === A2c16d3)
                            continue;
                        let [A22f77d, A42233f] = A465bf8(A3de31e['decode'] ? A2c16d3['replace'](/\+/g, ' ') : A2c16d3, '=');
                        A42233f = void 0 === A42233f ? null : [
                            'comma',
                            'separator',
                            'bracket-separator'
                        ]['includes'](A3de31e['arrayFormat']) ? A42233f : A4a83cf(A42233f, A3de31e), A1a52c6(A4a83cf(A22f77d, A3de31e), A42233f, A1f944d);
                    }
                    for (const A569596 of Object['keys'](A1f944d)) {
                        const A4e5eeb = A1f944d[A569596];
                        if ('object' == typeof A4e5eeb && null !== A4e5eeb) {
                            for (const A55b3cf of Object['keys'](A4e5eeb))
                                A4e5eeb[A55b3cf] = A36da25(A4e5eeb[A55b3cf], A3de31e);
                        } else
                            A1f944d[A569596] = A36da25(A4e5eeb, A3de31e);
                    }
                    return !1 === A3de31e['sort'] ? A1f944d : (!0 === A3de31e['sort'] ? Object['keys'](A1f944d)['sort']() : Object['keys'](A1f944d)['sort'](A3de31e['sort']))['reduce']((A12673f, A494491) => {
                        const A2d0c15 = A1f944d[A494491];
                        return Boolean(A2d0c15) && 'object' == typeof A2d0c15 && !Array['isArray'](A2d0c15) ? A12673f[A494491] = A259f9b(A2d0c15) : A12673f[A494491] = A2d0c15, A12673f;
                    }, Object['create'](null));
                }
                A4c649d['extract'] = A303d2b, A4c649d['parse'] = A3ef43b, A4c649d['stringify'] = (A4459da, A36a87f) => {
                    if (!A4459da)
                        return '';
                    A35bf9f((A36a87f = Object['assign']({
                        'encode': !0,
                        'strict': !0,
                        'arrayFormat': 'none',
                        'arrayFormatSeparator': ','
                    }, A36a87f))['arrayFormatSeparator']);
                    const A2714e0 = A4c0f30 => A36a87f['skipNull'] && null == A4459da[A4c0f30] || A36a87f['skipEmptyString'] && '' === A4459da[A4c0f30],
                        A47398d = function (Aed622e) {
                            switch (Aed622e['arrayFormat']) {
                            case 'index':
                                return A40a1d8 => (A331d0f, A2bcfa2) => {
                                    const A42148b = A331d0f['length'];
                                    return void 0 === A2bcfa2 || Aed622e['skipNull'] && null === A2bcfa2 || Aed622e['skipEmptyString'] && '' === A2bcfa2 ? A331d0f : null === A2bcfa2 ? [
                                        ...A331d0f,
                                        [
                                            A3a6baa(A40a1d8, Aed622e),
                                            '[',
                                            A42148b,
                                            ']'
                                        ]['join']('')
                                    ] : [
                                        ...A331d0f,
                                        [
                                            A3a6baa(A40a1d8, Aed622e),
                                            '[',
                                            A3a6baa(A42148b, Aed622e),
                                            ']=',
                                            A3a6baa(A2bcfa2, Aed622e)
                                        ]['join']('')
                                    ];
                                };
                            case 'bracket':
                                return A89634b => (A12aea0, A1a7900) => void 0 === A1a7900 || Aed622e['skipNull'] && null === A1a7900 || Aed622e['skipEmptyString'] && '' === A1a7900 ? A12aea0 : null === A1a7900 ? [
                                    ...A12aea0,
                                    [
                                        A3a6baa(A89634b, Aed622e),
                                        '[]'
                                    ]['join']('')
                                ] : [
                                    ...A12aea0,
                                    [
                                        A3a6baa(A89634b, Aed622e),
                                        '[]=',
                                        A3a6baa(A1a7900, Aed622e)
                                    ]['join']('')
                                ];
                            case 'colon-list-separator':
                                return A108c4b => (Af99615, A56b334) => void 0 === A56b334 || Aed622e['skipNull'] && null === A56b334 || Aed622e['skipEmptyString'] && '' === A56b334 ? Af99615 : null === A56b334 ? [
                                    ...Af99615,
                                    [
                                        A3a6baa(A108c4b, Aed622e),
                                        ':list='
                                    ]['join']('')
                                ] : [
                                    ...Af99615,
                                    [
                                        A3a6baa(A108c4b, Aed622e),
                                        ':list=',
                                        A3a6baa(A56b334, Aed622e)
                                    ]['join']('')
                                ];
                            case 'comma':
                            case 'separator':
                            case 'bracket-separator': {
                                const A163413 = 'bracket-separator' === Aed622e['arrayFormat'] ? '[]=' : '=';
                                return A19ec3a => (A31210b, A533ce1) => void 0 === A533ce1 || Aed622e['skipNull'] && null === A533ce1 || Aed622e['skipEmptyString'] && '' === A533ce1 ? A31210b : (A533ce1 = null === A533ce1 ? '' : A533ce1, 0 === A31210b['length'] ? [
                                    [
                                        A3a6baa(A19ec3a, Aed622e),
                                        A163413,
                                        A3a6baa(A533ce1, Aed622e)
                                    ]['join']('')
                                ] : [
                                    [
                                        A31210b,
                                        A3a6baa(A533ce1, Aed622e)
                                    ]['join'](Aed622e['arrayFormatSeparator'])
                                ]);
                            }
                            default:
                                return A19e253 => (A3fc61d, A554f40) => void 0 === A554f40 || Aed622e['skipNull'] && null === A554f40 || Aed622e['skipEmptyString'] && '' === A554f40 ? A3fc61d : null === A554f40 ? [
                                    ...A3fc61d,
                                    A3a6baa(A19e253, Aed622e)
                                ] : [
                                    ...A3fc61d,
                                    [
                                        A3a6baa(A19e253, Aed622e),
                                        '=',
                                        A3a6baa(A554f40, Aed622e)
                                    ]['join']('')
                                ];
                            }
                        }(A36a87f),
                        A4548c1 = {};
                    for (const A246ab3 of Object['keys'](A4459da))
                        A2714e0(A246ab3) || (A4548c1[A246ab3] = A4459da[A246ab3]);
                    const A336864 = Object['keys'](A4548c1);
                    return !1 !== A36a87f['sort'] && A336864['sort'](A36a87f['sort']), A336864['map'](A564090 => {
                        const A164032 = A4459da[A564090];
                        return void 0 === A164032 ? '' : null === A164032 ? A3a6baa(A564090, A36a87f) : Array['isArray'](A164032) ? 0 === A164032['length'] && 'bracket-separator' === A36a87f['arrayFormat'] ? A3a6baa(A564090, A36a87f) + '[]' : A164032['reduce'](A47398d(A564090), [])['join']('&') : A3a6baa(A564090, A36a87f) + '=' + A3a6baa(A164032, A36a87f);
                    })['filter'](A3bc654 => A3bc654['length'] > 0)['join']('&');
                }, A4c649d['parseUrl'] = (A892e79, A236e96) => {
                    A236e96 = Object['assign']({
                        'decode': !0
                    }, A236e96);
                    const [A3b62de, A17be75] = A465bf8(A892e79, '#');
                    return Object['assign']({
                        'url': A3b62de['split']('?')[0] || '',
                        'query': A3ef43b(A303d2b(A892e79), A236e96)
                    }, A236e96 && A236e96['parseFragmentIdentifier'] && A17be75 ? {
                        'fragmentIdentifier': A4a83cf(A17be75, A236e96)
                    } : {});
                }, A4c649d['stringifyUrl'] = (A3d6542, A39f5b6) => {
                    A39f5b6 = Object['assign']({
                        'encode': !0,
                        'strict': !0,
                        [A556bb5]: !0
                    }, A39f5b6);
                    const A550c1d = A357044(A3d6542['url'])['split']('?')[0] || '',
                        A755d21 = A4c649d['extract'](A3d6542['url']),
                        A1bd9b4 = A4c649d['parse'](A755d21, {
                            'sort': !1
                        }),
                        A474da5 = Object['assign'](A1bd9b4, A3d6542['query']);
                    let A448fd9 = A4c649d['stringify'](A474da5, A39f5b6);
                    A448fd9 && (A448fd9 = '?' + A448fd9);
                    let A5d69ba = function (A40504f) {
                        let A1e249e = '';
                        const A34a34f = A40504f['indexOf']('#');
                        return -1 !== A34a34f && (A1e249e = A40504f['slice'](A34a34f)), A1e249e;
                    }(A3d6542['url']);
                    return A3d6542['fragmentIdentifier'] && (A5d69ba = '#' + (A39f5b6[A556bb5] ? A3a6baa(A3d6542['fragmentIdentifier'], A39f5b6) : A3d6542['fragmentIdentifier'])), '' + A550c1d + A448fd9 + A5d69ba;
                }, A4c649d['pick'] = (A22b93f, A34f35b, A7432e8) => {
                    A7432e8 = Object['assign']({
                        'parseFragmentIdentifier': !0,
                        [A556bb5]: !1
                    }, A7432e8);
                    const {
                        url: A2d2150,
                        query: A473c9f,
                        fragmentIdentifier: A540fc1
                    } = A4c649d['parseUrl'](A22b93f, A7432e8);
                    return A4c649d['stringifyUrl']({
                        'url': A2d2150,
                        'query': A4387b5(A473c9f, A34f35b),
                        'fragmentIdentifier': A540fc1
                    }, A7432e8);
                }, A4c649d['exclude'] = (A3255f2, A3023d5, A3a8f91) => {
                    const A330031 = Array['isArray'](A3023d5) ? A2a9f71 => !A3023d5['includes'](A2a9f71) : (A24fbd2, A2fce08) => !A3023d5(A24fbd2, A2fce08);
                    return A4c649d['pick'](A3255f2, A330031, A3a8f91);
                };
            },
            500: function (A1ca0d5) {
                'use strict';
                A1ca0d5['exports'] = (A1d05b4, A4eef60) => {
                    if ('string' != typeof A1d05b4 || 'string' != typeof A4eef60)
                        throw new TypeError('Expected the arguments to be of type `string`');
                    if ('' === A4eef60)
                        return [A1d05b4];
                    const Ac9b3aa = A1d05b4['indexOf'](A4eef60);
                    return -1 === Ac9b3aa ? [A1d05b4] : [
                        A1d05b4['slice'](0, Ac9b3aa),
                        A1d05b4['slice'](Ac9b3aa + A4eef60['length'])
                    ];
                };
            },
            610: function (A24d34a) {
                'use strict';
                A24d34a['exports'] = A44d556 => encodeURIComponent(A44d556)['replace'](/[!'()*]/g, A47d363 => '%' + A47d363['charCodeAt'](0)['toString'](16)['toUpperCase']());
            },
            150: function (A30ccf7, A16f7c1) {
                var A51f674, A210459;
                'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self && self, A51f674 = function (A466420) {
                    'use strict';
                    if ('object' != typeof globalThis || 'object' != typeof chrome || !chrome || !chrome['runtime'] || !chrome['runtime']['id'])
                        throw new Error('This script should only be loaded in a browser extension.');
                    if (void 0 === globalThis['browser'] || Object['getPrototypeOf'](globalThis['browser']) !== Object['prototype']) {
                        const A3bee91 = 'The message port closed before a response was received.',
                            A2d3f2c = 'Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)',
                            A55808f = A487474 => {
                                const Ac6f190 = {
                                    'alarms': {
                                        'clear': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'clearAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'get': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'getAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'bookmarks': {
                                        'create': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'get': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getChildren': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getRecent': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getSubTree': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getTree': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'move': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        },
                                        'remove': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeTree': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'search': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'update': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        }
                                    },
                                    'browserAction': {
                                        'disable': {
                                            'minArgs': 0,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'enable': {
                                            'minArgs': 0,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'getBadgeBackgroundColor': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getBadgeText': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getPopup': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getTitle': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'openPopup': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'setBadgeBackgroundColor': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'setBadgeText': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'setIcon': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'setPopup': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'setTitle': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        }
                                    },
                                    'browsingData': {
                                        'remove': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        },
                                        'removeCache': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeCookies': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeDownloads': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeFormData': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeHistory': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeLocalStorage': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removePasswords': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removePluginData': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'settings': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'commands': {
                                        'getAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'contextMenus': {
                                        'remove': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'update': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        }
                                    },
                                    'cookies': {
                                        'get': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getAll': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getAllCookieStores': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'remove': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'set': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'devtools': {
                                        'inspectedWindow': {
                                            'eval': {
                                                'minArgs': 1,
                                                'maxArgs': 2,
                                                'singleCallbackArg': !1
                                            }
                                        },
                                        'panels': {
                                            'create': {
                                                'minArgs': 3,
                                                'maxArgs': 3,
                                                'singleCallbackArg': !0
                                            },
                                            'elements': {
                                                'createSidebarPane': {
                                                    'minArgs': 1,
                                                    'maxArgs': 1
                                                }
                                            }
                                        }
                                    },
                                    'downloads': {
                                        'cancel': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'download': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'erase': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getFileIcon': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'open': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'pause': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeFile': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'resume': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'search': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'show': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        }
                                    },
                                    'extension': {
                                        'isAllowedFileSchemeAccess': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'isAllowedIncognitoAccess': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'history': {
                                        'addUrl': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'deleteAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'deleteRange': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'deleteUrl': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getVisits': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'search': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'i18n': {
                                        'detectLanguage': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getAcceptLanguages': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'identity': {
                                        'launchWebAuthFlow': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'idle': {
                                        'queryState': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'management': {
                                        'get': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'getSelf': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'setEnabled': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        },
                                        'uninstallSelf': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        }
                                    },
                                    'notifications': {
                                        'clear': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'create': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'getAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'getPermissionLevel': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'update': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        }
                                    },
                                    'pageAction': {
                                        'getPopup': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getTitle': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'hide': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'setIcon': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'setPopup': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'setTitle': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        },
                                        'show': {
                                            'minArgs': 1,
                                            'maxArgs': 1,
                                            'fallbackToNoCallback': !0
                                        }
                                    },
                                    'permissions': {
                                        'contains': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getAll': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'remove': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'request': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'runtime': {
                                        'getBackgroundPage': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'getPlatformInfo': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'openOptionsPage': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'requestUpdateCheck': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'sendMessage': {
                                            'minArgs': 1,
                                            'maxArgs': 3
                                        },
                                        'sendNativeMessage': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        },
                                        'setUninstallURL': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'sessions': {
                                        'getDevices': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'getRecentlyClosed': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'restore': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        }
                                    },
                                    'storage': {
                                        'local': {
                                            'clear': {
                                                'minArgs': 0,
                                                'maxArgs': 0
                                            },
                                            'get': {
                                                'minArgs': 0,
                                                'maxArgs': 1
                                            },
                                            'getBytesInUse': {
                                                'minArgs': 0,
                                                'maxArgs': 1
                                            },
                                            'remove': {
                                                'minArgs': 1,
                                                'maxArgs': 1
                                            },
                                            'set': {
                                                'minArgs': 1,
                                                'maxArgs': 1
                                            }
                                        },
                                        'managed': {
                                            'get': {
                                                'minArgs': 0,
                                                'maxArgs': 1
                                            },
                                            'getBytesInUse': {
                                                'minArgs': 0,
                                                'maxArgs': 1
                                            }
                                        },
                                        'sync': {
                                            'clear': {
                                                'minArgs': 0,
                                                'maxArgs': 0
                                            },
                                            'get': {
                                                'minArgs': 0,
                                                'maxArgs': 1
                                            },
                                            'getBytesInUse': {
                                                'minArgs': 0,
                                                'maxArgs': 1
                                            },
                                            'remove': {
                                                'minArgs': 1,
                                                'maxArgs': 1
                                            },
                                            'set': {
                                                'minArgs': 1,
                                                'maxArgs': 1
                                            }
                                        }
                                    },
                                    'tabs': {
                                        'captureVisibleTab': {
                                            'minArgs': 0,
                                            'maxArgs': 2
                                        },
                                        'create': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'detectLanguage': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'discard': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'duplicate': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'executeScript': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'get': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getCurrent': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        },
                                        'getZoom': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'getZoomSettings': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'goBack': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'goForward': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'highlight': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'insertCSS': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'move': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        },
                                        'query': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'reload': {
                                            'minArgs': 0,
                                            'maxArgs': 2
                                        },
                                        'remove': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'removeCSS': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'sendMessage': {
                                            'minArgs': 2,
                                            'maxArgs': 3
                                        },
                                        'setZoom': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'setZoomSettings': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'update': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        }
                                    },
                                    'topSites': {
                                        'get': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'webNavigation': {
                                        'getAllFrames': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'getFrame': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    },
                                    'webRequest': {
                                        'handlerBehaviorChanged': {
                                            'minArgs': 0,
                                            'maxArgs': 0
                                        }
                                    },
                                    'windows': {
                                        'create': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'get': {
                                            'minArgs': 1,
                                            'maxArgs': 2
                                        },
                                        'getAll': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'getCurrent': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'getLastFocused': {
                                            'minArgs': 0,
                                            'maxArgs': 1
                                        },
                                        'remove': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'update': {
                                            'minArgs': 2,
                                            'maxArgs': 2
                                        }
                                    }
                                };
                                if (0 === Object['keys'](Ac6f190)['length'])
                                    throw new Error('api-metadata.json has not been included in browser-polyfill');
                                class A316695 extends WeakMap {
                                    constructor(A26bae4, Aa5ba78) {
                                            super(Aa5ba78), this['createItem'] = A26bae4;
                                        }
                                        ['get'](A186447) {
                                            return this['has'](A186447) || this['set'](A186447, this['createItem'](A186447)), super['get'](A186447);
                                        }
                                }
                                const A344378 = (A88dd6b, A2ffb88) => (...A43ac22) => {
                                        A487474['runtime']['lastError'] ? A88dd6b['reject'](new Error(A487474['runtime']['lastError']['message'])) : A2ffb88['singleCallbackArg'] || A43ac22['length'] <= 1 && !1 !== A2ffb88['singleCallbackArg'] ? A88dd6b['resolve'](A43ac22[0]) : A88dd6b['resolve'](A43ac22);
                                    },
                                    A8251 = A2a1da3 => 1 == A2a1da3 ? 'argument' : 'arguments',
                                    A5e0de5 = (A3c503c, A2dfe19, A210d50) => new Proxy(A2dfe19, {
                                        'apply': (A14dabc, A229be6, A1dd6a3) => A210d50['call'](A229be6, A3c503c, ...A1dd6a3)
                                    });
                                let A4c4bfc = Function['call']['bind'](Object['prototype']['hasOwnProperty']);
                                const A36cf5b = (A276e2a, A43ac4c = {}, A2817e8 = {}) => {
                                        let A169de5 = Object['create'](null),
                                            A95878e = {
                                                'has': (A19117a, A3d1689) => A3d1689 in A276e2a || A3d1689 in A169de5,
                                                'get'(A2df70f, A1bffe2, A2837d) {
                                                    if (A1bffe2 in A169de5)
                                                        return A169de5[A1bffe2];
                                                    if (!(A1bffe2 in A276e2a))
                                                        return;
                                                    let A10e72c = A276e2a[A1bffe2];
                                                    if ('function' == typeof A10e72c) {
                                                        if ('function' == typeof A43ac4c[A1bffe2])
                                                            A10e72c = A5e0de5(A276e2a, A276e2a[A1bffe2], A43ac4c[A1bffe2]);
                                                        else {
                                                            if (A4c4bfc(A2817e8, A1bffe2)) {
                                                                let A5ba7bc = ((A2f67d7, Af012f7) => function (A3b70b2, ...A5750a1) {
                                                                    if (A5750a1['length'] < Af012f7['minArgs'])
                                                                        throw new Error('Expected at least ' + Af012f7['minArgs'] + ' ' + A8251(Af012f7['minArgs']) + ' for ' + A2f67d7 + '(), got ' + A5750a1['length']);
                                                                    if (A5750a1['length'] > Af012f7['maxArgs'])
                                                                        throw new Error('Expected at most ' + Af012f7['maxArgs'] + ' ' + A8251(Af012f7['maxArgs']) + ' for ' + A2f67d7 + '(), got ' + A5750a1['length']);
                                                                    return new Promise((A36ba8f, A3cbc2a) => {
                                                                        if (Af012f7['fallbackToNoCallback'])
                                                                            try {
                                                                                A3b70b2[A2f67d7](...A5750a1, A344378({
                                                                                    'resolve': A36ba8f,
                                                                                    'reject': A3cbc2a
                                                                                }, Af012f7));
                                                                            } catch (A29b87a) {
                                                                                console['warn'](A2f67d7 + ' API method doesn\'t seem to support the callback parameter, falling back to call it without a callback: ', A29b87a), A3b70b2[A2f67d7](...A5750a1), Af012f7['fallbackToNoCallback'] = !1, Af012f7['noCallback'] = !0, A36ba8f();
                                                                            }
                                                                        else
                                                                            Af012f7['noCallback'] ? (A3b70b2[A2f67d7](...A5750a1), A36ba8f()) : A3b70b2[A2f67d7](...A5750a1, A344378({
                                                                                'resolve': A36ba8f,
                                                                                'reject': A3cbc2a
                                                                            }, Af012f7));
                                                                    });
                                                                })(A1bffe2, A2817e8[A1bffe2]);
                                                                A10e72c = A5e0de5(A276e2a, A276e2a[A1bffe2], A5ba7bc);
                                                            } else
                                                                A10e72c = A10e72c['bind'](A276e2a);
                                                        }
                                                    } else {
                                                        if ('object' == typeof A10e72c && null !== A10e72c && (A4c4bfc(A43ac4c, A1bffe2) || A4c4bfc(A2817e8, A1bffe2)))
                                                            A10e72c = A36cf5b(A10e72c, A43ac4c[A1bffe2], A2817e8[A1bffe2]);
                                                        else {
                                                            if (!A4c4bfc(A2817e8, '*'))
                                                                return Object['defineProperty'](A169de5, A1bffe2, {
                                                                    'configurable': !0,
                                                                    'enumerable': !0,
                                                                    'get': () => A276e2a[A1bffe2],
                                                                    'set'(A566adc) {
                                                                        A276e2a[A1bffe2] = A566adc;
                                                                    }
                                                                }), A10e72c;
                                                            A10e72c = A36cf5b(A10e72c, A43ac4c[A1bffe2], A2817e8['*']);
                                                        }
                                                    }
                                                    return A169de5[A1bffe2] = A10e72c, A10e72c;
                                                },
                                                'set': (A20860e, A4a1f0e, A13c685, A52fa4a) => (A4a1f0e in A169de5 ? A169de5[A4a1f0e] = A13c685 : A276e2a[A4a1f0e] = A13c685, !0),
                                                'defineProperty': (A198475, A421339, A2a16e4) => Reflect['defineProperty'](A169de5, A421339, A2a16e4),
                                                'deleteProperty': (A203963, A1b7162) => Reflect['deleteProperty'](A169de5, A1b7162)
                                            },
                                            A191fb0 = Object['create'](A276e2a);
                                        return new Proxy(A191fb0, A95878e);
                                    },
                                    A56640d = A343eb2 => ({
                                        'addListener'(A3be8c0, A2b72d9, ...A2c07b7) {
                                            A3be8c0['addListener'](A343eb2['get'](A2b72d9), ...A2c07b7);
                                        },
                                        'hasListener': (A3fb3c0, A5e7ef8) => A3fb3c0['hasListener'](A343eb2['get'](A5e7ef8)),
                                        'removeListener'(Abdda20, A26b848) {
                                            Abdda20['removeListener'](A343eb2['get'](A26b848));
                                        }
                                    }),
                                    A55904a = new A316695(A47a825 => 'function' != typeof A47a825 ? A47a825 : function (A4b2859) {
                                        const Ad20c24 = A36cf5b(A4b2859, {}, {
                                            'getContent': {
                                                'minArgs': 0,
                                                'maxArgs': 0
                                            }
                                        });
                                        A47a825(Ad20c24);
                                    });
                                let A273ef4 = !1;
                                const A38f190 = new A316695(A3c4aa6 => 'function' != typeof A3c4aa6 ? A3c4aa6 : function (A3393d8, A3bec43, A43cd86) {
                                        let A49c4f2, A28c12a, A2812ee = !1,
                                            A3812bb = new Promise(A47bab0 => {
                                                A49c4f2 = function (A2d2acc) {
                                                    A273ef4 || (console['warn'](A2d3f2c, new Error()['stack']), A273ef4 = !0), A2812ee = !0, A47bab0(A2d2acc);
                                                };
                                            });
                                        try {
                                            A28c12a = A3c4aa6(A3393d8, A3bec43, A49c4f2);
                                        } catch (A5139a6) {
                                            A28c12a = Promise['reject'](A5139a6);
                                        }
                                        const A2a345e = !0 !== A28c12a && ((A23b4a3 = A28c12a) && 'object' == typeof A23b4a3 && 'function' == typeof A23b4a3['then']);
                                        var A23b4a3;
                                        if (!0 !== A28c12a && !A2a345e && !A2812ee)
                                            return !1;
                                        return (A2a345e ? A28c12a : A3812bb)['then'](A49fec8 => {
                                            A43cd86(A49fec8);
                                        }, A665669 => {
                                            let Acd6320;
                                            Acd6320 = A665669 && (A665669 instanceof Error || 'string' == typeof A665669['message']) ? A665669['message'] : 'An unexpected error occurred', A43cd86({
                                                '__mozWebExtensionPolyfillReject__': !0,
                                                'message': Acd6320
                                            });
                                        })['catch'](A187421 => {
                                            console['error']('Failed to send onMessage rejected reply', A187421);
                                        }), !0;
                                    }),
                                    A2d969e = ({
                                        reject: A47a38c,
                                        resolve: A51e5b8
                                    }, A4f1fe7) => {
                                        A487474['runtime']['lastError'] ? A487474['runtime']['lastError']['message'] === A3bee91 ? A51e5b8() : A47a38c(new Error(A487474['runtime']['lastError']['message'])) : A4f1fe7 && A4f1fe7['__mozWebExtensionPolyfillReject__'] ? A47a38c(new Error(A4f1fe7['message'])) : A51e5b8(A4f1fe7);
                                    },
                                    A1939bf = (Af5f312, Ad76262, A393a46, ...Aa1e711) => {
                                        if (Aa1e711['length'] < Ad76262['minArgs'])
                                            throw new Error('Expected at least ' + Ad76262['minArgs'] + ' ' + A8251(Ad76262['minArgs']) + ' for ' + Af5f312 + '(), got ' + Aa1e711['length']);
                                        if (Aa1e711['length'] > Ad76262['maxArgs'])
                                            throw new Error('Expected at most ' + Ad76262['maxArgs'] + ' ' + A8251(Ad76262['maxArgs']) + ' for ' + Af5f312 + '(), got ' + Aa1e711['length']);
                                        return new Promise((A546f9d, A1b7f58) => {
                                            const A1337fc = A2d969e['bind'](null, {
                                                'resolve': A546f9d,
                                                'reject': A1b7f58
                                            });
                                            Aa1e711['push'](A1337fc), A393a46['sendMessage'](...Aa1e711);
                                        });
                                    },
                                    Adeca70 = {
                                        'devtools': {
                                            'network': {
                                                'onRequestFinished': A56640d(A55904a)
                                            }
                                        },
                                        'runtime': {
                                            'onMessage': A56640d(A38f190),
                                            'onMessageExternal': A56640d(A38f190),
                                            'sendMessage': A1939bf['bind'](null, 'sendMessage', {
                                                'minArgs': 1,
                                                'maxArgs': 3
                                            })
                                        },
                                        'tabs': {
                                            'sendMessage': A1939bf['bind'](null, 'sendMessage', {
                                                'minArgs': 2,
                                                'maxArgs': 3
                                            })
                                        }
                                    },
                                    A3199c6 = {
                                        'clear': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'get': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        },
                                        'set': {
                                            'minArgs': 1,
                                            'maxArgs': 1
                                        }
                                    };
                                return Ac6f190['privacy'] = {
                                    'network': {
                                        '*': A3199c6
                                    },
                                    'services': {
                                        '*': A3199c6
                                    },
                                    'websites': {
                                        '*': A3199c6
                                    }
                                }, A36cf5b(A487474, Adeca70, Ac6f190);
                            };
                        A466420['exports'] = A55808f(chrome);
                    } else
                        A466420['exports'] = globalThis['browser'];
                }, void 0 === (A210459 = A51f674['apply'](A16f7c1, [A30ccf7])) || (A30ccf7['exports'] = A210459);
            }
        },
        A520c23 = {};

    function A53eba3(A270406) {
        var A5644ed = A520c23[A270406];
        if (void 0 !== A5644ed)
            return A5644ed['exports'];
        var Ab13f25 = A520c23[A270406] = {
            'exports': {}
        };
        return A18da19[A270406]['call'](Ab13f25['exports'], Ab13f25, Ab13f25['exports'], A53eba3), Ab13f25['exports'];
    }
    A53eba3['n'] = function (A242160) {
        var A378cd7 = A242160 && A242160['__esModule'] ? function () {
            return A242160['default'];
        } : function () {
            return A242160;
        };
        return A53eba3['d'](A378cd7, {
            'a': A378cd7
        }), A378cd7;
    }, A53eba3['d'] = function (A468b77, A5af2d2) {
        for (var A26783a in A5af2d2)
            A53eba3['o'](A5af2d2, A26783a) && !A53eba3['o'](A468b77, A26783a) && Object['defineProperty'](A468b77, A26783a, {
                'enumerable': !0,
                'get': A5af2d2[A26783a]
            });
    }, A53eba3['o'] = function (A1d3a81, A3d058) {
        return Object['prototype']['hasOwnProperty']['call'](A1d3a81, A3d058);
    }, (function () {
        'use strict';
        var Aa6f95e = A53eba3(563),
            A50275e = A53eba3(150),
            A564d8c = A53eba3['n'](A50275e),
            A443876 = A53eba3(484),
            A1f5984 = A53eba3['n'](A443876),
            A39a453 = async function () {
                const A258b7e = await A564d8c()['storage']['local']['get']({
                    'uuid': null
                });
                if (A258b7e['uuid'])
                    return A258b7e['uuid'];
                const A470b9e = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' ['replace'](/[xy]/g, function (A3886c5) {
                    var A5e9b4d = 16 * Math['random']() | 0;
                    return ('x' == A3886c5 ? A5e9b4d : 3 & A5e9b4d | 8)['toString'](16);
                });
                return await A564d8c()['storage']['local']['set']({
                    'uuid': A470b9e
                }), A470b9e;
            }, A23dddf = A53eba3(227), Aa49e8e = A53eba3['n'](A23dddf)()('ytt'), A28938a = function () {
                let A45d245 = 'unknown';
                const {
                    userAgent: A47c427
                } = navigator;
                return -1 !== A47c427['indexOf']('YaBrowser/') ? A45d245 = 'yabrowser' : -1 !== A47c427['indexOf']('Maxthon/') ? A45d245 = 'maxthon' : -1 !== A47c427['indexOf']('OPR/') ? A45d245 = 'opera-chromium' : -1 !== A47c427['indexOf']('Opera/') ? A45d245 = 'opera' : -1 !== A47c427['indexOf']('Edg/') ? A45d245 = 'edge' : -1 !== A47c427['indexOf']('Firefox/') ? A45d245 = 'firefox' : -1 !== A47c427['indexOf']('Chrome/') ? A45d245 = 'chrome' : -1 !== A47c427['indexOf']('Safari/') && (A45d245 = 'safari'), '' ['concat'](A45d245, '-')['concat']('chrome');
            };
        const A1e21e5 = 'country.code',
            A5ca7ff = 'country.updated';
        var A31d2c8 = async function () {
            const A72f3d = A3b08,
                A1f86f8 = await A564d8c()['storage']['local']['get']({
                    [A1e21e5]: 'UNKNOWN',
                    [A5ca7ff]: null
                }),
                A3d24ed = A1f5984()()['format']('MM');
            if (A3d24ed === A1f86f8['country.updated'])
                return A1f86f8['country.code'];
            try {
                const Aa34f54 = A28938a(),
                    A1cbc05 = A564d8c()['runtime']['getManifest'](),
                    A1dd4e8 = '' ['concat'](Aa34f54, ' ')['concat'](A1cbc05['version']),
                    A5c6020 = {
                        'Ext-Info': A1dd4e8,
                        'Ext-Sig': A1dd4e8[A72f3d(328)]
                    },
                    A38079d = await fetch('https://olpxmd7ib2.execute-api.us-east-1.amazonaws.com/getCountry', {
                        'headers': A5c6020
                    }),
                    A28c03b = await A38079d['json']();
                return await A564d8c()['storage']['local']['set']({
                    [A1e21e5]: A28c03b,
                    [A5ca7ff]: A3d24ed
                }), A28c03b;
            } catch (A5b3c96) {
                return A1f86f8['country.code'];
            }
        };
        const A35b7e5 = Aa49e8e['extend']('background'),
            A151f10 = {};
        A151f10['actionsList'] = {
            async 'init'() {
                const {
                    lastTrackDate: A2db8e3
                } = await A564d8c()['storage']['local']['get']({
                    'lastTrackDate': null
                }), A43265d = A1f5984()()['format']('YYYY-MM-DD');
                A2db8e3 && A43265d === A2db8e3 ? A35b7e5('don\'t send init because you already did it today') : (await this['track']({
                    'payload': {
                        't': 'screenview',
                        'cd': 'init'
                    }
                }), await this['track4']({
                    'payload': {
                        'events': [{
                            'name': 'initBackground',
                            'params': {}
                        }]
                    }
                }), await A564d8c()['storage']['local']['set']({
                    'lastTrackDate': A43265d
                }));
            },
            async 'track'(A24334d) {
                const A9e3afa = A24334d['payload'],
                    A54e792 = await A39a453(),
                    A5b2672 = await A31d2c8(),
                    Ac15d5b = {
                        'v': 1,
                        'tid': 'UA-216910591-1',
                        'cid': A54e792,
                        'cd1': A54e792,
                        'av': A564d8c()['runtime']['getManifest']()['version'],
                        'an': A28938a(),
                        'ul': A564d8c()['i18n']['getMessage']('@@ui_locale'),
                        'cd3': A5b2672,
                        ...A9e3afa
                    };
                A35b7e5('GA', Ac15d5b);
                try {
                    return await fetch('https://www.google-analytics.com/collect', {
                        'method': 'POST',
                        'body': Aa6f95e['stringify'](Ac15d5b)
                    }), !0;
                } catch (A2f944b) {
                    return !1;
                }
            },
            async 'track4'(A27216a) {
                const A161bb4 = A3b08,
                    A28e78d = A27216a['payload'],
                    A507a52 = await A39a453(),
                    A58715b = await A31d2c8(),
                    A522ccc = {
                        'client_id': A507a52,
                        'user_properties': {
                            'version': {
                                'value': A564d8c()['runtime']['getManifest']()['version']
                            },
                            'app_name': {
                                'value': A28938a()
                            },
                            'language': {
                                'value': A564d8c()['i18n']['getMessage']('@@ui_locale')
                            },
                            'country': {
                                'value': A58715b
                            }
                        },
                        ...A28e78d
                    };
                A35b7e5('GA4', A522ccc);
                try {
                    const A34e640 = Aa6f95e['stringify']({
                            'measurement_id': 'G-21GS3N4ZFB',
                            'api_secret': A161bb4(329)
                        }),
                        A198fce = 'https://www.google-analytics.com/mp/collect?' ['concat'](A34e640);
                    return await fetch(A198fce, {
                        'method': 'POST',
                        'body': JSON['stringify'](A522ccc)
                    }), !0;
                } catch (A27e5bd) {
                    return !1;
                }
            },
            async 'getTags'(A20128e) {
                const {
                    videoId: A48cc49
                } = A20128e['payload'], A54b267 = {
                    'error': null,
                    'keywords': [],
                    'videoId': A48cc49
                };
                try {
                    const A37d003 = 'https://www.youtube.com/watch?v=' ['concat'](A48cc49),
                        A5105a5 = await fetch(A37d003),
                        A59b8d1 = (await A5105a5['text']())['match'](/"keywords":(\[.+?\]),/);
                    if (!A59b8d1)
                        return A54b267;
                    const A3b3c5a = JSON['parse'](A59b8d1[1])['map'](A27e7aa => {
                        const A26cab8 = Aa6f95e['stringify']({
                            'search_query': A27e7aa
                        });
                        return {
                            'name': A27e7aa,
                            'link': 'https://www.youtube.com/results?' ['concat'](A26cab8)
                        };
                    });
                    A54b267['keywords'] = A3b3c5a;
                } catch (A62beda) {
                    A54b267['error'] = A62beda['message'];
                }
                return A54b267;
            }
        }, A564d8c()['runtime']['onMessage']['addListener'](A4ca55c => {
            if (!A4ca55c || 'object' != typeof A4ca55c)
                return null;
            const {
                action: A4bd417
            } = A4ca55c;
            return A4bd417 in A151f10['actionsList'] ? A151f10['actionsList'][A4bd417](A4ca55c) : null;
        });
        const A1ddc19 = 'send-init';
        A564d8c()['alarms']['onAlarm']['addListener'](A5677bd => {
            A35b7e5('alarm received', A5677bd), A5677bd['name'] === A1ddc19 && A151f10['actionsList']['init']();
        }), A564d8c()['alarms']['create'](A1ddc19, {
            'periodInMinutes': 1440
        }), A151f10['actionsList']['init']();
    }());
}());