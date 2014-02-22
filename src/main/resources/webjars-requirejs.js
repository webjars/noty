requirejs.config({
    paths: { "noty": webjars.path("noty", "jquery.noty.packaged") },
    shim: { "noty": [ "jquery" ] }
});
