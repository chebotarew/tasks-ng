import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProductsService } from '../../shared/services/products.service';
import { BASE_URL_TOKEN } from '../../config';
import { environment } from 'projects/module5/src/environments/environment.prod';
import { InterceptorService } from '../../shared/services/interceptor.service';
import { ProductsComponent } from './products.component';

describe('[Moдуль 5] Products компонент', () => {
  let fixture: ComponentFixture<ProductsComponent>;
  let component: ProductsComponent;
  // const fakeActivatedRoute = {
  //   snapshot: { data: {  } }
  // } as ActivatedRoute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientModule],
      providers: [
        ProductsService,
        // {
        //   provide: ActivatedRoute,
        //   useValue: {
        //   params: Observable.arguments({  })
        //   }
        // },
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  xit('свойство products должно быть определено', () => {
    expect((component as any)?.products).toBeDefined();
  });
  xit('компонент должен иметь метод addProduct', () => {
    expect((component as any)?.addProduct).toBeTruthy();
  });
  xit('свойство productsService должно быть определено', () => {
    expect((component as any)?.productsService).toBeDefined();
  });
  xit('свойство pageSequence должно быть определено', () => {
    expect((component as any)?.pageSequence).toBeDefined();
  });
});
