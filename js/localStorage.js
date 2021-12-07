var credentials = [];

var islam_info = [
    {
        "name": "Hakeem Olajuwon",
        "photo": "https://cdn.britannica.com/19/200219-050-A33962F1/Hakeem-Olajuwon-1994.jpg",
        "description": `In Olajuwon's college career and early years in the NBA, 
        he was often undisciplined, talking back to officials, getting in minor 
        fights with other players and amassing technical fouls. Later, Olajuwon 
        took an active interest in spirituality, becoming a more devout Muslim. 
        On March 9, 1991, he altered his name from Akeem to the more conventional 
        spelling of Hakeem, saying, "I'm not changing the spelling of my name, I'm 
        correcting it". He later recalled, "I studied the Qur'an every day. At home, 
        at the mosque ... I would read it in airplanes, before games and after them. 
        I was soaking up the faith and learning new meanings each time I turned a page. 
        I didn't dabble in the faith, I gave myself over to it." "His religion 
        dominates his life", Drexler said in 1995.Olajuwon was still recognized 
        as one of the league's elite centers despite his strict observance of Ramadan 
        (i.e., abstaining from food and drink during daylight hours for about a month), 
        which occurred during the playing season throughout his career. Olajuwon was 
        noted as sometimes playing better during the month of Ramadan, and in 1995 
        he was named NBA Player of the Month in February, even though Ramadan 
        began on February 1 of that year. “As for fasting, it is a spiritual 
        mindset that gives you the stamina required to play. Through Allah’s mercy, 
        I always felt stronger and more energetic during Ramadan.”`,
        "video": "https://www.youtube.com/embed/U30RyR39ptQ"
    },
    {
        "name": "Kareem Abdul-Jabbar",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/0/00/Kareem-Abdul-Jabbar_Lipofsky.jpg",
        "description": `At age 24 in 1971, Lou Alcindor converted to Islam and became Kareem Abdul-Jabbar,
        which means "noble one, servant of the Almighty. The 7 foot 2 Kareem played 20 seasons in the NBA, won 6 championships,
        won 6 MVPs, and has scored more points in his career than any other player with 38,387.
        Abdul-Jabbar combined dominance during his career peak with the longevity and sustained excellence of his later years.
        `,
        "video": "https://www.youtube.com/embed/133YwacaFPQ"
    },
    {
        "name": "Imran Khan",
        "photo": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/304900/304900.4.jpg",
        "description": `Imran Khan Niazi is a former first-class cricketer, Pakistani politician who heads the Pakistan Tehreek-e-Insaf.
        He was born on 5th October 1952 at Lahore, Punjab and is currently serving as a member of the National Assembly.
        He played the role of an All-rounder for the Pakistan National team between 1971 and 1992.
        The right-hand batsman is considered to be the best all-rounder just behind Garry Sobers that the sport has ever witnessed.
        In 2010, he was inducted into the ICC Cricket Hall of Fame. Though a traditional Sunni Muslim, many consider him
        not a great example of the faith.`,
        "video": "https://www.youtube.com/embed/POSIwPPod8E"
    },
];

var jewish_info = [
    {
        "name": "Sue Bird",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bird-20180912.jpg/220px-Bird-20180912.jpg",
        "description": `Suzanne Brigit Bird (born October 16, 1980) is an American professional
        basketball player for the Seattle Storm of the Women's National Basketball
        Association (WNBA). Bird was drafted by the Storm first overall in the 2002
        WNBA draft and is considered to be one of the greatest players in WNBA history.
        As of 2021, Bird is the only WNBA player to win titles in three different decades.
        She held a front office position for the NBA's Denver Nuggets as their Basketball
        Operations Associate. She has also played for three teams in Russia. Her family
        is from Israel and she has both American & Israeli citizenship.`,
        "video": "https://www.youtube.com/embed/Ot2hAg27gwk"
    },
    {
        "name": "Joe Alexander",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Joe_Alexander.JPG/220px-Joe_Alexander.JPG",
        "description": `Joe Alexander (ג'ו אלכסנדר; born December 26, 1986) is a Taiwanese-born American-Israeli
        professional basketball player who last played for Maccabi Rishon LeZion of the Israeli Premier League.
        Alexander, who at 6 ft 8 in (2.03 m) plays both forward positions, was selected for the 2007 All-Big East
        squad during his collegiate career with West Virginia and was an All-American Honorable Mention. He was
        selected eighth overall in the 2008 NBA draft by the Milwaukee Bucks. He is the first-ever Taiwanese-born NBA player.
        `,
        "video": "https://www.youtube.com/embed/s7a4qAFKq9g"
    },
];

var popular_sports_jewish = [
    'Soccer',
    'Basketball',
];

var hindu_info = [
    {
        "name": "Virat Kohli",
        "photo": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0226%2Fr506883_1296x729_16%2D9.jpg&w=570&format=jpg",
        "description": `Five years ago, even Sachin Tendulkar haters wouldn't have bet that someone would break his record as the fastest
        batsman to score 10,000 one-day international runs, a feat the legendary cricketer achieved in just 259 innings. Then came Virat Kohli,
        who on Oct. 24, 2018, crushed his childhood hero's record of 10,000 runs by 54 fewer innings. The solace for Tendulkar fans? The record
        stays within the Indian team, just as the Little Master hoped.
        "There's no shame in being beaten by a genius. Virat Kohli is a freak." -- England captain Michael Vaughan`,
        "video": "https://www.youtube.com/embed/x_prt6sDXUQ"
    },
    {
        "name": "MS Dhoni",
        "photo": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0226%2Fr506884_1296x729_16%2D9.jpg&w=570&format=jpg",
        "description": `Mahendra Singh Dhoni (born 7 July 1981), is a former international cricketer who captained the Indian national 
        cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is currently the captain of 
        Chennai Super Kings (CSK), a franchise based team of Indian Premier League. Having won the triple ICC limited-overs tournament as 
        captain (inaugural 2007 ICC World Twenty20, 2011 ICC Cricket World Cup and 2013 ICC Champions Trophy) and bringing Indian cricket team to 
        number one position in ICC test rankings in 2009, Dhoni is often considered as the greatest captain of Indian cricket team. Furthermore, 
        he led CSK to win 2010, 2011, 2018 and 2021 edition of IPL, becoming second most successful IPL captain after Rohit Sharma.
        `,
        "video": "https://www.youtube.com/embed/9548_ms2RXs"
    },
];

var popular_sports_hindu = [
    'Cricket',
    'Soccer',
];

var jain_info = [
    {
        "name": "Phadeppa Dareppa",
        "photo": "https://img.olympicchannel.com/images/image/private/t_16-9_1240-700/f_auto/v1538355600/primary/miip5ocghcyihqiac4v2",
        "description": `In 1919 he took part in the National Marathon organized by the Deccan Gymkhana Club of Pune (then Poona) and after that in some other
        marathons such as 10 Miles and 1 Mile events at the All-India Open Amateur Athletic Sports Meet in Mumbai (Bombay). He was the winner in all these marathons. 
        On 22 August 1920 he ran the Marathon in the Antwerp Olympics and since that point he became the first Indian Olympic participant.
        The house of Karnataka's first Olympian, P D Chaugule is called as Pavananjaya. He received the title Conqueror of the Wind from 
        the local community after on 7 December 1919, after the Antwerp Olimpics, where he was among the top-20.`,
        "video": "https://www.youtube.com/embed/yIn-_rMIq_w"
    },
    {
        "name": "Anju Jain",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/The_President_Dr._A.P.J._Abdul_Kalam_presenting_the_Arjuna_Award_-2005_to_Ms._Anju_Jain_for_Cricket_%28women%29%2C_at_a_glittering_function_in_New_Delhi_on_August_29%2C_2006.jpg/260px-thumbnail.jpg",
        "description": `Anju Jain (born 11 August 1974, in New Delhi) is a former Indian cricketer. She played Women's Test cricket (8 matches between 1995 and 2003) and ODI cricket (65 matches between 1993 and 2005) for India. She was the team wicket-keeper.
        She captained the Indian team in 8 ODI matches, all during the 2000 Cricinfo Women's Cricket World Cup where India advanced to the semi-finals before losing to New Zealand.
        She played for Air India women's cricket team in the Indian women's domestic league. The only player to have played for consecutive four world cups. Her 81 dismissals behind the wicket stands in the fourth position in terms of all-time dismissals by wicket-keepers from all countries. Jain also holds the record for playing the most Women's One Dayers by keeping wicket and by opening the batting as captain(7)
        Anju received the Arjuna Award in 2005 for her sporting achievements from then President of India Dr. APJ Abdul Kalam, hence been declared the best sportsperson of the year in Cricket.
        `,
        "video": "https://www.youtube.com/embed/gci2p40q2mc"
    },
];

var popular_sports_jain = [
    'Cricket',
    'Running',
];

var buda_info = [
    {
        "name": "Tiger Woods",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tiger_Woods_-_AT%26T_National_tournament_2009.jpg/170px-Tiger_Woods_-_AT%26T_National_tournament_2009.jpg",
        "description": `Eldrick Tont "Tiger" Woods (born December 30, 1975) is an American professional golfer. He is tied for first in PGA Tour 
        wins, ranks second in men's major championships, and holds numerous golf records. Woods is widely regarded as one of the greatest golfers of all time and one of the most famous athletes in history. 
        He is an inductee of the World Golf Hall of Fame. He was raised a Theravadan Buddhist.
        "I have a lot of work to do, and I intend to dedicate myself to doing it," Woods said, reading a statement from Ponte Vedra Beach, Florida. "Part of following this path for me is Buddhism, which my mother taught me at a young age."`,
        "video": "https://www.youtube.com/embed/1qdYLyl03C0"
    },
    {
        "name": "Fabien Barthez",
        "photo": "https://m.media-amazon.com/images/M/MV5BZjc1NjhhZDgtODQ1NC00MDY5LTk4NjQtNGIwMmNiNjY2ODQ4XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UX172_CR0,0,172,256_AL_.jpg",
        "description": `Fabien Alain Barthez (born 28 June 1971) is a French racing driver and former professional footballer who played as a goalkeeper. At club level, he played football in both France and England with Toulouse, Marseille, AS Monaco, Manchester United, and Nantes. At international level, 
        he represented the France national team, with whom he won the 1998 FIFA World Cup, UEFA Euro 2000, and the 2003 FIFA Confederations Cup, representing his nation at a total of three editions of both the FIFA World Cup and the UEFA European Championship; he also reached the final of the 2006 FIFA World Cup, 
        after which he retired from international football. He is a practicing Zen Buddhist.
        `,
        "video": "https://www.youtube.com/embed/b9XJQvrKpSs"
    },
    {
        "name": "Phil Jackson",
        "photo": "https://media.beliefnet.com/~/media/photos/celebrityfaithdatabase/j/phil_jackson_credit_s_bukley_shutterstock.jpg?as=1&h=487&w=650&extension=webp",
        "description": `Philip Jackson is notably one of the greatest NBA coaches of all time. In 1967, Phil was drafted by the New York Knicks as a basketball player. Even though he was a decent player, he never was a star. In 1980 he retired as a player and in 1987 he was hired as an assistant coach by the Chicago Bulls. Later in 1989 he was promoted as head coach and led the Chicago Bulls to six NBA titles. In 1999 Phil joined the Los Angeles Lakers and led them to three consecutive NBA titles. In 2007, he was named the highest paid NBA coach with a paycheck of $10,000,000 a year.
        Phil is a Buddhist and recommends that his players take the Buddhist philosophies, that he instills on the court, off the court as well. He teaches meditation to his players and believes that meditating can help his players make the right choices on the court.
        `,
        "video": "https://www.youtube.com/embed/dsKeiFvJxEs"
    },
];

var popular_sports_buda = [
    'Soccer',
];

var sikh_info = [
    {
        "name": "Darsh Singh",
        "photo": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2015_50/1332926/darshsingh.jpg",
        "description": `Darsh Preet Singh, who played for Trinity University, was the first turbaned Sikh American to play NCAA. In the Singh household, basketball was a constant. Singh’s mom played while in high school in India and passed the hobby on to her four sons. Singh played in middle school and at O’Connor High School but wasn’t recruited for collegiate play. After enrolling at Trinity and declaring engineering as his major, Singh turned his sights back to basketball and tried out as a walk-on. “I was basically the last guy on the team to make the cut my first year,” he says. “I was just excited to be playing at that level.” `,
        "video": "https://www.youtube.com/embed/sYirC-0yvMI"
    },
    {
        "name": "Milkha Singh",
        "photo": "https://1.bp.blogspot.com/-ljFuJ7E0yKY/WbvxHJSAayI/AAAAAAAACuQ/GrzLXIsB0dgHloe1Pg2-bHbqvjlHHhgVACLcBGAs/s1600/jeev%2Bmilkha%2Bsingh%2Bbiography%252C%2Bmilkha%2Bsingh%252C%2Bmilkha%2Bsingh%2Bbiography%252C%2Bmilkha%2Bsingh%2Blife%2Bhistory%252C%2Bmilkha%2Bsingh%2Brecord%252C%2Bmilkha%2Bsingh%2Bwife%252C%2Bmilkha%2Bsingh%2Bworld%2Brecord%252C%2BAmaznig%252Cfact%252Cfacts%252Cpic%252Cphoto%252Cnew%252C.jpg",
        "description": `Sardar Milkha Singh is the greatest living Sikh Athlete. Born in a family of modest means, joining the army and then discovering the penchant for running and winning is his life in summation. . He deservedly got an epithet named "Flying Sikh" from Pakistan General Ayub Khan. Till date the ‘Flying Sikh’ is the only Indian to have broken an Olympic record. Unfortunately, he was the fourth athlete to reset the mark and thus missed the bronze medal in the 400m event at the Rome Olympics in 1960.
        `,
        "video": "https://www.youtube.com/embed/A8OvDUjtFbw"
    },
];

var popular_sports_sikh = [
    'Cricket',
    'Soccer',
    'Running',
    'Basketball',
];

var tao_info = [
    {
        "name": "Yang Chuan-kwang",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yang_Chuan-kwang_1960e.jpg/240px-Yang_Chuan-kwang_1960e.jpg",
        "description": `Known as the "Iron Man of Asia," Yang won the decathlon event at the 1954 and 1958 Asian Games, as well as silver medals in the 110 m hurdles and long jump and the bronze medal in the 400 m hurdles. At the 1956 Summer Olympics he placed eighth in the decathlon. He also competed in the high jump.`,
        "video": "https://www.youtube.com/embed/Lc6UpnDtf-U"
    },
];

var popular_sports_tao = [
    'Athletics',
];

var con_info = [
    
];

var popular_sports_con = [
    
];

var shinto_info = [
    {
        "name": "Hakuhō Shō",
        "photo": "https://cdn.uww.org/s3fs-public/styles/max_1300_3_2/public/media/image/article/img_7137-exposure.jpg?VersionId=_45WE1Rp8bGfH_A7VgdIh34K1aJXhHoc&itok=xCg8-JID",
        "description": `Making his debut in March 2001, he reached the top makuuchi division in May 2004. In May 2007, at the age of 22, he became the second native of Mongolia, and the fourth non-Japanese overall, to be promoted to the highest rank in sumo, yokozuna.`,
        "video": "https://www.youtube.com/embed/rcT5AtFa67k"
    },
];

var popular_sports_shinto = [
    'Martial Arts',
    'Sumo',
];

var zoro_info = [
    {
        "name": "Polly Umrigar",
        "photo": "https://upload.wikimedia.org/wikipedia/en/2/25/Pollyumrigar.jpg",
        "description": `Pahlan Ratanji "Polly" Umrigar (28 March 1926 – 7 November 2006) was an Indian cricketer. He played first-class cricket for Bombay and Gujarat, 
        and Test cricket in the Indian cricket team, mainly as a middle-order batsman but also bowling occasional medium pace and off spin. He captained the Indian team in eight Test matches from 1955 to 1958. 
        When he retired in 1962, he had played in more Tests (59), scored more Test runs (3,631), and recorded more Test centuries (12), than any other Indian player. 
        He scored the first double century by an Indian in Test cricket against New Zealand in Hyderabad.`,
        "video": "https://www.youtube.com/embed/MM3o6oGsYeU"
    },
    {
        "name": "Nari Contractor",
        "photo": "https://st3.cricketcountry.com/wp-content/uploads/cricket/20150930051903.jpeg",
        "description": `Contractor began his first-class career, playing for the Gujarat. The captain of Gujarat Phiroz Khambata saw how Nari played in the selection trial matches for MCA's Silver Jubilee matches in 1955. He did well in the trials and expected to be selected for the matches against Pakistan Services & Bhawalpur Cricket Association. He got to the team because Captain Kambatha had dropped out. Contractor scored hundreds in both innings of his debut, becoming the second man after Arthur Morris to do so.
        Later he was chosen to play for India. Nari became an opener after one of the players Vinoo Mankad couldn't take part in a Test match against New Zealand at Delhi in 1955. Later he became an Indian captain.
        At Lord's in 1959, he broke two ribs in the first innings by Brian Statham, despite which he scored 81. Later in the year, his 74 in the second innings at Kanpur was crucial in India winning its first Test against Australia. This innings ended when he pulled Alan Davidson, who was bowling left-arm spin at the time. Neil Harvey at short leg ducked and turned, but the ball got stuck between his legs.`,
        "video": "https://www.youtube.com/embed/eCJubaCHHq0"
    },
];

var popular_sports_zoro = [
    'Soccer',
    'Cricket',
    'Athletics'
];

var christian_info = [
    {
        "name": "Philip Rivers",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Philip_Rivers_2017.JPG/220px-Philip_Rivers_2017.JPG",
        "description": `Chargers quarterback Philip Rivers and wife Tiffany, his junior high school sweetheart, are very active in the Catholic church.
        Rivers retired fifth all-time in passing yards (63,440) and touchdowns (421), which are the most of quarterbacks without Super Bowl appearances. 
        He is also second all-time in consecutive regular season starts by a quarterback at 240, having started every regular season game between 2006 and 2020. Rivers is considered among the best quarterbacks to have never played in a Super Bowl.`,
        "video": "https://www.youtube.com/embed/UfMZn9VEuXE"
    },
    {
        "name": "Dikembe Mutombo",
        "photo": "https://cdn.nba.com/manage/2021/04/GettyImages-461239151-scaled-e1619543798988-784x475.jpg",
        "description": `Retired NBA player Dikembe Mutombo is a devout Baptist who was born in the Democratic Republic of the Congo and has devoted most of his life to humanitarian work there.
        He's a spokesman for the international relief agency CARE and has worked for the United Nations Development Program.
        Mutombo was invited to the 2007 State of the Union Address and was specifically referred to as a "son of the Congo" by then-President George W. Bush. `,
        "video": "https://www.youtube.com/embed/qGDZ3S5Y2MI"
    },
];

var popular_sports_christian = [
    'Football',
    'Basketball',
    'Baseball'
];

var christ_info = [
    {
        "name": "Jimmer Fredette",
        "photo": "https://cdn.vox-cdn.com/thumbor/Zl5fdDUwpdQxxF543NXO1MYvU8g=/0x0:620x320/1200x800/filters:focal(276x123:374x221)/cdn.vox-cdn.com/uploads/chorus_image/image/68722511/jmmer.0.jpg",
        "description": `James Taft "Jimmer" Fredette(born February 25, 1989) is an American professional basketball player who last played for the Shanghai Sharks of the Chinese Basketball Association. Fredette was the 2011 National Player of the Year in college basketball after ranking as the leading scorer in all of NCAA Division I during his senior season for the BYU Cougars. He was subsequently selected with the tenth overall pick in the 2011 NBA draft, but only played limited minutes across four teams over five NBA seasons. He spent the majority of the 2015–16 season in the NBA Development League, during which he won the All-Star Game MVP. In 2016, he joined the CBA's Shanghai Sharks, and during the 2016–17 CBA season, he led the league in scoring, at 37.6 points per game, counting all phases of the season (although Errick McCollum was the league's scoring champion, as only regular season stats count toward that award). He also won the CBA International MVP award that season.`,
        "video": "https://www.youtube.com/embed/DY7oCmfkfH0"
    },
    {
        "name": "Danny Ainge",
        "photo": "https://www.sportscasting.com/wp-content/uploads/2020/08/Danny-Ainge-Boston-Celtics.jpg",
        "description": `Daniel Ray Ainge is an American former professional basketball player, coach and executive, and former professional baseball player.
        A three-sport star in high school, he was named to All-America teams in football, basketball, and baseball. At Brigham Young University, he was named national basketball college player of the year and won the John R. Wooden Award for the most outstanding male college basketball player. While in college, Ainge also played parts of three seasons with the Toronto Blue Jays of Major League Baseball (MLB), mostly as a second baseman. He was then drafted into the NBA by the Celtics. Ainge played in the NBA for 14 seasons, playing for the Celtics, Portland Trail Blazers, Sacramento Kings, and Phoenix Suns, primarily as a shooting guard. He went on to coach the Suns for three seasons before joining management of the Celtics, with whom Ainge has three NBA championships to his credit (two as a player, one as a team executive). During his playing career he appeared in the 1988 All-Star Game, and was the NBA Executive of the Year in 2008. Ainge served as the Celtics' president of basketball operations from 2008 until his retirement in 2021, when he was succeeded by incumbent head coach Brad Stevens (who he had hired in 2014).
        Ainge and his family are active members of The Church of Jesus Christ of Latter-day Saints, in which Ainge served as a bishop.`,
        "video": "https://www.youtube.com/embed/kQQ-mNePBh4"
    },
];

var popular_sports_christ = [
    'Basketball',
    'Football',
    'Soccer',
    'Baseball',
    'Rugby'
];

var popular_sports = [
    'Soccer',
    'Cricket',
    'Basketball',
];

class info {
    getInfo_islam(){
        return islam_info;
    }
    getSports_islam(){
        return popular_sports;
    }

    getInfo_buda(){
        return buda_info;
    }
    getSports_buda(){
        return popular_sports_buda;
    }

    getInfo_hindu(){
        return hindu_info;
    }
    getSports_hindu(){
        return popular_sports_hindu;
    }

    getInfo_christian(){
        return christian_info;
    }
    getSports_christian(){
        return popular_sports_christian;
    }

    getInfo_christ(){
        return christ_info;
    }
    getSports_christ(){
        return popular_sports_christ;
    }

    getInfo_con(){
        return con_info;
    }
    getSports_con(){
        return popular_sports_con;
    }

    getInfo_jain(){
        return jain_info;
    }
    getSports_jain(){
        return popular_sports_jain;
    }

    getInfo_jud(){
        return jewish_info;
    }
    getSports_jud(){
        return popular_sports_jewish;
    }

    getInfo_shinto(){
        return shinto_info;
    }
    getSports_shinto(){
        return popular_sports_shinto;
    }

    getInfo_sikh(){
        return sikh_info;
    }
    getSports_sikh(){
        return popular_sports_sikh;
    }

    getInfo_tao(){
        return tao_info;
    }
    getSports_tao(){
        return popular_sports_tao;
    }

    getInfo_zoro(){
        return zoro_info;
    }
    getSports_zoro(){
        return popular_sports_zoro;
    }
}

export default info;