/**
 * pour repetition genre header et footer ect
 */
class HtmlInclude extends HTMLElement {
    // Cette fonction se lance toute seule
    async connectedCallback() {
        // On récupère le chemin du fichier
        const src = this.getAttribute('src');
        
        if (src) {
            try {
                const response = await fetch(src);
                this.innerHTML = await response.text();
            } catch (err) {
                console.error(`Erreur chargement : ${src}`, err);
            }
        }
    }
}
// la balise htm-include utilise la compo
customElements.define('html-include', HtmlInclude);


/**
 * Un composant pour faire des card (SaoneCard).
 * Ça charge un modèle HTML et ça remplace des variables (les {{...}}) par ce qu'on lui donne.
 */
class SaoneCard extends HTMLElement {
    // exécute automatiquement au chargement de l'élément
    async connectedCallback() {
        try {
            const response = await fetch('../components/card.html');
            let html = await response.text();
            
            html = html.replace(/{{title}}/g, this.getAttribute('title') || '');
            html = html.replace(/{{description}}/g, this.getAttribute('description') || '');
            html = html.replace(/{{btn-text}}/g, this.getAttribute('btn-text') || 'En savoir plus');
            html = html.replace(/{{btn-link}}/g, this.getAttribute('btn-link') || '#');
            
            if (this.hasAttribute('has-images')) {
                // Si has image alors remplace le tag pour afficher l'image
                html = html.replace('{{images-class}}', 'grid');
            } else {
                // si non tu cache images
                html = html.replace('{{images-class}}', 'hidden');
            }

            this.innerHTML = html;
        } catch (err) {
            console.error('Erreur chargement : ../components/card.html', err);
        }
    }
}
// On enregistre personnalisée sous <saone-card> pour les pages html
customElements.define('saone-card', SaoneCard);