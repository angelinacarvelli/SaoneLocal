class HtmlInclude extends HTMLElement {
    async connectedCallback() {
        const src = this.getAttribute('src');
        if (src) {
            try {
                const response = await fetch(src);
                this.innerHTML = await response.text();
            } catch (err) { console.error(`Erreur : ${src}`, err); }
        }
    }
}
customElements.define('html-include', HtmlInclude);

class SaoneCard extends HTMLElement {
    async connectedCallback() {
        try {
            const response = await fetch('../components/card.jsx');
            let html = await response.text();
            
            // Remplacement des variables avec les bonnes clés
            html = html.replace(/{{title}}/g, this.getAttribute('title') || '')
                       .replace(/{{description}}/g, this.getAttribute('description') || '')
                       .replace(/{{btntext}}/g, this.getAttribute('btntext') || 'En savoir plus')
                       .replace(/{{images-class}}/g, this.hasAttribute('has-images') ? 'grid' : 'hidden');
            
            this.innerHTML = html;
        } catch (err) {
            this.innerHTML = `<div class="p-4 bg-red-100 text-red-500">Erreur chargement carte</div>`;
        }
    }
}
customElements.define('saone-card', SaoneCard);