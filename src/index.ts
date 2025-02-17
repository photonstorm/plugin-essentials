import {TpPlugin} from '@tweakpane/core';

import {ButtonGridBladePlugin} from './button-grid/plugin';
import {CubicBezierBladePlugin} from './cubic-bezier/plugin';
import {FpsGraphBladePlugin} from './fps-graph/plugin';
import {IntervalInputPlugin} from './interval/plugin';
import {RadioGridBladePlugin} from './radio-grid/blade-plugin';
import {RadioGridNumberInputPlugin} from './radio-grid/input-plugin';

export const plugins: TpPlugin[] = [
	ButtonGridBladePlugin,
	CubicBezierBladePlugin,
	FpsGraphBladePlugin,
	IntervalInputPlugin,
	RadioGridBladePlugin,
	RadioGridNumberInputPlugin,
];
