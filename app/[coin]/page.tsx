function CoinPage({ params }: { params: { coin: string } }) {
  return <div>{params.coin}</div>;
}

export default CoinPage;
