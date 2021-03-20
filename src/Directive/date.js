import { SchemaDirectiveVisitor } from "apollo-server-express";
import { GraphQLString, defaultFieldResolver } from "graphql";
import formatDate from "dateformat";

class DateFormatDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { format } = this.args;
    field.resolve = async function (...args) {
      const date = await resolve.apply(this, args);
      return formatDate(date, format);
    };
    // The formatted Date becomes a String, so the field type must change:
    field.type = GraphQLString;
  }
}

export default DateFormatDirective;
