/**
 * Created by gfr on 15.01.17.
 */
import {AbstractQueryFilter} from "./abstract-query-filter";
import {TextFilterOperator} from "./text-filter-operator";

export class TextFilter extends AbstractQueryFilter{
    value: string;
    operator: TextFilterOperator;
}