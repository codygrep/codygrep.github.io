module.exports = function (config) {

    config.addPassthroughCopy({ "src/favicon": "/" });

    config.addPassthroughCopy({ "src/img": "/img" });

    config.addFilter("noposts", function (values) {
        return values.filter(v => v != "post");
    });

    config.addFilter("nopostsobj", function (dict) {
        var x = {};
        for (var key in dict) {
            if (key != "post" && key != "all") {
                x[key] = dict[key];
            }
        }
        return x;
    });

    config.addFilter("postdate", (dateObj) => {
        return new Date(dateObj).toISOString().slice(0, 10);
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    }
};
