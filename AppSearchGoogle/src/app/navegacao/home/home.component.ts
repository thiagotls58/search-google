import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchResult } from 'src/app/models/SearchResult';
import { SearchService } from 'src/app/services/SearchService';
import { Search } from 'src/app/models/Search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchResult: SearchResult;
  public form: FormGroup;

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
    this.searchResult = new SearchResult("", "");
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.createForm(new Search(""))
  }

  createForm(search: Search) {
    this.form = this.formBuilder.group({
      query: [search.query]
    })
  }

  onSubmit() {
    this.pesquisar(this.form.value.query);
  }

  pesquisar(query: string): void {
    this.searchService.realizarBusca(query)
      .subscribe(
        //sucesso
        retorno => {
          this.searchResult = retorno;
          console.log(this.searchResult);
        },
        //erro
        error => console.log(error)
      );
  }

}
