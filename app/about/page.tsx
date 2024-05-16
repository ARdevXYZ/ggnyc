import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">About</h1>

      <p>
        Green Green NYC is a not-for-profit organization formed for the civic
        purpose of advocating for a sustainable and greener society within the
        context of everyday life in New York City and beyond. GGNYC exists to
        propagate healthier everyday living conditions by expanding greenery,
        greenspaces, and better parks and waterfront spaces, along with
        providing sustainable solutions vis-a-vis enhanced energy efficiency and
        reducing everyday product and consumer waste.
      </p>
      <p>
        Green Green NYC is an environmental advocacy group — independent from
        city government — benefiting the people, plants, and animals of New York
        City by advancing healthier living conditions for all New Yorkers and
        the ecosystem of NYC.
      </p>

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/layouts">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
