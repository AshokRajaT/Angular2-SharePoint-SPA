var gulp = require('gulp')
var auth = require('./_private/settings');
var spsave = require('gulp-spsave');

gulp.task("spsave", function () {
    return gulp.src(["./dist/_sp/SitePages/ng2/**/*.*"])
        .pipe(spsave({
            siteUrl: auth.siteUrl,
            folder: "SitePages/ng2",
            flatten: false
        }, auth));
});