import {AbstractQueryFilter} from "./abstract-query-filter";
import {NumberFilterOperator} from "./number-filter-operator";
/**
 * Created by gfr on 15.01.17.
 */
export class DateFilter extends AbstractQueryFilter{
    value: Date;
    operator: NumberFilterOperator;
}