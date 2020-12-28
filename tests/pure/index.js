/* eslint-disable import/first -- ignore */
import '../helpers/qunit-helpers';
import { GLOBAL } from '../helpers/constants';

QUnit.module('ES');
import './es.aggregate-error';
import './es.array.concat';
import './es.array.copy-within';
import './es.array.every';
import './es.array.fill';
import './es.array.filter';
import './es.array.find-index';
import './es.array.find';
import './es.array.for-each';
import './es.array.flat';
import './es.array.flat-map';
import './es.array.from';
import './es.array.includes';
import './es.array.index-of';
import './es.array.iterator';
import './es.array.join';
import './es.array.last-index-of';
import './es.array.map';
import './es.array.of';
import './es.array.reduce-right';
import './es.array.reduce';
import './es.array.reverse';
import './es.array.slice';
import './es.array.some';
import './es.array.sort';
import './es.array.splice';
import './es.date.to-iso-string';
import './es.date.to-json';
import './es.function.has-instance';
import './es.global-this';
import './es.json.stringify';
import './es.map';
import './es.math.acosh';
import './es.math.asinh';
import './es.math.atanh';
import './es.math.cbrt';
import './es.math.clz32';
import './es.math.cosh';
import './es.math.expm1';
import './es.math.fround';
import './es.math.hypot';
import './es.math.imul';
import './es.math.log10';
import './es.math.log1p';
import './es.math.log2';
import './es.math.sign';
import './es.math.sinh';
import './es.math.tanh';
import './es.math.trunc';
import './es.number.epsilon';
import './es.number.is-finite';
import './es.number.is-integer';
import './es.number.is-nan';
import './es.number.is-safe-integer';
import './es.number.max-safe-integer';
import './es.number.min-safe-integer';
import './es.number.parse-float';
import './es.number.parse-int';
import './es.number.to-fixed';
import './es.number.to-precision';
import './es.object.assign';
import './es.object.create';
import './es.object.define-getter';
import './es.object.define-properties';
import './es.object.define-property';
import './es.object.define-setter';
import './es.object.entries';
import './es.object.freeze';
import './es.object.from-entries';
import './es.object.get-own-property-descriptor';
import './es.object.get-own-property-descriptors';
import './es.object.get-own-property-names';
import './es.object.get-prototype-of';
import './es.object.is-extensible';
import './es.object.is-frozen';
import './es.object.is-sealed';
import './es.object.is';
import './es.object.keys';
import './es.object.lookup-getter';
import './es.object.lookup-setter';
import './es.object.prevent-extensions';
import './es.object.seal';
import './es.object.set-prototype-of';
import './es.object.values';
import './es.parse-float';
import './es.parse-int';
import './es.promise.constructor';
import './es.promise.all';
import './es.promise.all-settled';
import './es.promise.any';
import './es.promise.catch';
import './es.promise.finally';
import './es.promise.race';
import './es.promise.reject';
import './es.promise.resolve';
import './es.reflect.apply';
import './es.reflect.construct';
import './es.reflect.define-property';
import './es.reflect.delete-property';
import './es.reflect.get-own-property-descriptor';
import './es.reflect.get-prototype-of';
import './es.reflect.get';
import './es.reflect.has';
import './es.reflect.is-extensible';
import './es.reflect.own-keys';
import './es.reflect.prevent-extensions';
import './es.reflect.set-prototype-of';
import './es.reflect.set';
import './es.set';
import './es.string.anchor';
import './es.string.big';
import './es.string.blink';
import './es.string.bold';
import './es.string.code-point-at';
import './es.string.ends-with';
import './es.string.fixed';
import './es.string.fontcolor';
import './es.string.fontsize';
import './es.string.from-code-point';
import './es.string.includes';
import './es.string.italics';
import './es.string.iterator';
import './es.string.link';
import './es.string.match-all';
import './es.string.pad-end';
import './es.string.pad-start';
import './es.string.raw';
import './es.string.repeat';
import './es.string.small';
import './es.string.starts-with';
import './es.string.strike';
import './es.string.sub';
import './es.string.sup';
import './es.string.trim';
import './es.string.trim-start';
import './es.string.trim-end';
import './es.symbol';
import './es.symbol.async-iterator';
import './es.weak-map';
import './es.weak-set';

QUnit.module('ESNext');
import './esnext.array.at';
import './esnext.array.filter-out';
import './esnext.array.find-last';
import './esnext.array.find-last-index';
import './esnext.array.is-template-object';
import './esnext.array.unique-by';
import './esnext.async-iterator.constructor';
import './esnext.async-iterator.as-indexed-pairs';
import './esnext.async-iterator.drop';
import './esnext.async-iterator.every';
import './esnext.async-iterator.filter';
import './esnext.async-iterator.find';
import './esnext.async-iterator.flat-map';
import './esnext.async-iterator.for-each';
import './esnext.async-iterator.from';
import './esnext.async-iterator.map';
import './esnext.async-iterator.reduce';
import './esnext.async-iterator.some';
import './esnext.async-iterator.take';
import './esnext.async-iterator.to-array';
import './esnext.bigint.range';
import './esnext.composite-key';
import './esnext.composite-symbol';
import './esnext.iterator.constructor';
import './esnext.iterator.as-indexed-pairs';
import './esnext.iterator.drop';
import './esnext.iterator.every';
import './esnext.iterator.filter';
import './esnext.iterator.find';
import './esnext.iterator.flat-map';
import './esnext.iterator.for-each';
import './esnext.iterator.from';
import './esnext.iterator.map';
import './esnext.iterator.reduce';
import './esnext.iterator.some';
import './esnext.iterator.take';
import './esnext.iterator.to-array';
import './esnext.math.clamp';
import './esnext.math.deg-per-rad';
import './esnext.math.degrees';
import './esnext.math.fscale';
import './esnext.math.rad-per-deg';
import './esnext.math.radians';
import './esnext.math.scale';
import './esnext.math.signbit';
import './esnext.number.from-string';
import './esnext.number.range';
import './esnext.observable';
import './esnext.promise.try';
import './esnext.reflect.define-metadata';
import './esnext.reflect.delete-metadata';
import './esnext.reflect.get-metadata-keys';
import './esnext.reflect.get-metadata';
import './esnext.reflect.get-own-matadata';
import './esnext.reflect.get-own-metadata-keys';
import './esnext.reflect.has-metadata';
import './esnext.reflect.has-own-metadata';
import './esnext.reflect.metadata';
import './esnext.map.delete-all';
import './esnext.map.emplace';
import './esnext.map.every';
import './esnext.map.filter';
import './esnext.map.find';
import './esnext.map.find-key';
import './esnext.map.from';
import './esnext.map.group-by';
import './esnext.map.includes';
import './esnext.map.key-by';
import './esnext.map.key-of';
import './esnext.map.map-keys';
import './esnext.map.map-values';
import './esnext.map.merge';
import './esnext.map.of';
import './esnext.map.reduce';
import './esnext.map.some';
import './esnext.map.update';
import './esnext.set.add-all';
import './esnext.set.delete-all';
import './esnext.set.difference';
import './esnext.set.every';
import './esnext.set.filter';
import './esnext.set.find';
import './esnext.set.from';
import './esnext.set.intersection';
import './esnext.set.is-disjoint-from';
import './esnext.set.is-subset-of';
import './esnext.set.is-superset-of';
import './esnext.set.join';
import './esnext.set.map';
import './esnext.set.of';
import './esnext.set.reduce';
import './esnext.set.some';
import './esnext.set.symmetric-difference';
import './esnext.set.union';
import './esnext.string.at';
import './esnext.string.code-points';
import './esnext.symbol.async-dispose';
import './esnext.symbol.dispose';
import './esnext.symbol.observable';
import './esnext.weak-map.delete-all';
import './esnext.weak-map.emplace';
import './esnext.weak-map.from';
import './esnext.weak-map.of';
import './esnext.weak-set.add-all';
import './esnext.weak-set.delete-all';
import './esnext.weak-set.from';
import './esnext.weak-set.of';

QUnit.module('Web');
import './web.dom-collections.iterator';
import './web.immediate';
import './web.queue-microtask';
import './web.timers';
import './web.url';
import './web.url-search-params';

QUnit.module('Helpers');
import './helpers.get-iterator-method';
import './helpers.get-iterator';
import './helpers.is-iterable';

import core from 'core-js-pure';
GLOBAL.core = core;
