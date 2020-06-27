let project_folder = 'dist',
    source_folder = 'src';

let path = {                                    
        build: {
            html: project_folder + "/",
            css: project_folder + "/css/",
            img: project_folder + "/img/",
        },
                
        src: {                                    
            html: source_folder + "/*.html",  
            css: source_folder + "/scss/style.scss",
            img: source_folder + "/img/**/*.{jpg,png,gif,ico,svg,webp}",
        },
    
        watch: {                                     
            html: source_folder + "/**/*.html",
            css: source_folder + "/scss/**/*.scss",
            img: source_folder + "/img/**/*.{jpg,png,gif,ico,svg,webp}",
            
        },
        clean: "./" + project_folder + "/"  
    }


    let {src, dest} = require('gulp'),          
        gulp = require('gulp'),
        browsersync = require('browser-sync').create(),
        scss = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        imagemin = require('gulp-imagemin'),
        webp = require('gulp-webp'),
        webphtml = require('gulp-webp-html');




function browserSync(params) {
    browsersync.init({
    server: {
        baseDir: "./" + project_folder + "/"     
                },
        port: 3000,
        notify: false    
        
     })
     
}


function html() {        
    return src(path.src.html) 
        // .pipe(webphtml())  
        .pipe(dest(path.build.html))     
        .pipe(browsersync.stream())  
                   
}

function css() {
    return src(path.src.css) 
    .pipe (
        scss({
            outputStyle: "expanded"
        })
    )
    // .pipe(
    //     group_media()
    // )
    .pipe(
        autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        })
    )
    // .pipe(webpcss())
    .pipe(dest(path.build.css))   
    // .pipe(clean_css())
    // .pipe(
    //     rename({
    //         extname: ".min.css"    
    //     })
    // )
    // .pipe(dest(path.build.css))     
    .pipe(browsersync.stream())                    
}



function images() {        
    return src(path.src.img)  
    .pipe(
        webp ({
            quality: 90
        })
    )
    .pipe(dest(path.build.img)) //выгрузка
    .pipe(src(path.src.img))  
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 2 //0 to 7

        })
    )   
        .pipe(dest(path.build.img))     
        .pipe(browsersync.stream())                     
}



function watchFiles(params) {
    gulp.watch([path.watch.html],html) 
    gulp.watch([path.watch.css],css)
    gulp.watch([path.watch.img],images)
}



let build = gulp.series(gulp.parallel(css, html, images));    
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.images = images;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;       
exports.default = watch;