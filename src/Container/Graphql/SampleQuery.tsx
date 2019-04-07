import { Query } from "react-apollo";
import gql from "graphql-tag";

const SampleQuery = () => (
    <Query
        query={gql`
      {
        users {
          userName
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.rates.map(({ currency, rate }: { currency: any, rate: any }) => (
                <div key={currency}>
                    <p>{currency}: {rate}</p>
                </div>
            ));
        }}
    </Query>
);
export default SampleQuery;