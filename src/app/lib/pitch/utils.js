// functions used for the pitch shifting

export function hannWindow(length) {

    var window = new Float32Array(length);
    for (var i = 0; i < length; i++) {
        window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
    }
    return window;
};

export function linearInterpolation(a, b, t) {
    return a + (b - a) * t;
};
