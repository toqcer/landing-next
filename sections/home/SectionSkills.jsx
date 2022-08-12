import Card from '../../components/Card/Card';

export default function SectionSkills() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mx-auto lg:w-[421px]">
          <span className="capitalize text-fancy-purple font-semibold">
            what we have
          </span>
          <h2 className="text-4xl font-bold">Tools and Skills</h2>
          <p className="text-solid-brown leading-8 mt-4">
            The wise man once said that we must recognize the weapons we use
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8 lg:mt-16">
          <Card className="col-span-6">Something here</Card>
          <Card className="col-span-6">Something here</Card>
          <Card className="col-span-6">Something here</Card>
          <Card className="col-span-6">Something here</Card>
          <Card className="col-span-6">Something here</Card>
          <Card className="col-span-6">Something here</Card>
        </div>
      </div>
    </section>
  );
}
