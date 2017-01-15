import {ResultPageSecification} from "./result-page-specification";
import {AbstractQueryFilter} from "./abstract-query-filter";
import {FieldOrder} from "./field-order";
/**
 * Created by gfr on 15.01.17.
 */
export class DomainServiceQuery {
    pagination: ResultPageSecification;
    textSearch: string;
    filters: AbstractQueryFilter[];
    ordering: FieldOrder[];
}