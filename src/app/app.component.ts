import { Component } from '@angular/core';
import { Event } from './event';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'os-czasu-angular';

  constructor() {
    sessionStorage.setItem('numberOfEvents', '3');
    sessionStorage.setItem('numberOfCategories', '2');

    var category0 = new Category(
      'category0',
      'Category 0',
      '#993333'
    );

    var category1 = new Category(
      'category1',
      'Category 1',
      '#339999'
    );

    var event0 = new Event(
      'event0',
      'Konferencja ekonomiczna',
      'Konferencja ekonomiczna zorganizowana przez Koło Naukowe Ekonomistów była wydarzeniem, które zgromadziło wielu entuzjastów ekonomii z całego kraju. Spotkanie odbyło się w prestiżowej sali konferencyjnej, a atmosfera była pełna energii i zaangażowania. Podczas konferencji, uczestnicy mieli okazję wysłuchać inspirujących prelekcji prowadzonych przez doświadczonych ekonomistów i naukowców. Prezentacje obejmowały różne aspekty ekonomii, od makroekonomii po ekonomię behawioralną, dostarczając uczestnikom cennych informacji i nowych perspektyw. Koło Naukowe Ekonomistów zorganizowało również panele dyskusyjne, które umożliwiły uczestnikom wymianę myśli i pomysłów. Te interaktywne sesje były nie tylko źródłem wiedzy, ale także doskonałą okazją do nawiązania nowych kontaktów i budowania sieci. Konferencja zakończyła się ceremonią wręczenia nagród dla najbardziej obiecujących młodych ekonomistów. To wydarzenie było nie tylko okazją do nauki, ale także inspiracją dla wszystkich obecnych, aby dalej rozwijać swoją pasję do ekonomii. Wszyscy z niecierpliwością czekają na kolejną edycję tej inspirującej konferencji.',
      '2023-10-15',
      '2023-10-15',
      category0.id,
      category0.backgroundColor
    )

    var event1 = new Event(
      'event1',
      'Projekt z Ministerstwem finansów',
      'Projekt realizowany przez Koło Naukowe Ekonomistów we współpracy z Ministerstwem Finansów to innowacyjne przedsięwzięcie, które ma na celu pogłębienie wiedzy studentów na temat funkcjonowania gospodarki i finansów publicznych. W ramach projektu, członkowie koła mają możliwość pracy nad rzeczywistymi problemami ekonomicznymi, pod kierunkiem doświadczonych ekonomistów z Ministerstwa. Dzięki temu studenci mają okazję zastosować teorię ekonomiczną w praktyce, co jest nieocenionym doświadczeniem. Projekt obejmuje różne dziedziny, takie jak analiza danych ekonomicznych, prognozowanie gospodarcze, a także opracowywanie strategii fiskalnych. Wszystko to ma na celu lepsze zrozumienie mechanizmów rządzących gospodarką i wpływu polityki finansowej na nią. Współpraca z Ministerstwem Finansów daje studentom nie tylko możliwość zdobycia praktycznej wiedzy, ale także nawiązania cennych kontaktów zawodowych. Jest to doskonały przykład, jak nauka może iść w parze z praktyką, przynosząc korzyści zarówno studentom, jak i instytucjom publicznym.',
      '2023-10-17',
      '2023-10-17',
      category1.id,
      category1.backgroundColor
    )

    var event2 = new Event(
      'event2',
      'Konferencja ekonomii środowiskowej',
      'Konferencja na temat ekonomii środowiskowej to wydarzenie, które skupia ekonomistów, naukowców i decydentów z całego świata, aby omówić najnowsze trendy i wyzwania w dziedzinie ekonomii środowiskowej. Podczas konferencji, prelegenci przedstawiają najnowsze badania i studia przypadków dotyczące wpływu działalności gospodarczej na środowisko. Tematy obejmują takie zagadnienia jak zrównoważony rozwój, ekonomia niskoemisyjna, polityka klimatyczna, czy ekonomia odpadów. Uczestnicy mają okazję do dyskusji i wymiany pomysłów na panele dyskusyjne. Te sesje umożliwiają uczestnikom zgłębienie konkretnych problemów i znalezienie potencjalnych rozwiązań. Konferencja na temat ekonomii środowiskowej to nie tylko okazja do nauki i dyskusji, ale także platforma do nawiązywania kontaktów i współpracy. Uczestnicy mają szansę spotkać się z liderami w dziedzinie ekonomii środowiskowej, co może prowadzić do przyszłych partnerstw i inicjatyw. Wszystko to sprawia, że konferencja na temat ekonomii środowiskowej to ważne wydarzenie dla każdego, kto jest zainteresowany przyszłością naszej planety i roli, jaką ekonomia odgrywa w jej ochronie.',
      '2023-10-12',
      '2023-10-12',
      category0.id,
      category0.backgroundColor
    )

    var categories = [category0, category1];
    var events = [event0, event1, event2];

    sessionStorage.setItem('categories', JSON.stringify(categories));
    sessionStorage.setItem('events', JSON.stringify(events));
  }
}
