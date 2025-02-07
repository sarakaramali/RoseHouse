$(function () {

    $('a').click(function (e){
        e.preventDefault();
    })

    //shop
    $('.menu:first').show();




    $('#shop .menu-list li a').click(function (e) {
        e.preventDefault();
        let target = $(this).attr('href');

        $('.menu:visible').hide();
        $(target).show();
    })

    //article
    $('.more-text').click(function (e) {
        e.preventDefault();
        if ($(this).text() === 'مشاهده بیشتر +') {
            $(this).text(' مشاهده کمتر -');
        } else {
            $(this).text('مشاهده بیشتر +');
        }
        $('.articles-text-hide').fadeToggle();
    })

    //articles2
    $('.articles2-text:first').show();

    $('#articles2 .list_popover li a').click(function (e) {
        e.preventDefault();
        let target2 = $(this).attr('href');
        $('.articles2-text:visible').hide();
        $(target2).show();

    })

    //part
    let part = [
        {
            title: 'بخش های مجموعه 1',
            comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        },
        {
            title: 'بخش های مجموعه 2',

            comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
        },

        {
            title: 'بخش های مجموعه 3',
            comment: 'پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گ پس دوست خدایی، چون من دیشب ف کفش ندارم… پیر مرد سر کی با کفش ه ایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم…',
        }
    ];

    function showDetails(index) {
        let details = part[index];
        $('.explain-part h6').text(details.title);
        $('.explain-part p').text(details.comment);
    }

    let currentIndex = 0;
    // $('.explain-part:first').show();
    $('#part .carousel-control-next-icon').click(function () {
        currentIndex++;
        if (currentIndex > part.length - 1) {
            currentIndex = 0;
        }
        showDetails(currentIndex);
    })
    $('#part .carousel-control-prev-icon').click(function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = part.length - 1;
        }
        showDetails(currentIndex);
    })

})