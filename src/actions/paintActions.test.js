/**
* Libraries
*/

import configureStore from 'redux-mock-store';

/**
* Constants
*/

import * as Actions from '../actions';
import * as actionTypes from "../constants/actionTypes";

/**
* Tests
*/

const mockStore = configureStore();
const store = mockStore();

describe('paintActions', () => {
    beforeEach(() => { // Runs before each test in the suite
      store.clearActions();
    });

    it('Dispatches the correct action and payload (mouseDown)', () => {
        const expectedActions = [
            {
                type: actionTypes.MOUSE_DOWN,
                val: true
            }
        ];

        store.dispatch(Actions.mouseDown(true));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (getColor)', () => {
        const expectedActions = [
            {
                type: actionTypes.GET_COLOR,
                color: "green"
            }
        ];

        store.dispatch(Actions.getColor("green"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (captureLastXY)', () => {
        const expectedActions = [
            {
                type: actionTypes.CAPTURE_LAST_X_Y,
                lastX: 54,
                lastY: 67
            }
        ];

        store.dispatch(Actions.captureLastXY(54, 67));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (captureXY)', () => {
        const expectedActions = [
            {
                type: actionTypes.CAPTURE_X_Y,
                x: 64,
                y: 784
            }
        ];

        store.dispatch(Actions.captureXY(64, 784));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (toggleColorPicker)', () => {
        const expectedActions = [
            {
                type: actionTypes.TOGGLE_COLOR_PICKER,
                val: false
            }
        ];

        store.dispatch(Actions.toggleColorPicker(false));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (getBgColor)', () => {
        const expectedActions = [
            {
                type: actionTypes.GET_BG_COLOR,
                color: "pink"
            }
        ];

        store.dispatch(Actions.getBgColor("pink"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (whichButton)', () => {
        const expectedActions = [
            {
                type: actionTypes.WHICH_BUTTON,
                name: "color"
            }
        ];

        store.dispatch(Actions.whichButton("color"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (chooseTool)', () => {
        const expectedActions = [
            {
                type: actionTypes.CHOOSE_TOOL,
                tool: "pencil"
            }
        ];

        store.dispatch(Actions.chooseTool("pencil"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (getSize)', () => {
        const expectedActions = [
            {
                type: actionTypes.GET_SIZE,
                tool: "eraser",
                val: 638
            }
        ];

        store.dispatch(Actions.getSize("eraser", 638));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (updateCanvasSizeScreen)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_CANVAS_SIZE_SCREEN,
                arrow: "Xdown"
            }
        ];

        store.dispatch(Actions.updateCanvasSizeScreen("Xdown"));
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });

    it('Dispatches the correct action and payload (updateCanvasSize)', () => {
        const expectedActions = [
            {
                type: actionTypes.UPDATE_CANVAS_SIZE
            }
        ];

        store.dispatch(Actions.updateCanvasSize());
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions()).toMatchSnapshot();
    });
});
